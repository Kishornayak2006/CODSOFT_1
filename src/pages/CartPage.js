import React from "react";

function CartPage({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: 20 }}>
      <h2>Cart</h2>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item, index) => (
        <div key={index}>
          {item.name} - ₹{item.price}
          <button onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default CartPage;