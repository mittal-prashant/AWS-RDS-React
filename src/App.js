import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const locations = ["Location 1", "Location 2", "Location 3", "Location 4"];
  const cards = ["Card 1", "Card 2", "Card 3"];

  const handleSubmit = (e) => {
    e.preventDefault();

    const headers = {
      "Content-Type": "application/json",
    };

    const data = {
      Name: name,
      Email: email,
      Location: location,
    };

    const requestOptions = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    };

    fetch("/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("API response:", result);
        // Handle the response from the API if needed
      })
      .catch((error) => {
        console.error("API error:", error);
        // Handle any errors that occurred during the API call
      });

    console.log("Submitting data:", name, email, location);
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-left">
          {/* Clickable Icon */}
          <div className="icon-container">
            <img src="image1.jpg" alt="Icon" className="icon" />
          </div>
        </div>
        <h1 className="header-title">Header</h1>
        <div className="header-right">
          {/* Button */}
          <button className="header-button">Notify Me</button>
        </div>
      </header>

      <main>
        {/* Image Carousel */}
        <Carousel
          className="slider-container"
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
        >
          <div>
            <img src="image1.jpg" alt="1" />
          </div>
          <div>
            <img src="image2.jpg" alt="2" />
          </div>
          <div>
            <img src="image3.jpg" alt="3" />
          </div>
        </Carousel>

        {/* Cards */}
        <div className="card-container">
          {cards.map((card, index) => (
            <div key={index} className="card neon-color">
              {card}
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-input">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label htmlFor="location">Location:</label>
              <select
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Select Location</option>
                {locations.map((loc, index) => (
                  <option key={index} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit">Notify Me</button>
          </form>
        </div>
      </main>

      <footer className="footer">
        {/* Footer content */}
        <h2 className="footer-text">Footer</h2>
        <div className="footer-icons">
          {/* Clickable Icon */}
          <div className="icon-container">
            <img src="image1.jpg" alt="Icon" className="icon" />
          </div>
          {/* Clickable Icon */}
          <div className="icon-container">
            <img src="image1.jpg" alt="Icon" className="icon" />
          </div>
          {/* Clickable Icon */}
          <div className="icon-container">
            <img src="image1.jpg" alt="Icon" className="icon" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
