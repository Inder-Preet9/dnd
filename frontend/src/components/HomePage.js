import React from "react";
import ProductCard from "./ProductCard.js";
import products from "../products.js";  // ← Correct path: up one level from components/

const HomePage = () => {
  return (
    <div>
      <section className="hero-spacer">
        <h1>Handcrafted Sweets & Cakes</h1>
        <p>Freshly made, beautifully crafted, and delivered with love</p>
      </section>

      <div className="product-grid">
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;