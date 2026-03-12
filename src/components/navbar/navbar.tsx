import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <nav className="nav-container">
      {/* Top Bar - Deep Blue */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="info-item">
            <MdLocationOn className="top-icon" />
            <span>Head Office: Suite C01 2X Mall 3rd Avenue Gwarimpa</span>
          </div>
          <div className="info-item">
            <MdEmail className="top-icon" />
            <span>Email Address: Info@heritageshelter.com</span>
          </div>
          <div className="info-item">
            <MdPhone className="top-icon" />
            <span>Phone Number: 07072047171</span>
          </div>
        </div>
      </div>

      {/* Main Nav - White background, No Shadows */}
      <div className="main-nav">
        <div className="nav-wrapper">
          <div className="logo-box">
            <img src="/logo2.jpeg" alt="Heritage Shelter" className="nav-logo" />
          </div>

          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/properties">Properties</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About</a></li>
          </ul>

          <div className="nav-actions">
            <Link to="/contact">
              <button className="contact-btn desktop-only">Contact Us</button>
            </Link>
            <div className="hamburger" onClick={toggleMenu}>
              {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Slide Down Animation */}
      <div className={`mobile-overlay ${isOpen ? 'show' : ''}`}>
        <ul className="mobile-links">
          <li><a href="/" onClick={toggleMenu}>Home</a></li>
          <li><a href="/properties" onClick={toggleMenu}>Properties</a></li>
          <li><a href="/services" onClick={toggleMenu}>Services</a></li>
          <li><a href="/about" onClick={toggleMenu}>About</a></li>
          <li className="m-btn-row">
            <Link to="/contact">
              <button className="contact-btn">Contact Us</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;