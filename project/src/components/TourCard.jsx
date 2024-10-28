import React from "react";
import "./TourCard.css";
// Import the image from the assets folder
import japanImage from "../assets/japan.jpg"; // Adjust the path as necessary

const TourCard = ({ locationName, startDate, endDate, startTime }) => {
  const calculateDuration = (start, end) => {
    const startDateObj = new Date(start);
    const endDateObj = new Date(end);
    const timeDifference = endDateObj - startDateObj;
    const durationInDays = timeDifference / (1000 * 3600 * 24);
    return `${durationInDays + 1} days`; // Corrected with backticks for template literals
  };

  return (
    <div className="tour-card">
      {/* Use the imported image directly */}
      <img src={japanImage} alt={locationName} className="tour-image" />
      <h2 className="tour-location">{locationName}</h2>
      <div className="tour-details">
        <p>Start Date: {startDate}</p>
        <p>End Date: {endDate}</p>
        <p>Start Time: {startTime}</p>
        <p>Duration: {calculateDuration(startDate, endDate)}</p>
      </div>
    </div>
  );
};

export default TourCard;
