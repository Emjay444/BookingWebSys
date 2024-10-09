import React, { useState } from "react";
import "./Register.css"; // Ensure you have the correct CSS file for styles

const Register = ({ onNavigateToLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your validation and registration logic here
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    // Handle registration logic (e.g., API call)
    console.log("Registered:", formData);
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
      <p className="login-prompt">
        Already have an account?{" "}
        <span
          className="login-link"
          onClick={onNavigateToLogin} // Navigate to login page
          style={{ cursor: "pointer", color: "#4CAF50" }} // Ensure it looks like a link
        >
          Login Here
        </span>
      </p>
    </div>
  );
};

export default Register;
