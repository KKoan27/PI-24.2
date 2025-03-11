import React, { useState } from "react";
import '../CompCss/ProductPage.css';
function CartPage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "PC Atlas",
      price: 12402.00,
      quantity: 1,
      total: 12402.00
    }
  ]);

  const continueShopping = () => {
    // Lógica para redirecionar para outras páginas
  };

  const goToCheckout = () => {
    // Lógica para redirecionar para a página de checkout
  };

  return (
    <div class="cart-page">
      <div class="cart-items">

        <div class="cart-item">
          <h3>Nome do Produto</h3>
          <img src="product-image.jpg" alt="Produto" class="item-image" />
          <div class="item-info">
            <div class="quantity">
              <span>Quantidade: </span>
              <input type="number" value="1" min="1" />
            </div>
          </div>
        </div>
      </div>

      <div class="cart-summary">
        <div class="summary-item">
          <span>Subtotal:</span>
          <span>R$ 0,00</span>
        </div>
        <div class="summary-item">
          <span>Frete:</span>
          <span>R$ 0,00</span>
        </div>
        <div class="summary-item">
          <span>Total:</span>
          <span>R$ 0,00</span>
        </div>
        <div class="actions">
          <button>Continuar Comprando</button>
          <button>Ir para o Checkout</button>
        </div>
      </div>
    </div>

  );
}

export default CartPage;
