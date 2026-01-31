import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useContext(CartContext);
  const navigate = useNavigate();

  // Price Calculations (Rate: 83 INR per 1 USD)
  const subtotalINR = cart.reduce((acc, item) => acc + item.price * item.qty, 0) * 83;
  const taxINR = subtotalINR * 0.18; // 18% GST as per Indian standards
  const totalINR = subtotalINR + taxINR;

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '100px', color: 'white' }}>
        <h2>Your Cart is Empty</h2>
        <p style={{ color: '#a0a0a0', marginBottom: '30px' }}>Explore our latest tech to add items!</p>
        <button onClick={() => navigate('/products')} style={checkoutBtn}>Go to Shop</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '50px 8%', color: 'white' }}>
      <h1 style={{ borderBottom: '2px solid #ff69b4', paddingBottom: '10px' }}>Shopping Cart</h1>
      
      <div style={cartLayout}>
        {/* Left Side: Product List */}
        <div style={{ flex: '2' }}>
          {cart.map((item) => (
            <div key={item.id} style={cartItemStyle}>
              <img src={item.image} alt={item.name} style={itemImg} />
              <div style={{ flex: '1', marginLeft: '20px' }}>
                <h3 style={{ margin: '0 0 5px 0' }}>{item.name}</h3>
                <p style={{ color: '#ff69b4', fontWeight: 'bold' }}>₹{(item.price * 83).toLocaleString('en-IN')}</p>
              </div>

              {/* Quantity Selector Logic */}
              <div style={qtyWrapper}>
                <button onClick={() => updateQty(item.id, item.qty - 1)} style={qtyBtn}>-</button>
                <span style={{ padding: '0 15px' }}>{item.qty}</span>
                <button onClick={() => updateQty(item.id, item.qty + 1)} style={qtyBtn}>+</button>
              </div>

              <button onClick={() => removeFromCart(item.id)} style={removeBtn}>Remove</button>
            </div>
          ))}
        </div>

        {/* Right Side: Price Summary Box */}
        <div style={summaryBox}>
          <h2 style={{ marginTop: 0 }}>Price Details</h2>
          <div style={summaryRow}>
            <span>Subtotal ({cart.length} items)</span>
            <span>₹{subtotalINR.toLocaleString('en-IN')}</span>
          </div>
          <div style={summaryRow}>
            <span>GST (18%)</span>
            <span>₹{taxINR.toLocaleString('en-IN')}</span>
          </div>
          <div style={{ ...summaryRow, borderTop: '1px solid #2d3139', paddingTop: '15px', marginTop: '15px', fontWeight: 'bold', fontSize: '1.2rem' }}>
            <span>Total Amount</span>
            <span style={{ color: '#ff69b4' }}>₹{totalINR.toLocaleString('en-IN')}</span>
          </div>
          
          {/* Navigate to Checkout page */}
          <button style={checkoutBtn} onClick={() => navigate('/checkout')}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

// --- STYLING OBJECTS ---
const cartLayout = { display: 'flex', flexWrap: 'wrap', gap: '40px', marginTop: '30px' };
const cartItemStyle = { display: 'flex', alignItems: 'center', background: '#1a1d23', padding: '20px', borderRadius: '12px', marginBottom: '20px', border: '1px solid #2d3139' };
const itemImg = { width: '90px', height: '90px', objectFit: 'cover', borderRadius: '8px' };
const qtyWrapper = { display: 'flex', alignItems: 'center', background: '#0b0e11', borderRadius: '5px', margin: '0 30px', border: '1px solid #2d3139' };
const qtyBtn = { background: 'none', border: 'none', color: 'white', padding: '10px 15px', cursor: 'pointer', fontSize: '1.1rem' };
const removeBtn = { background: 'none', border: 'none', color: '#ff4d4d', cursor: 'pointer', fontWeight: 'bold' };
const summaryBox = { flex: '1', background: '#1a1d23', padding: '30px', borderRadius: '15px', height: 'fit-content', border: '1px solid #2d3139' };
const summaryRow = { display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: '#a0a0a0' };
const checkoutBtn = { width: '100%', padding: '15px', background: '#ff69b4', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', marginTop: '20px', fontSize: '1rem' };

export default Cart;