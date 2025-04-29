import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const steps = [
    {
      title: 'Strategic Validation',
      description:
        'Product Strategist Copilot guides you through Lean Canvas workshops, SWOT analyses, and rapid idea-validation sprints so you know you’re building something people want.',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: 'Feasibility Analysis',
      description:
        'Product Engineer Copilot evaluates your tech options, recommends the ideal stack and architecture, and helps you prototype proof-of-concepts before you write a single line of code.',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8V12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 16H12.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: 'Execution Planning',
      description:
        'Product Manager Copilot turns validated ideas into a prioritized roadmap—creating user flows, wireframes, and sprint plans so your team builds the right MVP, on time.',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5C15 6.10457 14.1046 7 13 7H11C9.89543 7 9 6.10457 9 5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: 'Launch with Confidence',
      description:
        'Growth Marketer Copilot crafts your go-to-market playbook, maps out early-user acquisition channels, and optimizes retention loops to kickstart traction and fuel your launch.',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 12H18L15 21L9 3L6 12H2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
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
            ease: [0.16, 1, 0.3, 1],
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
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
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
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{ once: true }}
                  className="w-12 h-12 bg-white bg-opacity-10 text-white rounded-full flex items-center justify-center font-bold text-xl mr-5"
                >
                  {index + 1}
                </motion.div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
              </div>
              <div className="flex items-start">
                <div className="w-16 text-gray-400 self-start mt-1 hidden md:block">
                  {step.icon}
                </div>
                <p className="text-gray-300 text-lg">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
