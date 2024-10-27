import React from "react";
import "./AboutUs.css"; // Ensure this path is correct

const AboutUs = () => {
  return (
    <div className="about-us-wrapper">
      {/* Image section on the left side */}
      <div className="image-container">
        <div className="image-box image1" />
        <div className="image-box image2" />
        <div className="image-box image3" />
      </div>

      {/* About Us section on the right side */}
      <div className="about-us-container">
        <h2>About Us</h2>
        <p>
          Welcome to our travel booking platform! We are passionate about making
          your travel dreams a reality. Whether you're looking for a solo adventure
          or planning a family vacation, we have the right tools to help you plan your
          perfect trip.
        </p>
        <p>
          Our platform allows you to easily select your destination, choose travel
          dates, and customize the number of travelers for a seamless booking experience.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
