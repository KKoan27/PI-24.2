import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../CompCss/ThankYouPage.css";

const ThankYouPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { carrinho, total, enderecoSelecionado, cartaoSelecionado } = location.state || {};


  const handleHomeRedirect = () => {
    navigate("/");
  };
  const handleProfileRedirect = () => {
    navigate("/ClientPage");
  };

  return (
    <div className="thank-you-page">
      <h2>Obrigado pela sua compra!</h2>
      <p>Seu pedido foi confirmado e está sendo processado.</p>
      <div className="actions">
      <button onClick={handleHomeRedirect} className="continue-shopping">
          Voltar para a Página Inicial
        </button>
        <button onClick={handleProfileRedirect} className="continue-shopping">
          Ir para meu perfil
        </button>
        </div>  
    </div>
  );
};

export default ThankYouPage;
