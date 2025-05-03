import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const IntegrateWithSection = () => {
  // State for animation position
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Animation refs
  const animationRef = useRef(null);
  const containerRef = useRef(null);
  
  // Animation speed
  const speed = 0.5;
  const slowSpeed = 0.1;
  
  // Track if we should slow down
  const [isSlowMode, setIsSlowMode] = useState(false);
  
  // Integration partners data
  const integrations = [
    {
      name: 'Jira',
      logo: 'https://img.icons8.com/color/48/000000/jira.png'
    },
    {
      name: 'Linear',
      logo: '/images/linear.png'
    },
    {
      name: 'Asana',
      logo: '/images/asana.png'
    },
    {
      name: 'Trello',
      logo: 'https://img.icons8.com/color/48/000000/trello.png'
    },
    {
      name: 'ClickUp',
      logo: '/images/clickup.png'
    },
    {
      name: 'Notion',
      logo: 'https://img.icons8.com/color/48/000000/notion.png'
    },
 
    {
      name: 'Google Docs',
      logo: '/images/docs.png'
    },
    {
      name: 'Dropbox Paper',
      logo: '/images/dropbox.png'
    },
    {
      name: 'Google Drive',
      logo: 'https://img.icons8.com/color/48/000000/google-drive.png'
    },
    {
      name: 'Figma',
      logo: 'https://img.icons8.com/color/48/000000/figma--v1.png'
    },
    {
      name: 'Miro',
      logo: '/images/miro.jpeg'
    },
    {
      name: 'Slack',
      logo: 'https://img.icons8.com/color/48/000000/slack-new.png'
    },
    {
      name: 'Microsoft Teams',
      logo: '/images/teams.png'
    },
    {
      name: 'Google Calendar',
      logo: '/images/google-calendar.png'
    },

    {
      name: 'GitHub',
      logo: '/images/github.png'
    },
    {
      name: 'GitLab',
      logo: '/images/gitlab.png'
    },
    {
      name: 'Mixpanel',
      logo: '/images/mixpanel.png'
    },
    
    {
      name: 'Hotjar',
      logo: '/images/hotjar.png'
    },

    {
      name: 'Productboard',
      logo: '/images/productboard.png'
    },
   
  ];
  
  useEffect(() => {
    // Function to animate the scroll
    const animate = () => {
      setScrollPosition(prevPos => {
        // Reset position when off screen to create infinite loop
        if (prevPos <= -3000) return 0;
        return prevPos - (isSlowMode ? slowSpeed : speed);
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Clean up animation on unmount
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isSlowMode]);
  
  // Handle mouse events to control animation speed
  const handleMouseEnter = () => setIsSlowMode(true);
  const handleMouseLeave = () => setIsSlowMode(false);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-purple-500 opacity-5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-blue-500 opacity-5 rounded-full filter blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Integrate With
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect Alfred AI with your favorite tools for a seamless workflow
          </p>
        </motion.div>

        {/* Moving logos container - single linear line */}
        <div 
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative mb-16 overflow-hidden py-8"
        >
          {/* Single row of logos */}
          <div 
            className="flex space-x-8 py-2"
            style={{ 
              transform: `translateX(${scrollPosition}px)`,
              whiteSpace: 'nowrap'
            }}
          >
            {/* Triple repeat for infinite scrolling */}
            {[...integrations, ...integrations, ...integrations].map((integration, index) => (
              <motion.div
                key={`integration-${index}`}
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm p-4 rounded-xl border border-white border-opacity-10 hover:border-opacity-20 h-24 w-40 flex items-center justify-center flex-shrink-0"
              >
                <img
                  src={integration.logo}
                  alt={integration.name}
                  className="h-10 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-300 mb-6">
            All your essential tools, connected in one powerful AI workspace
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium text-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              Request Demo
            </button>
            <button className="inline-flex items-center px-8 py-3 rounded-full bg-white bg-opacity-5 border border-white border-opacity-20 backdrop-filter backdrop-blur-sm text-white font-medium text-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              Request Integration
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrateWithSection;