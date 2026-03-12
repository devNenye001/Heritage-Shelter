import React, { useEffect, useRef } from "react";

import "./about.css";
import FinalCTA from "../../components/sections/finalCTA/finalCTA";
import FAQ from "../../components/sections/faq/faq";
import ServicesSection from "../../components/sections/serviceSection/serviceSection";
import WhyChooseUs from "../../components/sections/why-choose-us/why-choose-us";

const AboutPage: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll reveal animation logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("hs-ab-visible");
          }
        });
      },
      { threshold: 0.15 },
    );

    const animatedItems = document.querySelectorAll(".hs-ab-animate-item");
    animatedItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="hs-ab-root" ref={scrollRef}>
      {/* 1. About Hero Section */}
      <section className="hs-abs-hero-wrapper hs-ab-animate-item">
        <div className="hs-abs-hero-container">
          {/* Header & Description aligned as per design */}
          <div className="hs-abs-hero-header">
            <h1 className="hs-abs-hero-title">About Us</h1>
            <p className="hs-abs-hero-description">
              Heritage Shelter is a trusted real estate company committed to
              helping individuals, families, and investors find the right
              property solutions. We specialize in connecting clients with
              quality homes and valuable real estate opportunities in Abuja and
              across Nigeria. Our mission is to make the property search and
              acquisition process simple, transparent, and reliable for every
              client we serve.
            </p>
          </div>

          {/* Video Player - Zero Box Shadow */}
          <div className="hs-abs-hero-video-box">
            <video
              className="hs-abs-hero-video"
              poster="/video-thumbnail.jpg" // Optional: helps load faster
              controls
              muted
              autoPlay
              loop
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Custom Play Overlay - Optional matches the image icon */}
            {!window.navigator.userAgent.includes("Mobile") && (
              <div className="hs-abs-hero-play-overlay"></div>
            )}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <ServicesSection />

      {/* 3. Certifications & Compliance */}
      <section
        className="hs-cert-section hs-ab-animate-item"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="hs-cert-container">
          {/* Centered Heading and Subtext */}
          <div className="hs-cert-header">
            <h2 className="hs-cert-main-title">Certifications & Compliance</h2>
            <p className="hs-cert-intro-text">
              Heritage Shelter operates in full compliance with industry
              regulations and recognized professional standards. Our
              certifications reflect our commitment to quality workmanship,
              safety, and ethical business practices. All our operations,
              properties, and construction projects are handled according to
              approved guidelines, ensuring reliability, transparency, and
              long-term value for our clients.
            </p>
          </div>

          {/* Centered Certificate Image */}
          <div className="hs-cert-image-wrapper">
            <img
              src="/certificate.svg"
              alt="Heritage Shelter CAC Certificate"
              className="hs-cert-image"
            />
          </div>
        </div>
      </section>

      {/* Existing sections provided */}

      <FAQ />
      <FinalCTA />
    </div>
  );
};

export default AboutPage;
