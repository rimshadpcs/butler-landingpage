import React from 'react';
import { motion } from 'framer-motion';

const BuiltForSuccess = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Built for Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Alfred is designed from the ground up with builder success as the top priority.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Success by Design
            </h3>
            <p className="text-gray-600">
              Every interaction is built with multiple validation checkpoints. From comprehensive market analysis to technical feasibility checks, we've reimagined product building for the digital age.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Strategy Co-Pilot
            </h3>
            <p className="text-gray-600">
              Our recommendations are derived from analyzing thousands of successful products and are updated constantly, but they are only ever suggestions. All decisions are solely in your hands, with our AI copilots there to support, not replace your judgment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BuiltForSuccess; 