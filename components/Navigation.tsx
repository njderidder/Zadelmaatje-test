import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, ASSETS } from '../constants';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled || mobileMenuOpen 
            ? 'bg-brand-dark/90 backdrop-blur-md border-white/10 py-4' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="z-50 block w-40">
            <img 
                src={ASSETS.logo} 
                alt="zadelmaatje logo" 
                className="w-full h-auto brightness-0 invert" 
                style={{ filter: 'brightness(0) invert(1)' }} // Force white for dark mode
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-sm uppercase tracking-widest text-white hover:text-brand-accent transition-colors font-bold"
              >
                {item.label}
              </a>
            ))}
            <button className="bg-white text-black px-6 py-2.5 rounded-md text-xs font-bold uppercase tracking-widest hover:bg-brand-accent hover:text-white transition-colors duration-300">
              Pre-order nu
            </button>
            <button className="text-white hover:text-brand-accent transition-colors">
               <ShoppingBag size={20} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-brand-dark z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-light text-white hover:text-brand-accent"
              >
                {item.label}
              </a>
            ))}
            <button className="mt-8 bg-brand-accent text-white px-8 py-4 rounded-md text-sm font-bold uppercase tracking-widest">
              Pre-order nu
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;