import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Define Copilot types with their icons, colors and descriptions
const copilots = [
  { 
    id: 'product-strategist',
    name: 'Product Strategist',
    icon: '🧠', 
    color: 'bg-blue-900/20',
    textColor: 'text-blue-400',
    description: 'Refines your idea, builds Lean Canvas, validates demand',
    expertise: ['Market validation', 'Product vision', 'Feature prioritization', 'User persona creation']
  },
  { 
    id: 'product-manager',
    name: 'Product Manager',
    icon: '📦', 
    color: 'bg-green-900/20',
    textColor: 'text-green-400',
    description: 'Defines MVP, prioritizes features, maps user flows',
    expertise: ['MVP scoping', 'Feature prioritization', 'User flows', 'Product roadmap']
  },
  { 
    id: 'product-engineer',
    name: 'Product Engineer',
    icon: '🛠', 
    color: 'bg-purple-900/20',
    textColor: 'text-purple-400',
    description: 'Recommends stack, infra, and code scaffolding',
    expertise: ['Tech stack selection', 'Infrastructure planning', 'Development roadmap', 'Technical feasibility']
  },
  { 
    id: 'growth-marketer',
    name: 'Growth Marketer',
    icon: '📈',
    color: 'bg-amber-900/20',
    textColor: 'text-amber-400',
    description: 'Plans GTM, SEO, viral strategies, retention',
    expertise: ['Go-to-market strategy', 'SEO planning', 'Growth tactics', 'Retention optimization']
  },
  { 
    id: 'fundraising-advisor',
    name: 'Fundraising Advisor',
    icon: '💰',
    color: 'bg-emerald-900/20',
    textColor: 'text-pink-400',
    description: 'Crafts your pitch deck, outreach, and pricing models',
    expertise: ['Fundraising strategy', 'Pitch deck creation', 'Investor outreach', 'Financial modeling']
  },
  { 
    id: 'gtm-launch',
    name: 'Go-To-Market Launch Copilot',
    icon: '🚀',
    color: 'bg-red-900/20',
    textColor: 'text-red-400',
    description: 'Creates tactical launch plans, timelines, assets',
    expertise: ['Launch strategy', 'Marketing assets', 'PR planning', 'Launch timeline']
  },
  { 
    id: 'agent-led-gtm',
    name: 'Agent-Led GTM Copilot',
    icon: '🧠',
    color: 'bg-indigo-900/20',
    textColor: 'text-indigo-400',
    description: 'Autonomously runs tests, growth loops & experiments',
    expertise: ['Growth experiments', 'Autonomous testing', 'Data analysis', 'Growth optimization']
  }
];

const Copilots = () => {
  const [activeCopilot, setActiveCopilot] = useState(copilots[0]);

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
    <section id="copilots" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Tactical Copilot Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chat with them like a team. Work like a founder with a squad.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* copilots Selector */}
          <motion.div 
            className="lg:w-1/3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 p-6 rounded-lg h-full">
              <h3 className="text-xl font-bold mb-4">Select a copilot:</h3>
              <div className="space-y-3">
                {copilots.map((copilot) => (
                  <motion.button
                    key={copilot.id}
                    className={`w-full flex items-center p-3 rounded-md transition-colors ${
                      activeCopilot.id === copilot.id 
                        ? 'bg-black text-white' 
                        : 'bg-white hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveCopilot(copilot)}
                    variants={itemVariants}
                  >
                    <div className={`w-10 h-10 rounded-md ${copilot.color} flex items-center justify-center ${
                      activeCopilot.id === copilot.id ? 'opacity-90' : 'opacity-100'
                    }`}>
                      <span className={copilot.textColor}>{copilot.icon}</span>
                    </div>
                    <span className="ml-3 font-medium">{copilot.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Copilot Details */}
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            key={activeCopilot.id}
          >
            <div className="bg-gray-50 p-8 rounded-lg h-full">
              <div className="flex items-start mb-6">
                <div className={`w-16 h-16 rounded-lg ${activeCopilot.color} flex items-center justify-center`}>
                  <span className={`text-2xl ${activeCopilot.textColor}`}>{activeCopilot.icon}</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold">{activeCopilot.name}</h3>
                  <p className="text-gray-600">AI Expert</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-2">How this copilot helps you:</h4>
                <p className="text-gray-700 text-lg">{activeCopilot.description}</p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-3">Expertise areas:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {activeCopilot.expertise.map((skill, index) => (
                    <div key={index} className="flex items-center bg-white p-3 rounded-md">
                      <div className={`w-8 h-8 rounded-full ${activeCopilot.color} flex items-center justify-center mr-2`}>
                        <span className={`text-xs ${activeCopilot.textColor}`}>{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button className="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors">
                  Chat with {activeCopilot.name}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Copilots;