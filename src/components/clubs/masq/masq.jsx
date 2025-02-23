import React from 'react';
import { motion } from 'framer-motion';
// import { FloatingBackground, musicNotePath } from './musicBg';
// import { Music, Star, Heart } from 'lucide-react';
import { Brush, Drama, Headphones, PartyPopper } from 'lucide-react';
import MasqMedalShowcase from './awardsMasq';
import FloatingMasqIcons from './bgMasq';
import MasqCarousel from './eventsMasq';
import HelmMasq from './helmMasq';
import DramaShowcase from './artformsMasq';

// Utility function for class merging (if not already imported)
function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

export function Masq() {
  return (
    <div className="bg-black">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: "easeInOut",
          }}
          className="text-center relative z-10 min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 py-12 sm:py-16"
        >
          {/* Refined spotlight effect */}
          <div className="absolute inset-0 animate-spotlight bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.2),transparent_60%)]" />
          
          {/* MASQUERADES Title Section */}
          <div className="relative flex-1 flex flex-col justify-center items-center w-full max-w-7xl mx-auto">
            {/* Subtle ambient glow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -inset-20 blur-3xl bg-gradient-to-b from-red-500/10 via-red-900/10 to-black/10 rounded-full"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative space-y-6 sm:space-y-8 w-full"
            >
              {/* Main title with refined styling - updated padding and centering */}
              <h1 className="relative w-full text-center">
                <span className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-[0.15em] sm:tracking-[0.2em] bg-gradient-to-b from-red-100 via-red-400 to-red-900 bg-clip-text text-transparent drop-shadow-2xl font-serif">
                  MASQUERADES
                </span>
                
                {/* Subtle text shadow effect - updated to match new centering */}
                <div className="absolute inset-0 blur-sm opacity-50 bg-gradient-to-b from-red-500/20 to-transparent bg-clip-text text-center" 
                     aria-hidden="true">
                  <span className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-[0.15em] sm:tracking-[0.2em] text-transparent">
                    MASQUERADES
                  </span>
                </div>
              </h1>

              {/* Elegant subtitle */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="relative py-4 sm:py-8"
              >
                <span className="text-lg sm:text-xl md:text-2xl text-red-200 tracking-[0.3em] sm:tracking-[0.5em] font-light uppercase">
                  Theatre Club
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Refined motto */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-4xl font-light tracking-wider text-red-200/90 italic py-6 sm:py-8 px-4"
          >
            "Creating, Inspiring, Expressing By Art"
          </motion.h2>

          {/* Refined description */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="text-sm sm:text-base md:text-lg text-red-100/80 font-light leading-relaxed max-w-xs sm:max-w-lg md:max-w-2xl mx-auto px-4 sm:px-8 py-6 sm:py-8"
          >
            Theatre Club IIT BHU explores the art forms of mime, stage play, and nukkad. We teach beginners, helping them develop their acting skills while fostering creativity and a deep love for theatre.
          </motion.p>
        </motion.div>
      </LampContainer>

      <div className="h-20 bg-black" />

      <MasqMedalShowcase />
      <div className='bg-black relative overflow-hidden py-16'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="bg-gradient-to-r from-red-500 via-red-600 to-red-500 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl">
            Types of Artforms
          </h1>    
        </motion.div>
        {/* Enhanced dramatic background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 to-transparent opacity-30" />
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.2),transparent_50%)]"
          />
        </div>
      </div> 

      <DramaShowcase />
      <MasqCarousel />
      <HelmMasq />
      
      {/* Simplified floating icons */}
      <FloatingMasqIcons 
        IconComponent={Drama}
        iconCount={20}  // Reduced count
        minSize={40}
        maxSize={200}  // Reduced max size
        opacity={0.1}  // Reduced opacity
      />

      {/* Simplified grid overlay */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.05)_1px,transparent_1px)] bg-[size:150px_150px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />
      </div>
    </div>
  );
}

export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black w-full rounded-md z-0 border-b-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "8rem" }}
          whileInView={{ opacity: 1, width: "15rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[15rem] sm:w-[30rem] bg-gradient-conic from-red-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, width: "8rem" }}
          whileInView={{ opacity: 1, width: "15rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto left-1/2 h-56 w-[15rem] sm:w-[30rem] bg-gradient-conic from-transparent via-transparent to-red-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl" />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-red-500 opacity-50 blur-3xl" />

        <motion.div
          initial={{ width: "4rem" }}
          whileInView={{ width: "8rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-32 sm:w-64 -translate-y-[6rem] rounded-full bg-red-400 blur-2xl"
        />

        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "15rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[15rem] sm:w-[30rem] -translate-y-[7rem] bg-red-800"
        />

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black" />
      </div>

      {/* Add animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15),transparent_50%)]" />
      <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.15),transparent_50%)]" />
      
      {/* Enhanced glow effects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-tr from-red-500/10 via-transparent to-red-500/10"
      />

      {/* Add dramatic scanning line effect */}
      <motion.div
        animate={{
          y: ['0%', '100%'],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 h-[2px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent"
      />

      <div className="relative z-50 flex flex-col items-center w-full h-full">
        {children}
      </div>
      
        {/* <ImcMedalShowcase /> */}

    </div>
  );
};

export default Masq;