// src/components/MachineFeatures.jsx

import React from 'react';

import '../styles/Services.css'; 

// 1. Import your PNG logos from the assets folder
import touchscreenIcon from '../assets/services/touchscreen.png';
import paymentsIcon from '../assets/services/payments.png';
import storageIcon from '../assets/services/storage.png';
import capacityIcon from '../assets/services/capacity.png';
import inventoryIcon from '../assets/services/inventory.png';
import serviceIcon from '../assets/services/service.png';

const Services = () => {
  // 2. Update the features array to use the imported logos
  const features = [
    { icon: touchscreenIcon, text: 'Touchscreen Based' },
    { icon: paymentsIcon, text: 'Supports UPI and Card payments' },
    { icon: storageIcon, text: 'Refrigerated and ambient storage' },
    { icon: capacityIcon, text: 'Capacity: 200—500+ items depending on model' },
    { icon: inventoryIcon, text: 'Real-time inventory tracking' },
    { icon: serviceIcon, text: 'Fully remote-monitored and serviced by our team' }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <h2 className="section-title">WHAT OUR MACHINES OFFER?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              {/* 3. Use an <img> tag to display the logo */}
              <div className="feature-icon">
                <img src={feature.icon} alt={feature.text} />
              </div>
              <p className="feature-text">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;