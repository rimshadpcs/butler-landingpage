import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WaitlistDialog = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Construct the iframe URL with params to make it blend better with your design
  const iframeSrc = "https://tally.so/embed/waZV4Z?hideTitle=1&transparentBackground=1&alignLeft=1&dynamicHeight=1";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Dialog */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="bg-black border border-white border-opacity-20 rounded-2xl p-8 max-w-md w-full mx-4 z-10 relative overflow-hidden"
          >
            {/* Decorative element */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500 opacity-10 rounded-full filter blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500 opacity-10 rounded-full filter blur-3xl" />
            
            {/* Close button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition z-20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-2">Join our Waitlist</h2>
              <p className="text-gray-300 mb-6">Be among the first to experience AlfredX when we launch.</p>
              
              {/* Tally.so iframe */}
              <div className="bg-white bg-opacity-5 rounded-xl overflow-hidden">
                <iframe
                  src={iframeSrc}
                  width="100%"
                  height="450"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="Alfred Ai Waitlist"
                  className="bg-transparent"
                  style={{ colorScheme: 'dark' }}
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WaitlistDialog;