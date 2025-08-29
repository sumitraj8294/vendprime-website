import React from "react";
import "../styles/ProductsSection.css";

// Import category images
import snacksImg from "../assets/images/snacks/snacks.png";
import stationeryImg from "../assets/images/snacks/snacks.png";
import hygieneImg from "../assets/images/snacks/snacks.png";
import healthImg from "../assets/images/snacks/snacks.png";

const ProductsSection = () => {
  const categories = [
    {
      title: "Snacks & Beverages",
      desc: [
        "Chips, chocolates, biscuits, namkeen",
        "Soft drinks, juices, energy drinks, protein drinks",
        "Mineral water, tetra packs",
      ],
      img: snacksImg,
    },
    {
      title: "Stationery Essentials",
      desc: [
        "Pens, pencils, notebooks, erasers",
        "ID holders, sticky notes, markers",
      ],
      img: stationeryImg,
    },
    {
      title: "Hygiene Products",
      desc: [
        "Sanitary napkins, tissues, face masks, sanitizers",
        "Mouth fresheners, wet wipes",
      ],
      img: hygieneImg,
    },
    {
      title: "Health & Relief",
      desc: [
        "ORS, band-aids, over-the-counter items (nonprescription)",
      ],
      img: healthImg,
    },
  ];

  return (
    <section className="products">
      <div className="products-container">
        <h2>Product Categories We Stock</h2>
        <p className="products-subtext">
          Everything you need, right at your fingertips.
        </p>
        <div className="products-grid">
          {categories.map((cat, index) => (
            <div
              className="product-card"
              key={index}
            >
              <div className="product-img-container">
                <img src={cat.img} alt={cat.title} />
              </div>
              <div className="product-content">
                <h3>{cat.title}</h3>
                <ul>
                  {cat.desc.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;