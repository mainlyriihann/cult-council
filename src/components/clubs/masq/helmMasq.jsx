import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HelmMasq = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [longPressedMember, setLongPressedMember] = useState(null);
  const longPressTimeout = React.useRef(null);

  const teamMembers = [
    {
      name: 'Shaun Aryan',
      role: 'Joint Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/ShaunMasq.jpg?updatedAt=1737979105963',
      color: 'bg-blue-100',
    },
    {
      name: 'Sagar Ahirrao',
      role: 'Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/SagarMasq.jpg?updatedAt=1737979105840',
      color: 'bg-purple-100',
    },
    {
      name: 'Shivansh Pandey',
      role: 'Joint Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/ShivanshMasq.jpg?updatedAt=1737979105591',
      color: 'bg-pink-100',
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLongPressStart = (index) => {
    longPressTimeout.current = setTimeout(() => {
      setLongPressedMember(index);
    }, 500); // Long press duration (500ms)
  };

  const handleLongPressEnd = () => {
    clearTimeout(longPressTimeout.current);
    setLongPressedMember(null); // Hide the name and role after releasing
  };

  return (
    <div className="bg-gradient-to-b from-red-950 via-gray-900 to-red-950/80 min-h-screen flex items-center justify-center p-4 relative py-14">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15),transparent_50%)]" />
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              y: [-10, 10, -10]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              background: 'radial-gradient(circle, rgba(220,38,38,0.1) 0%, transparent 70%)',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-300 via-red-200 to-red-300 bg-clip-text text-transparent">
            Our Helm
          </h2>
          <p className="text-red-400/80 mt-3 text-lg">Meet our Visionary Leaders</p>
        </motion.div>

        <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
              onMouseEnter={() => !isMobile && setHoveredMember(index)}
              onMouseLeave={() => !isMobile && setHoveredMember(null)}
              onTouchStart={() => isMobile && handleLongPressStart(index)}
              onTouchEnd={() => isMobile && handleLongPressEnd()}
              style={{ zIndex: hoveredMember === index || longPressedMember === index ? 10 : 1 }}
            >
              {/* Info Card (Visible on Hover/Long Press) */}
              <AnimatePresence>
                {(hoveredMember === index || longPressedMember === index) && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 bg-gradient-to-b from-red-950 to-gray-900 backdrop-blur-lg rounded-xl p-4 shadow-[0_0_15px_rgba(220,38,38,0.3)] border border-red-500/20"
                  >
                    <p className="text-red-200 font-medium text-center">{member.role}</p>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-950 transform rotate-45 border-b border-r border-red-500/20"></div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Avatar Container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative rounded-2xl overflow-hidden backdrop-blur-sm"
                style={{
                  width: isMobile ? '8rem' : '14rem',
                  height: isMobile ? '8rem' : '14rem',
                }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 via-transparent to-red-500/20 animate-pulse" />
                
                {/* Image Container */}
                <div className="absolute inset-[3px] bg-gradient-to-b from-red-950 to-gray-900 rounded-2xl overflow-hidden p-1">
                  <div className="w-full h-full relative rounded-xl overflow-hidden">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </motion.div>

              {/* Name Display */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-8 left-0 right-0 text-center"
              >
                <div className="bg-gradient-to-r from-red-950/80 via-gray-900/80 to-red-950/80 backdrop-blur-sm mx-4 py-2 px-4 rounded-xl border border-red-500/20">
                  <p className="text-red-200 font-medium">{member.name}</p>
                </div>
              </motion.div>

              {/* Mobile Long Press Info */}
              {isMobile && longPressedMember === index && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-gradient-to-b from-red-950 to-gray-900 px-4 py-2 rounded-xl shadow-lg border border-red-500/20 backdrop-blur-sm"
                >
                  <p className="text-red-200 font-medium text-center">{member.name}</p>
                  <p className="text-red-400/80 text-sm text-center">{member.role}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelmMasq;