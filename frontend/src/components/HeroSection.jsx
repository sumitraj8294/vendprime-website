import React from "react";
import "../styles/hero.css";
import heroImage from "../assets/images/hero.png"; // replace with your image

const HeroSection = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>VendPrime – Smart Vending, Simplified</h1>
          <p>
            24/7 access to snacks, beverages, and essentials.  
            Hassle-free setup, stocking, and maintenance – we handle everything.
          </p>
          <button className="btn-primary">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
