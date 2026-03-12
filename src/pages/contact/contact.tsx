import React from 'react';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import './contact.css';

const Contact: React.FC = () => {
  return (
    <div className="hs-ctc-main-wrapper">
      <div className="hs-ctc-inner-container">
        {/* Page Title */}
        <h1 className="hs-ctc-page-title">Contact</h1>

        <div className="hs-ctc-grid-layout">
          {/* Left Side: Contact Info */}
          <div className="hs-ctc-info-side">
            
            <div className="hs-ctc-item animate-hs-fade">
              <div className="hs-ctc-icon-box">
                <HiOutlineLocationMarker />
              </div>
              <div className="hs-ctc-text-box">
                <h3 className="hs-ctc-label">Head Office</h3>
                <p className="hs-ctc-detail">Suite C01 2X Mall 3rd Avenue Gwarimpa</p>
              </div>
            </div>

            <div className="hs-ctc-item animate-hs-fade" style={{ animationDelay: '0.2s' }}>
              <div className="hs-ctc-icon-box">
                <HiOutlineMail />
              </div>
              <div className="hs-ctc-text-box">
                <h3 className="hs-ctc-label">Email</h3>
                <p className="hs-ctc-detail">Info@heritageshelter.com</p>
              </div>
            </div>

            <div className="hs-ctc-item animate-hs-fade" style={{ animationDelay: '0.4s' }}>
              <div className="hs-ctc-icon-box">
                <HiOutlinePhone />
              </div>
              <div className="hs-ctc-text-box">
                <h3 className="hs-ctc-label">Phone Number</h3>
                <p className="hs-ctc-detail">07072047171</p>
              </div>
            </div>

          </div>

          {/* Right Side: Map */}
          <div className="hs-ctc-map-side animate-hs-slide">
            <div className="hs-ctc-map-placeholder">
              {/* Replace src with your actual Google Maps Embed link */}
              <iframe 
                title="Heritage Shelter Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.84597405103!2d7.334415589139269!3d9.033100643194514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b8697e191!2sGwarinpa%2C%20Abuja!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;