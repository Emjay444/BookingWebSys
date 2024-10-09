import React from 'react';
import './TourCard.css'; // Ensure you have this CSS file for styling

const TourCard = ({ title, description, price, startTime, duration }) => {
    return (
        <div className="tour-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p><strong>Price:</strong> ${price}</p>
            <p><strong>Start Time:</strong> {startTime}</p>
            <p><strong>Duration:</strong> {duration} hours</p>
        </div>
    );
};

export default TourCard;
