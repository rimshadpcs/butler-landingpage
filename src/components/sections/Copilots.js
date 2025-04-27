// Copilots.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const copilots = [
  {
    id: 'product-strategist',
    name: 'Product Strategist',
    icon: '🧠',
    color: 'bg-blue-900/20',
    textColor: 'text-blue-400',
    description: 'Refines your idea, builds Lean Canvas, validates demand',
    expertise: [
      'Market validation',
      'Product vision',
      'Feature prioritization',
      'User persona creation',
    ],
  },
  {
    id: 'product-manager',
    name: 'Product Manager',
    icon: '📦',
    color: 'bg-green-900/20',
    textColor: 'text-green-400',
    description: 'Defines MVP, prioritizes features, maps user flows',
    expertise: [
      'MVP scoping',
      'Feature prioritization',
      'User flows',
      'Product roadmap',
    ],
  },
  {
    id: 'product-engineer',
    name: 'Product Engineer',
    icon: '🛠',
    color: 'bg-purple-900/20',
    textColor: 'text-purple-400',
    description: 'Recommends stack, infra, and code scaffolding',
    expertise: [
      'Tech stack selection',
      'Infrastructure planning',
      'Development roadmap',
      'Technical feasibility',
    ],
  },
  {
    id: 'growth-marketer',
    name: 'Growth Marketer',
    icon: '📈',
    color: 'bg-amber-900/20',
    textColor: 'text-amber-400',
    description: 'Plans GTM, SEO, viral strategies, retention',
    expertise: [
      'Go-to-market strategy',
      'SEO planning',
      'Growth tactics',
      'Retention optimization',
    ],
  },
  {
    id: 'gtm-launch',
    name: 'Go-To-Market Launch Copilot',
    icon: '🚀',
    color: 'bg-red-900/20',
    textColor: 'text-red-400',
    description: 'Creates tactical launch plans, timelines, assets',
    expertise: [
      'Launch strategy',
      'Marketing assets',
      'PR planning',
      'Launch timeline',
    ],
  },
];

const Copilots = () => {
  const [activeCopilot, setActiveCopilot] = useState(copilots[0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="copilots" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-purple-500 opacity-5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-blue-500 opacity-5 rounded-full filter blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Your Tactical Copilot Team
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Collaborate with AI copilots to plan, build, and scale your product—seamlessly.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Selector */}
          <motion.div 
            className="lg:w-1/3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* ...buttons (unchanged) */}
          </motion.div>
          
          {/* Details */}
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            key={activeCopilot.id}
          >
            {/* ...copilot details (unchanged) */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Copilots;
