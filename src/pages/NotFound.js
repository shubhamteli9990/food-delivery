// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <style>{`
        .not-found-container {
            text-align: center;
            padding: 100px 20px;
        }
        .not-found-title {
            font-size: 72px;
            margin: 0;
            color: #ff4d4d;
        }
        .not-found-text {
            font-size: 24px;
            margin: 10px 0 30px 0;
        }
        .home-link {
            padding: 10px 25px;
            background-color: #007bff;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            font-size: 18px;
        }
      `}</style>
      <div className="not-found-container">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-text">Oops! Page Not Found.</p>
        <Link to="/" className="home-link">Go to Homepage</Link>
      </div>
    </>
  );
};

export default NotFound;