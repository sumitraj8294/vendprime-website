// src/components/Navbar.jsx

import { useState } from "react";
import "./../styles/navbar.css"; // Make sure you have this CSS file

function Navbar({ setPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (page) => {
    setPage(page);
    setIsOpen(false); // Close menu on mobile after click
  };

  return (
    <nav className="navbar" id="home">
      {/* Logo */}
      <div className="navbar-logo" onClick={() => handleNavClick("home")}>
        {/* Make sure you have logo.png in your public folder */}
        <img src="/logo.png" alt="VendPrime Logo" />
        <span className="logo-text">
          VEND<span className="highlight">PRIME</span>
        </span>
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links */}
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <button onClick={() => handleNavClick("home")}>Home</button>
        <button onClick={() => handleNavClick("about")}>About Us</button>
        <button onClick={() => handleNavClick("services")}>Services</button>
        <button onClick={() => handleNavClick("clients")}>Clients</button>
        <button onClick={() => handleNavClick("contact")}>Contact</button>
        <button onClick={() => handleNavClick("feedback")}>Feedback</button>
      </div>
    </nav>
  );
}

export default Navbar;