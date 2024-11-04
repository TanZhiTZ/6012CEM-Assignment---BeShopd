// CartPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const initialCartItems = [
  { id: 1, name: 'Today is Good', price: 212, originalPrice: 232, discount: '-20%', image: 'images/thumbnailImage_4584109.jpg', quantity: 1 },
  { id: 2, name: 'Knight of Knights', price: 145, image: 'images/thumbnailImage_5192397.jpg', quantity: 1 },
];

function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const deliveryFee = 15;
  const navigate = useNavigate();

  const handleQuantityChange = (id, delta) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + deliveryFee;

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
              </div>
              <div className="cart-item-quantity">
                <button onClick={() => handleQuantityChange(item.id, -1)} className="quantity-button">−</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, 1)} className="quantity-button">+</button>
              </div>
              <button onClick={() => handleRemoveItem(item.id)} className="cart-item-remove">🗑️</button>
            </div>
          ))}
        </div>
        <div className="order-summary">
          <h3>Order Summary</h3>
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Delivery Fee: ${deliveryFee.toFixed(2)}</p>
          <p>Total: ${total.toFixed(2)}</p>
          <button onClick={() => navigate('/checkout')} className="checkout-button">Go to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
