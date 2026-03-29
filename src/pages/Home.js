import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "iPhone",
    price: 50000,
    image: "https://tse2.mm.bing.net/th/id/OIP.u1SGclvog7EO4B0TNmi0GwHaD4?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 2,
    name: "Shoes",
    price: 3000,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/308062/04/sv01/fnd/IND/fmt/png/Scuderia-Ferrari-Neo-Cat-2.0-Driving-Shoes"
  },
  {
    id: 3,
    name: "Laptop",
    price: 60000,
    image: "https://tse1.mm.bing.net/th/id/OIP.k2zC6C5p8XWeax9DTdfCmQHaGS?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 4,
    name: "Pen",
    price: 5,
    image: "https://th.bing.com/th/id/OIP.Wz0xWvLGKfBPUH3kZXFsrAHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 5,
    name: "Keyboard",
    price: 1000,
    image: "https://m.media-amazon.com/images/I/71J-yr0JMYL._AC_SL1500_.jpg"
  },
  {
    id: 6,
    name: "RCB tshirt",
    price: 6000,
    image: "https://m.media-amazon.com/images/I/41xNGcD6H0L.jpg"
  },
  {
    id: 10,
    name: "Earbuds",
    price: 2000,
    image: "https://m.media-amazon.com/images/I/81r4-kfrAvL._SL1500_.jpg"
  }

];

function Home({ addToCart }) {
  const [search, setSearch] = useState("");

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: 20 }}>
      <input
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: 10, width: "100%" }}
      />

      <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Home;