// src/components/Footer.jsx
import "../styles/footer.css";

function Footer({ setPage }) {
  const handleNavClick = (page) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo + Brand */}
        <div className="footer-logo" onClick={() => handleNavClick("home")}>
          <img src="/logo.png" alt="VendPrime Logo" />
          <span className="logo-text-footer">
            VEND<span className="highlight">PRIME</span>
          </span>
          <p className="footer-tagline">TOUCH • TAP • TAKE</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><span onClick={() => handleNavClick("home")} className="footer-link">Home</span></li>
            <li><span onClick={() => handleNavClick("about")} className="footer-link">About Us</span></li>
            <li><span onClick={() => handleNavClick("services")} className="footer-link">Services</span></li>
            <li><span onClick={() => handleNavClick("clients")} className="footer-link">Clients</span></li>
            <li><span onClick={() => handleNavClick("contact")} className="footer-link">Contact</span></li>
            <li><span onClick={() => handleNavClick("feedback")} className="footer-link">Feedback</span></li>
          </ul>
        </div>

        {/* Social Media Links */}
        {/* <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          </div>
        </div> */}

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: vendprime1@gmail.com</p>
          <p>Phone:+9189498 00657,+918003875282</p>
          <p>
            Address: G2, GROUND FLOOR, EAGLE RESIDENCE, PLOT NO. G4, PATH NO. 6, VIJAYBARI, SIKAR ROAD, JAIPUR, RAJASTHAN - 302039. INDIA
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} VendPrime. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
