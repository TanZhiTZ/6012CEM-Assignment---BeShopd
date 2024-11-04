import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function ProductCard({ product }) {
  return (
    <div className="product-card nav-links" >
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="product-image" />
        <h3 style={{ textDecoration: 'none' }}>{product.name}</h3>
        <p>${product.price} <span className="original-price">${product.originalPrice}</span> <span className="discount">{product.discount}</span></p>
      </Link>
    </div>
  );
}

export default ProductCard;
