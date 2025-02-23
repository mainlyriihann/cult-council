import React, { useState, useEffect } from 'react';
import { Star, Award, Trophy, Target, Zap } from 'lucide-react';

const SeniorTeamDisplay = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [longPressedMember, setLongPressedMember] = useState(null);
  const longPressTimeout = React.useRef(null);

  const seniorTeam = [
    {
      name: 'Harshit Mishra',
      role: 'Joint General Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/harshit.JPG?updatedAt=1737970024108',
      color: 'from-cyan-500 to-blue-600',
      glow: 'cyan',
      icon: Target,
      position: 'left'
    },
    {
      name: 'Somil Mittal',
      role: 'General Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/somil.jpg?updatedAt=1737970028403',
      color: 'from-purple-500 to-pink-600',
      glow: 'purple',
      icon: Trophy,
      position: 'center'
    },
    {
      name: 'Rohit Kaushik',
      role: 'Joint General Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/rohit.jpeg?updatedAt=1738139911010',
      color: 'from-blue-500 to-indigo-600',
      glow: 'blue',
      icon: Zap,
      position: 'right'
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getZIndex = (position, isHovered) => {
    if (isHovered) return 30;
    if (position === 'center') return hoveredMember === null ? 20 : 10;
    return 10;
  };

  const handleLongPressStart = (index) => {
    longPressTimeout.current = setTimeout(() => {
      setLongPressedMember(index);
    }, 200); 
  };

  const handleLongPressEnd = () => {
    clearTimeout(longPressTimeout.current);
    setLongPressedMember(null); // Hide the name and role after releasing
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated cyber grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black opacity-90"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(transparent 1px, #0a0a0a 1px), linear-gradient(90deg, transparent 1px, #0a0a0a 1px)',
          backgroundSize: '30px 30px',
          animation: 'gridMove 20s linear infinite',
        }}></div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(30px); }
        }
        @keyframes pulseGlow {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      <div className="relative max-w-7xl z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-purple-400 to-cyan-400 pb-6 animate-fade-in-up">Cultural Council</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wider">HELM TEAM</h3>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500"></div>
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          {seniorTeam.map((member, index) => {
            const isCenter = member.position === 'center';
            const isHovered = hoveredMember === index;

            return (
              <div
                key={member.name}
                className={`relative transition-all duration-500 animate-float ${
                  isCenter ? 'md:scale-110' : 'md:scale-100'
                }`}
                style={{ 
                  animation: 'float 6s ease-in-out infinite',
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div
                  className="relative group cursor-pointer"
                  onMouseEnter={() => !isMobile && setHoveredMember(index)}
                  onMouseLeave={() => !isMobile && setHoveredMember(null)}
                  onTouchStart={() => isMobile && handleLongPressStart(index)}
                  onTouchEnd={() => isMobile && handleLongPressEnd()}
                >
                  {/* Glow effect container */}
                  <div className={`absolute -inset-2 bg-gradient-to-r ${member.color} 
                    rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500
                    animate-pulse`}></div>

                  {/* Avatar container */}
                  <div className={`relative w-32 h-32 md:w-56 md:h-56 rounded-full 
                    transform transition-all duration-500 
                    ${isHovered ? 'scale-110' : 'scale-100'}`}>
                    
                    {/* Cyber frame */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${member.color} 
                      rounded-full p-1`}>
                      <div className="absolute inset-0 bg-black rounded-full m-0.5">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-full h-full object-cover rounded-full transition-transform 
                            duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Info card */}
                  <div className={`absolute -bottom-24 left-1/2 -translate-x-1/2 w-48 md:w-56
                    transition-all duration-500 ${isHovered ? 'opacity-100 transform -translate-y-4' : 'opacity-0'}`}>
                    <div className="backdrop-blur-xl bg-white/10 rounded-xl p-4 border border-white/20
                      shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                      <p className="text-white font-bold text-lg">{member.name}</p>
                      <p className="text-gray-300 text-sm mt-1">{member.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SeniorTeamDisplay;



