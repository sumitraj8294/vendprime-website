// PartnerBrands.jsx - MODIFIED

import React, { useEffect, useRef } from 'react';
import '../styles/PartnerBrands.css';

// (Import all your brand logos here as before)
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
import kurkureLogo from '../assets/logos/brands/kurkure.png';
import cornitosLogo from '../assets/logos/brands/cornitos.png';
import doritosLogo from '../assets/logos/brands/doritos.png';
import bikanoLogo from '../assets/logos/brands/bikano.png';
import lahoriLogo from '../assets/logos/brands/lahori.png';
import epigamiaLogo from '../assets/logos/brands/epigamia.png';
import craxLogo from '../assets/logos/brands/crax.png';
import saffolaLogo from '../assets/logos/brands/saffola.png';
import monsterLogo from '../assets/logos/brands/monster.png';
import paperboatLogo from '../assets/logos/brands/paperboat.png';
import nescafeLogo from '../assets/logos/brands/nescafe.png';
import momLogo from '../assets/logos/brands/mom.png';
import maggiLogo from '../assets/logos/brands/maggi.png';
const brands = [
  // (Your brands array remains the same)
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
  { name: 'Kurkure', logoUrl: kurkureLogo },
  { name: 'Cornitos', logoUrl: cornitosLogo },
  { name: 'Doritos', logoUrl: doritosLogo },
  { name: 'Bikano', logoUrl: bikanoLogo },
  { name: 'Lahori', logoUrl: lahoriLogo },
  { name: 'Epigamia', logoUrl: epigamiaLogo },
  { name: 'Maggi', logoUrl: maggiLogo },
  { name: 'Crax', logoUrl: craxLogo },
  { name: 'Saffola', logoUrl: saffolaLogo },
  { name: 'Monster', logoUrl: monsterLogo },
  { name: 'PaperBoat', logoUrl: paperboatLogo },
  { name: 'Nescafe', logoUrl: nescafeLogo },
  { name: 'Mom', logoUrl: momLogo },
];

const PartnerBrands = () => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // 1. Check if animation is preferred
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // 2. Set the data-animated attribute to start the CSS animation
    scroller.setAttribute('data-animated', true);

    // 3. Duplicate the logos for a seamless loop
    const scrollerInner = scroller.querySelector('.scroller__inner');
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      // aria-hidden to prevent screen readers from reading duplicates
      duplicatedItem.setAttribute('aria-hidden', true); 
      scrollerInner.appendChild(duplicatedItem);
    });

  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <section className="brands-section">
      <div className="container">
      <h2 className="section-title">
          <span style={{ color: '#2d3436', fontWeight: '700' ,fontFamily: "Cinzel, serif"}}>
            FEATURING
          </span>{' '}
          <span
            style={{
              color: '#00b894',
              fontWeight: '700',
              fontFamily: "Cinzel, serif",
            }}
          >
            POPULAR&nbsp;BRANDS
          </span>
        </h2>
      </div>

      {/* The ref is attached to the main scroller container */}
      <div className="scroller" ref={scrollerRef}>
        <div className="scroller__inner">
          {brands.map((brand, index) => (
            <div className="brand-card" key={index}>
              <img src={brand.logoUrl} alt={`${brand.name} logo`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerBrands;