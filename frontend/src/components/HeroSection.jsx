import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 1. Import useNavigate
import "../styles/hero.css";
// We no longer need to import the image here, as CSS will handle it.

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);
  const navigate = useNavigate(); // 👈 2. Initialize the hook

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👈 3. Create the navigation handler
  const handleLearnMoreClick = () => {
    navigate("/productSection"); // Navigate to your desired route
  };

  return (
    <section
      className="hero"
      style={{
        // 👇 The backgroundImage style is now removed from here
        backgroundPositionY: `${offsetY * 0.3}px`,
      }}
    >
      <div
        className="hero-overlay"
        style={{
          transform: `translateY(${offsetY * -0.3}px)`,
        }}
      >
        <div
          className="hero-content"
          style={{
            transform: `translateY(${offsetY * -0.2}px)`,
          }}
        >
          <h1>VendPrime - Smart Vending, Simplified</h1>
          <p>
            24/7 access to snacks, beverages, and essentials. Hassle-free setup,
            stocking, and maintenance – we handle everything.
          </p>
          {/* 👇 4. Call the handler on button click */}
          <button className="btn-primary" onClick={handleLearnMoreClick}>
            Learn More..
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;