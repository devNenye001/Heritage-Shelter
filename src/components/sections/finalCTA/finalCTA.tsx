import React, { useEffect, useRef } from 'react';
import './finalCTA.css';

const FinalCTA: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('hs-fcta-reveal');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hs-fcta-wrapper" ref={containerRef}>
      <div className="hs-fcta-inner">
        {/* Playfair Display for heading */}
        <h2 className="hs-fcta-heading">Ready to Find Your Next Property?</h2>
        
        {/* DM Sans for subtext */}
        <p className="hs-fcta-subtext">
          Let us help you find the perfect home or investment property today. <br className="hs-fcta-br" />
          Chat with an agent directly on WhatsApp to get started.
        </p>

        {/* Action Area */}
        <div className="hs-fcta-action">
          <a href="/contact" className="hs-fcta-button">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;