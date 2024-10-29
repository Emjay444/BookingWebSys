// src/components/Home.js

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import TourCard from "./TourCard";
import "./Home.css";

const Home = () => {
  const [selectedTour, setSelectedTour] = useState(null);
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  const tours = [
    {
      title: "City Tour",
      description: "Explore the best attractions in the city.",
      price: 99,
      startTime: "9:00 AM",
      duration: "3 hours",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMayon&psig=AOvVaw1yXRr8x6tYManwtL_mvUDz&ust=1730217720515000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLD08bq5sYkDFQAAAAAdAAAAABAE",
    },
    {
      title: "Beach Getaway",
      description: "Relax on the beautiful beaches.",
      price: 150,
      startTime: "10:00 AM",
      duration: "5 hours",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Mountain Adventure",
      description: "Hike through the stunning mountains.",
      price: 120,
      startTime: "8:00 AM",
      duration: "4 hours",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Mountassin Adventure",
      description: "Hike through the stunning mountains.",
      price: 120,
      startTime: "8:00 AM",
      duration: "4 hours",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "XXMountassin Adventure",
      description: "Hike through the stunning mountains.",
      price: 120,
      startTime: "8:00 AM",
      duration: "4 hours",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "ZZXXMountassin Adventure",
      description: "Hike through the stunning mountains.",
      price: 120,
      startTime: "8:00 AM",
      duration: "4 hours",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "ZZXXMountassin Adventure",
      description: "Hike through the stunning mountains.",
      price: 120,
      startTime: "8:00 AM",
      duration: "4 hours",
      image: "https://via.placeholder.com/150",
    },
  ];

  const handleCardClick = (tour) => {
    setSelectedTour(tour);

    // Update recently viewed list
    setRecentlyViewed((prev) => {
      const updatedList = [tour, ...prev.filter((t) => t.title !== tour.title)];
      localStorage.setItem("recentlyViewed", JSON.stringify(updatedList));
      return updatedList;
    });
  };

  useEffect(() => {
    const storedRecentlyViewed = localStorage.getItem("recentlyViewed");
    if (storedRecentlyViewed) {
      setRecentlyViewed(JSON.parse(storedRecentlyViewed));
    }
  }, []);
  const closePopup = () => {
    setSelectedTour(null); // Close the popup
  };

  return (
    <div className="home">
      <Navbar />

      <div className="bodycard">
        <h2>Available Tours</h2>
        <div className="tour-grid">
          {tours.map((tour, index) => (
            <TourCard
              key={index}
              tour={tour}
              onClick={() => handleCardClick(tour)}
            />
          ))}
        </div>

        {selectedTour && (
          <div className="popup">
            <div className="popup-content">
              <button className="close-btn" onClick={closePopup}>
                X
              </button>
              <h3>{selectedTour.title}</h3>
              <p>{selectedTour.description}</p>
              <p>Price: ${selectedTour.price}</p>
              <p>Start Time: {selectedTour.startTime}</p>
              <p>Duration: {selectedTour.duration}</p>
              <img src={selectedTour.image} alt={selectedTour.title} />
            </div>
          </div>
        )}

        <div className="bodycard10">
          <h2 className="h22">Recently Viewed Destinations</h2>
          <div className="bodycard1">
            {recentlyViewed.length === 0 ? (
              <p>No recent views yet</p>
            ) : (
              recentlyViewed.map((tour, index) => (
                <div key={index} className="bodycard2">
                  <label>{tour.title}</label>
                  <img src={tour.image} alt={tour.title} className="img" />
                  <p>{tour.description}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;