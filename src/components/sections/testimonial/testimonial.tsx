import React from 'react';
import './testimonial.css';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      id: 1,
      text: "“Heritage Shelter made the entire process of finding my apartment very easy. Their team was professional and responsive, and I was able to move into my new home within days.”",
      author: "Sarah Books",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: 2,
      text: "“I was looking for a reliable real estate company to help me invest in property. Heritage Shelter guided me through every step and helped me secure a great deal.”",
      author: "Ngozi E., Lagos",
      img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: 3,
      text: "“Excellent service and very trustworthy agents. They answered all my questions and helped me find a property that matched my budget perfectly.”",
      author: "David O., Port Harcourt",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: 4,
      text: "“Excellent service and very trustworthy agents. They answered all my questions and helped me find a property that matched my budget perfectly.”",
      author: "Hassan Aliyu",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
    }
  ];

  return (
    <section className="hs-rev-section">
      <div className="hs-rev-header">
        <span className="hs-rev-badge">Testimonials</span>
        <h2 className="hs-rev-main-title">What Our Clients Say</h2>
      </div>

      <div className="hs-rev-scroll-wrapper">
        <div className="hs-rev-grid">
          {reviews.map((rev, index) => (
            <div 
              className="hs-rev-card" 
              key={rev.id}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <p className="hs-rev-quote">{rev.text}</p>
              <div className="hs-rev-user">
                <img src={rev.img} alt={rev.author} className="hs-rev-avatar" />
                <span className="hs-rev-name">— {rev.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;