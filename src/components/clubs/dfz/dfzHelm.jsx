import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DfzHelm = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const teamMembers = [
    {
      name: 'Rishika Varshney',
      role: 'Joint Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/RishikaDfz.jpg?updatedAt=1737979365759',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      name: 'Yuvraj Solanki',
      role: 'Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/YuvrajDfz.png?updatedAt=1737979366151',
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      name: 'Jatothu Sriram',
      role: 'Joint Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/SriramDfz.jpg?updatedAt=1737979365402',
      gradient: 'from-blue-400 to-indigo-500',
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 flex items-center justify-center p-4 py-20 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid grid-cols-8 gap-4 opacity-20">
        {[...Array(64)].map((_, i) => (
          <motion.div
            key={i}
            className="h-full w-full bg-gradient-to-br from-blue-500/20 to-purple-500/20"
            initial={{ opacity: 0.1 }}
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              delay: i * 0.1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
            Our Helm
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onHoverStart={() => !isMobile && setHoveredMember(index)}
              onHoverEnd={() => !isMobile && setHoveredMember(null)}
              onTapStart={() => isMobile && setHoveredMember(index)}
              onTapCancel={() => isMobile && setHoveredMember(null)}
            >
              {/* Hover Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: hoveredMember === index ? 1 : 0,
                  y: hoveredMember === index ? 0 : 10 
                }}
                className="absolute -top-20 left-1/2 -translate-x-1/2 w-max px-6 py-3 rounded-xl bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 z-50"
              >
                <p className="text-sm font-medium text-slate-200">{member.role}</p>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-slate-800/90 border-r border-b border-slate-700/50" />
              </motion.div>

              {/* Avatar Container */}
              <div className="relative">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-full blur-xl opacity-50`}
                  animate={{
                    scale: hoveredMember === index ? 1.2 : 1,
                    opacity: hoveredMember === index ? 0.7 : 0.5,
                  }}
                />
                <motion.div
                  className="relative rounded-full overflow-hidden"
                  style={{
                    width: isMobile ? '8rem' : '12rem',
                    height: isMobile ? '8rem' : '12rem',
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} opacity-80`} />
                  <div className="absolute inset-1 bg-slate-950 rounded-full">
                    <div className="w-full h-full rounded-full overflow-hidden p-2">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Name Display */}
                <motion.div
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-max"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-sm md:text-base font-medium text-slate-200 whitespace-nowrap px-4 py-1 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/30">
                    {member.name}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DfzHelm;