import React, { useEffect, useRef, useState } from "react";
import "../styles/HowItWorksSection.css";

import step1 from "../assets/icons/location.png";
import step2 from "../assets/icons/machine.png";
import step3 from "../assets/icons/stocking.png";
import step4 from "../assets/icons/maintain.png";

const HowItWorksSection = () => {
  const steps = [
    {
      title: "Choose Location",
      desc: "Select the perfect spot at your office, school, or facility.",
      img: step1,
    },
    {
      title: "Machine Setup",
      desc: "We install modern vending machines with seamless integration.",
      img: step2,
    },
    {
      title: "Stocking",
      desc: "Regular refills with snacks, drinks, and essentials.",
      img: step3,
    },
    {
      title: "Maintenance",
      desc: "24/7 support and regular servicing for smooth operation.",
      img: step4,
    },
  ];

  const sectionRef = useRef(null);
  const stepRefs = useRef([]);
  const [progress, setProgress] = useState(0); // 0 → 1

  // Fill timeline based on scroll position within this section
  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportH = window.innerHeight;

      // Amount of section scrolled
      const totalScrollable = Math.max(rect.height - viewportH, 1);
      const passed = Math.min(Math.max(-rect.top, 0), totalScrollable);
      const pct = passed / totalScrollable;
      setProgress(pct);
    };

    onScroll(); // initialize
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Reveal steps one by one as they enter the viewport
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      {
        root: null,
        threshold: 0.25,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    stepRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="howitworks" ref={sectionRef}>
      <div className="howitworks-container">
        <h2>How It Works</h2>
        <p className="howitworks-subtext">
          From setup to servicing – we handle everything.
        </p>

        <div className="timeline-wrap">
          {/* Timeline track + progress */}
          <div className="timeline">
            <div
              className="timeline-progress"
              style={{ height: `${progress * 100}%` }}
            />
          </div>

          {/* Steps */}
          <div className="steps">
            {steps.map((step, i) => (
              <article
                className="step-card"
                key={i}
                ref={(el) => (stepRefs.current[i] = el)}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span className="dot" aria-hidden="true" />
                <div className="step-media">
                  <img src={step.img} alt="" />
                </div>
                <div className="step-body">
                  <h3>
                    <span className="step-index">{i + 1}.</span> {step.title}
                  </h3>
                  <p>{step.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
