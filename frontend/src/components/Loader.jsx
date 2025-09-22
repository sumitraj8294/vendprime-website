import React from "react";
import "../styles/Loader.css";
import logo from "../assets/logo.png";
import item from "../assets/item.png";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="vending-machine">
        <img src={logo} alt="VendPrime Logo" className="machine-logo" />
        <img src={item} alt="Item" className="dispensed-item" />
        <img src={item} alt="Item" className="dispensed-item delay" />
      </div>
      {/* Loading text */}
      <div className="loader-text">Loading VendPrime...</div>
    </div>
  );
};

export default Loader;
