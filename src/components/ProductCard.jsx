import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const priceInRupees = product.price * 83;

  return (
    <div className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
      <div style={{ padding: '15px' }}>
        <p style={{ color: '#ff69b4', fontSize: '0.8rem', margin: 0 }}>{product.category}</p>
        <h3 style={{ margin: '5px 0', fontSize: '1.2rem' }}>{product.name}</h3>
        <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'white' }}>
          ₹{priceInRupees.toLocaleString('en-IN')}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
          <span style={{ color: '#ffcc00' }}>⭐ {product.rating}</span>
          <button 
            className="add-to-cart-btn" 
            onClick={(e) => {
              e.stopPropagation(); // Prevents opening details when clicking button
              addToCart(product);
            }}
            style={{ width: 'auto', padding: '8px 15px' }}
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;