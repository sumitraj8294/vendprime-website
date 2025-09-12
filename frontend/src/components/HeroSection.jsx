// src/components/HeroSection.js

import React, { useState } from "react";
import "../styles/hero.css";
import ContactModal from "./ContactModal";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            {/* The h2 and span now use classes from the CSS file */}
            <h2 style={{ fontSize: "3.5rem", fontWeight: "bold", letterSpacing: "3px", color: "white" }}>
  VEND
  <span style={{ backgroundColor: "#00796b", color: "white", padding: "0 0.5rem", borderRadius: "5px" }}>
    PRIME
  </span>
</h2>


            <p className="hero-tagline">TOUCH•TAP•TAKE</p>

            <p className="hero-description">
              24/7 access to snacks, beverages, and essentials. Hassle-free setup,
              stocking, and maintenance, we handle everything.
            </p>

            <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
              Contact Now
            </button>
          </div>
        </div>
      </section>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default HeroSection;