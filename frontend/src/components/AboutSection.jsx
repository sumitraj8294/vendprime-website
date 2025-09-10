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
          <h2>SMART VENDING AT MODERN SPACES</h2>
          <p>
            We provide state-of-the-art vending machines with a wide range of
            snacks and drinks, tailored to your workplace, schools, gyms, and
            public spaces. Our machines are fully automated, cashless, and
            available 24/7.
          </p>
          <div className="about-highlights">
            <div className="highlight-card">
              <h3>⚡ Cashless Payments</h3>
              <p>Seamless transactions with UPI, cards, and mobile wallets.</p>
            </div>
            <div className="highlight-card">
              <h3>🥗 Healthy Options</h3>
              <p>Choose from a wide variety of snacks & drinks for everyone.</p>
            </div>
            <div className="highlight-card">
              <h3>🕒 24/7 Availability</h3>
              <p>Always accessible, anytime you need a quick snack or drink.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
