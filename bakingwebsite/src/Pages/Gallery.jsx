import React from 'react';
import ProductCard from '../components/product';
import { products } from '../data/products';
import '../App.css';

const Gallery = () => {
  return (
    <div style={{ padding: '40px' }}>
      <h1 className='font-cursive text-3xl text-amber-600 italic text-center'>Our Freshly Baked Treats</h1>
      
      {/* CSS Grid for responsiveness */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '25px',
        marginTop: '30px'
      }}>
        {products.map(item => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;