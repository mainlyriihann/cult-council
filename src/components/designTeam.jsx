import React, { useState, useEffect } from 'react';
import { Paintbrush, Palette, Layers } from 'lucide-react';

const DesignTeamDisplay = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const teamMembers = [
    {
      name: 'Kumar Soham',
      role: 'Design Head',
      avatar: 'https://ik.imagekit.io/mrityunjay/soham.jpeg?updatedAt=1737970027739',
      color: 'from-rose-400 via-fuchsia-500 to-indigo-500',
      glowColor: 'rgba(244, 63, 94, 0.5)',
      icon: Paintbrush,
      skills: []
    },
    {
      name: 'Sambhav Gupta',
      role: 'Design Head',
      avatar: 'https://ik.imagekit.io/mrityunjay/sambhav.jpg?updatedAt=1737970027605',
      color: 'from-violet-400 via-purple-500 to-fuchsia-500',
      glowColor: 'rgba(167, 139, 250, 0.5)',
      icon: Palette,
      skills: []
    },
    {
      name: 'Om Utkarsh',
      role: 'Joint Head',
      avatar: 'https://ik.imagekit.io/mrityunjay/Om.png?updatedAt=1737970024182',
      color: 'from-blue-400 via-cyan-500 to-teal-500',
      glowColor: 'rgba(6, 182, 212, 0.5)',
      icon: Layers,
      skills: []
    }
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center px-4 py-16 md:py-24 relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black opacity-90"></div>
        
        {/* Animated Design Elements */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, rgba(167, 139, 250, 0.15) 2px, transparent 0),
              radial-gradient(circle at 2px 2px, rgba(244, 63, 94, 0.1) 2px, transparent 0)
            `,
            backgroundSize: '50px 50px, 25px 25px',
            animation: 'patternMove 20s linear infinite'
          }}>
        </div>

        {/* Floating Design Elements - Removed rotation */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-30"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              background: `linear-gradient(${Math.random() * 360}deg, 
                rgba(244, 63, 94, 0.3), 
                rgba(167, 139, 250, 0.3))`,
              borderRadius: '38% 62% 63% 37% / 41% 44% 56% 59%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `floatNoRotate ${Math.random() * 10 + 15}s linear infinite`,
              animationDelay: `-${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes patternMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50px); }
        }
        @keyframes floatNoRotate {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-20px, 20px); }
          50% { transform: translate(20px, -20px); }
          75% { transform: translate(20px, 20px); }
        }
        @keyframes neonPulse {
          0%, 100% { opacity: 0.8; filter: brightness(1); }
          50% { opacity: 1; filter: brightness(1.2); }
        }
      `}</style>

      <div className="relative max-w-7xl w-full z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-rose-400 via-fuchsia-500 to-violet-500 mb-6">Design Team</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-fuchsia-500"></div>
            <Palette className="w-6 h-6 text-fuchsia-400 animate-pulse" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-fuchsia-500"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="relative group"
              onMouseEnter={() => !isMobile && setHoveredMember(index)}
              onMouseLeave={() => !isMobile && setHoveredMember(null)}
            >
              {/* Member Card */}
              <div className="relative bg-slate-900/30 backdrop-blur-xl rounded-2xl p-1 
                transform transition-all duration-500 group-hover:scale-105">
                {/* Neon Border Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${member.color} rounded-2xl opacity-75 
                  group-hover:opacity-100 blur-sm transition-all duration-500 animate-neonPulse`}></div>
                
                {/* Content Container */}
                <div className="relative rounded-xl overflow-hidden">
                  {/* Image Container */}
                  <div className="relative aspect-square">
                    <div className={`absolute inset-0 bg-gradient-to-r ${member.color} 
                      opacity-75 mix-blend-overlay`}></div>
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 
                        group-hover:scale-110"
                    />
                    
                    {/* Hover Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                      transition-opacity duration-300 ${hoveredMember === index ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="absolute bottom-6 left-6 right-6">
                        <p className="text-xl font-bold text-white mb-1">{member.name}</p>
                        <p className="text-sm text-fuchsia-400 mb-3">{member.role}</p>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill, i) => (
                            <span key={i} 
                              className="text-xs px-2 py-1 rounded-full bg-white/10 text-white
                                backdrop-blur-sm border border-white/10">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Icon - Removed rotation */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-slate-900/80 rounded-xl
                  flex items-center justify-center border border-white/20 backdrop-blur-sm
                  transition-all duration-300">
                  <member.icon className={`w-6 h-6 text-gradient-to-r ${member.color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignTeamDisplay;
