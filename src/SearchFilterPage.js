import React from 'react';
import ProductCard from './ProductCard'; 
import './App.css';

const products = [  
    { id: 1, name: 'Today is Good', price: 212, originalPrice: 232, discount: '-20%', image: '../images/thumbnailImage_4584109.jpg' },  
  ];  

function SearchFilterPage() {
  const categories = ["Horror", "Drama", "Comedy", "Sci-Fi", "Romance", "Fantasy", "Mystery", "Thriller"];

  return (
    <div className="search-filter-page">
      <h2>Filter by Book Category</h2>
      <div className="category-list">
        {categories.map((category, index) => (
          <button key={index} className="category-button">
            {category}
          </button>
        ))}
      </div>
        <div className="product-listing">  
        <h2 className="product-listing-title">Product Category</h2>  
        <div className="product-card-container">  
            {products.map((product) => (  
            <ProductCard key={product.id} product={product} />  
            ))}  
        </div>  
        <button className="view-all-button">View All Products</button>  
        </div> 
    </div>
  );
}

export default SearchFilterPage;
