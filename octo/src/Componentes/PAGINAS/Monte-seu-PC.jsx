import React, { useState, useEffect } from "react";
import '../CompCss/Monte-seu-PC.css';

const MonteSeuPC = () => {
  const [categorias] = useState([
    { label: "Processador", id: 'processador' },
    { label: "Placa Mãe", id: 'placaMae' },
    { label: "Memória", id: 'memoriaRam' },
    { label: "Placa de video", id: 'placaDeVideo' },
    { label: "SSD", id: 'ssd' },
    { label: "HD", id: 'hd' },
    { label: "Cooler", id: 'cooler' },
    { label: "Fonte", id: 'fonte' },
    { label: "Gabinete", id: 'gabinete' },
    { label: "Fans", id: 'fans' },
    { label: "Sistema Operacional", id: 'so' },
    { label: "Software", id: 'software' },
  ]);
  const [categoriaAtiva, setCategoriaAtiva] = useState(categorias[0]);
  const [produtos, setProdutos] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [carrinho, setCarrinho] = useState([]);
  const [total, setTotal] = useState(0);
  const [finish, setFinish] = useState(false);
  useEffect(() => {
    setProdutoSelecionado(null);
    // Chama os produtos da categoria ativa usando fetch
    const buscarProdutosPorCategoria = async (categoria) => {
      try {
        const response = await fetch(
          `http://localhost/octocore_api/endpoints/produtos/produtos.php?categoria=${categoria.id}`
        );
        const {data} = await response.json();
        if (Array.isArray(data)){
          setProdutos(data);        
        } else {
          setProdutos([])
        }
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        setProdutos([])
      }
    };

    buscarProdutosPorCategoria(categoriaAtiva);
  }, [categoriaAtiva]);

  useEffect(() => {
    setTotal(carrinho.reduce((acc, curr) => acc + Number(curr.valorUnitario), 0));

    const finish = categorias.every((categoria) => {
      return carrinho.some((item) => item.categoria === categoria.id);
    });

    if (finish) {
      setFinish(true);
    }
  }, [carrinho]);

  const handleAdicionar = () => {
    setCarrinho((carrinho) => {
      if (produtoSelecionado){
        const novoCarrinho = carrinho.reduce((acc, curr) => {
          if (curr.categoria != categoriaAtiva.id) {
            return [...acc, curr];
          }

          return acc;
        }, []);

        return [...novoCarrinho, { ...produtoSelecionado, categoria: categoriaAtiva.id }];
      }

      return carrinho;
    });

    const categoriaAtualIdx = categorias.findIndex(({id}) => id === categoriaAtiva.id)

    if (categoriaAtualIdx < categorias.length - 1) {
      setCategoriaAtiva(categorias[categoriaAtualIdx + 1]);
    }
  }

  const handleFinalizar = () => {
    console.log("finalizar");
  }

  return (
    <div className="container">
      <div className="content">
        {/* Coluna lateral de categorias */}
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

        {/* Espaço central: Lista de produtos */}
        <div className="produtos">
          {produtos.length > 0 ? (
            produtos.map((produto, index) => (
              <div
                className="produto-card"
                key={index}
                onClick={() => setProdutoSelecionado(produto)} // Define o produto selecionado ao clicar
              >
                <img
                  src={produto.linkImagem}
                  alt={produto.nome}
                  className="produto-imagem"
                />
                <h3 className="produto-nome">{produto.nome}</h3>
                <p className="produto-preco">R${produto.valorUnitario}</p>
              </div>
            ))
          ) : (
            <p className="nenhum-produto">Nenhum produto encontrado.</p>
          )}
        </div>

        {/* Detalhes do Produto Selecionado */}
        <div className="produto-detalhes">
          {produtoSelecionado ? (
            <div className="detalhes">
              <section>
                <img
                  src={produtoSelecionado.linkImagem}
                  alt={produtoSelecionado.nome}
                  className="detalhes-imagem"
                />
                <h2 className="detalhes-nome">{produtoSelecionado.nome}</h2>
                <p className="detalhes-preco">
                  <strong>Preço:</strong> R${produtoSelecionado.valorUnitario}
                </p>
              </section>
              {produtoSelecionado.descricao && (
                <section className="detalhes-descricao">  
                  <h2>Descrição</h2>
                  {produtoSelecionado.descricao}
                </section>
              )}
              <section className="detalhes-informacoes-tecnicas">
                <h2>Informações Técnicas</h2>
                <ul>
                  {produtoSelecionado.consumo && <li>Consumo: {produtoSelecionado.consumo}W</li>}
                </ul>
              </section>
            </div>
          ) : (
            <p className="nenhum-detalhe">Selecione um produto para ver os detalhes.</p>
          )}
        </div>
      </div>
      <nav className="botoes-navegacao">
        <span className="total-preco">R${Number(total).toFixed(2)} no pix</span>
        <div className="botoes-navegacao-container">
          <button className="botao-adicionar" onClick={handleAdicionar} disabled={produtoSelecionado === null}>Adicionar</button>
          {finish && <button className="botao-finalizar" onClick={handleFinalizar}>Finalizar</button>}
        </div>
      </nav>
    </div>
  );
};

export default MonteSeuPC;
