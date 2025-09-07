import React, { useState, useRef } from 'react'; // 👈 1. Import useState and useRef
import '../styles/Clients.css';

// --- Logo Imports (no change here) ---
import kpmgLogo from '../assets/logos/kpmg.png';
import jiohotstarLogo from '../assets/logos/jiohotstar.png';
import dentalKartLogo from '../assets/logos/dental.png';
import starLogo from '../assets/logos/star.png';
import medantaLogo from '../assets/logos/medanta.png';
import concentrixLogo from '../assets/logos/concentrix.png';
import rbiLogo from '../assets/logos/rbi.png';
import ntpcLogo from '../assets/logos/ntpc.png';
import iitDelhiLogo from '../assets/logos/iitdelhi.png';
import amityLogo from '../assets/logos/amity.png';
import platinaLogo from '../assets/logos/platina.png';
import iccsLogo from '../assets/logos/iccs.png';
import oyoLogo from '../assets/logos/oyo.png';

const clients = [
  { name: 'KPMG', logoUrl: kpmgLogo },
  { name: 'Jio Hotstar', logoUrl: jiohotstarLogo },
  { name: 'Dental Kart', logoUrl: dentalKartLogo },
  { name: 'Oyo', logoUrl: oyoLogo },
  { name: 'RBI', logoUrl: rbiLogo },
  { name: 'Concentrix', logoUrl: concentrixLogo },
  { name: 'NTPC', logoUrl: ntpcLogo },
  { name: 'IIT Delhi', logoUrl: iitDelhiLogo },
  { name: 'Medanta Hospitals', logoUrl: medantaLogo },
  { name: 'Amity University', logoUrl: amityLogo },
  { name: 'Platina heights', logoUrl: platinaLogo },
  { name :'ICCS', logoUrl: iccsLogo },
  { name: 'Star', logoUrl: starLogo },
];

const LOGO_WIDTH = 180; // Define logo width as a constant

const Clients = () => {
  const extendedClients = [...clients, ...clients];
  const [position, setPosition] = useState(0); // 👈 2. State to track the scroll position
  const trackRef = useRef(null); // 👈 3. Ref to access the track element

  const handleMove = (direction) => {
    const trackWidth = trackRef.current.scrollWidth;
    const singleSetWidth = trackWidth / 2;

    let newPosition;
    if (direction === 'next') {
      newPosition = position - LOGO_WIDTH;
      // If we scroll past the end of the first set, reset to the beginning
      if (Math.abs(newPosition) >= singleSetWidth) {
        newPosition = 0;
      }
    } else { // 'prev'
      newPosition = position + LOGO_WIDTH;
      // If we scroll past the beginning, loop to the end
      if (newPosition > 0) {
        newPosition = -(singleSetWidth - LOGO_WIDTH);
      }
    }
    setPosition(newPosition);
  };


  return (
    <section id="clients" className="clients-section">
      <div className="container">
        <h2 className="section-title">Trusted By Leading Organizations</h2>
        <p className="section-subtitle">
          We are proud to partner with a diverse range of clients across various sectors.
        </p>
      </div>

      <div className="client-scroller">
        {/* 👇 4. Apply the ref and the dynamic style for transform */}
        <div 
          className="logos-track" 
          ref={trackRef}
          style={{ transform: `translateX(${position}px)` }}
        >
          {extendedClients.map((client, index) => (
            <div className="logo-item" key={`${client.name}-${index}`}>
              <img src={client.logoUrl} alt={`${client.name} logo`} />
            </div>
          ))}
        </div>
        
        {/* 👇 5. Add the onClick event handlers to the buttons */}
        <button 
          className="scroller-btn prev-btn" 
          aria-label="Previous logos"
          onClick={() => handleMove('prev')}
        >&lt;</button>
        <button 
          className="scroller-btn next-btn" 
          aria-label="Next logos"
          onClick={() => handleMove('next')}
        >&gt;</button>
      </div>
    </section>
  );
};

export default Clients;