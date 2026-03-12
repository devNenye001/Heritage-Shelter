
import { useParams, Link } from 'react-router-dom';
import { HiOutlineLocationMarker, HiOutlineArrowLeft } from 'react-icons/hi';

import './propertyDetail.css';

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Data set provided by user
  const properties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200',
      gallery: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=600', 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=600'],
      price: 'N300,000',
      title: 'Modern 4-Bedroom Duplex',
      location: 'Enugu, Nigeria',
      desc: 'A luxurious and modern 4-bedroom duplex built with high-quality materials and designed for comfort, safety, and style. Perfect for families or investors looking for a high-value property.',
      features: ['4 Spacious Bedrooms', '4 Modern Bathrooms', '2–3 Car Parking Spaces', 'Open-plan Living and Dining Areas', 'Contemporary Kitchen with Built-in Cabinets', 'Secure Compound with Gate and Fencing'],
      amenities: { beds: 3, baths: 2, size: '1,400 sq ft' }
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200',
      gallery: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600'],
      price: 'N450,000',
      title: 'Luxury Estate Villa',
      location: 'Abuja, Nigeria',
      desc: 'An exquisite villa located in the heart of Abuja, featuring premium finishes and state-of-the-art security systems.',
      features: ['Smart Home Integration', 'Private Swimming Pool', 'Gym Facility', 'Solar Power Backup'],
      amenities: { beds: 5, baths: 4, size: '3,200 sq ft' }
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200',
        price: 'N1,200,000',
        title: 'Penthouse Apartment',
        location: 'Lagos, Nigeria',
        desc: 'Breathtaking views of the Atlantic from this top-floor penthouse. Pure luxury living.',
        features: ['Private Elevator', 'Roof-top Garden', 'Full Concierge', 'Wrap-around Balcony'],
        amenities: { beds: 4, baths: 4, size: '2,800 sq ft' }
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200',
        price: 'N250,000',
        title: 'Cozy Family Cottage',
        location: 'Ibadan, Nigeria',
        desc: 'A quiet, serene environment perfect for a starting family or peaceful retirement.',
        features: ['Garden Space', 'Standard Kitchen', 'Stable Water Supply', 'Quiet Neighborhood'],
        amenities: { beds: 3, baths: 2, size: '1,200 sq ft' }
    }
  ];

  const property = properties.find(p => p.id === Number(id)) || properties[0];

  return (
    <div className="hs-det-wrapper">
      <div className="hs-det-container">
        {/* Back Link */}
        <Link to="/properties" className="hs-det-back">
          <HiOutlineArrowLeft /> Back to Properties
        </Link>

        {/* Top Media Grid */}
        <div className="hs-det-media-grid">
          <div className="hs-det-main-img-box">
            <img src={property.image} alt={property.title} className="hs-det-img" />
          </div>
          <div className="hs-det-gallery-box">
            {property.gallery?.map((g, i) => (
              <img key={i} src={g} alt="Interior" className="hs-det-gallery-img" />
            )) || (
                <>
                    <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=600" className="hs-det-gallery-img" />
                    <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=600" className="hs-det-gallery-img" />
                </>
            )}
          </div>
        </div>

        {/* Content Split */}
        <div className="hs-det-content-split">
          
          {/* Left: Info Area */}
          <div className="hs-det-info">
            <h1 className="hs-det-title">{property.title}</h1>
            <div className="hs-det-loc">
              <HiOutlineLocationMarker /> {property.location}
            </div>
            <h2 className="hs-det-price">{property.price}</h2>

            <p className="hs-det-description">{property.desc}</p>

            <div className="hs-det-features-section">
              <h3 className="hs-det-subheading">Key Features</h3>
              <ul className="hs-det-features-list">
                {property.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Sticky Contact Card */}
          <aside className="hs-det-sidebar">
            <div className="hs-det-contact-card">
              <h3 className="hs-det-card-title">Interested in this property?</h3>
              <div className="hs-det-agent-box">
                <img src="/support.svg" alt="Agent" className="hs-det-agent-img" />
              </div>
              <p className="hs-det-card-text">
                Contact Us today to schedule a viewing or request more information.
              </p>
              <button className="hs-det-contact-btn">Contact</button>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;