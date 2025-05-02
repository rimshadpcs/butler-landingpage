import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// ============================================
// CONFIGURATION
// ============================================
const ANIMATION_SPEED = 0.003; // orbital speed
const ANIMATION_INTERVAL = 25; // milliseconds between position updates
// ============================================

const BeforeAfterSection = () => {
  // "Before" tools with fixed scatter positions
  const beforeTools = [
    {
      name: 'Notion',
      imagePath: 'https://img.icons8.com/color/48/000000/notion.png',
      x: 15,
      y: 20,
    },
    {
      name: 'Figma',
      imagePath: 'https://img.icons8.com/color/48/000000/figma--v1.png',
      x: 45,
      y: 15,
    },
    {
      name: 'Miro',
      imagePath: '/images/miro.jpeg',
      x: 70,
      y: 25,
    },
    {
      name: 'Google Sheets',
      imagePath: 'https://img.icons8.com/color/48/000000/google-sheets.png',
      x: 25,
      y: 40,
    },
    {
      name: 'Jira',
      imagePath: 'https://img.icons8.com/?size=100&id=h8EoAfgRDYLo&format=png&color=000000',
      x: 55,
      y: 70,
    },
    {
      name: 'Slack',
      imagePath: 'https://img.icons8.com/color/48/000000/slack-new.png',
      x: 60,
      y: 45,
    },
    {
      name: 'Trello',
      imagePath: 'https://img.icons8.com/color/48/000000/trello.png',
      x: 20,
      y: 75,
    },
    // your local SVGs
    {
      name: 'Typeform',
      imagePath: '/images/typeform.png',
      x: 80,
      y: 50,
    },
    {
      name: 'Mixpanel',
      imagePath: '/images/mixpanel.png',
      x: 35,
      y: 60,
    },
    
    {
      name: 'Crunchbase',
      imagePath: '/images/cruchbase.png',
      x: 75,
      y: 65,
    },
    {
      name: 'Jira',
      imagePath: 'https://img.icons8.com/color/48/000000/jira.png',
      x: 55,
      y: 70,
    },
  ];

  // Copilots to orbit
  const copilots = [
    {
      name: 'Product Strategist copilot',
      icon: '🧠',
      color: 'bg-blue-900/20',
      textColor: 'text-blue-400',
    },
    {
      name: 'Product Manager copilot',
      icon: '📦',
      color: 'bg-green-900/20',
      textColor: 'text-green-400',
    },
    {
      name: 'Product Engineer copilot',
      icon: '🛠',
      color: 'bg-purple-900/20',
      textColor: 'text-purple-400',
    },
    {
      name: 'Project Manager copilot',
      icon: '🎯',
      color: 'bg-amber-900/20',
      textColor: 'text-amber-400',
    },
  
  ];

  // animated positions for each copilot
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    // initialize positions in a circle
    const init = copilots.map((_, i) => {
      const angle = (i / copilots.length) * 2 * Math.PI;
      return { angle, x: Math.cos(angle) * 150, y: Math.sin(angle) * 150 };
    });
    setPositions(init);

    // update on interval
    const iv = setInterval(() => {
      setPositions((prev) =>
        prev.map((pos) => {
          const newAngle = pos.angle + ANIMATION_SPEED;
          return {
            angle: newAngle,
            x: Math.cos(newAngle) * 150,
            y: Math.sin(newAngle) * 150,
          };
        })
      );
    }, ANIMATION_INTERVAL);

    return () => clearInterval(iv);
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden">
      {/* subtle backgrounds */}
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
            Before{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Alfred Ai
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your complex workflow into a unified experience
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Before Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:w-1/2 bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm rounded-2xl border border-white border-opacity-10 p-8 relative min-h-[500px]"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Tool Overload</h3>
            <p className="text-gray-300 mb-8">
              Juggling between multiple tools breaks your flow and slows down your product development.
            </p>

            <div className="relative h-[350px]">
              {beforeTools.map((tool) => (
                <motion.div
                  key={tool.name}
                  className="absolute"
                  animate={{ y: [0, 8, 0], x: [0, 4, 0] }}
                  transition={{
                    duration: 6 + beforeTools.indexOf(tool),
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  }}
                  style={{ left: `${tool.x}%`, top: `${tool.y}%` }}
                >
                  <div className="bg-white rounded-xl shadow-md p-3 w-16 h-16 flex items-center justify-center">
                    <img
                      src={tool.imagePath}
                      alt={tool.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* After Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:w-1/2 bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm rounded-2xl border border-white border-opacity-10 p-8 relative min-h-[500px] overflow-hidden"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Copilot Harmony</h3>
            <p className="text-gray-300 mb-8">
              One integrated platform with specialized AI copilots working together seamlessly.
            </p>

            <div className="relative h-[350px]">
              {/* Orbit guide */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-white border-opacity-10" />

              {/* Center AX */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-24 h-24 bg-black rounded-full flex items-center justify-center shadow-lg border border-white border-opacity-20">
                <span className="text-white text-xl font-bold">AX</span>
              </div>

              {/* Orbiting pills */}
              {positions.map((pos, i) => (
                <div
                  key={i}
                  className="absolute z-10"
                  style={{
                    left: `calc(50% + ${pos.x}px)`,
                    top: `calc(50% + ${pos.y}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div
                    className={`flex items-center gap-2 ${copilots[i].color} ${copilots[i].textColor} px-4 py-2 rounded-full text-sm shadow-md border border-white border-opacity-10`}
                  >
                    <span>{copilots[i].icon}</span>
                    <span>{copilots[i].name}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
