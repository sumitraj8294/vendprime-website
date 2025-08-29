import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo + Brand */}
        <div className="footer-logo">
          <img src="/logo.png" alt="VendPrime Logo" />
          <span className="logo-text">
            Vend<span className="highlight">Prime</span>
          </span>
          <p className="footer-tagline">Smart Vending Solutions for Everyone</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: support@vendprime.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Bengaluru, India</p>
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
