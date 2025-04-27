import React from 'react';
import { motion } from 'framer-motion';

const Problem = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Problem Statement */}
          <motion.div 
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              variants={itemVariants}
            >
              The Problem We Solve
            </motion.h2>
            
            <motion.ul className="space-y-4 mb-8" variants={containerVariants}>
              <motion.li 
                className="flex items-start"
                variants={itemVariants}
              >
                <span className="text-xl mr-3">❌</span>
                <span className="text-lg text-gray-700">Starting with a small team or alone is overwhelming</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                variants={itemVariants}
              >
                <span className="text-xl mr-3">❌</span>
                <span className="text-lg text-gray-700">You are confused on where to start</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                variants={itemVariants}
              >
                <span className="text-xl mr-3">❌</span>
                <span className="text-lg text-gray-700">Tools are fragmented & advice is vague</span>
              </motion.li>
            </motion.ul>
            
            <motion.div 
              className="bg-black text-white p-6 rounded-lg"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">✅</span>
                <h3 className="text-xl font-bold">The Solution</h3>
              </div>
              <p className="text-gray-200">
                Alfred AI gives you a tactical squad of AI copilots — built just for founders
              </p>
            </motion.div>
          </motion.div>
          
          {/* Right Side - Illustration */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-white rounded-lg shadow-xl p-6 max-w-lg mx-auto">
              {/* Founder */}
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600">👤</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Solo Founder</h4>
                  <p className="text-sm text-gray-600">Just now</p>
                </div>
                <div className="ml-auto bg-black text-white text-xs px-2 py-1 rounded">
                  Your message
                </div>
              </div>
              
              <p className="bg-gray-100 p-4 rounded-lg mb-6 text-gray-800">
                I'm building "Catflix" — a streaming app exclusively for cat videos. What's our GTM plan?
              </p>
              
              {/* Copilot Responses */}
              <div className="space-y-6">
                {/* Marketing Copilot */}
                <div className="flex">
                  <div className="w-10 h-10 rounded-md bg-purple-900/20 flex items-center justify-center">
                    <span className="text-purple-400 text-xs">📊</span>
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="text-sm font-bold">Market Research Copilot</h4>
                    <div className="bg-gray-100 p-3 rounded-lg mt-1">
                      <p className="text-sm text-gray-800">Let's first segment your audience: Gen Z meme lovers, lonely millennials, or retired cat moms?</p>
                    </div>
                  </div>
                </div>
                
                {/* Monetization copilot */}
                <div className="flex">
                  <div className="w-10 h-10 rounded-md bg-emerald-900/20 flex items-center justify-center">
                    <span className="text-pink-400 text-xs">💰</span>
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="text-sm font-bold">Monetization & GTM Copilot</h4>
                    <div className="bg-gray-100 p-3 rounded-lg mt-1">
                      <p className="text-sm text-gray-800">Purrfect. Let's test a freemium model with unlockable meow filters. I'll outline a 3-step GTM to go viral on TikTok.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Problem;