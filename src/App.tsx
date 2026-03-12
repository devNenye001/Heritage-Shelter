import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';

// Page Components
import Home from './pages/home';
import ServicesSection from './components/sections/serviceSection/serviceSection';
import NotFound from './pages/notFound/notFound';
import ScrollToTop from './components/ScrollToTop';
import PropertiesPage from './pages/propertiesPage/propertiesPage';
import Contact from './pages/contact/contact';
import FAQ from './components/sections/faq/faq';
import AboutPage from './pages/about/about';
import PropertyDetail from './pages/propertyDetail/propertyDetail';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/properties/:id" element={<PropertyDetail/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/services" element={<ServicesSection />} />
                      <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;