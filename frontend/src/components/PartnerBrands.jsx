import React, { useEffect, useRef } from "react";
import "../styles/PartnerBrands.css";

// --- Logo Imports ---
import laysLogo from "../assets/logos/brands/lays.png";
import britaniaLogo from "../assets/logos/brands/britania.png";
import bikajiLogo from "../assets/logos/brands/bikaji.png";
import haldiramLogo from "../assets/logos/brands/haldiram.png";
import beyondSnackLogo from "../assets/logos/brands/beyond-snack.png";
import lotteLogo from "../assets/logos/brands/lotte.png";
import nestleLogo from "../assets/logos/brands/nestle.png";
import pringlesLogo from "../assets/logos/brands/pringles.png";
import superyouLogo from "../assets/logos/brands/superyou.png";
import cadburyLogo from "../assets/logos/brands/cadbury.png";
import motherDairyLogo from "../assets/logos/brands/mother-dairy.png";
import cokeLogo from "../assets/logos/brands/coke.png";
import mtrLogo from "../assets/logos/brands/mtr.png";
import mamaearthLogo from "../assets/logos/brands/mamaearth.png";
import sofyLogo from "../assets/logos/brands/sofy.png";
import realLogo from "../assets/logos/brands/real.png";
import bingoLogo from "../assets/logos/brands/bingo.png";
import redbullLogo from "../assets/logos/brands/redbull.png";
import drOetkarLogo from "../assets/logos/brands/dr-oetkar.png";
import bisleriLogo from "../assets/logos/brands/bisleri.png";
import kurkureLogo from "../assets/logos/brands/kurkure.png";
import cornitosLogo from "../assets/logos/brands/cornitos.png";
import doritosLogo from "../assets/logos/brands/doritos.png";
import bikanoLogo from "../assets/logos/brands/bikano.png";
import lahoriLogo from "../assets/logos/brands/lahori.png";
import epigamiaLogo from "../assets/logos/brands/epigamia.png";
import craxLogo from "../assets/logos/brands/crax.png";
import saffolaLogo from "../assets/logos/brands/saffola.png";
import monsterLogo from "../assets/logos/brands/monster.png";
import paperboatLogo from "../assets/logos/brands/paperboat.png";
import nescafeLogo from "../assets/logos/brands/nescafe.png";
import momLogo from "../assets/logos/brands/mom.png";
import maggiLogo from "../assets/logos/brands/maggi.png";

// Array of all imported logos
const brandLogos = [
  laysLogo, britaniaLogo, bikajiLogo, haldiramLogo, beyondSnackLogo, lotteLogo,
  nestleLogo, pringlesLogo, superyouLogo, cadburyLogo, motherDairyLogo, cokeLogo,
  mtrLogo, mamaearthLogo, sofyLogo, realLogo, bingoLogo, redbullLogo,
  drOetkarLogo, bisleriLogo, kurkureLogo, cornitosLogo, doritosLogo, bikanoLogo,
  lahoriLogo, epigamiaLogo, craxLogo, saffolaLogo, monsterLogo, paperboatLogo,
  nescafeLogo, momLogo, maggiLogo
];

// Reusable LogoItem component
const LogoItem = ({ src, alt }) => (
  <div className="brand-logo-item">
    <img src={src} alt={alt} />
  </div>
);

const PartnerBrands = () => {
  const scrollerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const restartTimerRef = useRef(null);
  const isInteractingRef = useRef(false);

  // You can adjust these values
  const SCROLL_SPEED = 0.99; // Speed of the auto-scroll (pixels per frame)
  const WHEEL_PAUSE_DURATION = 2000; // 2 seconds delay ONLY for wheel/trackpad

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // The main animation loop
    const animateScroll = () => {
      if (!isInteractingRef.current) {
        if (scroller.scrollLeft >= scroller.scrollWidth / 2) {
          scroller.scrollLeft = 0;
        } else {
          scroller.scrollLeft += SCROLL_SPEED;
        }
      }
      animationFrameRef.current = requestAnimationFrame(animateScroll);
    };

    // --- NEW LOGIC: Separate Handlers ---

    // 1. For Drag/Touch Start: Pause animation immediately
    const handleDragStart = () => {
      isInteractingRef.current = true;
      if (restartTimerRef.current) {
        clearTimeout(restartTimerRef.current);
      }
    };

    // 2. For Drag/Touch End: Resume animation immediately
    const handleDragEnd = () => {
      isInteractingRef.current = false;
      if (restartTimerRef.current) {
        clearTimeout(restartTimerRef.current);
      }
    };

    // 3. For Wheel: Use a timer (debounce) since wheel has no "end" event
    const handleWheel = () => {
      isInteractingRef.current = true;
      if (restartTimerRef.current) {
        clearTimeout(restartTimerRef.current);
      }
      restartTimerRef.current = setTimeout(() => {
        isInteractingRef.current = false;
      }, WHEEL_PAUSE_DURATION);
    };

    // Start the animation loop
    animationFrameRef.current = requestAnimationFrame(animateScroll);

    // Add event listeners for all types of user interaction
    scroller.addEventListener("mousedown", handleDragStart);
    scroller.addEventListener("touchstart", handleDragStart, { passive: true });
    
    scroller.addEventListener("mouseup", handleDragEnd);
    scroller.addEventListener("touchend", handleDragEnd);
    scroller.addEventListener("mouseleave", handleDragEnd); // Also resume if mouse leaves area while dragging

    scroller.addEventListener("wheel", handleWheel, { passive: true });

    // Cleanup function when the component unmounts
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (restartTimerRef.current) {
        clearTimeout(restartTimerRef.current);
      }
      scroller.removeEventListener("mousedown", handleDragStart);
      scroller.removeEventListener("touchstart", handleDragStart);
      scroller.removeEventListener("mouseup", handleDragEnd);
      scroller.removeEventListener("touchend", handleDragEnd);
      scroller.removeEventListener("mouseleave", handleDragEnd);
      scroller.removeEventListener("wheel", handleWheel);
    };
  }, [SCROLL_SPEED, WHEEL_PAUSE_DURATION]);

  return (
    <div className="partner-brands-container">
      
      <div className="container">
        <h2 className="section-title">
          <span style={{ color: "#2d3436", fontWeight: "700", fontFamily: "Cinzel, serif" }}>
            FEATURING
          </span>{" "}
          <span style={{ color: "#00b894", fontWeight: "700", fontFamily: "Cinzel, serif" }}>
            POPULAR&nbsp;BRANDS
          </span>
        </h2>
      </div>

      <div className="partner-brands-scroller" ref={scrollerRef}>
        <div className="partner-brands-track">
          {/* Render the list of logos TWICE for the seamless loop */}
          {brandLogos.map((logo, index) => (
            <LogoItem src={logo} alt={`brand-logo-${index}`} key={`a-${index}`} />
          ))}
          {brandLogos.map((logo, index) => (
            <LogoItem src={logo} alt={`brand-logo-${index}`} key={`b-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerBrands;