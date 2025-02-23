import React from 'react';
import { motion } from 'framer-motion';
// import { FloatingBackground, musicNotePath } from './musicBg';
// import { Music, Star, Heart } from 'lucide-react';
import { Headphones, Guitar } from 'lucide-react';
import DfzHelm from './dfzHelm';
import DfzCarousel from './eventsDfz';
import { IoWalk } from "react-icons/io5";
import FloatingMusicIcons from './bgDfz';
import DfzMedalShowcase from './awardsDfz';
function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

export function Dfz() {
  return (
    <>
      <LampContainer>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center relative z-50"
        >
          <h1 className="mt-8 mb-4 bg-gradient-to-br from-slate-100 via-amber-200 to-amber-400 py-6 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-7xl lg:text-8xl hover:scale-105 transition-transform duration-300">
            Dance Club
          </h1>

          <div className="relative">
            <h2 className="mb-4 text-slate-200 text-2xl md:text-5xl lg:text-6xl font-medium italic hover:text-amber-200 transition-colors duration-300">
              "Grace in Motion, DFZ, IIT BHU"
            </h2>
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-200 rounded-lg opacity-10 blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
          </div>

          <p className="text-slate-200 font-light text-sm md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto px-4 backdrop-blur-sm py-4 rounded-xl border border-amber-400/10 hover:border-amber-400/20 transition-all duration-300">
            Dance Freakz IIT BHU fosters a love for dance through street battles, duets, group dance, and various Western and Indian dance forms. We teach beginners, helping them develop skills and passion for the art.
          </p>
        </motion.div>
      </LampContainer>
  
      <DfzMedalShowcase />
      <DfzCarousel />
      <DfzHelm />
      <FloatingMusicIcons 
          IconComponent={IoWalk}
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
          whileInView={{ opacity: 1, width: "clamp(15rem, 50vw, 40rem)" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 md:h-72 overflow-visible w-[30rem] bg-gradient-conic from-amber-400 via-amber-200/20 to-transparent text-white [--conic-position:from_70deg_at_center_top]"
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
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-amber-400 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl" />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-amber-300 opacity-40 blur-3xl" />

        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-amber-300 blur-2xl"
        />

        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-amber-500"
        />

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950" />

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
        </motion.div>
      </div>

      <div className="relative z-50 flex -translate-y-72 flex-col items-center px-5 w-full">
        {children}
      </div>
    </div>
  );
};

export default Dfz;