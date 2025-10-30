import React from 'react';
import '../styles/Clients.css';

// --- Logos imported in the specified order ---
// import kpmgLogo from '../assets/logos/kpmg.png';
import jiohotstarLogo from '../assets/logos/jiohotstar.png';
import dentalKartLogo from '../assets/logos/dental.png';
// import oyoLogo from '../assets/logos/oyo.png';
import alkemLogo from '../assets/logos/alkem.png';
import rbiLogo from '../assets/logos/rbi.png';
import concentrixLogo from '../assets/logos/concentrix.png';
import ntpcLogo from '../assets/logos/ntpc.png';
import iitDelhiLogo from '../assets/logos/iitdelhi.png';
import medantaLogo from '../assets/logos/medanta.png';
import amityLogo from '../assets/logos/amity.png';
import platinaLogo from '../assets/logos/platina.png';
import iccsLogo from '../assets/logos/iccs.png';
import starLogo from '../assets/logos/star.png';

// --- Client data array in the specified order ---
const clients = [
  // { name: 'KPMG', logoUrl: kpmgLogo },
  { name: 'Jio Hotstar', logoUrl: jiohotstarLogo },
  { name: 'Dental Kart', logoUrl: dentalKartLogo },
  // { name: 'Oyo', logoUrl: oyoLogo },
  { name: 'Alkem Laboratories', logoUrl: alkemLogo },
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
      <h2 className="section-title">
  <span style={{ color: "#2d3436", fontWeight: "700", fontFamily: "Cinzel, serif"}}>
    SUCCESSFULLY
  </span>{" "}
  <span
    style={{
      color: "#00b894",
  fontWeight: 700,
  fontFamily: "Cinzel, serif",
    }}
  >
    VENDING&nbsp;AT...
  </span>
</h2>

        <div className="client-grid">
          {clients.map((client) => (
            <div className="client-card" key={client.name}>
              <img src={client.logoUrl} alt={`${client.name} logo`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

