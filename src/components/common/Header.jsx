import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <motion.header
        className="sticky top-0 z-50"
        animate={{
          backgroundColor: scrolled ? '#ffffff' : 'rgba(255,255,255,0)',
          boxShadow: scrolled ? '0px 2px 8px rgba(0,0,0,0.1)' : 'none'
        }}
        transition={{ duration: 0.3 }}
      >
        <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="logo" className="lg:w-60 w-36" />
            </div>

            <div className="hidden md:flex md:items-center space-x-8">
              <a href="#home" className="text-blue-500 hover:text-blue-600 font-custom">Home</a>
              <a href="#about" className="text-[#733193] hover:text-[#57316a] font-custom">About us</a>
              <a href="#services" className="text-[#733193] hover:text-[#57316a] font-custom">Services</a>
              <a href="#contact" className="bg-purple-600 text-[#47E3DF] px-4 py-2 hover:bg-purple-700 font-custom">Contact Us</a>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-[#733193] hover:text-[#57316a] focus:outline-none focus:text-[#57316a]"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                key="mobile-menu"
                className="md:hidden font-custom"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <a href="#home" className="block px-3 py-2 text-blue-500 hover:text-blue-600 font-medium">Home</a>
                  <a href="#about" className="block px-3 py-2 text-[#733193] hover:text-[#57316a]">About us</a>
                  <a href="#services" className="block px-3 py-2 text-[#733193] hover:text-[#57316a]">Services</a>
                  <a href="#contact" className="block px-3 py-2 bg-purple-600 text-[#47E3DF] rounded hover:bg-purple-700 text-center">Contact Us</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  );
};

export default Header;
