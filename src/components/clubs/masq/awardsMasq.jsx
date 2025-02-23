import React, { useState } from 'react';
import { motion } from 'framer-motion';

const medals = [
  { id: 1, src: '/gold.png', title: 'Nukkad', year: '2017', location: 'Inter IIT Cult Meet' },
  { id: 2, src: '/gold.png', title: 'Nukkad', year: '2018', location: 'Anwesha, IIT Kanpur' },
  { id: 3, src: '/bronze.png', title: 'Mime', year: '', location: '' },
];

const MasqMedalShowcase = () => {
  const [hoveredMedal, setHoveredMedal] = useState(null);

  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden px-4 py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 to-transparent opacity-30" />
      
      {/* Container for content centering */}
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-16">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-red-200 via-red-100 to-red-200 bg-clip-text text-transparent"
        >
          Our Achievements
        </motion.h2>

        {/* Desktop View */}
        <div className="hidden md:flex justify-center items-center gap-8 lg:gap-16 xl:gap-20 py-10">
          {medals.map((medal) => (
            <motion.div
              key={medal.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 150 }}
              className="relative group"
              onMouseEnter={() => setHoveredMedal(medal.id)}
              onMouseLeave={() => setHoveredMedal(null)}
            >
              {/* Medal Container */}
              <div className="relative w-28 sm:w-32 lg:w-40 xl:w-44">
                {/* Glow ring on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/20 via-purple-500/20 to-red-500/20 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                <img
                  src={medal.src}
                  alt={medal.title}
                  className="w-full h-auto object-contain drop-shadow-[0_0_8px_rgba(220,38,38,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(220,38,38,0.5)] transition-all duration-300 group-hover:scale-110"
                />
              </div>

              {/* Info Card */}
              <div
                className={`absolute -bottom-28 left-1/2 transform -translate-x-1/2 w-max min-w-[220px] opacity-0 group-hover:opacity-100 transition-all duration-300 z-10`}
              >
                <div className="relative">
                  {/* Outer glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-red-500 rounded-xl blur-sm" />
                  
                  {/* Border gradient */}
                  <div className="relative bg-gradient-to-r from-red-500 via-purple-500 to-red-500 p-[1px] rounded-xl">
                    {/* Content background */}
                    <div className="bg-black/95 rounded-xl backdrop-blur-md px-6 py-4">
                      <div className="space-y-2">
                        <h3 className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-red-200 to-purple-200">
                          {medal.title}
                        </h3>
                        {medal.year && (
                          <p className="text-sm font-medium text-red-300/90">
                            {medal.year}
                          </p>
                        )}
                        {medal.location && (
                          <p className="text-sm font-medium text-red-300/90">
                            {medal.location}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex flex-col items-center gap-12 py-8">
          {medals.map((medal) => (
            <motion.div
              key={medal.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-sm px-4"
            >
              <div className="relative flex flex-col items-center">
                {/* Medal with glow */}
                <div className="relative w-32 sm:w-40">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-purple-500/20 to-red-500/20 blur-xl scale-150 opacity-50" />
                  <img
                    src={medal.src}
                    alt={medal.title}
                    className="w-full h-auto object-contain drop-shadow-[0_0_15px_rgba(220,38,38,0.4)]"
                  />
                </div>
                
                {/* Info Card for Mobile */}
                <div className="mt-6 w-full max-w-xs">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-red-500 rounded-xl blur-sm" />
                    <div className="relative bg-gradient-to-r from-red-500 via-purple-500 to-red-500 p-[1px] rounded-xl">
                      <div className="bg-black/95 rounded-xl backdrop-blur-md p-5 text-center">
                        <h3 className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-red-200 to-purple-200">
                          {medal.title}
                        </h3>
                        {medal.year && (
                          <p className="text-sm font-medium text-red-300/90 mt-2">
                            {medal.year}
                          </p>
                        )}
                        {medal.location && (
                          <p className="text-sm font-medium text-red-300/90">
                            {medal.location}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MasqMedalShowcase;
