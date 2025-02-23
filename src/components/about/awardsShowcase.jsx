import React, { useState } from 'react';

const MedalShowcase = () => {
  const [hoveredMedal, setHoveredMedal] = useState(null);

  const medals = {
    gold: [
      { id: 'g1', event: 'Nukkad, Inter IIT Cultural Meet,2017', position: '1st' },
      { id: 'g2', event: 'Overall Inter IIT Cltural Meet, 2017', position: '1st' },
      { id: 'g3', event: 'Unplugged Band, Effervesence, IIT Allahabad', position: '1st' },
      { id: 'g4', event: 'Nrityanjali, Waves, BITS GOA', position: '1st' },
    ],
    silver: [
      { id: 's1', event: 'Do-It(Duo Dance), Inter IIT Cultural Meet', position: '2nd' },
      { id: 's2', event: 'Solo Singing Competition', position: '2nd' },
      { id: 's3', event: 'Fashion Show', position: '2nd' },
      { id: 's4', event: 'Short Film Festival', position: '2nd' },
      { id: 's5', event: 'Kavyanjali, Inter IIT Cult Meet', position: '2nd' },
    ],
    bronze: [
      { id: 'b1', event: 'Cypher Hustle(Street Battle), Inter IIT Cult Meet', position: '3rd' },
      { id: 'b2', event: 'TV Quiz, Antaragni', position: '3rd' },
      { id: 'b3', event: 'Battle Front(English Debate)', position: '3rd' },
      { id: 'b4', event: 'Hindi Debate', position: '3rd' },
      { id: 'b5', event: 'Ashubhasan', position: '3rd' },
      { id: 'b6', event: 'Hindi Extempore, Antaragni', position: '3rd' },
      { id: 'b7', event: "English Poetry Writing, KY'18", position: '3rd' },
    ],
  };

  const MedalCard = ({ medal, color, shadowColor }) => {
    const isBottomRow = medal.id.startsWith('b') && parseInt(medal.id.slice(1)) > 5;

    // Enhanced colors for each medal type
    const getColors = () => {
      if (medal.id.startsWith('g')) {
        return {
          main: '#FFD700',
          glow: '#FFA500',
          gradient: `radial-gradient(circle at 30% 30%, 
            #fff6d5 0%, 
            #ffd700 30%, 
            #fdb813 45%,
            #ffd700 60%,
            #fdb813 85%,
            #e6b800 100%)`,
          shadow: 'rgba(255, 215, 0, 0.4)',
          inner: `linear-gradient(135deg, 
            #fff6d5 0%, 
            #ffd700 25%, 
            #fdb813 50%, 
            #ffd700 75%, 
            #e6b800 100%)`
        };
      }
      if (medal.id.startsWith('s')) {
        return {
          main: '#C0C0C0',
          glow: '#A9A9A9',
          gradient: `radial-gradient(circle at 30% 30%, 
            #ffffff 0%, 
            #e6e6e6 30%, 
            #c0c0c0 45%,
            #d9d9d9 60%,
            #a6a6a6 85%,
            #999999 100%)`,
          shadow: 'rgba(192, 192, 192, 0.4)',
          inner: `linear-gradient(135deg, 
            #ffffff 0%, 
            #e6e6e6 25%, 
            #c0c0c0 50%, 
            #d9d9d9 75%, 
            #b3b3b3 100%)`
        };
      }
      return {
        main: '#CD7F32',
        glow: '#A0522D',
        gradient: `radial-gradient(circle at 30% 30%, 
          #ffc8a3 0%, 
          #cd7f32 30%, 
          #b87333 45%,
          #cd7f32 60%,
          #a66a2e 85%,
          #8b4513 100%)`,
        shadow: 'rgba(205, 127, 50, 0.4)',
        inner: `linear-gradient(135deg, 
          #ffc8a3 0%, 
          #cd7f32 25%, 
          #b87333 50%, 
          #cd7f32 75%, 
          #a66a2e 100%)`
      };
    };

    const colors = getColors();

    return (
      <div
        className="group relative"
      >
        <div
          className={`relative w-16 h-16 xs:w-20 xs:h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center transition-all duration-300 transform cursor-pointer
            ${hoveredMedal === medal.id ? 'scale-110 z-10' : 'scale-100 hover:scale-105'}`}
          style={{
            background: colors.gradient,
            boxShadow: hoveredMedal === medal.id 
              ? `0 0 30px ${colors.shadow}, 
                 0 0 60px ${colors.shadow}, 
                 inset 0 0 20px rgba(255, 255, 255, 0.5), 
                 inset 0 -20px 50px rgba(0, 0, 0, 0.2)`
              : `0 10px 20px rgba(0,0,0,0.2), 
                 inset 0 0 15px rgba(255, 255, 255, 0.5), 
                 inset 0 -10px 30px rgba(0, 0, 0, 0.2)`,
          }}
          onMouseEnter={() => setHoveredMedal(medal.id)}
          onMouseLeave={() => setHoveredMedal(null)}
        >
          <div
            className="w-10 h-10 xs:w-14 xs:h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-white text-xs xs:text-sm sm:text-lg md:text-xl font-bold relative overflow-hidden"
            style={{
              background: colors.inner,
              boxShadow: `inset 0 2px 4px rgba(0,0,0,0.3), 
                          inset 0 -2px 4px rgba(255,255,255,0.2)`,
              textShadow: '0 1px 2px rgba(0,0,0,0.5)'
            }}
          >
            {/* Shine effect */}
            <div 
              className="absolute inset-0 opacity-40"
              style={{
                background: `linear-gradient(45deg, 
                  transparent 20%, 
                  rgba(255,255,255,0.3) 35%, 
                  rgba(255,255,255,0.8) 40%, 
                  rgba(255,255,255,0.9) 45%, 
                  rgba(255,255,255,0.8) 50%, 
                  rgba(255,255,255,0.3) 55%, 
                  transparent 80%)`,
                transform: hoveredMedal === medal.id ? 'translateX(100%)' : 'translateX(-100%)',
                transition: 'transform 1s ease-in-out',
              }}
            />
            <span className="relative z-10">{medal.position}</span>
          </div>
        </div>

        {/* Popup name tag */}
        <div
          className={`absolute ${isBottomRow ? 'bottom-full mb-3' : 'top-full mt-3'} left-1/2 -translate-x-1/2 w-max max-w-[150px] xs:max-w-[200px] sm:max-w-[250px] p-2 xs:p-3 rounded-xl backdrop-blur-md shadow-xl text-center transition-all duration-300 transform
            ${hoveredMedal === medal.id ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2'}`}
          style={{
            background: `linear-gradient(145deg, rgba(255,255,255,0.98), rgba(255,255,255,0.9))`,
            border: `1px solid ${colors.main}`,
            boxShadow: `0 4px 15px rgba(0,0,0,0.1), 0 0 5px ${colors.shadow}`,
            zIndex: 20,
            pointerEvents: hoveredMedal === medal.id ? 'auto' : 'none'
          }}
        >
          <div 
            className={`absolute ${isBottomRow ? 'bottom-[-8px]' : '-top-2'} left-1/2 -translate-x-1/2 w-3 xs:w-4 h-3 xs:h-4 rotate-45`}
            style={{
              background: isBottomRow 
                ? `linear-gradient(315deg, ${colors.main} 50%, transparent 50%)`
                : `linear-gradient(135deg, ${colors.main} 50%, transparent 50%)`,
              borderLeft: isBottomRow ? 'none' : `1px solid ${colors.main}`,
              borderTop: isBottomRow ? 'none' : `1px solid ${colors.main}`,
              borderRight: isBottomRow ? `1px solid ${colors.main}` : 'none',
              borderBottom: isBottomRow ? `1px solid ${colors.main}` : 'none',
            }}
          />
          <p className="text-[10px] xs:text-xs sm:text-sm font-medium text-gray-800 line-clamp-2">
            {medal.event}
          </p>
        </div>
      </div>
    );
  };

  const MedalRow = ({ type, medals, color, shadowColor }) => (
    <div className="mb-6 sm:mb-8 md:mb-12">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center text-white mb-4 sm:mb-6 md:mb-8">
        {type.charAt(0).toUpperCase() + type.slice(1)} Medals
      </h2>
      <div className="flex flex-wrap justify-center gap-4 xs:gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-2 sm:px-4">
        {medals.map((medal) => (
          <MedalCard
            key={medal.id}
            medal={medal}
            color={color}
            shadowColor={shadowColor}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen p-3 xs:p-4 sm:p-6 md:p-8 relative bg-gradient-to-t from-gray-900 via-slate-900 to-neutral-950 overflow-x-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              background: 'white',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `floatBubble ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random()}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes floatBubble {
          0% { transform: translateY(100vh) scale(0); opacity: 0; }
          50% { opacity: 0.1; }
          100% { transform: translateY(-100px) scale(1); opacity: 0; }
        }

        @media (max-width: 640px) {
          @keyframes floatBubble {
            0% { transform: translateY(100vh) scale(0); opacity: 0; }
            50% { opacity: 0.08; }
            100% { transform: translateY(-50px) scale(0.8); opacity: 0; }
          }
        }
      `}</style>

      <div className="max-w-4xl mx-auto pt-4 sm:pt-6 md:pt-8">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-white mb-8 sm:mb-12 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-gray-300 to-orange-500 px-4">
          Our Achievements
        </h1>

        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          <MedalRow
            type="gold"
            medals={medals.gold}
            color="#FFD700"
            shadowColor="#B8860B"
          />
          <MedalRow
            type="silver"
            medals={medals.silver}
            color="#E6E8FA"
            shadowColor="#A9A9A9"
          />
          <MedalRow
            type="bronze"
            medals={medals.bronze}
            color="#CD7F32"
            shadowColor="#8B4513"
          />
        </div>
      </div>
    </div>
  );
};

export default MedalShowcase;
