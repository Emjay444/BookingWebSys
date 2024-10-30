// App.js
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Header from "./components/Header";
import "./App.css";

function App() {
  const location = useLocation();
  const [travelers, setTravelers] = useState(1);
  const [date, setDate] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowControls(false);
      } else {
        setShowControls(location.pathname === "/");
      }
    };

    setShowControls(location.pathname === "/");
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const handleNavigateToRegister = () => {
    window.location.href = "/register";
  };

  const handleNavigateToLogin = () => {
    window.location.href = "/login";
  };

  return (
    <div className="App">
      {(location.pathname === "/login" ||
        location.pathname === "/register") && (
        <div className="shape-container">
          <div className="shape red"></div>
          <div className="shape blue"></div>
          <div className="shape yellow"></div>
        </div>
      )}
      <Header />

      <div className="login-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login onNavigateToRegister={handleNavigateToRegister} />}
          />
          <Route
            path="/register"
            element={<Register onNavigateToLogin={handleNavigateToLogin} />}
          />
        </Routes>
      </div>
      {showControls && (
        <div className="controls-container">
          <div className="control-group">
            <label htmlFor="travelers-select">Travelers</label>
            <select
              id="travelers-select"
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
            >
              {[...Array(10).keys()].map((num) => (
                <option key={num} value={num + 1}>
                  {num + 1} Traveler{num > 0 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>
          <div className="control-group">
            <label htmlFor="date-select">Select Date</label>
            <input
              type="date"
              id="date-select"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="control-group">
            <label htmlFor="location-select">Select Location</label>
            <input
              type="text"
              id="location-select"
              placeholder="Enter location"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
