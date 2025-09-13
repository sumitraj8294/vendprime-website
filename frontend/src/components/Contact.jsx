import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a question or want to get started? We'd love to hear from you.
        </p>
        
        <div className="contact-grid">
          <div className="contact-details">
            <h3 className="details-title">Contact Information</h3>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div className="info-text">
                <h4>Address</h4>
                <p>G2,GROUND FLOOR,EAGLE RESIDENCE,PLOT NO.G4,PATH NO.6,VIJAYBARI,SIKAR ROAD,JAIPUR, RAJASTHAN-302039.INDIA</p>
              </div>
            </div>
            <div className="info-item">
              <FaPhoneAlt className="info-icon" />
              <div className="info-text">
                <h4>Phone</h4>
                <p>+91 89498 00657</p>
                <p>+91 80038 75282</p>
              </div>
            </div>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div className="info-text">
                <h4>Email</h4>
                <p>vendprime1@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contact-map">
            <iframe
  src="https://maps.google.com/maps?q=26.958221,75.767159&z=15&output=embed"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="VendPrime Location in Jaipur"
></iframe>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;