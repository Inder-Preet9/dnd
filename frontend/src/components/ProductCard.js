import React from "react";

function ProductCard({ image, title, price, quantity }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />

      <div className="product-card-content">
        <h3>{title}</h3>
        <p className="price">₹{price}</p>
      </div>

      <button
        className="add-btn"
        disabled={quantity === 0}
      >
        Purchase
      </button>

      {quantity === 0 && (
        <p style={{ color: "red", fontSize: "12px" }}>
          Out of stock
        </p>
      )}
    </div>
  );
}

export default ProductCard;
