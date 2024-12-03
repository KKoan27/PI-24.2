import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../CompCss/CartPage.css";

const CartPage = () => { 
  const { state } = useLocation(); //Remover dps
  const navigate = useNavigate();

  const [frete, setFrete] = useState(80.00);
  
  const [cupom, setCupom] = useState(null);
  const [cupomValido, setCupomValido] = useState(null)
  const [subtotal, setSubtotal] = useState(state?.total);
  const [valorTotal, setValorTotal] = useState(subtotal);
  const [enderecos, setEnderecos] = useState([]);
  const [desconto, setDesconto] = useState(0)
  const [cartoes, setCartoes] = useState([]);
  const [enderecoSelecionado, setEnderecoSelecionado] = useState("");
  const [cartaoSelecionado, setCartaoSelecionado] = useState("");
  const [carrinho, setCarrinho] = useState([]);
  const [items, setItems] = useState([]) 
  


  // Buscar dados do usuário
  useEffect(() => {
    async function buscarEnderecos() {
      const user = 1; // exemplo de ID de usuário
      const response = await fetch(`http://localhost/octocore_api/endpoints/users/endereco.php?user=${user}`);
      if (response.ok) {
        const data = await response.json()
        const listaEnderecos = data['data']
  
        setEnderecos(listaEnderecos);
        }
    }
    async function buscarCartoes() {
      const user = 1; // exemplo de ID de usuário
      const response = await fetch(`http://localhost/octocore_api/endpoints/users/cc.php?user=${user} `);
      if (response.ok) {
        const data = await response.json()
        const listaCartoes = data['data']

        setCartoes(listaCartoes);
        }
    }
    buscarEnderecos()
    buscarCartoes()
  }, []);
  useEffect(()=>{

    setValorTotal(subtotal+frete-desconto)
  },[subtotal, frete, desconto])

  useEffect(() => {
    if (state?.carrinho) {
      setCarrinho(state.carrinho);
      const listaProdutos = state.carrinho.map((element) => ({
        idProduto: element.idProduto,
        quantidade: 1,
      }));
      console.log(listaProdutos)
      setItems(listaProdutos)
    }
  }, [state?.carrinho]);

  async function aplicarDesconto() {
      const response = await fetch(`http://localhost/octocore_api/endpoints//order/cupons.php?cupom=${cupom}`);
      if (response.ok) {
        const data = await response.json()
        
        const descontoCupom = subtotal * data['data'] / 100;
        setDesconto(descontoCupom)
        setCupomValido(cupom)
        
        alert(`Cupom ${cupom} de ${data['data']}% aplicado`)
        }
        else{
          setDesconto(0)
          setCupom(null)
          alert("Cupom inválido")
        }


  }

  async function handleFinalizar(e){
    e.preventDefault()
   

    const payload = {
      idUsuario: 1,
      cupom: cupomValido,
      valorFrete: frete,
      metodoPagamento: cartaoSelecionado,
      enderecoEntrega: enderecoSelecionado,
      listaProdutos: items
    };
    const response1 = await fetch('http://localhost/octocore_api/endpoints/order/order.php', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    })
    if (response1.ok) {
      navigate("/thank-you")
    }
    else{
      alert("Compra falhou")

    }
    
}

  return (
    <div className="cart-page">
      <h2>Checkout</h2>
      {/* Coluna Esquerda */}
      <div className="cart-container">
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
          <div className="checkout-form">
            <h3>Entrega e pagamento</h3>
            <div className="card">
              <div className="form-group">
                <label htmlFor="endereco">Endereço</label>
                <select
                  id="idEndereco"
                  name="idEndereco"
                  required
                  onChange={(e) => setEnderecoSelecionado(e.target.value)}
                >
                  <option value='' selected>Selecione uma opção...</option>
                  {enderecos.map((item, index) => (
                    <option key={index} value={item.rua}>
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
                  required
                  onChange={(e) => setCartaoSelecionado(e.target.value)}
                >
                  <option value='' selected>Selecione uma opção...</option>
                  {cartoes.map((item, index) => (
                    <option key={index} value={item.idCartao}>
                        Final {item.final}
                    </option>
                  ))}
                </select>
              </div>
              
            </div>
          </div>
          <div className="cart-summary">
        <div className="summary-item">
          <span>Subtotal</span>
          <span>R${subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>Frete</span>
          <span>R${frete.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>Desconto</span>
          <span>R${desconto.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>Cupom de Desconto</span>
          <input
            type="text"
            onChange={(e) => setCupom(e.target.value)}
            placeholder="Insira o código"
          />
          <button onClick={aplicarDesconto}>Aplicar</button>
        </div>
        <div className="summary-item total">
          <span>Total</span>
          <span>R${valorTotal.toFixed(2)}</span>
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
        </div>
      </div>

      
    </div>
  );
};

export default CartPage;