import React, { useEffect, useRef } from 'react';
import { MdOutlineVerifiedUser, MdOutlineConstruction, MdOutlineChatBubbleOutline } from 'react-icons/md';
import './why-choose-us.css';

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('h-shelter-wcu-reveal');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <MdOutlineVerifiedUser />,
      title: 'Trusted Listings',
      desc: 'We help you acquire secure, well-documented land in strategic locations.'
    },
    {
      icon: <MdOutlineConstruction />,
      title: 'Expert Guidance',
      desc: 'From planning to execution, we handle complete building projects.'
    },
    {
      icon: <MdOutlineChatBubbleOutline />,
      title: 'Easy Communication',
      desc: 'We maintain, upgrade, and restore buildings to top condition.'
    }
  ];

  return (
    <section className="h-shelter-wcu-section" ref={sectionRef}>
      <div className="h-shelter-wcu-container">
        
        {/* Left Content Side */}
        <div className="h-shelter-wcu-content">
          <div className="h-shelter-wcu-badge">Why Choose Us</div>
          <h2 className="h-shelter-wcu-main-title">Why Clients Choose <br /> Heritage Shelter</h2>
          
          <div className="h-shelter-wcu-list">
            {features.map((item, index) => (
              <div 
                className="h-shelter-wcu-item" 
                key={index}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="h-shelter-wcu-icon-box">
                  {item.icon}
                </div>
                <div className="h-shelter-wcu-text-box">
                  <h3 className="h-shelter-wcu-feature-title">{item.title}</h3>
                  <p className="h-shelter-wcu-feature-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Side */}
        <div className="h-shelter-wcu-graphic">
          <img 
            src="/why-choose-us.svg" 
            alt="Real estate showcase" 
            className="h-shelter-wcu-img" 
          />
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;