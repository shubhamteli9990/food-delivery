// src/components/Navbar.js
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const { cartCount } = useContext(CartContext);
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <>
      <style>
        {`
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #ff4d4d;
            padding: 10px 40px;
            color: white;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .logo a {
            font-size: 24px;
            font-weight: bold;
            color: white;
            text-decoration: none;
          }
          .nav-links {
            list-style: none;
            display: flex;
            align-items: center;
            gap: 25px;
            margin: 0;
            padding: 0;
          }
          .nav-links li a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            padding: 8px 12px;
            border-radius: 5px;
            transition: background-color 0.3s;
          }
          .nav-links li a:hover, .nav-links li a.active {
            background-color: rgba(0,0,0,0.1);
          }
          .cart-link {
            position: relative;
          }
          .cart-badge {
            position: absolute;
            top: -5px;
            right: -10px;
            background-color: #fff;
            color: #ff4d4d;
            border-radius: 50%;
            padding: 2px 6px;
            font-size: 12px;
            font-weight: bold;
          }
          .logout-btn {
            background-color: transparent;
            color: white;
            border: 1px solid white;
            padding: 8px 12px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: 500;
            font-size: 16px;
          }
          .logout-btn:hover {
            background-color: white;
            color: #ff4d4d;
          }
        `}
      </style>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">FoodExpress</Link>
        </div>
        <ul className="nav-links">
          <li><NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to="/menu" className={({isActive}) => isActive ? "active" : ""}>Menu</NavLink></li>
          <li>
            <NavLink to="/cart" className={({isActive}) => `cart-link ${isActive ? "active" : ""}`}>
              Cart 
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </NavLink>
          </li>
          <li><NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About Us</NavLink></li>
          {isLoggedIn ? (
            <li><button onClick={logout} className="logout-btn">Logout</button></li>
          ) : (
            <li><NavLink to="/profile" className={({isActive}) => isActive ? "active" : ""}>Profile</NavLink></li>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
