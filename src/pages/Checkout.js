import React from "react";

function Checkout() {
  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={() => alert("Payment Successful!")}>
        Pay Now
      </button>
    </div>
  );
}

export default Checkout;