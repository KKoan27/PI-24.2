import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../CompCss/Monte-seu-PC.css";

const MonteSeuPC = () => {
  const [categorias] = useState([
    { label: "Processador", id: "processador" },
    { label: "Placa Mãe", id: "placaMae" },
    { label: "Memória", id: "memoriaRam" },
    { label: "Placa de Video", id: "placaDeVideo" },
    { label: "SSD", id: "ssd" },
    { label: "HD", id: "hd" },
    { label: "Cooler", id: "cooler" },
    { label: "Fonte", id: "fonte" },
    { label: "Gabinete", id: "gabinete" },
    { label: "Fans", id: "fans" },
    { label: "Sistema Operacional", id: "so" },
    { label: "Software", id: "software" },
  ]);

  const [categoriaAtiva, setCategoriaAtiva] = useState(categorias[0]);
  const [produtos, setProdutos] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [carrinho, setCarrinho] = useState([]);
  const [total, setTotal] = useState(0);
  const [finish, setFinish] = useState(false);
  const [expandDescricao, setExpandDescricao] = useState(false);
  const [expandTecnicas, setExpandTecnicas] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem("carrinho")) || [];
    setCarrinho(carrinhoSalvo);
  }, []);

  useEffect(() => {
    const produtoCarrinho = carrinho.find((item) => item.categoria === categoriaAtiva.id);
    setProdutoSelecionado(produtoCarrinho || null);

    const buscarProdutosPorCategoria = async (categoria) => {
      try {
        const response = await fetch(
          `http://localhost/octocore_api/endpoints/produtos/produtos.php?categoria=${categoria.id}`
        );
        const { data } = await response.json();
        setProdutos(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        setProdutos([]);
      }
    };

    buscarProdutosPorCategoria(categoriaAtiva);
  }, [categoriaAtiva, carrinho]);

  useEffect(() => {
    setTotal(carrinho.reduce((acc, curr) => acc + Number(curr.valorUnitario), 0));
    setFinish(categorias.every((categoria) =>
      carrinho.some((item) => item.categoria === categoria.id)
    ));

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }, [carrinho, categorias]);

  const handleAdicionar = () => {
    setCarrinho((carrinho) => {
      if (produtoSelecionado) {
        const novoCarrinho = carrinho.filter((item) => item.categoria !== categoriaAtiva.id);
        return [...novoCarrinho, { ...produtoSelecionado, categoria: categoriaAtiva.id }];
      }
      return carrinho;
    });

    const categoriaAtualIdx = categorias.findIndex(({ id }) => id === categoriaAtiva.id);
    if (categoriaAtualIdx < categorias.length - 1) {
      setCategoriaAtiva(categorias[categoriaAtualIdx + 1]);
    }
  };

  const handleFinalizar = () => {
    navigate("/CartPage", { state: { carrinho, total } });
  };

  return (
    <div className="container">
      <div className="content">
        <div className="categorias">
          {categorias.map((categoria, index) => {
            const temProduto = carrinho.some(item => item.categoria === categoria.id);
            return (
              <button
                key={index}
                className={`categoria ${categoria.id === categoriaAtiva.id ? "ativa" : ""} ${temProduto ? "completa" : ""}`}
                onClick={() => setCategoriaAtiva(categoria)}
              >
                {categoria.label}
              </button>
            );
          })}
        </div>

        <div className="produtos">
          {produtos.length > 0 ? (
            produtos.map((produto, index) => (
              <div
                className={`produto-card ${produtoSelecionado?.idProduto === produto.idProduto ? "produto-card--selecionado" : ""}`}
                key={index}
                onClick={() => setProdutoSelecionado(produto)}
              >
                <img src={produto.linkImagem} alt={produto.nome} className="produto-imagem" />
                <h3 className="produto-nome">{produto.nome}</h3>
                <p className="produto-preco">R${produto.valorUnitario}</p>
              </div>
            ))
          ) : (
            <p className="nenhum-produto">Nenhum produto encontrado.</p>
          )}
        </div>

        <article className="produto-detalhes">
          {produtoSelecionado ? (
            <>
              <section className="detalhes-block">
                <img
                  src={produtoSelecionado.linkImagem}
                  alt={produtoSelecionado.nome}
                  className="detalhes-imagem"
                />
                <div className="detalhes-conteudo detalhes-conteudo--main">
                  <h1 className="detalhes-nome">{produtoSelecionado.nome}</h1>
                  <p className="detalhes-preco">
                    <strong>Preço:</strong> R${produtoSelecionado.valorUnitario}
                  </p>
                </div>
              </section>
              {produtoSelecionado.descricao && (
                <section className="detalhes-block detalhes-descricao">  
                  <h2 onClick={() => setExpandDescricao((current) => !current)}>
                    <span className="detalhes-block-titulo">
                      <i>icon</i>
                      Descrição
                    </span>
                    <i>--</i>
                  </h2>
                  <p className={`detalhes-block-conteudo ${expandDescricao ? "expandido" : ""}`}>
                    {produtoSelecionado.descricao}
                  </p>
                </section>
              )}
              <section className="detalhes-block detalhes-informacoes-tecnicas">
                <h2 onClick={() => setExpandTecnicas((current) => !current)}>
                  <span className="detalhes-block-titulo">
                    <i>icon</i>
                    Informações Técnicas
                  </span>
                  <i>--</i>
                </h2>
                <div className={`detalhes-block-conteudo ${expandTecnicas ? "expandido" : ""}`}>
                  <ul>
                    {produtoSelecionado.consumo && <li>Consumo: {produtoSelecionado.consumo}W</li>}
                  </ul>
                </div>
              </section>
            </>
          ) : (
            <p className="nenhum-detalhe">Selecione um produto para ver os detalhes.</p>
          )}
        </article>
      </div>
      <nav className="botoes-navegacao">
        <span className="total-preco"><strong>R${Number(total).toFixed(2)}</strong> total</span>
        <div className="botoes-navegacao-container">
          <button className="botao-navegacao botao-adicionar" onClick={handleAdicionar} disabled={produtoSelecionado === null}>Adicionar</button>
          {finish && <button className="botao-navegacao botao-finalizar" onClick={handleFinalizar}>Finalizar</button>}
        </div>
      </nav>
    </div>
  );
};

export default MonteSeuPC;
