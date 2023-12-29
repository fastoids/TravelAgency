
import React from 'react';
import './footer.css'; // Import your CSS file
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Travel Pakistan</h2>
          <p>"Explore. Dream. Discover."</p>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <p>123 Travel Street, Adventure City</p>
          </div>
          <div className="contact-item">
            <FaPhone className="icon" />
            <p>+1 (123) 456-7890</p>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <p>info@traveladventures.com</p>
          </div>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Travel Pakistan. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
