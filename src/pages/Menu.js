// src/pages/Menu.js
import React, { useState } from 'react';
import { allDishes } from '../data/dishes';
import DishCard from '../components/DishCard';

const MenuPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDishes = allDishes.filter(dish =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dish.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <style>
        {`
          .menu-page-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem 1rem;
            text-align: center;
          }
          .page-title {
            font-size: 36px;
            margin-bottom: 1rem;
          }
          .search-bar-container {
            margin-bottom: 2.5rem;
          }
          .search-input {
            padding: 12px 20px;
            width: 60%;
            max-width: 500px;
            border: 2px solid #ddd;
            border-radius: 25px;
            font-size: 16px;
            transition: border-color 0.3s;
          }
          .search-input:focus {
            outline: none;
            border-color: #ff4d4d;
          }
          .dish-list-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 24px;
          }
          .no-results {
            margin-top: 50px;
            color: #999;
            font-size: 18px;
          }
        `}
      </style>
      <div className="menu-page-container">
        <h1 className="page-title">Our Menu</h1>
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search for dishes or categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="dish-list-container">
          {filteredDishes.length > 0 ? (
            filteredDishes.map(dish => (
              <DishCard key={dish.id} dish={dish} />
            ))
          ) : (
            <p className="no-results">No matching dishes found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MenuPage;