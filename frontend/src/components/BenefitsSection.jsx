import React from "react";
import "../styles/BenefitsSection.css";

import benefit1 from "../assets/icons/convenience.png";
import benefit2 from "../assets/icons/variety.png";
import benefit3 from "../assets/icons/maintain.png";
import benefit4 from "../assets/icons/cashless.png";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Ultimate Convenience",
      desc: "Snacks, beverages & essentials available 24/7 right where you need them.",
      img: benefit1,
    },
    {
      title: "Wide Variety",
      desc: "From chips and chocolates to stationery and hygiene products – all in one machine.",
      img: benefit2,
    },
    {
      title: "Reliable Support",
      desc: "Quick restocking, regular maintenance, and dedicated customer care.",
      img: benefit3,
    },
    {
      title: "Smart & Cashless",
      desc: "Seamless digital payments with UPI, cards, and wallets.",
      img: benefit4,
    },
  ];

  return (
    <section className="benefits">
      <div className="benefits-container">
        <h2>Why Choose Us?</h2>
        <p className="benefits-subtext">
          Discover the advantages of partnering with our smart vending solutions.
        </p>

        <div className="benefits-grid">
          {benefits.map((b, index) => (
            <div key={index} className="benefit-card slide-up">
              <img src={b.img} alt={b.title} className="benefit-icon" />
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
