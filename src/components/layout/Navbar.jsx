import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold tracking-tight">alfredAi</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-black transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-black transition-colors">
              Pricing
            </Link>
            <Link href="#use-cases" className="text-gray-600 hover:text-black transition-colors">
              Use Cases
            </Link>
            <Link href="#blog" className="text-gray-600 hover:text-black transition-colors">
              Blog
            </Link>
          </nav>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-800 hover:text-black font-medium">
              Login
            </Link>
            <Link href="/signup" className="text-gray-800 hover:text-black font-medium">
              Sign up
            </Link>
            <Link 
              href="/dashboard" 
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
            >
              Launch Dashboard
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#features" className="block px-3 py-2 text-gray-600 hover:text-black">
              Features
            </Link>
            <Link href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-black">
              Pricing
            </Link>
            <Link href="#use-cases" className="block px-3 py-2 text-gray-600 hover:text-black">
              Use Cases
            </Link>
            <Link href="#blog" className="block px-3 py-2 text-gray-600 hover:text-black">
              Blog
            </Link>
            <div className="border-t border-gray-200 my-2"></div>
            <Link href="/login" className="block px-3 py-2 text-gray-600 hover:text-black">
              Login
            </Link>
            <Link href="/signup" className="block px-3 py-2 text-gray-600 hover:text-black">
              Sign up
            </Link>
            <Link 
              href="/dashboard" 
              className="block px-3 py-2 mt-2 text-center bg-black text-white rounded hover:bg-gray-800"
            >
              Launch Dashboard
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;