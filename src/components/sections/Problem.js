import React from 'react';
import { motion } from 'framer-motion';

const Problem = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            A New Model of Building
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            For too long, product tools have been fragmented and generic, often making builders' lives more complicated. We need a way to build that gives us clarity, confidence, and true ownership of our journey.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-800"
          >
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Intelligent Strategy Assistant
            </h3>
            <p className="text-gray-300">
              More than just a basic AI chat. Your AI copilots help validate ideas and find product-market fit through natural conversation.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-800"
          >
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Minimizing the Guesswork
            </h3>
            <p className="text-gray-300">
              Our models are trained with sophisticated patterns from successful products and companies to not only validate ideas but also to ask the right questions during planning to set up your execution for success.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Problem;