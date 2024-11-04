import React, { useState } from 'react';

function CheckoutPage() {
  const [user, setUser] = useState({
    name: 'Lynn',
    address: 'Block 1, Jelutong, Penang',
    email: 'aana@example.com',
    phone: '012-3456789',
  });

  const [cartItems] = useState([
    { id: 1, name: 'Today is Good', price: 212, originalPrice: 232, discount: '-20%', image: 'images/thumbnailImage_4584109.jpg', quantity: 1 },
    { id: 2, name: 'Knight of Knights', price: 145, image: 'images/thumbnailImage_5192397.jpg', quantity: 1 },
  ]);

  const [shippingMethod, setShippingMethod] = useState('Standard');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const deliveryFee = shippingMethod === 'Express' ? 25 : 15;
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + deliveryFee;

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      setOrderPlaced(false);
      alert('Order Placed Successfully');
    }, 2000); // simulate processing time
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.header}>Checkout</h1>

      {/* Billing Information */}
      <div style={styles.section}>
        <h2 style={styles.sectionHeader}>Billing Information</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Address:</strong> {user.address}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
      </div>

      {/* Shipping Method */}
      <div style={styles.section}>
        <h2 style={styles.sectionHeader}>Shipping Method</h2>
        <select
          value={shippingMethod}
          onChange={(e) => setShippingMethod(e.target.value)}
          style={styles.select}
        >
          <option value="Standard">Standard Shipping - $15</option>
          <option value="Express">Express Shipping - $25</option>
        </select>
      </div>

      {/* Order Summary */}
      <div style={styles.section}>
        <h2 style={styles.sectionHeader}>Order Summary</h2>
        <ul style={styles.itemList}>
          {cartItems.map((item) => (
            <li key={item.id} style={styles.item}>
              <img src={item.image} alt={item.name} style={styles.itemImage} />
              <div style={styles.itemDetails}>
                <p style={styles.itemName}><strong>{item.name}</strong></p>
                <p>Price: ${item.price} x {item.quantity}</p>
                <p style={{textAlign: 'right'}}><strong>Subtotal:</strong> ${item.price * item.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
        <p style={{textAlign: 'right'}}><strong>Subtotal:</strong> ${subtotal.toFixed(2)}</p>
        <p style={{textAlign: 'right'}}><strong>Delivery Fee:</strong> ${deliveryFee.toFixed(2)}</p>
        <p style={{textAlign: 'right'}}><strong>Total:</strong> ${total.toFixed(2)}</p>
      </div>

      {/* Payment Method */}
      <div style={styles.section}>
        <h2 style={styles.sectionHeader}>Payment Method</h2>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          style={styles.select}
        >
          <option value="Credit Card">Credit Card</option>
          <option value="PayPal">PayPal</option>
          <option value="Apple Pay">Apple Pay</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        style={styles.submitButton}
        onClick={handlePlaceOrder}
        disabled={orderPlaced}
      >
        {orderPlaced ? 'Processing...' : 'Place Order'}
      </button>

      {/* Confirmation Modal */}
      {orderPlaced && <div style={styles.confirmation}>Processing your order...</div>}
    </div>
  );
}

// Styles
const styles = {
  page: {
    padding: '40px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: 'white',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
  },
  header: {
    textAlign: 'center',
    color: '#333',
    fontSize: '28px',
    marginBottom: '20px',
  },
  section: {
    marginBottom: '20px',
  },
  sectionHeader: {
    fontSize: '20px',
    color: '#444',
    borderBottom: '1px solid #ddd',
    paddingBottom: '5px',
    marginBottom: '15px',
  },
  select: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  itemList: {
    listStyleType: 'none',
    padding: 0,
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0',
    borderBottom: '1px solid #ddd',
  },
  itemImage: {
    marginRight: '15px',
    objectFit: 'cover',
    borderRadius: '5px',
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: '16px',
    color: '#333',
  },
  submitButton: {
    width: '100%',
    padding: '15px',
    backgroundColor: 'black',
    color: 'white',
    fontSize: '18px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  confirmation: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '24px',
  },
};

export default CheckoutPage;
