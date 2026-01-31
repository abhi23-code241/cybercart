import React from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const navigate = useNavigate();

  // Filter 4 featured products (Rating 4.8 and above) [cite: 29]
  const featuredProducts = products.filter(p => p.rating >= 4.8).slice(0, 4);

  // Category data with images [cite: 28]
  const categories = [
    { name: 'Laptops', img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&q=80' },
    { name: 'Smartphones', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80' },
    { name: 'Audio', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80' },
    { name: 'Gaming', img: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&q=80' }
  ];

  return (
    <div style={homeStyle}>
      {/* 1. Hero Banner [cite: 27] */}
      <section style={heroStyle}>
        <div style={heroContentStyle}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '10px' }}>Future of Shopping</h1>
          <p style={{ fontSize: '1.2rem', color: '#a0a0a0' }}>
            Experience the next generation of Tech with <span style={{ color: '#ff69b4' }}>CyberCart</span>.
          </p>
          <button 
            style={heroBtnStyle}
            onClick={() => navigate('/products')}
          >
            Explore Now
          </button>
        </div>
      </section>

      {/* 2. Product Categories [cite: 28] */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Shop by Category</h2>
        <div style={categoryGridStyle}>
          {categories.map((cat) => (
            <div 
              key={cat.name} 
              className="category-card"
              onClick={() => navigate('/products')}
              style={{
                ...categoryCardStyle, 
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${cat.img})`
              }}
            >
              <h3 style={{ margin: 0 }}>{cat.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Featured Products [cite: 29] */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Featured Tech</h2>
        <div className="product-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

// --- CSS-in-JS Objects ---
const homeStyle = { background: '#0f1115', color: 'white', minHeight: '100vh' };

const heroStyle = {
  height: '60vh',
  background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center'
};

const heroContentStyle = { padding: '20px' };

const heroBtnStyle = {
  marginTop: '20px',
  padding: '12px 30px',
  background: '#ff69b4',
  border: 'none',
  borderRadius: '5px',
  color: 'white',
  fontWeight: 'bold',
  cursor: 'pointer'
};

const sectionStyle = { padding: '60px 5%' };
const headingStyle = { fontSize: '2rem', marginBottom: '30px', borderLeft: '5px solid #ff69b4', paddingLeft: '15px' };

const categoryGridStyle = { 
  display: 'grid', 
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
  gap: '20px' 
};

const categoryCardStyle = {
  height: '150px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '10px',
  border: '1px solid #2d3139',
  fontSize: '1.2rem',
  cursor: 'pointer',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transition: '0.3s'
};

export default Home;