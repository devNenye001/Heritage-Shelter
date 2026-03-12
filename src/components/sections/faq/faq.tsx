import React, { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import './faq.css';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqData: FAQItem[] = [
    {
      question: "What services does Heritage Shelter offer?",
      answer: "A: Heritage Shelter provides complete building and construction solutions including land sales, building construction, infrastructure development, equipment rentals, general building merchandise, and maintenance and renovation services."
    },
    {
      question: "Are your lands and properties verified?",
      answer: "A: Yes, all our properties and lands undergo rigorous legal verification. We ensure all titles and documents are authentic and secure before they are listed for our clients."
    },
    {
      question: "Do you handle both residential and commercial projects?",
      answer: "A: Absolutely. We have an expert team capable of handling large-scale commercial developments as well as private residential homes with the same level of precision and quality."
    },
    {
      question: "Can I rent construction equipment without hiring your services?",
      answer: "A: Yes, we offer standalone equipment rental services. You can lease high-quality construction tools and machinery for your own projects independently."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="hs-qna-wrapper">
      <div className="hs-qna-container">
        
        {/* Left Side: Header */}
        <div className="hs-qna-intro">
          <h2 className="hs-qna-title">Frequently Asked Questions</h2>
          <p className="hs-qna-desc">
            We’ve answered some common questions to help you understand our services, 
            processes, and how we work. If you need more information, our team is 
            always ready to assist.
          </p>
        </div>

        {/* Right Side: Accordion */}
        <div className="hs-qna-list">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`hs-qna-item ${activeIndex === index ? 'hs-qna-active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="hs-qna-question-row">
                <span className="hs-qna-question">{item.question}</span>
                <div className="hs-qna-toggle-icon">
                  {activeIndex === index ? <HiChevronUp /> : <HiChevronDown />}
                </div>
              </div>
              
              <div className="hs-qna-answer-box">
                <p className="hs-qna-answer">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;