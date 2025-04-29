// src/components/sections/Pricing.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import WaitlistDialog from './WaitlistDialog'; // ← ensure this file exists

const Pricing = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const tiers = [
    {
      name: 'Founder',
      description: 'Solo founders & early-stage startups',
      features: [
        '1 project',
        'Full access to all  AI copilots',
        'Upto 3 team members',
        'Basic file storage',
        'Community support',
      ],
      isPopular: false,
    },
    {
      name: 'Startup',
      description: 'Growing teams & multiple projects',
      features: [
        'Everything in Founder tier',
        'Many team members',
        'Higher usage limits',
        'Priority support',
        'Advanced integrations',
      ],
      isPopular: false,
    },
    {
      name: 'Enterprise',
      description: 'Large organizations & custom deployments',
      features: [
        'Everything in Startup tier',
        'More team members',
        'Multiple projects',
        'SLA guarantees',
        'On-premise options',

      ],
      isPopular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 bg-black text-white relative overflow-hidden"
    >
      {/* decorative blurred backdrops */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-500 opacity-5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-500 opacity-5 rounded-full filter blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto italic">
            No public pricing—request your custom plan:
          </p>
        </motion.div>

        {/* Tier Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className={`
                relative
                bg-white bg-opacity-5 backdrop-blur-sm
                rounded-2xl border border-white border-opacity-10
                overflow-hidden
                ${tier.isPopular ? 'ring-2 ring-white' : ''}
              `}
            >
              {tier.isPopular && (
                <div className="absolute top-6 right-6 bg-white text-black text-xs font-semibold uppercase tracking-wide py-1 px-4 rounded-full">
                  Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-gray-400 mb-6">{tier.description}</p>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white bg-opacity-10 flex items-center justify-center mt-0.5 mr-3">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-gray-300">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Request Pricing opens dialog */}
                <motion.button
                  onClick={openDialog}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`
                    w-full flex justify-center py-3 px-6 rounded-full font-medium transition-all duration-300
                    ${tier.isPopular
                      ? 'bg-white text-black hover:bg-opacity-90'
                      : 'bg-white bg-opacity-10 text-white hover:bg-opacity-20 border border-white border-opacity-10'}
                  `}
                >
                  Request Pricing
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join the Waitlist button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            onClick={openDialog}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 text-lg text-white bg-black border border-white border-opacity-20 py-3 px-8 rounded-full hover:bg-white/5 transition"
          >
            <span className="text-xl">🕒</span>
            Join the Waitlist
          </motion.button>
        </motion.div>
      </div>

      {/* Modal */}
      <WaitlistDialog isOpen={isDialogOpen} onClose={closeDialog} />
    </section>
  );
};

export default Pricing;
