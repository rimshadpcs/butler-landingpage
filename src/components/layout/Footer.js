// src/components/layout/Footer.jsx
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const links = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Copilots', href: '#copilots' },
      { name: 'Roadmap', href: '#roadmap' }
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' }
    ],
    social: [
      { name: 'Twitter', href: '#twitter' },
      { name: 'Discord', href: '#discord' },
      { name: 'GitHub', href: '#github' },
      { name: 'LinkedIn', href: '#linkedin' }
    ],
    legal: [
      { name: 'Privacy', href: '#privacy' },
      { name: 'Terms', href: '#terms' },
      { name: 'Security', href: '#security' }
    ]
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* link grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h3 className="text-lg font-semibold mb-4 capitalize">{section}</h3>
              <ul className="space-y-2">
                {items.map(link => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* bottom bar */}
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between">
          {/* logo + brand */}
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
              <span className="text-black text-lg font-bold">AX</span>
            </div>
            <span className="text-xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Alfred Ai
              </span>
            </span>
          </div>
          
          {/* copyright */}
          <p className="text-gray-400 text-sm">
            © {currentYear} Alfred Ai. All rights reserved.
          </p>
          
          {/* built with line */}
          <p className="text-sm mt-4 md:mt-0">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Built with 🤍 by startup, for startups and enterprises
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
