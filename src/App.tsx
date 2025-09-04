import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import About from './components/About';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import TermsOfService from './components/legal/TermsOfService';
import Guidelines from './components/legal/Guidelines';

function App() {
  const location = useLocation();

  // Smooth scroll to hash targets on the home route, accounting for fixed header
  useEffect(() => {
    const { hash, pathname } = location;
    if (pathname !== '/') return;
    if (!hash) return;

    const targetId = hash.replace('#', '');
    // Wait a tick to ensure home sections are rendered
    const timeout = window.setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        const headerEl = document.querySelector('header');
        const headerHeight = headerEl ? (headerEl as HTMLElement).getBoundingClientRect().height : 0;
        const y = el.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Stats />
            <Services />
            <Products />
            <About />
            <Testimonials />
            <Contact />
          </>
        } />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/guidelines" element={<Guidelines />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;