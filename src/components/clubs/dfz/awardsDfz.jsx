import React, { useState } from 'react';
import { motion } from 'framer-motion';

const medals = [
  { id: 1, src: '/gold.png', title: 'Duet', year: '', location: 'Inter IIT Cult Meet 7.0' },
  { id: 2, src: '/bronze.png', title: 'Overall Dance', year: '', location: 'Inter IIT Cult Meet 7.0' },
  { id: 3, src: '/silver.png', title: 'Heelturn(Group Dance)', year: '', location: 'Anwesha, IIT Patna' },
  { id: 4, src: '/bronze.png', title: 'Ecstacy', year: '', location: 'Kashiyatra' },
];

const DfzMedalShowcase = () => {
  const [hoveredMedal, setHoveredMedal] = useState(null);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-500/10 rounded-full"
            initial={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.1,
            }}
            animate={{
              y: [0, -100],
              opacity: [0.1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Title Section */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
          Our Achievements
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Desktop/Tablet View */}
      <div className="hidden md:flex justify-center items-center gap-12 flex-wrap max-w-7xl mx-auto relative z-10">
        {medals.map((medal) => (
          <motion.div
            key={medal.id}
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div 
              className="w-32 h-32 lg:w-40 lg:h-40 relative cursor-pointer"
              onMouseEnter={() => setHoveredMedal(medal.id)}
              onMouseLeave={() => setHoveredMedal(null)}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl"
                animate={{
                  scale: hoveredMedal === medal.id ? 1.2 : 1,
                  opacity: hoveredMedal === medal.id ? 1 : 0,
                }}
              />
              <motion.img
                src={medal.src}
                alt={medal.title}
                className="w-full h-full object-contain rounded-xl relative z-10"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={hoveredMedal === medal.id ? 
                  { opacity: 1, y: 0, scale: 1 } : 
                  { opacity: 0, y: 10, scale: 0.9 }
                }
                className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 w-max min-w-[220px] bg-slate-800/80 backdrop-blur-md text-slate-100 px-6 py-4 rounded-2xl border border-slate-700/50 shadow-xl z-50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl" />
                <p className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  {medal.title}
                </p>
                {medal.year && <p className="text-sm mt-1 text-slate-300">{medal.year}</p>}
                <p className="text-sm text-slate-300">{medal.location}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="grid md:hidden grid-cols-1 gap-6 mt-8">
        {medals.map((medal) => (
          <motion.div
            key={medal.id}
            className="flex items-center gap-4 bg-slate-800/30 backdrop-blur-lg p-6 rounded-2xl border border-slate-700/50 relative overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
            <motion.img 
              src={medal.src} 
              alt={medal.title} 
              className="w-24 h-24 object-contain rounded-xl relative z-10"
              whileTap={{ scale: 0.95 }}
            />
            <div className="flex-1 relative z-10">
              <h3 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                {medal.title}
              </h3>
              {medal.year && <p className="text-slate-300 text-sm mt-1">{medal.year}</p>}
              <p className="text-slate-300 text-sm">{medal.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DfzMedalShowcase;
