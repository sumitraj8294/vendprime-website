import React from "react";
import "../styles/BenefitsSection.css";

import benefit1 from "../assets/icons/convenience.png";
import benefit2 from "../assets/icons/variety.png";
import benefit3 from "../assets/icons/maintain.png";
import benefit4 from "../assets/icons/cashless.png";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Maximum Ease",
      desc: "Get snacks, drinks, and essentials anytime, right where you are.",
      img: benefit1,
    },
    {
      title: "Wide Product Variety",
      desc: "Enjoy chips, chocolates, stationery, and hygiene products all in one.",
      img: benefit2,
    },
    {
      title: "Reliable Assistance",
      desc: "Fast restocking, regular maintenance, and friendly customer support.",
      img: benefit3,
    },
    {
      title: "Cashless Payments",
      desc: "Pay easily using UPI, cards, or digital wallets without any hassle.",
      img: benefit4,
    },
  ];

  return (
    <section className="benefits">
      <div className="benefits-container">
        <h2>WHY CHOOSE US?</h2>

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
