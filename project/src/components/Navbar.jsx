// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png"; // Adjust path if needed

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="MASADYA Logo" className="logo" />
        <h1>MASADYA Travel & Tours</h1>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Travel Tips</Link>
        </li>
        <li>
          <Link to="/">Booking</Link>
        </li>
      </ul>
      <div className="auth-links">
        <ul>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Register" className="signup-btn">
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
