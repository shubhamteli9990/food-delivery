// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <>
      <style>
        {`
          .footer {
            background-color: #222;
            color: #fff;
            padding: 30px 20px;
            text-align: center;
          }
          .footer-content p {
            margin: 5px 0;
          }
          .footer .social-links a {
            color: #ff4d4d;
            margin: 0 10px;
            text-decoration: none;
            font-size: 18px;
          }
          .footer .social-links a:hover {
            text-decoration: underline;
          }
          .social-links{
            margin-top: 15px;
          }
        `}
      </style>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 FoodExpress. All rights reserved.</p>
          <p>Contact: shubhamtel.me | +91-9351662415</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
            <a href="https://www.instagram.com/shubham_maratha9990/?igsh=NWx3eHl5bHI3M3Uw#" target="_blank" rel="noopener noreferrer">Instagram</a> | 
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;