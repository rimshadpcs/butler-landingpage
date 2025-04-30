import React from 'react';
import { motion } from 'framer-motion';

const Copilots = () => {
  return (
    <section className="py-16 bg-black text-white px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Your Tactical Copilot Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Collaborate with AI copilots to plan, build, and scale your product—seamlessly.
          </p>
        </div>

        {/* Content will be added later as requested */}
        
        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-lg font-bold rounded-full transition-transform hover:scale-105">
            Start building with your AI team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Copilots;