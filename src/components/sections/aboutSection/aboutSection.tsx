import React, { useEffect, useRef } from 'react';
import './aboutSection.css';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('hs-abs-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hs-abs-wrapper" ref={sectionRef}>
      <div className="hs-abs-container">
        {/* Top Badge */}
        <div className="hs-abs-badge-box">
          <span className="hs-abs-badge-text">About Us</span>
        </div>

        {/* Main Heading - Playfair Display */}
        <h2 className="hs-abs-heading">Your Trusted Real Estate Partner</h2>

        {/* Description - Inter 500 */}
        <p className="hs-abs-description">
          Heritage Shelter is a trusted real estate company dedicated to helping clients find quality homes 
          and investment opportunities. We focus on transparency, reliability, and delivering the best property 
          solutions for individuals, families, and investors. 
          Whether you are looking to buy, rent, or invest, our team is here to guide you every step of the way.
        </p>

        {/* Action Button - No Shadows */}
        <div className="hs-abs-action-area">
          <a href="/about" className="hs-abs-btn">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;