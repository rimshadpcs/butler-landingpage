import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const [annual, setAnnual] = useState(true);
  
  const plans = [
    {
      name: 'Founder',
      description: 'Try one copilot for free',
      price: 0,
      period: '',
      features: [
        '1 copilot',
        'Limited chat',
        'No memory'
      ],
      cta: 'Start Free',
      highlight: false
    },
    {
      name: 'Pro',
      description: 'Full access for serious founders',
      price: annual ? 29 : 39,
      period: '/mo',
      features: [
        'All copilots',
        '2 team members',
        'AI memory',
        'Priority support'
      ],
      cta: 'Get Started',
      highlight: true
    },
    {
      name: 'Growth',
      description: 'For founders scaling up',
      price: annual ? 49 : 69,
      period: '/mo',
      features: [
        'All copilots',
        'GTM tools',
        'Pitch prep',
        'AI memory',
        'Multiple team members'
      ],
      cta: 'Contact Sales',
      highlight: false
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that's right for your startup journey.
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <div className="bg-white p-1 rounded-lg inline-flex shadow-sm">
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  annual ? 'bg-black text-white' : 'bg-white text-gray-700'
                }`}
                onClick={() => setAnnual(true)}
              >
                Annual (Save 25%)
              </button>
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  !annual ? 'bg-black text-white' : 'bg-white text-gray-700'
                }`}
                onClick={() => setAnnual(false)}
              >
                Monthly
              </button>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={plan.name}
              className={`rounded-lg ${
                plan.highlight 
                  ? 'bg-black text-white border-4 border-black relative z-10 shadow-xl -mt-4 md:-mt-8' 
                  : 'bg-white text-gray-800 border border-gray-200'
              } overflow-hidden`}
              variants={itemVariants}
            >
              {plan.highlight && (
                <div className="bg-white text-black text-xs font-bold uppercase tracking-wide py-1 px-4 text-center">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`${plan.highlight ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className={`${plan.highlight ? 'text-gray-300' : 'text-gray-500'} ml-2`}>
                    {plan.period}
                  </span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg 
                        className={`mr-3 h-5 w-5 ${plan.highlight ? 'text-white' : 'text-green-500'}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`${plan.highlight ? 'text-gray-200' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
                    plan.highlight
                      ? 'bg-white text-black hover:bg-gray-100'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            🕵️ No credit card. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;