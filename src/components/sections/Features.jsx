import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    id: 'validate',
    title: 'Validate with Lean Canvas',
    description: 'Develop and refine your business model canvas, create SWOT analysis, and build detailed user personas.',
    icon: '🧠'
  },
  {
    id: 'prioritize',
    title: 'Prioritize Features & MVP',
    description: 'Define your minimum viable product scope and prioritize features that will deliver the most value to users.',
    icon: '📦'
  },
  {
    id: 'attract',
    title: 'Attract Early Users',
    description: 'Create compelling landing pages and develop effective outreach strategies to find your first users.',
    icon: '🧲'
  },
  {
    id: 'pitch',
    title: 'Build Pitch Materials',
    description: 'Craft pitch decks, pricing models, and financial forecasts that will impress potential investors.',
    icon: '💸'
  },
  {
    id: 'gtm',
    title: 'Go-To-Market Strategies',
    description: 'Develop and test marketing strategies that have been proven to work for successful startups.',
    icon: '🎯'
  },
  {
    id: 'launch',
    title: 'Launch with Confidence',
    description: 'Execute your launch plan with agent-led execution that handles the details while you focus on the big picture.',
    icon: '🚀'
  }
];

const Features = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What AlfredX Helps You Do</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to go from idea to launch — with tactical support every step of the way.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.id}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <a 
            href="#pricing" 
            className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            See All Features
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;