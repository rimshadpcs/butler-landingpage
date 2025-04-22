import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const steps = [
    {
      title: 'Strategic Validation',
      description: 'Our AI Product Strategist takes a thorough, structured approach to validate your idea through natural conversation. Using sophisticated pattern matching from successful products, it asks targeted questions to guide product strategy and inform go-to-market decisions.'
    },
    {
      title: 'Feasibility Analysis',
      description: 'We analyze comprehensive market and technical feasibility based on your vision to identify any risks or roadblocks. Projects are only moved forward when they\'re confirmed viable, ensuring appropriate resource allocation.'
    },
    {
      title: 'Execution Planning',
      description: 'Here\'s where you shine. Make confident building decisions with pre-organized roadmaps and smart tooling at your fingertips. Review key insights with data-backed recommendations and efficiently approve or customize strategy plans.'
    },
    {
      title: 'Launch with Confidence',
      description: 'Our AI copilots guide you through every step of the journey - from MVP to market launch.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive platform to build remarkable products. No more tool-switching, no more confusion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl mr-4"
                >
                  {index + 1}
                </motion.div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {step.title}
                </h3>
              </div>
              <p className="text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 