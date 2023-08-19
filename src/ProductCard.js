import React from 'react';
import './ProductCard.css'

function ProductCard(props) {
  return (
    <div className="product-card">
      <h1>{props.title}</h1>
      <img src={props.pic} alt={props.description} />
      <p>${props.cost}</p>
      <p>{props.link}</p>
      <p>{props.description}</p>
    </div>
  );
}

export default ProductCard;