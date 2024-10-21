import React, { useState } from "react";
import Header from "./Header"; // Import the Header component
import "./Login.css"; // Ensure you have the correct CSS file for styles


const Login = ({ onNavigateToRegister }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Logged in:", formData);
  };

  return (
    <div className="login-container">
      <Header /> {/* Include the Header here */}
      <h2>Login</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
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
          onClick={onNavigateToRegister} // Call the function to navigate
          style={{ cursor: "pointer", color: "#4CAF50" }} // Ensure it looks like a link
        >
          Register Here
        </span>
      </p>
    </div>
  );
};

export default Login;
