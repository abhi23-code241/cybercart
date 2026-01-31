import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Products = ({ searchQuery }) => {
  const [category, setCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('none');

  // 1. Search & Category Filter Logic [cite: 117]
  let filtered = products.filter(p => 
    (category === 'All' || p.category === category) &&
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 2. Sorting Logic (Low to High) [cite: 41-42]
  if (sortOrder === 'lowToHigh') filtered.sort((a, b) => a.price - b.price);
  if (sortOrder === 'highToLow') filtered.sort((a, b) => b.price - a.price);

  return (
    <div style={{padding: '20px 5%'}}>
      <div className="controls" style={{marginBottom:'30px', display:'flex', gap:'15px', flexWrap:'wrap'}}>
        {['All', 'Laptops', 'Smartphones', 'Audio', 'Gaming'].map(cat => (
          <button 
            key={cat} 
            onClick={() => setCategory(cat)}
            className={category === cat ? 'active-filter' : ''}
            style={{padding:'10px 20px', cursor:'pointer', border:'1px solid #ff69b4', background:'transparent', color:'white', borderRadius:'5px'}}
          >
            {cat}
          </button>
        ))}
        
        <select onChange={(e) => setSortOrder(e.target.value)} style={{padding:'10px', background:'#1a1d23', color:'white'}}>
          <option value="none">Sort By Price</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      <div className="product-grid">
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
};

export default Products;