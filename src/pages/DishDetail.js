// src/pages/DishDetail.js
import React, { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { allDishes } from '../data/dishes';
import { CartContext } from '../context/CartContext';
import NotFound from './NotFound';

function DishDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  
  const dish = allDishes.find(d => d.id === parseInt(id));
  
  if (!dish) {
    return <NotFound />;
  }

  return (
    <>
      <style>{`
        .dish-detail-container {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 50px;
          padding: 50px 20px;
          max-width: 1000px;
          margin: auto;
        }
        .dish-detail-image {
          width: 400px;
          height: 400px;
          object-fit: cover;
          border-radius: 15px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }
        .dish-detail-info {
          max-width: 500px;
        }
        .dish-category {
          background-color: #ff4d4d1a;
          color: #ff4d4d;
          padding: 5px 12px;
          border-radius: 15px;
          font-weight: bold;
          display: inline-block;
          margin-bottom: 10px;
        }
        .dish-detail-name {
          font-size: 36px;
          margin: 0 0 15px 0;
        }
        .dish-detail-description {
          font-size: 16px;
          color: #555;
          line-height: 1.6;
          margin-bottom: 25px;
        }
        .dish-detail-price {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 30px;
        }
        .add-to-cart-btn {
            padding: 15px 30px;
            background-color: #28a745;
            color: white;
            border: none;
            font-size: 18px;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        .add-to-cart-btn:hover {
            background-color: #218838;
        }
      `}</style>
      <div className="dish-detail-container">
        <img src={dish.image} alt={dish.name} className="dish-detail-image"/>
        <div className="dish-detail-info">
          <span className="dish-category">{dish.category}</span>
          <h1 className="dish-detail-name">{dish.name}</h1>
          <p className="dish-detail-description">{dish.description}</p>
          <p className="dish-detail-price">₹{dish.price}</p>
          <button onClick={() => addToCart(dish)} className="add-to-cart-btn">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default DishDetail;