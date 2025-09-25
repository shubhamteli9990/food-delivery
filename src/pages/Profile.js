// src/pages/Profile.js
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLoggedIn, login, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
    // After successful login, navigate to the home page or previous page
    navigate('/'); 
  };
  
  const handleLogout = () => {
    logout();
    navigate('/');
  }

  return (
    <>
      <style>{`
        .profile-container {
          max-width: 450px;
          margin: 50px auto;
          padding: 30px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          text-align: center;
        }
        .profile-title {
          font-size: 28px;
          margin-bottom: 25px;
        }
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-input {
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 16px;
        }
        .login-btn, .logout-btn-profile {
          padding: 12px;
          font-size: 16px;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .login-btn {
          background-color: #007bff;
          color: white;
        }
        .login-btn:hover {
          background-color: #0056b3;
        }
        .logout-btn-profile {
          background-color: #dc3545;
          color: white;
        }
        .logout-btn-profile:hover {
          background-color: #c82333;
        }
        .welcome-message {
          font-size: 18px;
          margin-bottom: 20px;
        }
      `}</style>
      <div className="profile-container">
        {isLoggedIn ? (
          <div>
            <h1 className="profile-title">Welcome Back!</h1>
            <p className="welcome-message">You are logged in and ready to order.</p>
            <button onClick={handleLogout} className="logout-btn-profile">Logout</button>
          </div>
        ) : (
          <div>
            <h1 className="profile-title">Login to Your Account</h1>
            <form onSubmit={handleLogin} className="login-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <input 
                type="password" 
                placeholder="Enter your password" 
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
              <button type="submit" className="login-btn">Login</button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfilePage;
