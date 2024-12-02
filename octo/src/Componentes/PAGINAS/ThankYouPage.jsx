import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../CompCss/ThankYouPage.css";

const ThankYouPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { carrinho, total, enderecoSelecionado, cartaoSelecionado } = location.state || {};

  useEffect(() => {
    if (!carrinho || !total) {
      // Redireciona para a página de carrinho caso algo falte
      navigate("/cart");
    }
  }, [carrinho, total, navigate]);

  const handleHomeRedirect = () => {
    navigate("/");
  };

  return (
    <div className="thank-you-page">
      <h2>Obrigado pela sua compra!</h2>
      <p>Seu pedido foi confirmado e está sendo processado.</p>

      <div className="order-details">
        <h3>Detalhes do Pedido</h3>
        <div className="order-summary">
          <p><strong>Itens:</strong> {carrinho?.map((item) => (
            <span key={item.id}>{item.nome}</span>
          ))}</p>
          <p><strong>Total:</strong> R${total?.toFixed(2)}</p>
          <p><strong>Endereço:</strong> {enderecoSelecionado}</p>
          <p><strong>Cartão:</strong> Final {cartaoSelecionado?.slice(-4)}</p>
        </div>
      </div>

      <div className="actions">
        <button onClick={handleHomeRedirect} className="continue-shopping">
          Voltar para a Página Inicial
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
