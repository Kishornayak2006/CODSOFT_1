import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div style={styles.card}>
      <img src={product.image} alt="" style={styles.img} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: 10,
    width: 200,
    textAlign: "center",
    borderRadius: 10
  },
  img: {
    width: "100%",
    height: 150,
    objectFit: "cover"
  }
};

export default ProductCard;