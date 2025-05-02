import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  // Define steps as an array of objects with updated content
  const steps = [
    {
      title: "Strategic Validation",
      description: "Product Strategist Copilot walks you through Lean Canvas, SWOT, and persona mapping to align on problem-solution fit.",
      icon: "🧠"
    },
    {
      title: "Planning & Prioritization",
      description: "Product Manager Copilot turns strategy into a real product plan — with user flows, wireframes, and MVP scope.",
      icon: "📦"
    },
    {
      title: "Tech Feasibility & Setup",
      description: "Product Engineer Copilot recommends the best tech stack, scaffolds infra, and connects your repos and CI/CD pipeline.",
      icon: "🛠"
    },
    {
      title: "Sprint Management",
      description: "Project Manager Copilot helps you assign tasks, track progress, and stay unblocked — with daily standups and smart summaries.",
      icon: "🎯"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-purple-500 opacity-5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-blue-500 opacity-5 rounded-full filter blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 inline-flex items-center justify-center">
            <span className="text-2xl mr-3">🚀</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A unified platform to build remarkable products—no more tool-switching,
            no more confusion.
          </p>
        </motion.div>

        {/* 2x2 Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              viewport={{ once: true }}
              className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-10 hover:border-opacity-20 transition-all h-full"
            >
              <div className="flex items-center mb-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15 + 0.3,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  viewport={{ once: true }}
                  className="w-12 h-12 bg-white bg-opacity-10 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0"
                >
                  {index + 1}
                </motion.div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
              </div>
              
              <div className="flex items-start mt-4">
                <span className="text-2xl mr-3 mt-1">{step.icon}</span>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;