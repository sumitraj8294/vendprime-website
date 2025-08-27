import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About VendPrime</h2>
          <p>
            VendPrime provides a complete, hands-off vending solution for
            businesses and institutions. From installation to maintenance, we
            handle everything. Our machines accept UPI, card, and cash, ensuring
            seamless transactions for everyone.
          </p>
          <p>
            With real-time inventory tracking and financial reporting, our
            clients enjoy full transparency and peace of mind. All you need to
            do is provide the space — we take care of the rest.
          </p>
        </div>
        <div className="about-image">
          <img src="../assets/about.jpg" alt="About VendPrime" />
        </div>
      </div>
    </section>
  );
};

export default About;
