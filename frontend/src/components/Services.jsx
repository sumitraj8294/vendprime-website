// src/components/MachineFeatures.jsx

import React from 'react';
import { FaBeer } from "react-icons/fa";

import '../styles/Services.css'; // The custom CSS will go here

// Import desired icons from a library like react-icons
import { FaQrcode, FaCreditCard, FaRegSnowflake, FaBoxOpen, FaChartLine, FaWrench } from 'react-icons/fa';

const MachineFeatures = () => {
  // Array for the features - easy to add, remove, or change items
  const features = [
    { icon: <FaQrcode />, text: 'Touchscreen or QR-based selection' },
    { icon: <FaCreditCard />, text: 'Supports UPI, Card, and Cash payments' },
    { icon: <FaRegSnowflake />, text: 'Refrigerated and ambient storage' },
    { icon: <FaBoxOpen />, text: 'Capacity: 200—500+ items depending on model' },
    { icon: <FaChartLine />, text: 'Real-time inventory tracking' },
    { icon: <FaWrench />, text: 'Fully remote-monitored and serviced by our team' }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <h2 className="section-title">WHAT OUR MACHINES OFFER?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                {feature.icon}
              </div>
              <p className="feature-text">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MachineFeatures;