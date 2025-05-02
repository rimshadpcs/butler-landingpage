import React from 'react';
import { motion } from 'framer-motion';

const BuiltForSuccess = () => {
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
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Built for Success
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Alfred is designed from the ground up with builder success as the top priority.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity:0, y:30 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8, delay:0.2, ease:[0.16,1,0.3,1] }}
            viewport={{ once:true }}
            className="bg-white bg-opacity-5 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-10 hover:border-opacity-20 transition"
          >
            <h3 className="text-2xl font-bold mb-4">Success by Design</h3>
            <p className="text-gray-300 text-lg">
              Every interaction is built with multiple validation checkpoints…
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity:0, y:30 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8, delay:0.4, ease:[0.16,1,0.3,1] }}
            viewport={{ once:true }}
            className="bg-white bg-opacity-5 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-10 hover:border-opacity-20 transition"
          >
            <h3 className="text-2xl font-bold mb-4">Strategy Copilot</h3>
            <p className="text-gray-300 text-lg">
              Our recommendations are derived from analyzing thousands of successful products…
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BuiltForSuccess;