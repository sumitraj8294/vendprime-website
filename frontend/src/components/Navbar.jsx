import { useState } from "react";
import "./../styles/navbar.css";

function Navbar({ setPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (page) => {
    setPage(page);
    setIsOpen(false); // close menu on mobile after click
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo" onClick={() => handleNavClick("home")}>
  <img src="/logo.png" alt="VendPrime Logo" />
  <span className="logo-text">
    Vend<span className="highlight">Prime</span>
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
        <button onClick={() => handleNavClick("about")}>About</button>
        <button onClick={() => handleNavClick("services")}>Services</button>
        <button onClick={() => handleNavClick("technology")}>Technology</button>
        <button onClick={() => handleNavClick("clients")}>Clients</button>
        <button onClick={() => handleNavClick("contact")}>Contact</button>
        <button className="navbar-cta">Get Started</button>
      </div>
    </nav>
  );
}

export default Navbar;
