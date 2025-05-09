import React from 'react';
import { motion } from 'framer-motion';

const VibeProductManagement = () => {
  // Define who it's for data
  const whoItsFor = [
    { icon: "❗", text: "a <strong>solo founder</strong> validating your idea" },
    { icon: "❗", text: "a <strong>product team</strong> shipping your next big release" },
    { icon: "❗", text: "an <strong>enterprise</strong> syncing across squads" }
  ];

  // Define why Alfred works data
  const whyAlfredWorks = [
    "Real-time copilots, not static templates",
    "Context-aware planning with memory",
    "No more tool-switching — everything in one vibe-based workspace",
    "Built by product builders, for product builders"
  ];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* decorative blurs */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-purple-500 opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-blue-500 opacity-5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.8, ease:[0.16,1,0.3,1] }}
          viewport={{ once:true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 inline-flex items-center justify-center">
            <span className="text-2xl mr-3"></span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Vibe Product/Project Management
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          From vibe coding to vibe managing —
Designers have Figma.
Devs have Replit.
Now Product & Project Managers have Alfred AI.
          </p>
        </motion.div>
        
        {/* Three card grid for benefits */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {[
            "Think in flows, not files",
            "Plan, align, and deliver — without breaking flow",
            "Move with momentum, not only meetings"
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity:0, y:30 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.6, delay:0.1 * index, ease:[0.16,1,0.3,1] }}
              viewport={{ once:true }}
              className="bg-white bg-opacity-5 backdrop-blur-sm p-6 rounded-2xl border border-white border-opacity-10 hover:border-opacity-20 transition text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                <span className="text-xl">•</span>
              </div>
              <p className="text-gray-200 text-lg font-medium">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Grid layout for Who It's For and Why Alfred Works */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Who It's For section */}
          <motion.div
            initial={{ opacity:0, y:30 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8, delay:0.2, ease:[0.16,1,0.3,1] }}
            viewport={{ once:true }}
            className="bg-white bg-opacity-5 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-10 hover:border-opacity-20 transition h-full"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-xl mr-3">💼</span>
              Who It's For
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Whether you're:
            </p>
            <ul className="space-y-4">
              {whoItsFor.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity:0, x:-20 }}
                  whileInView={{ opacity:1, x:0 }}
                  transition={{ duration:0.5, delay:0.3 + (index * 0.1), ease:[0.16,1,0.3,1] }}
                  viewport={{ once:true }}
                  className="flex items-start"
                >
                  <span className="text-xl mr-3">{item.icon}</span>
                  <span className="text-gray-200 text-lg" dangerouslySetInnerHTML={{ __html: item.text }}></span>
                </motion.li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg mt-6">
              Alfred adapts to your stage, speed, and style.
            </p>
          </motion.div>
          
          {/* Why Alfred Works section */}
          <motion.div
            initial={{ opacity:0, y:30 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8, delay:0.4, ease:[0.16,1,0.3,1] }}
            viewport={{ once:true }}
            className="bg-white bg-opacity-5 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-10 hover:border-opacity-20 transition h-full"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-xl mr-3">🧠</span>
              Why Alfred Works
            </h3>
            <ul className="space-y-4">
              {whyAlfredWorks.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity:0, x:-20 }}
                  whileInView={{ opacity:1, x:0 }}
                  transition={{ duration:0.5, delay:0.5 + (index * 0.1), ease:[0.16,1,0.3,1] }}
                  viewport={{ once:true }}
                  className="flex items-start"
                >
                  <span className="text-green-400 mr-3">✅</span>
                  <span className="text-gray-200 text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VibeProductManagement;