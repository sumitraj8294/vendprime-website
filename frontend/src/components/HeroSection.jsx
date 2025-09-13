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
            <h2>
              VEND
              <span className="highlight">
                PRIME
              </span>
            </h2>

            <p className="hero-tagline">TOUCH • TAP • TAKE</p>

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