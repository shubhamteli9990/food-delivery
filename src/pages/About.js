// src/pages/About.js
import React, { useState } from 'react';

const AboutPage = () => {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (subject && description) {
      console.log("Complaint Submitted:", { subject, description });
      setFormMessage('Thank you! Your complaint has been submitted. We will get back to you soon.');
      setSubject('');
      setDescription('');
    } else {
      setFormMessage('Please fill out both fields.');
    }
  };

  return (
    <>
      <style>{`
        .about-container {
          max-width: 900px;
          margin: 40px auto;
          padding: 20px;
          font-family: sans-serif;
          line-height: 1.6;
        }
        .about-title, .contact-title, .owner-title {
          text-align: center;
          font-size: 32px;
          margin-bottom: 20px;
          color: #333;
        }
        .about-section, .contact-section, .owner-section {
          background-color: #fff;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          margin-bottom: 40px;
        }
        .owner-image-container {
            text-align: center;
            margin-bottom: 20px;
        }
        .owner-image {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid #ff4d4d;
        }
        .owner-info {
          text-align: center;
          color: #555;
          font-size: 16px;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
        }
        .form-group label {
          margin-bottom: 5px;
          font-weight: bold;
          color: #444;
        }
        .form-group input, .form-group textarea {
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 16px;
        }
        .submit-btn {
          padding: 12px 20px;
          font-size: 16px;
          background-color: #ff4d4d;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .submit-btn:hover {
          background-color: #e60000;
        }
        .form-feedback {
          text-align: center;
          margin-top: 15px;
          font-weight: bold;
        }
      `}</style>
      <div className="about-container">
        <div className="about-section">
          <h1 className="about-title">About FoodExpress</h1>
          <p>
            Welcome to FoodExpress, your one-stop destination for delicious food delivered right to your doorstep. We believe that good food creates good moments. Our mission is to connect you with the best local flavors, prepared with love and care, ensuring a delightful experience every single time.
          </p>
        </div>

        <div className="owner-section">
            <h2 className="owner-title">Our Founder</h2>
            <div className="owner-image-container">
                <img 
                    src={process.env.PUBLIC_URL + "/images/shubham.jpg"} 
                    alt="Owner Shubham"
                    className="owner-image"
                />
            </div>
            <div className="owner-info">
                <p>
                    This platform is a passion project by <strong>Shubham</strong>, a food enthusiast dedicated to bringing quality and convenience together. His goal was to create a platform where people can easily discover the hidden culinary gems of their city.
                </p>
            </div>
        </div>

        <div className="contact-section">
          <h2 className="contact-title">Contact Us / File a Complaint</h2>
          <p>If you have any issues with your order or any suggestions for us, please don't hesitate to reach out. Fill out the form below, and our team will get back to you as soon as possible.</p>
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g., Issue with my order"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea 
                id="description" 
                rows="5"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Please describe your issue in detail..."
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit Complaint</button>
            {formMessage && <p className="form-feedback" style={{color: formMessage.includes('Thank you') ? 'green' : 'red'}}>{formMessage}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
