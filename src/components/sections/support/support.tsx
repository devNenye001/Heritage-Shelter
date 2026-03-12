import React from 'react';
import { MdEmail, MdPhone, MdQuestionAnswer } from 'react-icons/md';
import { HiUserCircle } from "react-icons/hi";
import './support.css';

const Support: React.FC = () => {
  return (
    <section className="support-section__container">
      <div className="support-section__content-area">
        <div className="support-section__content">
          <h2 className="support-section__main-heading">Chat With an Agent</h2>
          <p className="support-section__description">
            Have questions about a property? Need help finding the right home?
Our agents are ready to assist you. Chat with us directly on WhatsApp for quick responses and personalized support.
          </p>
          <div className="support-section__contact-options">

            <ul className="support-section__contact-list">
              <li className="support-section__contact-item">
                <a href="mailto:support@heritageshelter.com" className="support-section__contact-link">
                  <MdEmail className="support-section__icon" />
                  <span className="support-section__text">support@heritageshelter.com</span>
                </a>
              </li>
              <li className="support-section__contact-item">
                <a href="tel:+23407072047171" className="support-section__contact-link">
                  <MdPhone className="support-section__icon" />
                  <span className="support-section__text">+234 (070) 7204 7171</span>
                </a>
              </li>
              <li className="support-section__contact-item">
                <a href="/faq" className="support-section__contact-link">
                  <MdQuestionAnswer className="support-section__icon" />
                  <span className="support-section__text">Visit Our FAQ for Quick Answers</span>
                </a>
              </li>
              <li className="support-section__contact-item">
                 <a href="https://wa.me/2347072047171" className="support-section__contact-link support-section__cta-button" target="_blank" rel="noopener noreferrer">
                    <HiUserCircle className="support-section__icon" />
                    Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="support-section__image-area">
        <div className="support-section__image-wrapper">
          <img src="/support.svg" alt="A person assisting a user with building support" className="support-section__main-image" />
        </div>
      </div>
    </section>
  );
};

export default Support;