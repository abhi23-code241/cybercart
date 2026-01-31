import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Navbar = ({ setSearchQuery }) => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <nav className="navbar" style={navStyle}>
      <Link to="/" style={logoStyle}>CyberCart</Link>
      
      <input 
        type="text" 
        placeholder="Search tech..." 
        style={searchStyle}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          navigate('/products');
        }}
      />

      <div style={linkGroup}>
        <Link to="/products" style={linkStyle}>Shop</Link>
        <Link to="/cart" style={linkStyle}>
          🛒 <span style={badgeStyle}>{cart.length}</span>
        </Link>
        <Link to="/checkout" style={linkStyle}>Checkout</Link>
        <Link to="/login" style={loginBtn}>Login</Link>
      </div>
    </nav>
  );
};

// --- CORRECTED Navbar Styles ---
const navStyle = { 
  display: 'flex', 
  justifyContent: 'space-between', 
  alignItems: 'center', 
  padding: '15px 5%', 
  background: '#16191e', 
  borderBottom: '1px solid #2d3139', 
  position: 'sticky', 
  top: 0, 
  zIndex: 100 // FIXED: Changed from z-index to zIndex and ensured commas are present
};

const logoStyle = { color: '#ff69b4', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' };
const searchStyle = { padding: '8px 15px', borderRadius: '20px', border: '1px solid #2d3139', background: '#0b0e11', color: 'white', width: '30%' };
const linkGroup = { display: 'flex', alignItems: 'center', gap: '20px' };
const linkStyle = { color: 'white', textDecoration: 'none', fontSize: '1rem' };
const badgeStyle = { background: '#ff69b4', padding: '2px 7px', borderRadius: '50%', fontSize: '0.8rem', marginLeft: '5px' };
const loginBtn = { background: '#ff69b4', color: 'white', padding: '8px 18px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold' };

export default Navbar;