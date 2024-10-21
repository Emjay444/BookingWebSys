// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure you create this CSS file for navbar styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MASADYA Travel & Tours</h1>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Travel Tips</Link>
        </li>
        <li>
          <Link to="/">Booking</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
