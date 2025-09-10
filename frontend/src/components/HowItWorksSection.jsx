import React, { useEffect, useRef, useState } from "react";
import "../styles/HowItWorksSection.css";

import step1 from "../assets/icons/location.png";
import step2 from "../assets/icons/machine.png";
import step3 from "../assets/icons/stocking.png";
import step4 from "../assets/icons/maintain.png";

const HowItWorksSection = () => {
  // --- TEXT CHANGES ARE HERE ---
  // The descriptions now emphasize a "Done-For-You" service model.
  const steps = [
    {
      title: "Tell Us Where",
      desc: "Simply choose the perfect high-traffic spot at your office, gym, or facility for the machine.",
      img: step1,
    },
    {
      title: "Machine Installation",
      desc: "Our expert team delivers and installs a state-of-the-art vending machine at your location.",
      img: step2,
    },
    {
      title: "Smart Restocking",
      desc: "We monitor stock levels remotely and keep the machine filled with a tailored selection of popular snacks and drinks.",
      img: step3,
    },
    {
      title: "Ongoing Care & Support",
      desc: "Enjoy complete peace of mind. We handle all servicing and technical support to ensure it's always running perfectly.",
      img: step4,
    },
  ];

  const sectionRef = useRef(null);
  const stepRefs = useRef([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const totalScrollable = Math.max(rect.height - viewportH, 1);
      const passed = Math.min(Math.max(-rect.top, 0), totalScrollable);
      const pct = passed / totalScrollable;
      setProgress(pct);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

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
        <h2>YOUR HASSLE-FREE VENDING SOLUTION</h2>
        <p className="howitworks-subtext">
          From installation to daily operations – we handle everything for you.
        </p>

        <div className="timeline-wrap">
          <div className="timeline">
            <div
              className="timeline-progress"
              style={{ height: `${progress * 100}%` }}
            />
          </div>

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