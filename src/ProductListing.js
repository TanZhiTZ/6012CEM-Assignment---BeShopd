import React from 'react';  
import ProductCard from './ProductCard';  
import './App.css';  

const products = [  
  { id: 1, name: 'Today is Good', price: 212, originalPrice: 232, discount: '-20%', image: 'images/thumbnailImage_4584109.jpg' },  
  { id: 2, name: 'Knight of Knights', price: 145, image: 'images/thumbnailImage_5192397.jpg' },  
  { id: 3, name: 'King From Hell', price: 80, image: 'images/thumbnailImage_5460155.jpg' },  
  { id: 4, name: 'Barrier Master', price: 210, image: 'images/thumbnailImage_5470315.jpg' }  
];  

function ProductListing() {  
  return (  
    <div className="product-listing">  
      <h2 className="product-listing-title">Featured Products</h2>  
      <div className="product-card-container">  
        {products.map((product) => (  
          <ProductCard key={product.id} product={product} />  
        ))}  
      </div>  
      <button className="view-all-button">View All Products</button>  
    </div>  
  );  
}  

export default ProductListing;