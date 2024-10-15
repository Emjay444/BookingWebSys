// src/components/Home.js

import React from "react";
import Navbar from "./Navbar";
import TourCard from "./TourCard";
import "./Home.css"; // Ensure you create this CSS file for home styles

const Home = () => {
  const tours = [
    {
      title: "City Tour",
      description: "Explore the best attractions in the city.",
      price: 99,
      startTime: "9:00 AM",
      duration: "3 hours",
      image: "path/to/image1.jpg",
    },
    {
      title: "Beach Getaway",
      description: "Relax on the beautiful beaches.",
      price: 150,
      startTime: "10:00 AM",
      duration: "5 hours",
      image: "path/to/image2.jpg",
    },
    {
      title: "Mountain Adventure",
      description: "Hike through the stunning mountains.",
      price: 120,
      startTime: "8:00 AM",
      duration: "4 hours",
      image: "path/to/image3.jpg",
    },
  ];

  const additionalTours = [
    {
      title: "Desert Safari",
      description: "Experience the dunes in a thrilling desert safari.",
      price: 200,
      startTime: "4:00 PM",
      duration: "6 hours",
      image: "path/to/image4.jpg",
    },
    {
      title: "Jungle Expedition",
      description: "Immerse yourself in a guided jungle expedition.",
      price: 180,
      startTime: "7:00 AM",
      duration: "8 hours",
      image: "path/to/image5.jpg",
    },
    {
      title: "Waterfall Hike",
      description: "A refreshing hike to a beautiful waterfall.",
      price: 130,
      startTime: "11:00 AM",
      duration: "4 hours",
      image: "path/to/image6.jpg",
    },
    {
      title: "City Night Tour",
      description: "Discover the beauty of the city at night.",
      price: 120,
      startTime: "8:00 PM",
      duration: "3 hours",
      image: "path/to/image7.jpg",
    },
    {
      title: "Boat Cruise",
      description: "Enjoy a luxurious boat cruise.",
      price: 250,
      startTime: "12:00 PM",
      duration: "5 hours",
      image: "path/to/image8.jpg",
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

      <div className="bodycard">
        <h2>Top 5 Tourists Destinations</h2>
        <div className="bodycard1">
          <div className="bodycard2">
            <label>El Nido, Palawan</label>
            <div className="img" />
            <p>Paragraph lorem ipsum</p>
          </div>
          <div className="bodycard2">
            <label>El Nido, Palawan</label>
            <div className="img" />
            <p>Paragraph lorem ipsum</p>
          </div>
          <div className="bodycard2">
            <label>El Nido, Palawan</label>
            <div className="img" />
            <p>Paragraph lorem ipsum</p>
          </div>
          <div className="bodycard2">
            <label>El Nido, Palawan</label>
            <div className="img" />
            <p>Paragraph lorem ipsum</p>
          </div>
          <div className="bodycard2">
            <label>El Nido, Palawan</label>
            <div className="img" />
            <p>Paragraph lorem ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
