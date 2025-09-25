// src/components/DishCard.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const DishCard = ({ dish }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <style>{`
        .menu-dish-card {
            display: flex;
            align-items: center;
            width: 80%;
            max-width: 700px;
            border: 1px solid #ddd;
            border-radius: 12px;
            padding: 16px;
            background-color: #fff;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }
        .menu-dish-image {
            width: 120px;
            height: 120px;
            object-fit: cover;
            border-radius: 10px;
            margin-right: 20px;
        }
        .menu-dish-details {
            flex: 1;
        }
        .menu-dish-name {
            font-size: 20px;
            font-weight: bold;
            margin: 0 0 6px 0;
        }
        .menu-dish-description {
            color: #555;
            font-size: 15px;
            margin: 0 0 12px 0;
        }
        .menu-dish-price {
            font-size: 18px;
            font-weight: bold;
            color: #222;
        }
        .menu-dish-actions {
            text-align: right;
        }
        .menu-add-button {
            padding: 10px 20px;
            background-color: #28a745;
            color: white;
            border: none;
            font-size: 15px;
            border-radius: 6px;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        .menu-add-button:hover {
            background-color: #218838;
        }
    `}</style>
      <div className="menu-dish-card">
        <img src={dish.image} alt={dish.name} className="menu-dish-image" />
        <div className="menu-dish-details">
            <h3 className="menu-dish-name">{dish.name}</h3>
            <p className="menu-dish-description">{dish.description}</p>
            <p className="menu-dish-price">₹{dish.price}</p>
        </div>
        <div className="menu-dish-actions">
            <button onClick={() => addToCart(dish)} className="menu-add-button">
              Add to Cart
            </button>
        </div>
      </div>
    </>
  );
};

export default DishCard;