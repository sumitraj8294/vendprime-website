// src/pages/Home.jsx
import { useRef, useEffect } from "react";
import AboutSection from "../components/AboutSection";
import BenefitsSection from "../components/BenefitsSection";
import HeroSection from "../components/HeroSection";
import HowItWorksSection from "../components/HowItWorksSection";
import ProductsSection from "../components/ProductsSection";
import Services from "../components/Services";
// import Clients from "../components/Clients";
import Contact from "../components/Contact";
import Feedback from "../components/Feedback";
import PartnerBrands from "../components/PartnerBrands";

function Home({ scrollToSection, setScrollToSection }) {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  // const clientsRef = useRef(null);
  const contactRef = useRef(null);
  const feedbackRef = useRef(null);

  useEffect(() => {
    const sectionRefs = {
      home: homeRef,
      about: aboutRef,
      services: servicesRef,
      // clients: clientsRef,
      contact: contactRef,
      feedback: feedbackRef,
    };

    const targetRef = sectionRefs[scrollToSection];

    if (targetRef && targetRef.current) {
      // scroll smoothly
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

      // clear the scroll target after animation (so clicking same link later still works)
      if (setScrollToSection) {
        const t = setTimeout(() => setScrollToSection(null), 600);
        return () => clearTimeout(t);
      }
    }
  }, [scrollToSection, setScrollToSection]);

  return (
    <div>
      <div ref={homeRef}>
        <HeroSection />
      </div>
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      {/* <div ref={clientsRef}>
        <Clients/>
      </div> */}
      
      <div>
        <ProductsSection />
      </div>
      <div>
        <PartnerBrands />
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
