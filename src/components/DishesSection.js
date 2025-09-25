// src/components/DishesSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import { allDishes } from '../data/dishes';

const DishesSection = () => {
  // Displaying first 10 dishes as featured
  const featuredDishes = allDishes.slice(0, 10);

  return (
    <>
      <style>
        {`
          .dishes-section {
            padding: 20px 20px 50px 20px;
            text-align: center;
            background-color: #fdfdfd;
          }
          .section-title {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 40px;
          }
          .dishes-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 30px;
          }
          .dish-card-link {
            width: 220px;
            border: 1px solid #ddd;
            border-radius: 10px;
            padding: 15px;
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
            text-decoration: none;
            color: inherit;
          }
          .dish-card-link:hover {
            transform: scale(1.05);
          }
          .dish-card-link img {
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 8px;
          }
          .dish-card-link p {
            margin-top: 10px;
            font-weight: 500;
            font-size: 18px;
          }
        `}
      </style>

      <div className="dishes-section">
        <h2 className="section-title">Our Top Dishes</h2>
        <div className="dishes-container">
          {featuredDishes.map((dish) => (
            <Link to={`/dish/${dish.id}`} key={dish.id} className="dish-card-link">
              <img src={dish.image} alt={dish.name} />
              <p>{dish.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default DishesSection;
