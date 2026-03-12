import AboutSection from "../components/sections/aboutSection/aboutSection";
import FinalCTA from "../components/sections/finalCTA/finalCTA";
import Hero from "../components/sections/hero/hero";
import PropertySection from "../components/sections/propertySection/propertySection";
import ServicesSection from "../components/sections/serviceSection/serviceSection";
import Support from "../components/sections/support/support";
import Testimonials from "../components/sections/testimonial/testimonial";
import WhyChooseUs from "../components/sections/why-choose-us/why-choose-us";


const Home: React.FC = () => {
  return (
    <main className="home-page-wrapper">
      <Hero />
      <AboutSection />
      <PropertySection />
      <WhyChooseUs />
      <ServicesSection />
      <Testimonials />
      <Support />
      <FinalCTA />
    </main>
  );
};

export default Home;