// src/pages/Home.jsx

import { useRef, useEffect } from "react";
import AboutSection from "../components/AboutSection";
import BenefitsSection from "../components/BenefitsSection";
import HeroSection from "../components/HeroSection";
import HowItWorksSection from "../components/HowItWorksSection";
import ProductsSection from "../components/ProductsSection";
import Services from "../components/Services";
import Clients from "../components/Clients";
const Contact = () => <div style={{height: '50vh', background: '#d1d1d1', padding: '20px'}}><h2>Contact Us</h2></div>;
const Feedback = () => <div style={{height: '50vh', background: '#c2c2c2', padding: '20px'}}><h2>Feedback</h2></div>;
// -----------------------------------------------------------------

function Home({ scrollToSection }) {
  // 1. Create a ref for every section linked in the navbar
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const clientsRef = useRef(null);
  const contactRef = useRef(null);
  const feedbackRef = useRef(null);

  // 2. Add useEffect to listen for prop changes and scroll
  useEffect(() => {
    const sectionRefs = {
      home: homeRef,
      about: aboutRef,
      services: servicesRef,
      clients: clientsRef,
      contact: contactRef,
      feedback: feedbackRef,
    };

    const targetRef = sectionRefs[scrollToSection];

    if (targetRef && targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetTop, // Scroll to the top of the element
        behavior: "smooth",
      });
    }
  }, [scrollToSection]); // This effect runs every time scrollToSection changes

  return (
    // 3. Attach the refs to a wrapper div around each section component
    <div>
      <div ref={homeRef}>
        <HeroSection />
      </div>
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <div ref={clientsRef}>
        <Clients />
      </div>
      <div>
        <ProductsSection />
      </div>
      <div>
        <HowItWorksSection />
      </div>
      <div>
        <BenefitsSection />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <div ref={feedbackRef}>
        <Feedback />
      </div>
    </div>
  );
}

export default Home;