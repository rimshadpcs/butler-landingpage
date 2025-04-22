import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Footer Links - simplified version
  const links = {
    legal: [
      { name: 'About', href: '#about' },
      { name: 'Twitter', href: '#twitter' },
      { name: 'Discord', href: '#discord' },
      { name: 'Blog', href: '#blog' }
    ]
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            AlfredX © {currentYear}
          </p>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center space-x-4">
            {links.legal.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Built with 🤍 by founders, for founders
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;