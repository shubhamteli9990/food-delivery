// src/pages/Cart.js
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const TAX_RATE = 0.05; // 5%
const DELIVERY_CHARGE = 50;

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const { isLoggedIn } = useContext(AuthContext);
  const [checkoutMessage, setCheckoutMessage] = useState('');
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const taxAmount = subtotal * TAX_RATE;
  const grandTotal = subtotal + taxAmount + DELIVERY_CHARGE;

  const handleCheckout = () => {
    if (!isLoggedIn) {
      setCheckoutMessage('You need to login first to proceed to checkout.');
      setTimeout(() => {
        navigate('/profile');
      }, 2000);
    } else {
      setCheckoutMessage('Order placed successfully! Thank you for shopping with us.');
      // Here you would typically clear the cart and redirect
      // For now, we just show a message.
    }
  };

  return (
    <>
      <style>{`
        .cart-container {
            max-width: 900px;
            margin: 40px auto;
            padding: 20px;
        }
        .cart-title {
            text-align: center;
            font-size: 32px;
            margin-bottom: 30px;
        }
        .cart-grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 40px;
            align-items: start;
        }
        .cart-items-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        .cart-item {
            display: flex;
            align-items: center;
            border: 1px solid #eee;
            padding: 15px;
            border-radius: 8px;
            gap: 20px;
        }
        .cart-item-image {
            width: 100px;
            height: 100px;
            object-fit: cover;
            border-radius: 8px;
        }
        .cart-item-details { flex: 1; }
        .cart-item-name { font-size: 18px; font-weight: bold; }
        .cart-item-price { color: #555; }
        .cart-item-actions { display: flex; align-items: center; gap: 10px; }
        .quantity-input { width: 50px; text-align: center; padding: 5px; border: 1px solid #ccc; border-radius: 5px; }
        .remove-btn { background-color: #ff4d4d; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer; }
        
        .cart-summary {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #eee;
        }
        .summary-title { font-size: 22px; margin-bottom: 20px; border-bottom: 1px solid #ddd; padding-bottom: 10px; }
        .summary-line { display: flex; justify-content: space-between; margin-bottom: 10px; }
        .summary-total { display: flex; justify-content: space-between; margin-top: 20px; padding-top: 10px; border-top: 1px solid #ddd; font-size: 20px; font-weight: bold; }
        .checkout-btn { width: 100%; margin-top: 20px; padding: 12px; font-size: 18px; background-color: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer; }
        .checkout-message { text-align: center; margin-top: 15px; font-weight: bold; }
        
        .empty-cart { text-align: center; padding: 50px 0; }
        .empty-cart p { font-size: 18px; color: #777; }
        .shop-now-link { display: inline-block; margin-top: 20px; padding: 10px 20px; background-color: #28a745; color: white; text-decoration: none; border-radius: 5px; }
      `}</style>
      <div className="cart-container">
        <h1 className="cart-title">Your Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <Link to="/menu" className="shop-now-link">Shop Now</Link>
          </div>
        ) : (
          <div className="cart-grid">
            <div className="cart-items-list">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image"/>
                  <div className="cart-item-details">
                      <p className="cart-item-name">{item.name}</p>
                      <p className="cart-item-price">₹{item.price}</p>
                  </div>
                  <div className="cart-item-actions">
                      <input 
                          type="number" 
                          value={item.quantity} 
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                          className="quantity-input"
                          min="1"
                      />
                      <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
                <h2 className="summary-title">Order Summary</h2>
                <div className="summary-line">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-line">
                    <span>Tax (5%)</span>
                    <span>₹{taxAmount.toFixed(2)}</span>
                </div>
                <div className="summary-line">
                    <span>Delivery Charge</span>
                    <span>₹{DELIVERY_CHARGE.toFixed(2)}</span>
                </div>
                <div className="summary-total">
                    <span>Grand Total</span>
                    <span>₹{grandTotal.toFixed(2)}</span>
                </div>
                <button onClick={handleCheckout} className="checkout-btn">Proceed to Checkout</button>
                {checkoutMessage && <p className="checkout-message" style={{color: isLoggedIn ? 'green' : 'red'}}>{checkoutMessage}</p>}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
