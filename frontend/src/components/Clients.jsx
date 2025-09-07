import React from 'react';
import '../styles/Clients.css';

// 1. Import each logo file
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

// 2. Update the array to use the imported variables
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
  { name: 'ICCS', logoUrl: iccsLogo },
  { name: 'Star', logoUrl: starLogo },
 
];

const Clients = () => {
  return (
    <section id="clients" className="clients-section">
      <div className="container">
        <h2 className="section-title">Trusted By Leading Organizations</h2>
        <p className="section-subtitle">
          We are proud to partner with a diverse range of clients across various sectors.
        </p>
        <div className="logos-grid">
          {clients.map((client) => (
            <div className="logo-item" key={client.name}>
              {/* 3. The img tag now receives the correct image URL */}
              <img src={client.logoUrl} alt={`${client.name} logo`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;