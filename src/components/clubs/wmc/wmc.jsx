import React from 'react';
import { motion } from 'framer-motion';
// import { FloatingBackground, musicNotePath } from './musicBg';
// import { Music, Star, Heart } from 'lucide-react';
import { Headphones, Guitar } from 'lucide-react';
import WmcMedalShowcase from './awardsWmc';
import FloatingMusicIcons from './bgWmc';
import WmcCarousel from './eventsWmc';
import WmcHelm from './wmcHelm';
import { GiGuitar } from "react-icons/gi";

// Utility function for class merging (if not already imported)
function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

export function Wmc() {
  return (
    <>
    <LampContainer>
  <motion.div
    initial={{ opacity: 0.5, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.3,
      duration: 0.8,
      ease: "easeInOut",
    }}
    className="text-center"
  >
    <h1 className="mt-8 mb-4 bg-gradient-to-br from-slate-300 to-slate-500 py-6 bg-clip-text text-4xl font-medium tracking-tight text-transparent md:text-7xl">
      Western Music Club
    </h1>

    <h2 className="mb-4 text-slate-400 text-3 xl md:text-6xl font-medium">
    Vibrant Vibes of IIT BHU
    </h2>

    <p className="text-slate-100 font-light text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
     
Western Music Club IIT BHU celebrates the joy of music through genres like rock, jazz, and classical. We provide a platform for music enthusiasts to showcase their talent and nurture a passion for Western music.
    </p>
  </motion.div>
</LampContainer>
    
    <WmcMedalShowcase />
    <WmcCarousel />
    <WmcHelm />
    <FloatingMusicIcons 
        IconComponent={GiGuitar}
        iconCount={30}
        minSize={40}
        maxSize={300}
        opacity={0.15}
      />
    </>
  );
}

export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-red-700 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-red-700 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl" />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-red-700 opacity-50 blur-3xl" />

        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-red-500 blur-2xl"
        />

        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-red-900"
        />

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950" />
      </div>

      <div className="relative z-50 flex -translate-y-72 flex-col items-center px-5 w-full">
        {children}
      </div>
      
        {/* <ImcMedalShowcase /> */}

    </div>
  );
};

export default Wmc;