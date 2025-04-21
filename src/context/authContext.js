"use client"

import React, { createContext, useContext, useState, useEffect } from "react";
import jwt from "jsonwebtoken";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to hold user information
  const [loading, setLoading] = useState(true); // To handle loading state

  console.log(user);
  
  // Check for JWT token in localStorage and verify it
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwt.decode(token);
        if (decoded && decoded.exp * 1000 > Date.now()) {
          setUser(decoded);
        } else {
          localStorage.removeItem("token"); // Token expired, remove it
        }
      } catch (error) {
        console.error("Error decoding token", error);
      }
    }
    setLoading(false);
  }, []);

  // Login function
  const login = (token) => {
    const decoded = jwt.decode(token);
    localStorage.setItem("token", token);
    setUser(decoded);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    router.push("/");
  };

  const authInfo = {
    user,
    login,
    logout,
    loading,
  };
  // Return Auth Context provider with state and actions
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};
