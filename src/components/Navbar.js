import React from "react";
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <div style={styles.nav}>
      <h2>🛒 E-Commerce Website </h2>

      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/cart" style={styles.link}>Cart ({cartCount})</Link>
        <Link to="/login" style={styles.link}>Login</Link>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: 15,
    background: "#2874f0",
    color: "white"
  },
  link: {
    margin: "0 10px",
    color: "white",
    textDecoration: "none"
  }
};

export default Navbar;