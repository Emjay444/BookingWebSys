import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Header from "./components/Header"; // Import Header component
import "./App.css"; // Ensure global styles are applied


function App() {
  const location = useLocation(); // Get the current location from the router

  const handleNavigateToRegister = () => {
    window.location.href = "/register"; // Navigate to register page
  };

  const handleNavigateToLogin = () => {
    window.location.href = "/login"; // Navigate to login page
  };

  return (
    <div className="App">
      {/* Only show shapes on login and register pages */}
      {(location.pathname === "/login" || location.pathname === "/register") && (
        <div className="shape-container">
          <div className="shape red"></div>
          <div className="shape blue"></div>
          <div className="shape yellow"></div>
        </div>
      )}
      <Header /> {/* Render Header component */}
      <div className="login-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onNavigateToRegister={handleNavigateToRegister} />} />
          <Route path="/register" element={<Register onNavigateToLogin={handleNavigateToLogin} />} />
        </Routes>
      </div>
    </div>
  );
}

// Wrap App with Router in index.js or main file
const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
