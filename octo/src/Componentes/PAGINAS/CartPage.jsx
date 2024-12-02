import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../CompCss/CartPage.css";

const CartPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [frete, setFrete] = useState(0);
  const [desconto, setDesconto] = useState(0);
  const [cupom, setCupom] = useState("");
  const [valorTotal, setValorTotal] = useState(0);
  const [total, setTotal] = useState(state?.total || 0);
  const [enderecos, setEnderecos] = useState([]);
  const [cep, setCep] = useState("");
  const [cartoes, setCartoes] = useState([]);
  const [enderecoSelecionado, setEnderecoSelecionado] = useState("");
  const [cartaoSelecionado, setCartaoSelecionado] = useState("");
  const [carrinho, setCarrinho] = useState([]);


  // Buscar endereços do usuário
  useEffect(() => {
    async function buscarEnderecos() {
      const user = 1; // exemplo de ID de usuário
      const response = await fetch(`http://localhost/octocore_api/endpoints/users/endereco.php?user=${user}`);
      if (response.ok) {
        const data = await response.json()
        const listaEnderecos = data['data']
        console.log(listaEnderecos)
        setEnderecos(listaEnderecos);
        }
    }
    async function buscarCartoes() {
      const user = 1; // exemplo de ID de usuário
      const response = await fetch(`http://localhost/octocore_api/endpoints/users/cc.php?user=${user} `);
      if (response.ok) {
        const data = await response.json()
        const listaCartoes = data['data']
        console.log(listaCartoes)
        setCartoes(listaCartoes);
        }
    }
    buscarEnderecos()
    buscarCartoes()
  }, []);



  useEffect(() => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem("carrinho")) || [];
    setCarrinho(state?.carrinho || carrinhoSalvo);

    const fetchDados = async () => {
      try {
        const [responseEndereco, responseCartao, responseFrete, responseDesconto] = await Promise.all([
          fetch("http://localhost/api/endereco"),
          fetch("http://localhost/api/cartao"),
          fetch("http://localhost/api/frete"),
          fetch("http://localhost/api/desconto"),
        ]);

        if (!responseEndereco.ok || !responseCartao.ok || !responseFrete.ok || !responseDesconto.ok) {
          throw new Error("Erro ao buscar dados");
        }

        const [enderecoData, cartaoData, freteData, descontoData] = await Promise.all([
          responseEndereco.json(),
          responseCartao.json(),
          responseFrete.json(),
          responseDesconto.json(),
        ]);

        setEnderecos(enderecoData);
        setCartoes(cartaoData);
        setFrete(freteData.valor);
        setDesconto(descontoData.valor);
        setValorTotal(state?.total + freteData.valor - descontoData.valor);
        setEnderecoSelecionado(enderecoData[0]?.id || "");
        setCartaoSelecionado(cartaoData[0]?.id || "");
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    };

    fetchDados();
  }, [state?.carrinho, state?.total]);

  useEffect(() => {
    if (state?.carrinho) {
      setCarrinho(state.carrinho);
    }
  }, [state?.carrinho]);

  const aplicarDesconto = () => {
    if (cupom === "DESCONTO10") {
      setDesconto(10);
      setValorTotal(total + frete - 10);
    } else {
      alert("Cupom inválido!");
    }
  };

  const handleFinalizar = () => {
    navigate("/CartPage", { state: { carrinho, total, enderecoSelecionado, cartaoSelecionado } });
  };

  return (
    <div className="cart-page">
      <h2>Checkout</h2>

      <div className="cart-summary">
        <div className="summary-item">
          <span>Subtotal</span>
          <span>R${total.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>Frete</span>
          <span>R${frete.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>Cupom de Desconto</span>
          <input
            type="text"
            value={cupom}
            onChange={(e) => setCupom(e.target.value)}
            placeholder="Insira o código"
          />
          <button onClick={aplicarDesconto}>Aplicar</button>
        </div>
        <div className="summary-item total">
          <span>Total</span>
          <span>R${valorTotal.toFixed(2)}</span>
        </div>
      </div>

      <div className="cart-container">
        {/* Coluna Esquerda */}
        <div className="cart-left">
          <h3>Itens no Carrinho</h3>
          <div className="cart-items">
            {carrinho.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.linkImagem} alt={item.nome} className="item-image" />
                <div className="item-details">
                  <h3>{item.nome}</h3>
                  <p>R${Number(item.valorUnitario).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coluna Direita */}
        <div className="cart-right">
          <h3>Resumo do Carrinho</h3>
          <div className="cart-summary">
            <div className="summary-item">
              <span>Subtotal</span>
              <span>R${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="checkout-form">
            <h3>Dados para a Compra</h3>
            <div className="card">
              <div className="form-group">
                <label htmlFor="endereco">Endereço</label>
                <select
                  id="idEndereco"
                  name="idEndereco"
                  onChange={(e) => setEnderecoSelecionado(e.target.value)}
                >
                  {enderecos.map((item, index) => (
                    <option key={index} value={item.idEndereco}>
                      {item.nome} - {item.rua} - {item.complemento}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
      
    </div>


              <div className="form-group">
                <label htmlFor="cartao">Cartão de Crédito</label>
                <select
                  id="idCartao"
                  name="idCartao"
                  onChange={(e) => setCartaoSelecionado(e.target.value)}
                >
                  {cartoes.map((item, index) => (
                    <option key={index} value={item.idCartao}>
                        Final {item.final}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="actions">
        <button
          className="continue-shopping"
          onClick={() => navigate("/")}
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