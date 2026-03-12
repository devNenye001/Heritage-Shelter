import React from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import './footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand & Logo Section */}
        <div className="footer-brand">
          <img 
            src="/logo2.jpeg" 
            alt="Heritage Shelter" 
            className="footer-logo" 
          />
          <p className="footer-tagline">
            Helping you find the perfect home and investment property with trust, comfort, and reliability.
          </p>
        </div>

        {/* Footer Link Columns */}
        <div className="footer-links-grid">
          {/* Company Column */}
          <div className="footer-col">
            <h4 className="footer-heading">COMPANY</h4>
            <ul className="footer-list">
              <li><a href="/properties">Properties</a></li>
              <li><a href="/about">About us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Properties Column - All link to /properties */}
          <div className="footer-col">
            <h4 className="footer-heading">PROPERTIES</h4>
            <ul className="footer-list">
              <li><a href="/properties">Buy a House</a></li>
              <li><a href="/properties">Rent a House</a></li>
              <li><a href="/properties">Sell a House</a></li>
            </ul>
          </div>

          {/* Contact Column with Icons */}
          <div className="footer-col">
            <h4 className="footer-heading">CONTACT</h4>
            <ul className="footer-list contact-list">
              <li>
                <a href="tel:07072047171">
                  <FiPhone className="contact-icon" /> Call Us: 07072047171
                </a>
              </li>
              <li>
                <a href="mailto:Info@heritageshelter.com">
                  <FiMail className="contact-icon" /> Email: Info@heritageshelter.com
                </a>
              </li>
              <li>
                <div className="contact-item">
                  <FiMapPin className="contact-icon" /> Suite C01 2X Mall 3rd Avenue Gwarimpa
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>Copyright © {currentYear} Heritage Shelter</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;