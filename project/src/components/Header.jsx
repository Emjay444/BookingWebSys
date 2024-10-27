// src/components/Header.jsx
import React from "react";
import Rizal_Monumentum from "../assets/Rizal_Monumentum.png"; // Import the image
import "./Header.css";

const Header = ({ showImage = true }) => {
  return (
    <div className="header-container">
      {/* Conditionally render the image based on the showImage prop */}
      {showImage && (
        <img
          src={Rizal_Monumentum}
          alt="Rizal Monument"
          className="header-image"
        />
      )}
    </div>
  );
};

export default Header;
