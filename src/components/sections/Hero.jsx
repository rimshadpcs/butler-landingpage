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
            {/* Catflix Dashboard Mockup */}
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Dashboard header */}
              <div className="bg-gray-100 p-3 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center text-sm text-gray-500">Catflix Dashboard</div>
              </div>
              
              {/* Dashboard content */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500 mb-2">Active Projects</div>
                    <div className="text-2xl font-bold">1</div>
                    <div className="text-xs text-gray-400">Catflix</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500 mb-2">AI Copilots</div>
                    <div className="text-2xl font-bold">5</div>
                    <div className="text-xs text-gray-400">Ready to assist</div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <div className="text-sm text-gray-500 mb-2">Recent Activity</div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-sm">User personas defined</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm">MVP features prioritized</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                      <span className="text-sm">Marketing channels identified</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-sm text-gray-500">Latest Copilot Insights</div>
                    <div className="text-xs text-blue-500">View all</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-white border border-gray-200 p-3 rounded">
                      <div className="flex items-center mb-2">
                        <div className="w-6 h-6 rounded-md bg-blue-900/20 flex items-center justify-center mr-2">
                          <span className="text-blue-400 text-xs">🧠</span>
                        </div>
                        <span className="text-xs font-medium">Product Strategist</span>
                      </div>
                      <p className="text-xs text-gray-600">Consider adding "Cat-egorization" feature to help users find content by cat breed or behavior type.</p>
                    </div>
                    
                    <div className="bg-white border border-gray-200 p-3 rounded">
                      <div className="flex items-center mb-2">
                        <div className="w-6 h-6 rounded-md bg-green-900/20 flex items-center justify-center mr-2">
                          <span className="text-green-400 text-xs">💰</span>
                        </div>
                        <span className="text-xs font-medium">Monetization</span>
                      </div>
                      <p className="text-xs text-gray-600">Premium "Purr-fect" subscription tier could offer ad-free viewing and exclusive cat content.</p>
                    </div>
                  </div>
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