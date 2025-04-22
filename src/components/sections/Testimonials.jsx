import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Solo Founder, TechReach',
    image: '/images/testimonial-1.jpg', // You'll need to add these images
    quote: 'This is like having my co-founder + mentor + PM in one tool.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder, FinSavvy',
    image: '/images/testimonial-2.jpg',
    quote: 'I went from idea to launch in 14 days — solo.',
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Handle manual navigation
  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Founders Are Saying</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how AlfredX is helping solo founders build faster and smarter.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <motion.div 
            className="bg-gray-50 rounded-xl p-8 md:p-12 shadow-sm"
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Image Placeholder */}
              <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                {/* Replace with actual image */}
                <div className="w-full h-full flex items-center justify-center bg-black text-white text-2xl font-bold">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
              </div>
              
              <div className="flex-1">
                <blockquote className="text-xl md:text-2xl text-gray-800 mb-6">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <div>
                    <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Testimonial Navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-black' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;