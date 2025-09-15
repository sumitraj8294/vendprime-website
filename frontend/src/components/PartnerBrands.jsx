// PartnerBrands.jsx
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
  laysLogo,
  britaniaLogo,
  bikajiLogo,
  haldiramLogo,
  beyondSnackLogo,
  lotteLogo,
  nestleLogo,
  pringlesLogo,
  superyouLogo,
  cadburyLogo,
  motherDairyLogo,
  cokeLogo,
  mtrLogo,
  mamaearthLogo,
  sofyLogo,
  realLogo,
  bingoLogo,
  redbullLogo,
  drOetkarLogo,
  bisleriLogo,
  kurkureLogo,
  cornitosLogo,
  doritosLogo,
  bikanoLogo,
  lahoriLogo,
  epigamiaLogo,
  craxLogo,
  saffolaLogo,
  monsterLogo,
  paperboatLogo,
  nescafeLogo,
  momLogo,
  maggiLogo,
];

// Reusable LogoItem component
const LogoItem = ({ src, alt }) => (
  <div className="brand-logo-item">
    <img src={src} alt={alt} draggable={false} />
  </div>
);

// CONFIG
const COPIES = 2; // use 2 identical copies for transform-based looping
const SPEED_PX_PER_SEC = 60; // autoplay speed in pixels per second (tweakable)
const WHEEL_PAUSE_DURATION = 2000; // ms to resume after wheel

const PartnerBrands = () => {
  const scrollerRef = useRef(null);
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const restartTimerRef = useRef(null);
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startOffsetRef = useRef(0);
  const oneCopyWidthRef = useRef(0);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const track = trackRef.current;
    if (!scroller || !track) return;

    // Ensure images are not draggable and wait for load to measure widths
    const imgs = Array.from(track.querySelectorAll("img"));
    imgs.forEach((img) => img.setAttribute("draggable", "false"));

    let loaded = 0;
    const onAssetLoaded = () => {
      loaded += 1;
      if (loaded === imgs.length) initLoop();
    };

    if (imgs.length === 0) {
      initLoop();
    } else {
      imgs.forEach((img) => {
        if (img.complete) onAssetLoaded();
        else {
          img.addEventListener("load", onAssetLoaded, { once: true });
          img.addEventListener("error", onAssetLoaded, { once: true });
        }
      });
    }

    function getTranslateX(el) {
      const style = window.getComputedStyle(el).transform;
      if (!style || style === "none") return 0;
      const m = style.match(/matrix\(([-0-9.,e ]+)\)/);
      if (m) {
        const parts = m[1].split(",").map((p) => parseFloat(p.trim()));
        return parts[4] || 0;
      }
      const m3 = style.match(/matrix3d\(([-0-9.,e ]+)\)/);
      if (m3) {
        const parts = m3[1].split(",").map((p) => parseFloat(p.trim()));
        return parts[12] || 0;
      }
      return 0;
    }

    function normalizeOffset(x, width) {
      // normalize x into range [-width, 0)
      const w = width;
      if (w === 0) return 0;
      const mod = ((x % w) + w) % w; // [0, w)
      return mod - w; // [-w, 0)
    }

    function initLoop() {
      // measure one copy width
      const totalWidth = track.scrollWidth;
      const oneCopy = totalWidth / COPIES;
      oneCopyWidthRef.current = oneCopy;

      const durationMs = (oneCopy / SPEED_PX_PER_SEC) * 1000;

      // We'll prefer the Web Animations API (more reliable on Safari for transforms).
      if (typeof track.animate === "function") {
        // create an animation that moves the track left by one copy width
        if (animRef.current) animRef.current.cancel();
        animRef.current = track.animate(
          [
            { transform: "translateX(0px)" },
            { transform: `translateX(-${oneCopy}px)` },
          ],
          {
            duration: Math.max(1000, durationMs), // avoid too small durations
            iterations: Infinity,
            easing: "linear",
          }
        );

        // ensure it starts
        animRef.current.play();

        // Pointer (mouse/touch) interaction using Pointer Events when available
        const onPointerDown = (e) => {
          draggingRef.current = true;
          scrollerRef.current.style.cursor = "grabbing";
        
          startXRef.current = e.clientX ?? (e.touches && e.touches[0].clientX) ?? 0;
        
          // cancel animation fully (Safari safe)
          if (animRef.current) {
            try {
              animRef.current.cancel();
            } catch {}
          }
        
          const cur = getTranslateX(track);
          startOffsetRef.current = cur;
          track.style.transform = `translateX(${cur}px)`;
        
          // lock pointer to this element
          track.setPointerCapture(e.pointerId);
        };
        const onPointerMove = (e) => {
          if (!draggingRef.current) return;
          const x = e.clientX ?? (e.touches && e.touches[0].clientX) ?? 0;
          const dx = x - startXRef.current;
          const newOffset = startOffsetRef.current + dx;
          track.style.transform = `translateX(${newOffset}px)`;
        };
        const endDrag = (e) => {
          if (!draggingRef.current) return;
          draggingRef.current = false;
          scrollerRef.current.style.cursor = "grab";
        
          const cur = getTranslateX(track);
          const norm = normalizeOffset(cur, oneCopyWidthRef.current);
          track.style.transform = `translateX(${norm}px)`;
        
          // restart animation from new position
          const duration = (oneCopyWidthRef.current / SPEED_PX_PER_SEC) * 1000;
          animRef.current = track.animate(
            [
              { transform: `translateX(${norm}px)` },
              { transform: `translateX(${norm - oneCopyWidthRef.current}px)` },
            ],
            {
              duration: Math.max(1000, duration),
              iterations: Infinity,
              easing: "linear",
            }
          );
        };

        // Wheel interaction: apply immediate transform change and resume after timeout
        const onWheel = (e) => {
          e.preventDefault();
          try {
            animRef.current.pause();
          } catch (err) {}
          const cur = getTranslateX(track);
          // prefer horizontal delta if available else vertical
          const delta = e.deltaX || e.deltaY || 0;
          const newOffset = cur - delta; // move in same direction as wheel
          const norm = normalizeOffset(newOffset, oneCopy);
          track.style.transform = `translateX(${norm}px)`;

          if (restartTimerRef.current) clearTimeout(restartTimerRef.current);
          restartTimerRef.current = setTimeout(() => {
            // resume animation at the correct phase
            const progress = (-norm / oneCopy) % 1;
            const duration = animRef.current.effect.getTiming().duration;
            try {
              animRef.current.currentTime = progress * duration;
              track.style.transform = "";
              animRef.current.play();
            } catch (err) {
              // ignore and restart
              animRef.current.cancel();
              animRef.current = track.animate(
                [
                  { transform: "translateX(0px)" },
                  { transform: `translateX(-${oneCopy}px)` },
                ],
                {
                  duration: Math.max(1000, durationMs),
                  iterations: Infinity,
                  easing: "linear",
                }
              );
              animRef.current.play();
            }
          }, WHEEL_PAUSE_DURATION);
        };

        if (window.PointerEvent) {
          scroller.addEventListener("pointerdown", onPointerDown, { passive: true });
          window.addEventListener("pointermove", onPointerMove, { passive: true });
          window.addEventListener("pointerup", endDrag);
          window.addEventListener("pointercancel", endDrag);
        } else {
          // fallback older browsers
          scroller.addEventListener("mousedown", onPointerDown, { passive: true });
          window.addEventListener("mousemove", onPointerMove, { passive: true });
          window.addEventListener("mouseup", endDrag);

          scroller.addEventListener("touchstart", (e) => onPointerDown(e.touches[0]), { passive: true });
          scroller.addEventListener("touchmove", (e) => onPointerMove(e.touches[0]), { passive: true });
          scroller.addEventListener("touchend", endDrag);
        }

        scroller.addEventListener("wheel", onWheel, { passive: false });

        // cleanup
        const cleanup = () => {
          try {
            animRef.current.cancel();
          } catch (e) {}
          scroller.removeEventListener("wheel", onWheel);
          if (window.PointerEvent) {
            track.addEventListener("pointerdown", onPointerDown);
            track.addEventListener("pointermove", onPointerMove);
            track.addEventListener("pointerup", endDrag);
            track.addEventListener("pointercancel", endDrag);
          } else {
            // fallback for mouse/touch
            track.addEventListener("mousedown", onPointerDown);
            track.addEventListener("mousemove", onPointerMove);
            track.addEventListener("mouseup", endDrag);
          
            track.addEventListener("touchstart", (e) => onPointerDown(e.touches[0]));
            track.addEventListener("touchmove", (e) => onPointerMove(e.touches[0]));
            track.addEventListener("touchend", endDrag);
          }
          
          if (restartTimerRef.current) clearTimeout(restartTimerRef.current);
        };

        // attach cleanup to effect return
        // but we don't have access to return here; instead store and call later
        cleanupRef.cleanup = cleanup;
      } else {
        // Fallback: rAF-based scrolling (used when Web Animations API isn't available)
        let running = true;
        let last = performance.now();

        const onWheel = (e) => {
          // pause on wheel
          isInteracting = true;
          if (restartTimerRef.current) clearTimeout(restartTimerRef.current);
          restartTimerRef.current = setTimeout(() => {
            isInteracting = false;
          }, WHEEL_PAUSE_DURATION);
        };

        let isInteracting = false;

        const loop = (t) => {
          const dt = t - last;
          last = t;
          if (!isInteracting) {
            // fallback moves using transform for smoother motion
            const move = (SPEED_PX_PER_SEC * dt) / 1000;
            const cur = getTranslateX(track);
            let next = cur - move;
            const width = oneCopyWidthRef.current || track.scrollWidth / COPIES;
            next = normalizeOffset(next, width);
            track.style.transform = `translateX(${next}px)`;
          }
          if (running) requestAnimationFrame(loop);
        };

        // start after measuring width
        requestAnimationFrame(() => {
          oneCopyWidthRef.current = track.scrollWidth / COPIES;
          requestAnimationFrame(loop);
        });

        scroller.addEventListener("wheel", onWheel, { passive: false });

        // cleanup fn
        cleanupRef.cleanup = () => {
          running = false;
          scroller.removeEventListener("wheel", onWheel);
          if (restartTimerRef.current) clearTimeout(restartTimerRef.current);
        };
      }
    }

    // run cleanup on unmount
    return () => {
      if (cleanupRef.cleanup) cleanupRef.cleanup();
      if (restartTimerRef.current) clearTimeout(restartTimerRef.current);
    };
  }, []);

  // small ref object to store cleanup from inner scope
  const cleanupRef = useRef({ cleanup: null }).current;
  

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
        <div className="partner-brands-track" ref={trackRef}>
          {Array(COPIES)
            .fill(0)
            .map((_, copyIndex) =>
              brandLogos.map((logo, index) => (
                <LogoItem src={logo} alt={`brand-logo-${index}`} key={`${copyIndex}-${index}`} />
              ))
            )}
        </div>
      </div>
    </div>
  );
};

export default PartnerBrands;

