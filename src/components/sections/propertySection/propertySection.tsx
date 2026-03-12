import React from 'react';

import './propertySection.css';
import PropertyCard from '../../propertyCard/propertyCard';

const PropertySection: React.FC = () => {
  const dummyProperties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200',
      price: 'N300,000',
      title: 'Modern 4-Bedroom Duplex',
      location: 'Enugu, Nigeria',
      statusTag: 'For Rent' as const,
      amenities: { beds: 3, baths: 2, size: '1,400 sq ft' }
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200',
      price: 'N450,000',
      title: 'Luxury Estate Villa',
      location: 'Abuja, Nigeria',
      statusTag: 'For Sale' as const,
      amenities: { beds: 5, baths: 4, size: '3,200 sq ft' }
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200',
      price: 'N1,200,000',
      title: 'Penthouse Apartment',
      location: 'Lagos, Nigeria',
      statusTag: 'For Sale' as const,
      amenities: { beds: 4, baths: 4, size: '2,800 sq ft' }
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200',
      price: 'N250,000',
      title: 'Cozy Family Cottage',
      location: 'Ibadan, Nigeria',
      statusTag: 'For Rent' as const,
      amenities: { beds: 3, baths: 2, size: '1,200 sq ft' }
    },
  ];

  return (
    <section className="hs-prop-section">
      <div className="hs-prop-header">
        <div className="hs-prop-title-area">
          <span className="hs-prop-badge">Featured Properties</span>
          <h2 className="hs-prop-main-heading">Explore Our <br /> Featured Listings</h2>
        </div>
        <div className="hs-prop-desc-area">
          <p className="hs-prop-text">
            Browse some of our carefully selected properties available for rent and sale. 
            Each property is verified and located in prime areas to ensure comfort, value, and security.
          </p>
        </div>
      </div>

      <div className="hs-prop-scroll-container">
        <div className="hs-prop-grid-flow">
          {dummyProperties.map((prop) => (
            <div key={prop.id} className="hs-prop-item-wrapper">
              <PropertyCard {...prop} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertySection;