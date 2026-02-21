import { useState } from 'react';

const ProductCard = ({ product, isFavourite, onToggleFavourite }) => {
  const { title, image, price, description } = product;
  const formattedCurrency = (amount) =>
    amount.toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR',
    });
  return (
    <div className={`product-card ${isFavourite ? 'selected' : ''}`}>
      <button className='fav-btn' onClick={onToggleFavourite}>
        {isFavourite ? '❤️' : '🤍'}
      </button>
      <img src={image} />
      <h3> {title}</h3>
      <p className='price'>
        {formattedCurrency(Math.round((price * 90) / 10) * 10)}
      </p>
      <p className='desc'>{description.slice(0, 90)}...</p>
    </div>
  );
};
export default ProductCard;
