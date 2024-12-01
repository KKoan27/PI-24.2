import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../CompCss/CartPage.css";

const CartPage = () => {
  const [carrinho, setCarrinho] = useState([]);
  const [total, setTotal] = useState(0);
  const [enderecos, setEnderecos] = useState([]);
  const [cartoes, setCartoes] = useState([]);
  const [enderecoSelecionado, setEnderecoSelecionado] = useState("");
  const [cartaoSelecionado, setCartaoSelecionado] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Recebe os dados do estado passado pela navegação
    if (location.state) {
      const { carrinho, total } = location.state;
      setCarrinho(carrinho || []);
      setTotal(total || 0);
    }
  }, [location.state]);

  useEffect(() => {
    // Carregar endereços e cartões simulados (pode substituir por API)
    const fetchDados = async () => {
      try {
        const responseEndereco = await fetch("http://localhost/api/endereco");
        const responseCartao = await fetch("http://localhost/api/cartao");
        const enderecoData = await responseEndereco.json();
        const cartaoData = await responseCartao.json();

        setEnderecos(enderecoData);
        setCartoes(cartaoData);

        if (enderecoData.length > 0) setEnderecoSelecionado(enderecoData[0].id);
        if (cartaoData.length > 0) setCartaoSelecionado(cartaoData[0].id);
      } catch (error) {
        console.error("Erro ao carregar dados de endereços e cartões:", error);
      }
    };

    fetchDados();
  }, []);

  const handleFinalizar = () => {
    console.log("Finalizando compra...");
    navigate("/finalizado", {
      state: {
        carrinho,
        total,
        enderecoSelecionado,
        cartaoSelecionado,
      },
    });
  };

  return (
    <div className="cart-page">
      <h2>Checkout</h2>

      {/* Itens do Carrinho */}
      <div className="cart-items">
        {carrinho.length > 0 ? (
          carrinho.map((item, index) => (
            <div key={index} className="cart-item">
              <img
                src={item.linkImagem}
                alt={item.nome}
                className="item-image"
              />
              <div className="item-details">
                <h3>{item.nome}</h3>
                <p>R${item.valorUnitario}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="nenhum-produto">Nenhum item no carrinho.</p>
        )}
      </div>

      {/* Resumo do Carrinho */}
      <div className="cart-summary">
        <div className="summary-item">
          <span>Subtotal</span>
          <span>R${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Formulário para Endereço e Cartão */}
      <div className="checkout-form">
        <h3>Dados para a Compra</h3>

        <div className="card">
          {/* Seleção de Endereço */}
          <div className="form-group">
            <label htmlFor="endereco">Endereço</label>
            <select
              id="endereco"
              value={enderecoSelecionado}
              onChange={(e) => setEnderecoSelecionado(e.target.value)}
            >
              {enderecos.map((endereco) => (
                <option key={endereco.id} value={endereco.id}>
                  {endereco.rua}, {endereco.cidade} - {endereco.estado}
                </option>
              ))}
            </select>
          </div>

          {/* Seleção de Cartão */}
          <div className="form-group">
            <label htmlFor="cartao">Cartão de Crédito</label>
            <select
              id="cartao"
              value={cartaoSelecionado}
              onChange={(e) => setCartaoSelecionado(e.target.value)}
            >
              {cartoes.map((cartao) => (
                <option key={cartao.id} value={cartao.id}>
                  {cartao.bandeira} - Final {cartao.numero.slice(-4)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Botões de Ação */}
      <div className="actions">
        <button
          className="continue-shopping"
          onClick={() => navigate("/loja")}
        >
          Continuar Comprando
        </button>
        <button
          className="checkout"
          onClick={handleFinalizar}
          disabled={!enderecoSelecionado || !cartaoSelecionado}
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};

export default CartPage;
