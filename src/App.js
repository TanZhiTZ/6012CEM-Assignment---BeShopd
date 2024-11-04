import React from 'react';  
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';  
import ProductListing from './ProductListing';  
import ProductDetails from './ProductDetails'; 
import SellerFormPage from './SellerFormPage';
import SearchFilterPage from './SearchFilterPage';
import NewArrivals from './NewArrivals';
import Checkout from './CheckoutPage';
import CartPage from './CartPage'; 
import './App.css';  

function App() {
  return (  
    <Router>  
      <div className="App">  
        <header className="header">  
          <h1 className="nav-links"><Link to="/">BeShopd</Link></h1>  
          <nav className="nav-links">  
            <Link to="/arrivals">New Arrivals</Link>  
            <Link to="/seller-form" className="seller-link">Become a Seller</Link>
          </nav> 
          <div className="search-container">  
            <input type="text" placeholder="Search for products..." className="search-input" />  
            <button className="search-button"><Link to="/search-filter" style={{ color: 'white', textDecoration: 'none' }} >Search</Link></button>  
          </div>  
          <Link to="/cart" className="cart-button">🛒</Link>  
        </header>  
        <Routes>  
          <Route path="/" element={<ProductListing />} />  
          <Route path="/product/:productId" element={<ProductDetails />} />  
          <Route path="/cart" element={<CartPage />} />
          <Route path="/seller-form" element={<SellerFormPage />} />
          <Route path="/search-filter" element={<SearchFilterPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/arrivals" element={<NewArrivals />} />
        </Routes>  
      </div>  
    </Router>  
  );  
}  

export default App;