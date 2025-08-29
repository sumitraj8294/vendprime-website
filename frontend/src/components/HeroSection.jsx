import React, { useEffect, useState } from "react";
import "../styles/hero.css";
import heroImage from "../assets/images/hero.png";

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundPositionY: `${offsetY * 0.3}px`, // background moves slower
      }}
    >
      <div
        className="hero-overlay"
        style={{
          transform: `translateY(${offsetY * -0.3}px)`, // overlay slight motion upward
        }}
      >
        <div
          className="hero-content"
          style={{
            transform: `translateY(${offsetY * -0.2}px)`, // text moves upward faster
          }}
        >
          <h1>VendPrime - Smart Vending, Simplified</h1>
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
