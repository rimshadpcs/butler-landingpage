import React from 'react';
import { motion } from 'framer-motion';

const Copilots = () => {
  // Define copilots data
  const copilotData = [
    {
      icon: "🧠",
      title: "Product Strategist",
      description: "Refines your idea, builds Lean Canvas, validates market demand",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-900/20"
    },
    {
      icon: "📦",
      title: "Product Manager",
      description: "Turns ideas into roadmaps, specs, and sprint plans",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-900/20"
    },
    {
      icon: "🛠",
      title: "Product Engineer",
      description: "Helps with architecture, tech stack, and prototyping",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-900/20"
    },
    {
      icon: "🎯",
      title: "Project Manager",
      description: "Tracks velocity, blockers, timelines, and dependencies",
      color: "from-amber-400 to-amber-600",
      bgColor: "bg-amber-900/20"
    }
  ];

  return (
    <section className="py-24 bg-black text-white px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-purple-500 opacity-5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-blue-500 opacity-5 rounded-full filter blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold mb-6 inline-flex items-center justify-center"
          >
            <span className="text-3xl mr-4">🧠</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Your Tactical Copilot Team
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto italic"
          >
            Vibe with AI copilots who think like your team — but faster, 24/7.
          </motion.p>
        </div>

        {/* Copilots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {copilotData.map((copilot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm p-6 rounded-2xl border border-white border-opacity-10 hover:border-opacity-20 transition-all"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg ${copilot.bgColor} flex items-center justify-center mr-4`}>
                  <span className="text-2xl">{copilot.icon}</span>
                </div>
                <h3 className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${copilot.color}`}>
                  {copilot.title}
                </h3>
              </div>
              <p className="text-gray-300">
                {copilot.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-lg font-bold rounded-full transition-transform hover:scale-105">
            Start building with your Co pilots
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Copilots;