import React from 'react';
import { motion } from 'framer-motion';

const Problem = () => (
  <section className="relative overflow-hidden bg-black text-white py-24 px-4 sm:px-6 lg:px-8">
    {/* Decorative elements */}
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 opacity-5 rounded-full filter blur-3xl" />
    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500 opacity-5 rounded-full filter blur-3xl" />
    
    <div className="relative max-w-7xl mx-auto">
      {/* Title Section - Full Width */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
          <span className="flex items-center justify-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              The Problem We Solve
            </span>
          </span>
        </h2>
        
        <p className="text-xl sm:text-2xl text-gray-100 font-bold max-w-3xl mx-auto">
          Product teams move fast—but chaos moves faster.
        </p>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                The Alfred AI Solution
              </span>
              <p className="text-lg text-gray-300">
              Like Replit, but for product and project management.
            </p>
      </motion.div>
     
      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Problems Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="space-y-6">
            {[
              'Scattered tools, tabs, and threads break momentum',
              'MVPs and features stall in planning hell',
              'PMs struggle to align strategy, execution, and feedback',
              'Founders and teams waste cycles guessing what to build next'
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500 bg-opacity-20 mr-4 flex-shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-400"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">{item}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Solution Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Solution Header */}
         

          {/* Solution Points */}
          <div className="space-y-6">
            {[
              'You chat with AI copilots for strategy, planning, and delivery',
              'Product and project work happens in one flow',
              'Every idea becomes structured, actionable, and tracked',
              'You build smarter, ship faster, and stay in sync—from idea to impact'
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 bg-opacity-20 mr-4 flex-shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-400"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">{item}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mt-24 text-center"
      >
        <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Transform your product development workflow with AI-powered clarity and speed.
        </p>
        
        <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-lg font-bold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
          Start Building Better
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </motion.div>
    </div>
  </section>
);

export default Problem;