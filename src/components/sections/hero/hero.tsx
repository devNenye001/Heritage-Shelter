import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Text Content Area */}
        <div className="hero-text-content">
          <h1 className="hero-title">
            Find Your Perfect Property <br />
            With <span className="highlight-blue">Heritage Shelter</span>
          </h1>
          
          <p className="hero-subtitle">
            We help individuals and families find the best homes and real <br className="desktop-only" /> 
            estate investments in Abuja and across Nigeria.
          </p>

          <a href="/properties" className="hero-cta">
            View Properties
            <FiArrowRight className="cta-icon" />
          </a>
        </div>

        {/* Hero Image Area */}
        <div className="hero-image-container">
          <img 
            src="/hero.svg" 
            alt="Real estate development" 
            className="hero-main-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;