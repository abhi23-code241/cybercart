import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { CartContext } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [qty, setQty] = useState(1);

  // Find the product based on ID in URL
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '100px', color: 'white' }}>
        <h2>Product Not Found</h2>
        <button onClick={() => navigate('/products')} style={btnStyle}>Back to Shop</button>
      </div>
    );
  }

  // Convert to Rupees (Rate: 83)
  const priceInRupees = product.price * 83;

  return (
    <div className="details-container" style={containerStyle}>
      <div style={imageWrapper}>
        <img src={product.image} alt={product.name} style={largeImgStyle} />
      </div>

      <div style={infoStyle}>
        <p style={{ color: '#ff69b4', fontWeight: 'bold', textTransform: 'uppercase' }}>{product.category}</p>
        <h1 style={{ fontSize: '2.5rem', margin: '10px 0' }}>{product.name}</h1>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', margin: '20px 0' }}>
          <span style={{ fontSize: '2rem', color: '#ff69b4', fontWeight: 'bold' }}>
            ₹{priceInRupees.toLocaleString('en-IN')}
          </span>
          <span style={{ color: '#ffcc00', fontSize: '1.2rem' }}>⭐ {product.rating} / 5.0</span>
        </div>

        <p style={{ color: '#a0a0a0', lineHeight: '1.6', fontSize: '1.1rem', marginBottom: '30px' }}>
          {product.description}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
          <div style={qtyStyle}>
            <button onClick={() => setQty(Math.max(1, qty - 1))} style={qtyBtn}>-</button>
            <span style={{ padding: '0 20px' }}>{qty}</span>
            <button onClick={() => setQty(qty + 1)} style={qtyBtn}>+</button>
          </div>
          
          <button 
            onClick={() => addToCart(product, qty)} 
            style={btnStyle}
            className="add-to-cart-btn"
          >
            Add to Cart
          </button>
        </div>

        <div style={trustStyle}>
          <span>✔️ Secure Transaction</span>
          <span>✔️ 7-Day Replacement</span>
          <span>✔️ Free Cyber-Delivery</span>
        </div>
      </div>
    </div>
  );
};

// --- STYLES ---
const containerStyle = { display: 'flex', flexWrap: 'wrap', padding: '50px 8%', gap: '60px', color: 'white', minHeight: '80vh' };
const imageWrapper = { flex: '1', minWidth: '350px' };
const largeImgStyle = { width: '100%', borderRadius: '20px', border: '1px solid #2d3139', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' };
const infoStyle = { flex: '1.2', minWidth: '350px' };
const btnStyle = { padding: '15px 40px', background: '#ff69b4', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.1rem' };
const qtyStyle = { display: 'flex', alignItems: 'center', background: '#1a1d23', borderRadius: '8px', border: '1px solid #2d3139' };
const qtyBtn = { background: 'none', border: 'none', color: 'white', padding: '10px 15px', cursor: 'pointer', fontSize: '1.2rem' };
const trustStyle = { display: 'flex', gap: '20px', fontSize: '0.9rem', color: '#a0a0a0', borderTop: '1px solid #2d3139', paddingTop: '20px' };

export default ProductDetails;