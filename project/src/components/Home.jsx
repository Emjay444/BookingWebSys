// src/components/Home.js

import React from 'react';
import Navbar from './Navbar';
import TourCard from './TourCard';
import './Home.css'; // Ensure you create this CSS file for home styles

const Home = () => {
  const tours = [
    {
      title: "City Tour",
      description: "Explore the best attractions in the city.",
      price: 99,
      startTime: "9:00 AM",
      duration: "3 hours",
      image: "path/to/image1.jpg" // Replace with actual image paths
    },
    {
      title: "Beach Getaway",
      description: "Relax on the beautiful beaches.",
      price: 150,
      startTime: "10:00 AM",
      duration: "5 hours",
      image: "path/to/image2.jpg" // Replace with actual image paths
    },
    {
      title: "Mountain Adventure",
      description: "Hike through the stunning mountains.",
      price: 120,
      startTime: "8:00 AM",
      duration: "4 hours",
      image: "path/to/image3.jpg" // Replace with actual image paths
    },
  ];

  return (
    <div className="home">
      <Navbar />
      <h2>Available Tours</h2>
      <div className="tour-grid">
        {tours.map((tour, index) => (
          <TourCard key={index} tour={tour} />
        ))}
      </div>
    </div>
  );
};

export default Home;
