import React from 'react';
import { motion } from 'framer-motion';

const Problem = () => (
  <section className="relative overflow-hidden bg-black text-white py-24 px-4 sm:px-6 lg:px-8">
    {/* Decorative elements */}
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 opacity-5 rounded-full filter blur-3xl" />
    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500 opacity-5 rounded-full filter blur-3xl" />
    
    <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* Left side – Problem / Solution */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-8"
      >
        {/* Gradient title */}
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          The Problem We Solve
        </h2>

        <ul className="space-y-6 text-gray-300">
          {/* ❌ Items */}
          {[
            'Great products die early when founders have no clear path from idea to launch.',
            'Early-stage founders and small teams waste time and stall progress because they lack a clear',
            'Tools are fragmented, guidance is generic, and building momentum alone is overwhelming.'
            
          ].map((text, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start"
            >
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-red-500 bg-opacity-20 mr-4">
                <svg
                  width="12"
                  height="12"
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
              <span className="text-xl">{text}</span>
            </motion.li>
          ))}
        </ul>

        {/* Solution box with gradient heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-10"
        >
          <div className="flex items-center mb-4">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 bg-opacity-20 mr-4">
              <svg
                width="14"
                height="14"
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
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              The Solution
            </h3>
          </div>
          <p className="text-xl text-gray-300">
            Alfred AI gives you a tactical squad of AI copilots — built for founders and startups
          </p>
        </motion.div>
      </motion.div>

      {/* Right side – chat mockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-blue-500 opacity-10 filter blur-3xl rounded-2xl" />
        
        <div className="relative bg-black rounded-2xl shadow-2xl border border-white border-opacity-10 overflow-hidden">
          {/* Chat header */}
          <div className="bg-black bg-opacity-80 p-4 flex items-center border-b border-white border-opacity-10">
            <div className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center mr-4">
              <span className="text-white text-sm font-bold">AX</span>
            </div>
            <div>
              <h3 className="font-medium text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Copilot Boardroom
              </h3>
              <p className="text-sm text-gray-400">Connect and chat with all your pilots here</p>
            </div>
          </div>

          {/* Chat messages */}
          <div className="p-6 bg-black bg-opacity-60 max-h-[500px] overflow-y-auto space-y-6">
            {/* Founder */}
            <motion.div
              className="flex justify-end"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center mr-3">
                  <span className="text-white">👤</span>
                </div>
                <div className="bg-white bg-opacity-5 text-white rounded-2xl p-4 max-w-xs border border-white border-opacity-10">
                  <p className="text-xs font-bold mb-1 text-gray-400">Founder</p>
                  <p className="text-base">
                    I'm building <strong>Catflix</strong> — a streaming app exclusively for cat videos. What's our next step?
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Product Manager */}
            <motion.div
              className="flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <div className="w-10 h-10 rounded-md bg-amber-900/20 flex items-center justify-center mr-3">
                <span className="text-amber-400">🎯</span>
              </div>
              <div className="bg-white bg-opacity-5 rounded-2xl p-4 max-w-xs border border-white border-opacity-10">
                <p className="text-xs font-bold mb-1 text-gray-400">Product Manager Copilot</p>
                <p className="text-base text-gray-200 mb-3">
                  Let's lock in your MVP feature set. I'd start with:
                </p>
                <ul className="list-disc list-inside text-base text-gray-200 mb-3 space-y-1">
                  <li><strong>Video upload & playback</strong> — core user flow</li>
                  <li><strong>Category feeds</strong> — browse "Funny Cats," "Kittens," etc.</li>
                  <li><strong>Basic search</strong> — tag-based discoverability</li>
                </ul>
                <p className="text-base text-gray-200">
                  Once those are solid, we can layer on social sharing and "favorite" lists.
                </p>
              </div>
            </motion.div>

            {/* Product Strategist */}
            <motion.div
              className="flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <div className="w-10 h-10 rounded-md bg-blue-900/20 flex items-center justify-center mr-3">
                <span className="text-blue-400">🧠</span>
              </div>
              <div className="bg-white bg-opacity-5 rounded-2xl p-4 max-w-xs border border-white border-opacity-10">
                <p className="text-xs font-bold mb-1 text-gray-400">Product Strategist Copilot</p>
                <p className="text-base text-gray-200">
                  Let's clearly define your early adopters first. I'll generate detailed user personas—perhaps Gen Z meme enthusiasts, busy millennials seeking comfort content, or dedicated cat lovers?
                </p>
              </div>
            </motion.div>

            {/* Growth MarkETER */}
            <motion.div
              className="flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <div className="w-10 h-10 rounded-md bg-green-900/20 flex items-center justify-center mr-3">
                <span className="text-green-400">📈</span>
              </div>
              <div className="bg-white bg-opacity-5 rounded-2xl p-4 max-w-xs border border-white border-opacity-10">
                <p className="text-xs font-bold mb-1 text-gray-400">Growth Marketer Copilot</p>
                <p className="text-base text-gray-200">
                  Once we've locked down your target personas, I'll suggest channels for early traction—like going viral with short-form content on TikTok, Reddit cat communities, or niche Discord groups.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Message input */}
          <div className="border-t border-white border-opacity-10 p-4 bg-black">
            <div className="flex">
              <input
                type="text"
                className="flex-1 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-l-full px-6 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Chat with your copilots..."
                disabled
              />
              <button className="bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-3 rounded-r-full font-medium transition">
                Send
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Problem;
