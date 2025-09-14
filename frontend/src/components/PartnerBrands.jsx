import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/PartnerBrands.css";

// ✅ Import all brand logos
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

const brands = [
  { name: "Lays", logoUrl: laysLogo },
  { name: "Britania", logoUrl: britaniaLogo },
  { name: "Bikaji", logoUrl: bikajiLogo },
  { name: "Haldiram", logoUrl: haldiramLogo },
  { name: "Beyond Snack", logoUrl: beyondSnackLogo },
  { name: "Lotte", logoUrl: lotteLogo },
  { name: "Nestle", logoUrl: nestleLogo },
  { name: "Pringles", logoUrl: pringlesLogo },
  { name: "Superyou", logoUrl: superyouLogo },
  { name: "Cadbury", logoUrl: cadburyLogo },
  { name: "Mother Dairy", logoUrl: motherDairyLogo },
  { name: "Coke", logoUrl: cokeLogo },
  { name: "MTR", logoUrl: mtrLogo },
  { name: "Mama Earth", logoUrl: mamaearthLogo },
  { name: "Sofy", logoUrl: sofyLogo },
  { name: "Real", logoUrl: realLogo },
  { name: "Bingo", logoUrl: bingoLogo },
  { name: "Red Bull", logoUrl: redbullLogo },
  { name: "Dr Oetkar", logoUrl: drOetkarLogo },
  { name: "Bisleri", logoUrl: bisleriLogo },
  { name: "Kurkure", logoUrl: kurkureLogo },
  { name: "Cornitos", logoUrl: cornitosLogo },
  { name: "Doritos", logoUrl: doritosLogo },
  { name: "Bikano", logoUrl: bikanoLogo },
  { name: "Lahori", logoUrl: lahoriLogo },
  { name: "Epigamia", logoUrl: epigamiaLogo },
  { name: "Maggi", logoUrl: maggiLogo },
  { name: "Crax", logoUrl: craxLogo },
  { name: "Saffola", logoUrl: saffolaLogo },
  { name: "Monster", logoUrl: monsterLogo },
  { name: "PaperBoat", logoUrl: paperboatLogo },
  { name: "Nescafe", logoUrl: nescafeLogo },
  { name: "Mom", logoUrl: momLogo },
];

const PartnerBrands = () => {
  return (
    <section className="brands-section">
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

      <div className="brands-swiper-wrapper">
  <Swiper
    modules={[Autoplay, Navigation]}
    navigation={{
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }}
    autoplay={{
      delay: 0,
      disableOnInteraction: false,
    }}
    speed={4000}
    loop={true}
    slidesPerView={5}
    spaceBetween={60}
    centeredSlides={true}
    breakpoints={{
      0: { slidesPerView: 3, spaceBetween: 20 },
      768: { slidesPerView: 4, spaceBetween: 40 },
      1024: { slidesPerView: 5, spaceBetween: 60 },
    }}
    className="brands-swiper"
  >
    {brands.map((brand, index) => (
      <SwiperSlide key={index} className="brand-card">
        <img src={brand.logoUrl} alt={brand.name} />
      </SwiperSlide>
    ))}
  </Swiper>

  {/* ✅ Custom arrows outside */}
  <div className="swiper-button-prev"></div>
  <div className="swiper-button-next"></div>
</div>


    </section>
  );
};

export default PartnerBrands;
