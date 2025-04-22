import React from 'react';
import { motion } from 'framer-motion';

const Copilots = () => {
  const copilots = [
    {
      title: 'Product Strategist',
      description: 'Helps define your business model and market fit through structured frameworks like Lean Canvas and SWOT analysis.',
      features: [
        'Guides ideation and structured brainstorming',
        'Conducts competitor analysis',
        'Creates user personas',
        'Validates demand with data-driven insights'
      ]
    },
    {
      title: 'Product Manager',
      description: 'Transforms vision into executable roadmap',
      features: [
        'Prioritizes features using RICE framework',
        'Generates UX wireframes and user flows',
        'Recommends optimal tech stack',
        'Plans MVP scope and iteration strategy'
      ]
    },
    {
      title: 'Product Engineer',
      description: 'Powers your technical decisions',
      features: [
        'Suggests scalable architecture patterns',
        'Automates infrastructure setup',
        'Provides boilerplate code and APIs',
        'Implements security best practices'
      ]
    },
    {
      title: 'Growth Marketer',
      description: 'Drives user acquisition and growth',
      features: [
        'Develops go-to-market strategy',
        'Creates ad campaigns and content',
        'Optimizes conversion funnels',
        'Tracks retention and engagement'
      ]
    },
    {
      title: 'Fundraising Advisor',
      description: 'Prepares for growth and investment',
      features: [
        'Helps structure pitch narratives',
        'Suggests financial modeling approaches',
        'Provides fundraising strategy frameworks',
        'Guides monetization planning'
      ]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Your Squad of AI Copilots
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {copilots.map((copilot, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl mr-4"
                >
                  {index + 1}
                </motion.div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {copilot.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-6">{copilot.description}</p>
              <ul className="space-y-3">
                {copilot.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + featureIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <span className="text-black mr-2">•</span>
                    <span className="text-gray-600">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-gray-500"
        >
          <p>More copilots coming soon to support your journey</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Copilots; 