// src/components/Login.jsx

import React, { useState } from "react";
import './Login.css'; // Correct import for the CSS file
import Header from './Header'; // Import the Header component

const Login = ({ onNavigateToRegister }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logged in:", formData);
  };

  return (
    <div className="login-container">
      <Header showImage={false} /> {/* Explicitly pass showImage={false} */}
      <h2>Login</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p className="register-prompt">
        Create an account?{" "}
        <span
          className="register-link"
          onClick={onNavigateToRegister}
          style={{ cursor: "pointer", color: "#4CAF50" }}
        >
          Register Here
        </span>
      </p>
    </div>
  );
};

export default Login;
