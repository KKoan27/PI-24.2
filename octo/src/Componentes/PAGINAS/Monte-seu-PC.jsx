import React, { useState, useEffect } from "react";
import '../CompCss/Monte-seu-PC.css';

const MonteSeuPC = () => {
  const [categorias] = useState([
    "Processador",
    "Placa Mãe",
    "Memória",
    "Placa de video",
    "SSD",
    "HD",
    "Cooler",
    "Fonte",
    "Gabinete",
    "Fans",
    "Sistema Operacional",
    "Software",
  ]);

  const [categoriaAtiva, setCategoriaAtiva] = useState("Processador");
  const [produtos, setProdutos] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  useEffect(() => {
    // Chama os produtos da categoria ativa usando fetch
    const buscarProdutosPorCategoria = async (categoria) => {
      try {
        const response = await fetch(
          `http://localhost/octocore_api/endpoints/produtos/produtos.php?categoria=${categoria}`
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

  return (
    <div className="container">
      {/* Coluna lateral de categorias */}
      <div className="categorias">
        {categorias.map((categoria, index) => (
          <button
            key={index}
            className={`categoria ${categoria === categoriaAtiva ? "ativa" : ""}`}
            onClick={() => setCategoriaAtiva(categoria)}
          >
            {categoria}
          </button>
        ))}
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
            <img
              src={produtoSelecionado.linkImagem}
              alt={produtoSelecionado.nome}
              className="detalhes-imagem"
            />
            <h2 className="detalhes-nome">{produtoSelecionado.nome}</h2>
            <p className="detalhes-descricao">
              {produtoSelecionado.descricao}
            </p>
            <p className="detalhes-preco">
              <strong>Preço:</strong> R${produtoSelecionado.valorUnitario}
            </p>
          </div>
        ) : (
          <p className="nenhum-detalhe">Selecione um produto para ver os detalhes.</p>
        )}
      </div>
    </div>
  );
};

export default MonteSeuPC;
