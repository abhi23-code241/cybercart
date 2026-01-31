import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', address: '', mobile: '' });

  // Calculation Logic (Requirement: Student 3 tasks) [cite: 124]
  const subtotalINR = cart.reduce((acc, item) => acc + (item.price * item.qty), 0) * 83;
  const tax = subtotalINR * 0.18;
  const total = subtotalINR + tax;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Success Message (Requirement) [cite: 70]
    alert(`Success! Order placed for ${formData.name}. Total: ₹${total.toLocaleString()}`);
    
    // Clear Cart & Redirect (Requirement) 
    localStorage.removeItem('cyber_cart');
    navigate('/');
    window.location.reload(); 
  };

  return (
    <div style={{ padding: '40px 8%', color: 'white' }}>
      <h1 style={{ color: '#ff69b4', borderBottom: '1px solid #2d3139', paddingBottom: '10px' }}>Checkout</h1>
      
      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', marginTop: '20px' }}>
        {/* Billing Form [cite: 64] */}
        <form onSubmit={handleSubmit} style={{ flex: '1.5', background: '#1a1d23', padding: '30px', borderRadius: '15px' }}>
          <h3>Shipping Details</h3>
          <input 
            type="text" placeholder="Full Name" required style={inputStyle} 
            onChange={(e) => setFormData({...formData, name: e.target.value})} 
          />
          <input type="text" placeholder="Shipping Address" required style={inputStyle} />
          <input type="tel" placeholder="Mobile Number" required style={inputStyle} />
          
          <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ff69b4', borderRadius: '8px' }}>
            <strong>Payment Method:</strong> Cash on Delivery (COD)
          </div>
          
          <button type="submit" style={placeOrderBtn}>Place Order</button>
        </form>

        {/* Order Summary  */}
        <div style={{ flex: '1', background: '#1a1d23', padding: '30px', borderRadius: '15px', border: '1px solid #2d3139' }}>
          <h3>Order Summary</h3>
          {cart.map(item => (
            <div key={item.id} style={summaryRow}>
              <span>{item.name} (x{item.qty})</span>
              <span>₹{(item.price * 83 * item.qty).toLocaleString()}</span>
            </div>
          ))}
          <hr style={{ borderColor: '#2d3139', margin: '15px 0' }} />
          <div style={summaryRow}><span>Subtotal:</span><span>₹{subtotalINR.toLocaleString()}</span></div>
          <div style={summaryRow}><span>GST (18%):</span><span>₹{tax.toLocaleString()}</span></div>
          <div style={{ ...summaryRow, color: '#ff69b4', fontWeight: 'bold', fontSize: '1.2rem', marginTop: '10px' }}>
            <span>Total:</span><span>₹{total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const inputStyle = { width: '100%', padding: '12px', margin: '10px 0', background: '#0b0e11', border: '1px solid #2d3139', color: 'white', borderRadius: '5px' };
const placeOrderBtn = { width: '100%', padding: '15px', background: '#ff69b4', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', marginTop: '20px' };
const summaryRow = { display: 'flex', justifyContent: 'space-between', marginBottom: '10px' };

export default Checkout;