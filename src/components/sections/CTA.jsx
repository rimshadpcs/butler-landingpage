import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-5xl mx-auto bg-black text-white rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="px-6 py-12 md:p-12 lg:p-16 flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your unfair advantage is finally here.
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                AlfredX is your full-stack startup team — in one chat. Try it free. Build smarter.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#signup" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-medium rounded hover:bg-gray-100 transition-colors"
                >
                  🔥 Start Now →
                </a>
                <a 
                  href="#copilots" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-white text-white font-medium rounded hover:bg-white/10 transition-colors"
                >
                  💬 Or Meet the Copilots →
                </a>
              </div>
            </div>
            
            <div className="flex-shrink-0 w-full md:w-2/5">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black text-lg font-bold">AX</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-xl">AlfredX</h3>
                    <p className="text-gray-300 text-sm">AI Co-Founder</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex">
                    <div className="w-10 h-10 rounded-md bg-blue-900/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-blue-400 text-xs">💡</span>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-sm">Let's build something amazing together.</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-black border border-gray-700 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">I'm ready to get started!</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-10 h-10 rounded-md bg-green-900/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-green-400 text-xs">🧑‍💻</span>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-sm">Perfect! I'll help you set up your first project.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;