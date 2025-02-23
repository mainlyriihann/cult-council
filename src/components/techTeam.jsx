import React, { useState, useEffect } from 'react';
import { Code2, Binary, Cpu } from 'lucide-react';

const TechTeamDisplay = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const techTeam = [
    {name: 'Laxmi Kumari',
      role: 'Tech Lead',
      avatar: '../public/laxmi.jpg',
      color: 'from-emerald-400 to-cyan-500',
      accent: 'emerald',
      icon: Binary,
      skills: []
      
    },
    { name: 'Mrityunjay Tiwari',
      role: 'Tech Lead',
      avatar: '../public/PP.jpg',
      color: 'from-cyan-400 to-blue-500',
      accent: 'cyan',
      icon: Code2,
      skills:[]
      
    },
    {
      name: 'Nishant Rihan',
      role: 'Tech Developer',
      avatar: '../public/nishant.jpg',
      color: 'from-blue-400 to-indigo-500',
      accent: 'blue',
      icon: Cpu,
      skills:[]
    }
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 py-16 md:py-24 relative overflow-hidden">
      {/* Animated Circuit Background - Updated circle sizes */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black opacity-90"></div>
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              radial-gradient(circle at 4px 4px, rgba(0, 255, 255, 0.15) 2px, transparent 0),
              radial-gradient(circle at 4px 4px, rgba(0, 255, 255, 0.1) 2px, transparent 0)
            `,
            backgroundSize: '60px 60px, 30px 30px',
            animation: 'circuitMove 20s linear infinite'
          }}>
        </div>
        {/* Added floating circles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20 blur-sm"
            style={{
              width: `${Math.random() * 300 + 100}px`, // Increased size
              height: `${Math.random() * 300 + 100}px`, // Increased size
              background: 'radial-gradient(circle, rgba(0, 255, 255, 0.2), transparent)',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `floatBubble ${Math.random() * 15 + 15}s linear infinite`,
              animationDelay: `-${Math.random() * 15}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes circuitMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(-30px); }
        }
        @keyframes dataFlow {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        @keyframes floatBubble {
          0% { transform: translate(0, 100%) scale(0.5); opacity: 0; }
          50% { opacity: 0.2; }
          100% { transform: translate(0, -100%) scale(1); opacity: 0; }
        }
      `}</style>

      <div className="relative max-w-7xl w-full z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-cyan-400 via-blue-500 to-emerald-400 mb-4 md:mb-6">Tech Team</h2>
          <div className="flex items-center justify-center gap-2 md:gap-3">
            <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-cyan-500"></div>
            <Binary className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 animate-pulse" />
            <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-cyan-500"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 px-4 sm:px-6 md:px-8">
          {techTeam.map((member, index) => (
            <div
              key={member.name}
              className="relative group mx-auto w-full max-w-sm"
              onMouseEnter={() => !isMobile && setHoveredMember(index)}
              onMouseLeave={() => !isMobile && setHoveredMember(null)}
              onTouchStart={() => isMobile && setHoveredMember(index)}
              onTouchEnd={() => isMobile && setHoveredMember(null)}
            >
              {/* Tech Flow Lines */}
              <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-0.5 h-12 bg-gradient-to-b ${member.color}`}
                    style={{
                      left: `${20 * i}%`,
                      animation: `dataFlow ${1 + i * 0.5}s linear infinite`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  />
                ))}
              </div>

              {/* Member Card */}
              <div className="relative bg-slate-900/50 rounded-xl p-1 backdrop-blur-sm
                transform transition-all duration-500 group-hover:scale-105 z-10">
                <div className={`absolute inset-0 bg-gradient-to-r ${member.color} rounded-xl opacity-20
                  group-hover:opacity-30 transition-opacity duration-500`} />
                
                {/* Avatar Container */}
                <div className="relative rounded-xl overflow-hidden aspect-square">
                  <div className={`absolute inset-0 bg-gradient-to-r ${member.color} opacity-75
                    animate-pulse`} />
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="relative z-10 w-full h-full object-cover transition-transform duration-500
                      group-hover:scale-110"
                  />
                </div>

                {/* Info Card */}
                <div className={`absolute -bottom-28 sm:-bottom-24 left-1/2 -translate-x-1/2 w-[90%] 
                  transition-all duration-500 z-20 
                  ${hoveredMember === index ? 'opacity-100 transform translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="backdrop-blur-xl bg-white/10 rounded-xl p-4 border border-white/20
                    shadow-lg shadow-black/50">
                    <p className="text-white font-bold text-base sm:text-lg">{member.name}</p>
                    <p className="text-cyan-300 text-xs sm:text-sm mb-2">{member.role}</p>
                    <div className="flex gap-1.5 sm:gap-2 flex-wrap">
                      {member.skills.map((skill, i) => (
                        <span key={i} 
                          className="text-[10px] sm:text-xs bg-white/10 px-2 py-0.5 sm:py-1 
                            rounded-full text-cyan-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechTeamDisplay;




