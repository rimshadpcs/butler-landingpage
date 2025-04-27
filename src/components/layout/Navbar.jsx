// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkBase = scrolled
    ? 'text-gray-600 hover:text-black'
    : 'text-white hover:text-gray-300';

  const btnBase = scrolled
    ? 'bg-black text-white hover:bg-gray-800'
    : 'bg-white bg-opacity-10 text-white hover:bg-opacity-20 border border-white border-opacity-10';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mr-2">
            <span className="text-white text-lg font-bold">AX</span>
          </div>
          <span
            className={`text-2xl font-bold tracking-tight ${
              scrolled ? 'text-black' : 'text-white'
            }`}
          >
            Alfred Ai
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8">
          {['features','copilots','pricing','about'].map((id) => (
            <Link
              key={id}
              href={`#${id}`}
              className={`${linkBase} transition-colors`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/login"
            className={`${scrolled ? 'text-gray-800 hover:text-black' : 'text-white hover:text-gray-300'} font-medium`}
          >
            Login
          </Link>
          <Link
            href="/dashboard"
            className={`px-4 py-2 rounded-lg transition-colors ${btnBase}`}
          >
            Start Free
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${
            scrolled ? 'text-gray-600' : 'text-white'
          }`}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['features','copilots','pricing','about'].map((id) => (
              <Link
                key={id}
                href={`#${id}`}
                className={`block px-3 py-2 transition ${
                  scrolled ? 'text-gray-600 hover:text-black' : 'text-white hover:text-gray-300'
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            ))}
            <div className="border-t border-gray-200 my-2" />
            <Link
              href="/login"
              className={`block px-3 py-2 transition ${
                scrolled ? 'text-gray-600 hover:text-black' : 'text-white hover:text-gray-300'
              }`}
            >
              Login
            </Link>
            <Link
              href="/dashboard"
              className="block px-3 py-2 mt-2 text-center bg-black text-white rounded-lg hover:bg-gray-800"
            >
              Start Free
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
