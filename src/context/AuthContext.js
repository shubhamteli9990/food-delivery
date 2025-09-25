// src/context/AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // In a real app, user info would also be stored
  // const [user, setUser] = useState(null); 

  const login = (email, password) => {
    // Basic validation for demonstration
    if (email && password) {
      console.log("Login successful for:", email);
      setIsLoggedIn(true);
      // setUser({ email }); // Store user info
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    // setUser(null);
    console.log("User logged out.");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
