import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  // Define steps as an array of objects
  const steps = [
    {
      title: "Strategic Validation",
      description: "Product Strategist Copilot guides you through Lean Canvas workshops, SWOT analyses, and rapid idea-validation sprints so you know you're building something people want."
    },
    {
      title: "Feasibility Analysis",
      description: "Product Engineer Copilot evaluates your tech options, recommends the ideal stack and architecture, and helps you prototype proof-of-concepts before you write a single line of code."
    },
    {
      title: "Execution Planning",
      description: "Product Manager Copilot turns validated ideas into a prioritized roadmap—creating user flows, wireframes, and sprint plans so your team builds the right MVP, on time."
    },
    {
      title: "Sprint Management",
      description: "Project Manager Copilot then transforms that roadmap into a tactical sprint backlog: breaking features into tasks, assigning ownership, tracking progress, and keeping your team on schedule."
    },
    {
      title: "Launch with Confidence",
      description: "Growth Marketer Copilot crafts your go-to-market playbook, maps out early-user acquisition channels, and optimizes retention loops to kickstart traction and fuel your launch."
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
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A unified platform to build remarkable products—no more tool-switching,
            no more confusion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* First four items */}
          {steps.slice(0, 4).map((step, index) => (
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
              className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-10 hover:border-opacity-20 transition-all"
            >
              <div className="flex items-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15 + 0.3,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  viewport={{ once: true }}
                  className="w-12 h-12 bg-white bg-opacity-10 text-white rounded-full flex items-center justify-center font-bold text-xl mr-5"
                >
                  {index + 1}
                </motion.div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
              </div>
              <p className="text-gray-300 text-lg">{step.description}</p>
            </motion.div>
          ))}
          
          {/* Last item (centered in the grid) */}
          <motion.div
            key="last-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
            viewport={{ once: true }}
            className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-10 hover:border-opacity-20 transition-all md:col-span-2 md:max-w-xl md:mx-auto"
          >
            <div className="flex items-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.9,
                  ease: [0.16, 1, 0.3, 1]
                }}
                viewport={{ once: true }}
                className="w-12 h-12 bg-white bg-opacity-10 text-white rounded-full flex items-center justify-center font-bold text-xl mr-5"
              >
                5
              </motion.div>
              <h3 className="text-2xl font-bold">{steps[4].title}</h3>
            </div>
            <p className="text-gray-300 text-lg">{steps[4].description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;