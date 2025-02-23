import React, { useState } from 'react';
import { motion } from 'framer-motion';

const medals = [
  { id: 1, src: '/silver.png', title: 'Group Singing', year: '2017', location: 'Kashiyatra' },
  { id: 2, src: '/bronze.png', title: 'Solo Instrumental', year: '2017', location: 'Waves, BITS Goa' },
  { id: 3, src: '/gold.png', title: 'Solo Singing', year: '2017', location: 'IIT Kanpur' },
];

const ImcMedalShowcase = () => {
  const [hoveredMedal, setHoveredMedal] = useState(null);

  return (
    <div className="relative">
      <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl" />
      <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
      <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl" />
      
      <motion.div
        initial={{ width: "8rem" }}
        whileInView={{ width: "16rem" }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
      />

      <motion.div
        initial={{ width: "15rem" }}
        whileInView={{ width: "30rem" }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400"
      />

      <div className="w-full px-2 sm:px-4 bg-slate-950/50 py-12 sm:py-20 relative z-10">
        {/* Desktop/Tablet View */}
        <div className="hidden sm:flex flex-wrap justify-center items-center gap-4 sm:gap-6 scrollbar-none">
          {medals.map((medal) => (
            <div
              key={medal.id}
              className="relative group w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 flex-shrink-0"
              onMouseEnter={() => setHoveredMedal(medal.id)}
              onMouseLeave={() => setHoveredMedal(null)}
            >
              <img
                src={medal.src}
                alt={medal.title}
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
              />

              {hoveredMedal === medal.id && (
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-slate-900/90 backdrop-blur-sm text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-purple-500 shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 min-w-[180px] sm:min-w-[200px] z-10">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 animate-pulse"></div>
                  <p className="font-bold text-base sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">{medal.title}</p>
                  <p className="text-xs sm:text-sm mt-1 sm:mt-2 text-slate-200">{medal.year}</p>
                  <p className="text-xs sm:text-sm text-slate-200">{medal.location}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="grid sm:hidden grid-cols-1 gap-6 mt-4">
          {medals.map((medal) => (
            <div 
              key={medal.id} 
              className="flex flex-col items-center space-y-3 p-4 rounded-xl bg-slate-900/30 backdrop-blur-sm border border-purple-500/30"
            >
              <img 
                src={medal.src} 
                alt={medal.title} 
                className="w-28 h-28 rounded-lg shadow-[0_0_20px_rgba(139,92,246,0.3)]" 
              />
              <div className="text-center w-full bg-slate-900/50 backdrop-blur-sm p-3 rounded-xl border border-purple-500/50 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                <p className="font-semibold text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  {medal.title}
                </p>
                <p className="text-sm mt-1 text-slate-200">{medal.year}</p>
                <p className="text-sm text-slate-200">{medal.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImcMedalShowcase;
