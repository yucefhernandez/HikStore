import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import Features from './components/Sections/Features';
import ProductGallery from './components/Sections/ProductGallery';
import Location from './components/Sections/Location';
import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';
import FloatingWhatsApp from './components/UI/FloatingWhatsApp';
import Loader from './components/UI/Loader';
import ProductMarquee from './components/Sections/ProductMarquee';
const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader onFinished={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          <main className="flex-grow">
            <Hero />
            <Features />
            <ProductGallery />
            <ProductMarquee />
            <Location />
            <Contact />
          </main>
          <Footer />
          <FloatingWhatsApp />
        </>
      )}
    </div>
  );
};

export default App;