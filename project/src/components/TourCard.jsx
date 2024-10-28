// src/components/TourCard.js

import React from "react";
import "./TourCard.css";

const TourCard = ({ tour, onClick }) => (
  <div className="tour-card" onClick={onClick}>
    <img src={tour.image} alt={tour.title} />
    <h3>{tour.title}</h3>
    <p>{tour.description}</p>
    <p>Price: ${tour.price}</p>
  </div>
);

export default TourCard;
