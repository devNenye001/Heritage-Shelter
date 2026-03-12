import React from 'react';
import { 
  MdLandscape, 
  MdOutlineEngineering, 
  MdOutlineConstruction, 
  MdOutlineLocalMall, 
  MdOutlineHomeWork,
  MdOutlineHandyman 
} from 'react-icons/md';
import './serviceSection.css';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <MdLandscape />,
      title: 'Sales of Land',
      desc: 'Acquire secure and well-documented landed properties in choice locations.'
    },
    {
      icon: <MdOutlineEngineering />,
      title: 'Building Construction',
      desc: 'Professional building services from foundation to final structural finishing.'
    },
    {
      icon: <MdOutlineConstruction />,
      title: 'Infrastructure',
      desc: 'Expert development of roads, drainage, and essential site infrastructure.'
    },
    {
      icon: <MdOutlineHomeWork />,
      title: 'Rentals of Building Equipment',
      desc: 'High-quality machinery and tools available for your construction needs.'
    },
    {
      icon: <MdOutlineLocalMall />,
      title: 'General Merchandise',
      desc: 'Supplying premium building materials and essential trade goods.'
    },
    {
      icon: <MdOutlineHandyman />,
      title: 'Renovation of House',
      desc: 'Transforming and restoring existing structures to modern standards.'
    }
  ];

  return (
    <section className="heritage-svcs-wrapper">
      <div className="heritage-svcs-container">
        
        <div className="heritage-svcs-header">
          <h2 className="heritage-svcs-main-title">Our Services</h2>
        </div>

        <div className="heritage-svcs-grid">
          {services.map((service, index) => (
            <div 
              className="heritage-svcs-card" 
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="heritage-svcs-icon-box">
                {service.icon}
              </div>
              <h3 className="heritage-svcs-card-title">{service.title}</h3>
              <p className="heritage-svcs-card-desc">{service.desc}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ServicesSection;