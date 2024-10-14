import React from 'react';
import CounterWithState from './CounterWithState';



const ItemDetail = ({ product: { id, title, description, price } }) => {
 
 

  return (
    <div>
       <div className="product-card" key={id}>
        <h4 className="product-title">{title}</h4>
        <p className="product-description">{description}</p>
        <span className="product-price">${price}</span>
        <br />
        <button className="add-to-cart-button">Añadir al carrito</button>
        <CounterWithState />
      </div>
    </div>
  );
};

export default ItemDetail;

