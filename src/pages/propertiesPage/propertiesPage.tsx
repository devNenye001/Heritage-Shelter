import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './propertiesPage.css';
import PropertyCard from '../../components/propertyCard/propertyCard';

const PropertiesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const allProperties = [
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

  // Logic to filter properties based on search query
  const filteredProperties = allProperties.filter((prop) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      prop.title.toLowerCase().includes(searchLower) ||
      prop.location.toLowerCase().includes(searchLower) ||
      prop.price.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="hs-pg-wrapper">
      <div className="hs-pg-container">
        {/* Header Section */}
        <header className="hs-pg-header">
          <h1 className="hs-pg-title">Properties</h1>
          
          <div className="hs-pg-search-box">
            <div className="hs-pg-input-wrapper">
              <FiSearch className="hs-pg-search-icon" />
              <input 
                type="text" 
                placeholder="Search Property name, address or price" 
                className="hs-pg-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {/* The button doesn't strictly need a click handler if filtering is real-time, 
                but it helps with the UI feel */}
            <button className="hs-pg-search-btn">Search</button>
          </div>
        </header>

        {/* Properties Grid */}
        <main className="hs-pg-grid">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((prop) => (
              <div key={prop.id} className="hs-pg-card-holder">
                <PropertyCard {...prop} />
              </div>
            ))
          ) : (
            <div className="hs-pg-no-results">
              <h3>No properties found matching "{searchQuery}"</h3>
              <p>Try searching for a different location or property type.</p>
              <button onClick={() => setSearchQuery('')} className="hs-pg-clear-btn">Clear Search</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default PropertiesPage;