import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Batman had an Alfred, so should your product
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-8">
              Less guesswork. More building.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mb-12">
              Our AI copilots help with the groundwork - from ideation to launch, giving you the confidence of a full team while you focus on building what matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a 
                href="#try"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center"
              >
                Start Building Now
              </motion.a>
              <motion.a 
                href="#copilots"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black border-2 border-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Meet Your Copilots
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Dashboard UI Mockup */}
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Mock Chat Header */}
              <div className="bg-black p-4 text-white flex items-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                  <span className="text-black text-xs font-bold">AX</span>
                </div>
                <div>
                  <h3 className="font-medium">AlfredX Boardroom</h3>
                  <p className="text-xs text-gray-300">Real startup decisions, simplified</p>
                </div>
              </div>
              
              {/* Mock Chat Messages */}
              <div className="p-4 bg-white h-80 overflow-y-auto">
                {/* User Message */}
                <div className="flex justify-end mb-4">
                  <div className="flex items-start">
                    <div className="bg-black text-white rounded-lg p-3 max-w-xs">
                      <p className="text-xs font-bold mb-1">Founder</p>
                      <p className="text-sm">I'm building <strong>Catflix</strong> — a streaming app exclusively for cat videos. What's our next step?</p>
                    </div>
                  </div>
                </div>
                
                {/* Product Strategist Copilot Response */}
                <div className="flex mb-4">
                  <div className="w-8 h-8 rounded-md bg-blue-900/20 flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-blue-400 text-xs">🧠</span>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                    <p className="text-xs font-bold mb-1">Product Strategist Copilot</p>
                    <p className="text-sm">Let's clearly define your early adopters first. I'll generate detailed user personas—perhaps Gen Z meme enthusiasts, busy millennials seeking comfort content, or dedicated cat lovers?</p>
                  </div>
                </div>
                
                {/* Growth Marketer Copilot Response */}
                <div className="flex mb-4">
                  <div className="w-8 h-8 rounded-md bg-purple-900/20 flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-purple-400 text-xs">📈</span>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                    <p className="text-xs font-bold mb-1">Growth Marketer Copilot</p>
                    <p className="text-sm">Once we've locked down your target personas, I'll suggest channels for early traction—like going viral with short-form content on TikTok, Reddit cat communities, or niche Discord groups.</p>
                  </div>
                </div>
                
                {/* Fundraising Advisor Copilot Response */}
                <div className="flex mb-4">
                  <div className="w-8 h-8 rounded-md bg-green-900/20 flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-green-400 text-xs">💰</span>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                    <p className="text-xs font-bold mb-1">Fundraising Advisor Copilot</p>
                    <p className="text-sm">Sounds purrfect. When you're ready, I'll outline your pitch deck and monetization strategy. Let's first validate interest with your target market.</p>
                  </div>
                </div>
              </div>
              
              {/* Mock Input */}
              <div className="border-t border-gray-200 p-3">
                <div className="flex">
                  <input 
                    type="text" 
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                    placeholder="Message your copilots..." 
                    disabled
                  />
                  <button className="bg-black text-white px-4 py-2 rounded-r-md">
                    Send
                  </button>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-100 rounded-full opacity-50 z-0"></div>
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-gray-200 rounded-full opacity-50 z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;