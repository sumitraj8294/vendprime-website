// src/components/HeroSection.js

import React, { useEffect, useState } from "react";
// ❌ We no longer need useNavigate for this button
// import { useNavigate } from "react-router-dom"; 
import "../styles/hero.css";
import ContactModal from "./ContactModal"; // 👈 1. Import the new modal component

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // 👈 2. State to manage modal

  // This effect for the parallax scroll remains unchanged
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <> {/* 👈 Use a Fragment to wrap section and modal */}
      <section
        className="hero"
        style={{
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
            {/* 👇 3. Update the button text, size (in CSS), and onClick handler */}
            <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
              Contact Now
            </button>
          </div>
        </div>
      </section>

      {/* 👇 4. Render the modal component */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default HeroSection;