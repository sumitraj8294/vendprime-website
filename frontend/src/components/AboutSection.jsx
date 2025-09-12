import React from "react";
import "../styles/AboutSection.css";
import vendingMachineImage from "../assets/images/machines/vendingMachine.png";

const AboutSection = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-image">
          <img
            src={vendingMachineImage}
            alt="Vending Machine"
          />
        </div>
        <div className="about-content">
          <h2>SMART VENDING AT YOUR SPACE</h2>
          <p>
          We bring you modern vending machines stocked with a wide variety of snacks and drinks, perfect for workplaces, schools, gyms, and public spaces. Our machines are easy to use, completely cashless and always available - 24/7.
          </p>
          <div className="about-highlights">
            <div className="highlight-card">
              <h3>⚡ Cashless Payments</h3>
              <p>Seamless transactions with UPI, cards, and mobile wallets.</p>
            </div>
            <div className="highlight-card">
              <h3>🥗 Healthy Options</h3>
              <p>Healthy snacks and fresh foods, anytime you need them.</p>
            </div>
            <div className="highlight-card">
              <h3>🕒 24/7 Availability</h3>
              <p>Always accessible, anytime you need a quick snack or drink.</p>
            </div>
            <div className="highlight-card">
  <h3>⭐ Trusted Brands</h3>
  <p>Only the snacks and drinks you already know and love.</p>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
