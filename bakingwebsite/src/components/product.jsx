import React, { useState } from 'react'
import '../App.css'
const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  
  const hoverImageStyle = {
    ...imageStyle,
    transform: isHovered ? 'scale(1.1)' : 'scale(1)'
  };
  
  const buttonStyle = {
    transform: isButtonHovered ? 'scale(1.1)' : 'scale(1)',
    transition: 'transform 0.3s ease'
  };
  
  return (
    <div style={cardStyle}>
      <img 
        src={product.image} 
        alt={product.name} 
        style={hoverImageStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>₹{product.price}</strong></p>
      <button 
        onClick={() => alert(`${product.name} added to cart!`)} 
        className='bg-orange-500 hover:bg-orange-600 border-none text-white font-bold mt-3 px-4 py-2 rounded-full cursor-pointer transition'
        style={buttonStyle}
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
      >
        Add to Cart
      </button>
    </div>
  );
};

const cardStyle = {
  border: '1px solid #ddd',
  padding: '16px',
  borderRadius: '12px',
  textAlign: 'center',
  backgroundColor: '#fff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)'
};

const btnStyle = {
  backgroundColor: '#D2691E', // Chocolate brown
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};
const imageStyle = {
  width: '100%',
  borderRadius: '8px',
  height: '65%',
  transition: 'transform 0.3s linear',
};

export default ProductCard;