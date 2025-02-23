import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Music, Users, Star, Sparkles, Calendar, Trophy } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Cultural Weekend",
    description: "A grand 15 days cultural extravaganza showcasing talent across music, dance, theater, and arts. Students from IIT BHU come together to celebrate diversity through performances, workshops, and competitions.",
    features: [
      { icon: Music, text: "Live Performances" },
      { icon: Users, text: "Interactive Workshops" },
      { icon: Trophy, text: "Competitions" }
    ],
    images: [
      "https://ik.imagekit.io/mrityunjay/events6.jpeg?updatedAt=1737970312984",
      "https://ik.imagekit.io/mrityunjay/dfz3.jpg?updatedAt=1737970280148",
      "https://ik.imagekit.io/mrityunjay/dfz5.jpeg?updatedAt=1737975509451",
      "https://ik.imagekit.io/mrityunjay/fac17.jpg?updatedAt=1737970280142",
      "https://ik.imagekit.io/mrityunjay/events3.jpeg?updatedAt=1737970312510",
      "https://ik.imagekit.io/mrityunjay/fac10.jpg?updatedAt=1737970279474",
      "https://ik.imagekit.io/mrityunjay/events2.jpeg?updatedAt=1737970312457",
      "https://ik.imagekit.io/mrityunjay/fac26.jpg?updatedAt=1737970281533",
      "https://ik.imagekit.io/mrityunjay/events5.jpeg?updatedAt=1737970312280",
      "https://ik.imagekit.io/mrityunjay/mime2.jpg?updatedAt=1737977999813",
      "https://ik.imagekit.io/mrityunjay/events1.jpeg?updatedAt=1737970310519",
      "https://ik.imagekit.io/mrityunjay/fac31.jpg?updatedAt=1737975847648", 
      "https://ik.imagekit.io/mrityunjay/events7.jpeg?updatedAt=1737970309745",
    ]
  },
  {
    id: 2,
    title: "Aagman",
    description: "The annual cultural festival for First year students. It is the first event for fresheres where they get the stage to showcase their talents, creativity and interact with the college through their art.",
    features: [
      { icon: Star, text: "Student Performances" },
      { icon: Sparkles, text: "Art Showcases" },
      { icon: Calendar, text: "Multi-day Festival" }
    ],
    images: [
      "/dfz/dfz1.jpg",
      "/dfz/dfz2.jpg",
      "/dfz/dfz2.jpg",
      "/dfz/dfz2.jpg",
      "/dfz/dfz2.jpg",
      "/dfz/dfz2.jpg",
      "/dfz/dfz2.jpg",
      "/dfz/dfz2.jpg",
      "/dfz/dfz2.jpg",
      "/dfz/dfz2.jpg",
      "/dfz/dfz2.jpg",
      "/dfz/dfz2.jpg",
      "/dfz/dfz2.jpg",
    ]
  },
  {
    id: 3,
    title: "General Championship Culturals",
    description: "The Cultural Council hosted IIT (BHU) Varanasi's first-ever General Championship Cultural 1.0 on January 24th-25th, with 850+ participants across 40+ events. The championship concluded with a grand prize ceremony graced by Prof. Rajesh Kumar (Dean of Students Affairs), leaving a lasting impact.",
    features: [
    { "icon": Music, "text": "Musical Performances" },
    { "icon": Users, "text": "Diverse Participation" },
    { "icon": Trophy, "text": "Grand Prize Ceremony" }
    ],
    images: [
      "/dfz/dfz1.jpg",
      "/dfz/dfz2.jpg",
      "/dfz/dfz2.jpg",
      "/dfz/dfz2.jpg",
      "/dfz/dfz2.jpg",
      "/dfz/dfz2.jpg",
      "/dfz/dfz2.jpg",
      "/dfz/dfz2.jpg",
      "/dfz/dfz2.jpg",
      "/dfz/dfz2.jpg",
      "/dfz/dfz2.jpg",
      "/dfz/dfz2.jpg",
      "/dfz/dfz2.jpg",
    ]
  }
];

const AnimatedHeading = () => {
  return (
    <motion.div 
      className="text-center mb-8 md:mb-16 pt-16 md:pt-20"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className="text-4xl md:text-5xl lg:text-6xl font-bold relative inline-block"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          OUR EVENTS
        </span>
      </motion.h1>
    </motion.div>
  );
};

const EventCard = ({ title, description, features }) => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: i => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2
      }
    })
  };

  return (
    <motion.div 
      className="w-full lg:w-1/2 p-4 md:p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="relative bg-gradient-to-br from-blue-900/30 via-cyan-900/30 to-teal-900/30 p-6 md:p-8 rounded-2xl backdrop-blur-sm border border-white/10 overflow-hidden h-full group"
        style={{
          boxShadow: isHovered 
            ? '0 0 40px rgba(56, 189, 248, 0.3), inset 0 0 80px rgba(56, 189, 248, 0.1)'
            : '0 0 20px rgba(56, 189, 248, 0.1), inset 0 0 40px rgba(56, 189, 248, 0.05)',
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Radiant overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Animated border gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
          style={{
            background: 'linear-gradient(45deg, rgba(59,130,246,0.4) 0%, rgba(34,211,238,0.4) 35%, rgba(45,212,191,0.4) 100%)',
            filter: 'blur(20px)',
            zIndex: -1
          }}
        />

        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 mb-4 md:mb-6 relative"
          animate={{ 
            scale: isHovered ? 1.05 : 1,
            backgroundPosition: isHovered ? ['0% 0%', '100% 100%'] : '0% 0%'
          }}
          transition={{ 
            duration: 0.3,
            backgroundPosition: {
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
        >
          {title}
        </motion.h2>

        <motion.p 
          className="text-sm sm:text-base md:text-lg text-gray-300/90 leading-relaxed mb-6 md:mb-8"
          animate={{ opacity: isHovered ? 1 : 0.7 }}
        >
          {description}
        </motion.p>

        <div className="space-y-3 md:space-y-4 relative">
          {features.map(({ icon: Icon, text }, index) => (
            <motion.div
              key={text}
              className="flex items-center space-x-3"
              variants={featureVariants}
              custom={index}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="p-1.5 md:p-2 rounded-lg bg-white/5 border border-white/10 shadow-lg relative overflow-hidden"
                animate={{ 
                  rotate: isHovered ? [0, 10, -10, 0] : 0,
                  scale: isHovered ? [1, 1.1, 1] : 1
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-400 relative z-10" />
              </motion.div>
              <span className="text-xs sm:text-sm md:text-base text-gray-200/90">{text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const ParallaxGallery = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [offset, setOffset] = useState([0, 20, 40]);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setOffset(prev => prev.map(val => (val + 1) % 100));
    }, 200);

    return () => clearInterval(interval);
  }, [isHovered]);

  const allImages = [...events[0].images, ...events[1].images];
  const columns = [
    allImages.slice(0, 4),
    allImages.slice(4, 8),
    allImages.slice(8, 12)
  ];

  return (
    <div className="relative h-[50vh] md:h-[75vh] lg:h-screen overflow-hidden bg-black w-full mt-8 md:mt-16">
      <div className="absolute top-0 w-full h-20 bg-gradient-to-b from-slate-900 to-transparent z-10 pointer-events-none" />
      
      <div className="absolute inset-0 flex justify-between gap-2 sm:gap-3 md:gap-4 px-2 sm:px-3 md:px-4">
        {columns.map((column, columnIndex) => (
          <div 
            key={columnIndex}
            className="flex-1 relative"
          >
            <div 
              className="absolute w-full space-y-2 sm:space-y-3 md:space-y-4"
              style={{
                transform: `translateY(-${offset[columnIndex]}%)`,
                transition: isHovered ? 'transform 0.3s ease-out' : 'transform 20s linear infinite'
              }}
            >
              {column.map((img, idx) => (
                <motion.div
                  key={idx}
                  className="relative aspect-[2/3] w-full"
                  whileHover={{ 
                    scale: 1.1, 
                    zIndex: 10,
                    transition: { duration: 0.3 }
                  }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  <img
                    src={img}
                    alt={`Event photo ${idx + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-slate-900 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

const Events = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-start overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <AnimatedHeading />
        <div className="flex flex-wrap justify-center">
          {events.map(event => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
      <ParallaxGallery />
    </div>
  );
};

export default Events;