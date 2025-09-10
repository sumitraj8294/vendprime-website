// PartnerBrands.jsx - MODIFIED

import React from 'react';
import '../styles/PartnerBrands.css';

// (Import all your brand logos here as before)
// ...
import laysLogo from '../assets/logos/brands/lays.png';
import britaniaLogo from '../assets/logos/brands/britania.png';
import bikajiLogo from '../assets/logos/brands/bikaji.png';
import haldiramLogo from '../assets/logos/brands/haldiram.png';
import beyondSnackLogo from '../assets/logos/brands/beyond-snack.png';
import lotteLogo from '../assets/logos/brands/lotte.png';
import nestleLogo from '../assets/logos/brands/nestle.png';
import pringlesLogo from '../assets/logos/brands/pringles.png';
import superyouLogo from '../assets/logos/brands/superyou.png';
import cadburyLogo from '../assets/logos/brands/cadbury.png';
import motherDairyLogo from '../assets/logos/brands/mother-dairy.png';
import cokeLogo from '../assets/logos/brands/coke.png';
import mtrLogo from '../assets/logos/brands/mtr.png';
import mamaearthLogo from '../assets/logos/brands/mamaearth.png';
import sofyLogo from '../assets/logos/brands/sofy.png';
import realLogo from '../assets/logos/brands/real.png';
import bingoLogo from '../assets/logos/brands/bingo.png';
import redbullLogo from '../assets/logos/brands/redbull.png';
import drOetkarLogo from '../assets/logos/brands/dr-oetkar.png';
import bisleriLogo from '../assets/logos/brands/bisleri.png';


const brands = [
  // (Your brands array remains the same)
  // ...
  { name: 'Lays', logoUrl: laysLogo },
  { name: 'Britania', logoUrl: britaniaLogo },
  { name: 'Bikaji', logoUrl: bikajiLogo },
  { name: 'Haldiram', logoUrl: haldiramLogo },
  { name: 'Beyond Snack', logoUrl: beyondSnackLogo },
  { name: 'Lotte', logoUrl: lotteLogo },
  { name: 'Nestle', logoUrl: nestleLogo },
  { name: 'Pringles', logoUrl: pringlesLogo },
  { name: 'Superyou', logoUrl: superyouLogo },
  { name: 'Cadbury', logoUrl: cadburyLogo },
  { name: 'Mother Dairy', logoUrl: motherDairyLogo },
  { name: 'Coke', logoUrl: cokeLogo },
  { name: 'MTR', logoUrl: mtrLogo },
  { name: 'Mama Earth', logoUrl: mamaearthLogo },
  { name: 'Sofy', logoUrl: sofyLogo },
  { name: 'Real', logoUrl: realLogo },
  { name: 'Bingo', logoUrl: bingoLogo },
  { name: 'Red Bull', logoUrl: redbullLogo },
  { name: 'Dr Oetkar', logoUrl: drOetkarLogo },
  { name: 'Bisleri', logoUrl: bisleriLogo },
];

const PartnerBrands = () => {
  // We combine the brands array with itself to create a duplicated list
  const extendedBrands = [...brands, ...brands];

  return (
    <section className="brands-section">
      <div className="container">
      <h2 className="section-title">
  <span style={{ color: "#2d3436", fontWeight: "700" }}>
    FEATURING 
  </span>{" "}
  <span
    style={{
      backgroundColor: "#00b894",
      color: "#ffffff",
      fontWeight: "700",
      padding: "0 8px",
      borderRadius: "6px",
    }}
  >
    POPULAR &nbsp;BRANDS
  </span>
</h2>
        
        {/* This wrapper is used to hide the overflow and create the fade effect */}
        <div className="brand-scroller">
          <div className="brand-grid">
            {/* We map over the new, extended array */}
            {extendedBrands.map((brand, index) => (
              <div className="brand-card" key={index}>
                <img src={brand.logoUrl} alt={`${brand.name} logo`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBrands;