import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden min-h-[700px] flex items-center">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left side – text & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-left lg:pr-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Batman had an{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Alfred
              </span>
              ,<br />
              so should your Startup
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Our AI copilots handle the groundwork—from ideation to launch—so you focus on building what matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#try"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-white text-black rounded-full font-semibold shadow-md text-center"
              >
                Start Building
              </motion.a>
              <motion.a
                href="#copilots"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 border border-white rounded-full font-semibold text-center"
              >
                Meet Copilots
              </motion.a>
            </div>
          </motion.div>
          
          {/* Right side – just the orb GIF */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[500px] w-full flex justify-center items-center"
          >
            <img
              src="/images/orb1.gif"
              alt="Orb"
              className="h-full object-contain"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
