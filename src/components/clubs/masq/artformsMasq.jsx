import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Drama, Sparkles, Calendar } from 'lucide-react';

const performanceData = [
  {
    id: 1,
    title: "Stage Play",
    year: "",
    description: "A stage play is a scripted performance presented live on stage, combining acting, dialogue, and storytelling.",
    director: "",
    genre: "",
    imageUrl: "https://ik.imagekit.io/mrityunjay/stageplay2.jpg?updatedAt=1737978254420",
    performers: "",
    venue: ""
  },
  {
    id: 2,
    title: "Nukkad Natak",
    year: 2022,
    description: "Nukkad Natak is a form of street theatre that conveys social messages through energetic, informal performances.",
    director: "Priya Mishra",
    genre: "Absurdist Drama",
    imageUrl: "https://ik.imagekit.io/mrityunjay/nukkad2.jpg?updatedAt=1737978153873",
    performers: 4,
    venue: "SAC Auditorium"
  },
  {
    id: 3,
    title: "Mime",
    year: 2024,
    description: "Mime is a theatrical performance art where actors express stories or emotions through gestures and facial expressions.",
    director: "Rohan Kapoor",
    genre: "Historical Drama",
    imageUrl: "https://ik.imagekit.io/mrityunjay/mime2.jpg?updatedAt=1737977999813",
    performers: 15,
    venue: "Students' Cultural Center"
  },
];

const DramaShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredPerformance, setHoveredPerformance] = useState(null);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  const autoSlideTimerRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % performanceData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + performanceData.length) % performanceData.length);
  };

  const startAutoSlide = () => {
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
    }

    if (!isAutoPlayPaused) {
      autoSlideTimerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % performanceData.length);
      }, 4000);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current);
      }
    };
  }, [isAutoPlayPaused]);

  const visiblePerformances = [
    performanceData[(currentIndex - 1 + performanceData.length) % performanceData.length],
    performanceData[currentIndex],
    performanceData[(currentIndex + 1) % performanceData.length]
  ];

  return (
    <div 
      className="relative w-full min-h-[90vh] bg-gradient-to-b from-black via-red-950/30 to-black flex items-center justify-center overflow-hidden py-12"
      onMouseEnter={() => setIsAutoPlayPaused(true)}
      onMouseLeave={() => setIsAutoPlayPaused(false)}
    >
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15),transparent_50%)]" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [Math.random() * 100, -Math.random() * 100],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute h-[1px] w-[100px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide} 
        className="absolute left-4 z-20 bg-red-500/10 hover:bg-red-500/20 rounded-full p-3 transition-all backdrop-blur-sm border border-red-500/30 group"
      >
        <ChevronLeft className="text-red-100 group-hover:text-red-400 transition-colors" size={32} />
        <div className="absolute inset-0 rounded-full bg-red-500/10 animate-ping" />
      </motion.button>
      
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide} 
        className="absolute right-4 z-20 bg-red-500/10 hover:bg-red-500/20 rounded-full p-3 transition-all backdrop-blur-sm border border-red-500/30 group"
      >
        <ChevronRight className="text-red-100 group-hover:text-red-400 transition-colors" size={32} />
        <div className="absolute inset-0 rounded-full bg-red-500/10 animate-ping" />
      </motion.button>

      {/* Progress Indicator */}
      <div className="absolute bottom-8 z-20 flex space-x-3">
        {performanceData.map((_, index) => (
          <motion.div
            key={index}
            className={`h-1 rounded-full cursor-pointer overflow-hidden
              ${index === currentIndex ? 'w-16' : 'w-8'}
              ${index === currentIndex ? 'bg-red-950' : 'bg-red-950/30'}
              transition-all duration-300`}
            whileHover={{ scale: 1.2 }}
          >
            {index === currentIndex && (
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 5, repeat: Infinity }}
                className="h-full w-full bg-red-500"
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Carousel Container */}
      <div className="flex items-center justify-center w-full h-full px-4 md:px-16">
        <AnimatePresence>
          {visiblePerformances.map((performance, index) => (
            <motion.div
              key={performance.id}
              initial={{ 
                scale: index === 1 ? 1 : 0.8, 
                opacity: index === 1 ? 1 : 0.6 
              }}
              animate={{ 
                scale: index === 1 ? 1 : 0.8, 
                opacity: index === 1 ? 1 : 0.6,
                x: index === 0 ? '-50%' : index === 2 ? '50%' : 0
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30 
              }}
              className={`
                absolute w-[900px] max-w-[95vw] h-[80vh] 
                flex flex-col lg:flex-row 
                bg-gradient-to-br from-black/90 to-red-950/90
                shadow-[0_0_50px_rgba(220,38,38,0.15)]
                backdrop-blur-sm
                rounded-2xl 
                border border-red-500/20
                overflow-hidden transition-all duration-500
                ${index === 1 ? 'z-10' : 'z-0'}
              `}
              onMouseEnter={() => setHoveredPerformance(performance.id)}
              onMouseLeave={() => setHoveredPerformance(null)}
            >
              {/* Performance Image */}
              <div className="w-full lg:w-2/3 h-1/2 lg:h-full relative group">
                <img 
                  src={performance.imageUrl} 
                  alt={performance.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {hoveredPerformance === performance.id && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-red-950/50 to-black/60 flex items-center justify-center backdrop-blur-sm"
                  >
                    <div className="text-red-50 text-center p-6 max-w-2xl">
                      <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl font-light leading-relaxed"
                      >
                        {performance.description}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Performance Details */}
              <div className="w-full lg:w-1/3 p-6 lg:p-8 text-red-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent" />
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold flex items-center gap-3 mb-6 relative"
                  whileHover={{ x: 10 }}
                >
                  <Drama className="text-red-400" />
                  {performance.title}
                </motion.h3>
                <div className="mt-4 space-y-4 text-base md:text-lg relative">
                  {performance.director && (
                    <p className="flex items-center gap-3">
                      <Sparkles className="text-red-400" size={20} />
                      <span className="font-light">{performance.director}</span>
                    </p>
                  )}
                  {performance.year && (
                    <p className="flex items-center gap-3">
                      <Calendar className="text-red-400" size={20} />
                      <span className="font-light">{performance.year}</span>
                    </p>
                  )}
                  {(performance.genre || performance.performers || performance.venue) && (
                    <div className="bg-red-950/30 p-4 rounded-xl border border-red-500/10 mt-6">
                      <p className="text-sm uppercase tracking-wider text-red-300 mb-3">Performance Details</p>
                      {performance.genre && <p className="font-light mb-2">Genre: {performance.genre}</p>}
                      {performance.performers && <p className="font-light mb-2">Performers: {performance.performers}</p>}
                      {performance.venue && <p className="font-light">Venue: {performance.venue}</p>}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DramaShowcase;