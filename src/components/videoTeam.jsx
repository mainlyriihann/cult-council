import React, { useState, useEffect } from 'react';
import { Film, Play, Video } from 'lucide-react';

const VideoTeamDisplay = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [longPressedMember, setLongPressedMember] = useState(null);
  const longPressTimeout = React.useRef(null);

  const teamMembers = [
    {
      name: 'Kridahi Narsimha',
      role: 'Joint Head',
      avatar: 'https://ik.imagekit.io/mrityunjay/7.jpg?updatedAt=1737970023102',
      color: 'from-blue-500 to-cyan-400',
      icon: Film
    },
    {
      name: 'Kushagra Verma',
      role: 'Video Head',
      avatar: 'https://ik.imagekit.io/mrityunjay/6.jpg?updatedAt=1737970022874',
      color: 'from-purple-500 to-pink-400',
      icon: Video
    },
    {
      name: 'Utkarsh Singh Rana',
      role: 'Joint Head',
      avatar: 'https://ik.imagekit.io/mrityunjay/8.jpg?updatedAt=1737970023106',
      color: 'from-indigo-500 to-blue-400',
      icon: Play
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

  const handleLongPressStart = (index) => {
    longPressTimeout.current = setTimeout(() => {
      setLongPressedMember(index);
    }, 500); // Long press duration (500ms)
  };

  const handleLongPressEnd = () => {
    clearTimeout(longPressTimeout.current);
    setLongPressedMember(null); // Hide the name and role after releasing
  };

  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center px-4 py-16 md:py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black opacity-90"></div>
        
        {/* Animated grid */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'gridMove 20s linear infinite'
          }}>
        </div>

        {/* Floating orbs */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20 blur-lg"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3), transparent)',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `floatBubble ${Math.random() * 15 + 15}s linear infinite`,
              animationDelay: `-${Math.random() * 15}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(40px); }
        }
        @keyframes floatBubble {
          0% { transform: translate(0, 100vh) scale(0.5); opacity: 0; }
          50% { opacity: 0.2; }
          100% { transform: translate(0, -100vh) scale(1); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
        }
      `}</style>

      <div className="relative max-w-7xl w-full z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-cyan-400 via-blue-500 to-purple-500 mb-4">Video Team</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500"></div>
            <Film className="w-6 h-6 text-cyan-400 animate-pulse" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="relative group mx-auto w-full max-w-sm"
              onMouseEnter={() => !isMobile && setHoveredMember(index)}
              onMouseLeave={() => !isMobile && setHoveredMember(null)}
              onTouchStart={() => isMobile && handleLongPressStart(index)}
              onTouchEnd={() => isMobile && handleLongPressEnd()}
            >
              {/* Member Card */}
              <div className="relative bg-slate-900/50 rounded-2xl p-1 backdrop-blur-sm
                transform transition-all duration-500 group-hover:scale-105">
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${member.color} 
                  rounded-2xl opacity-50 group-hover:opacity-75 blur transition-all duration-500`}></div>
                
                {/* Content Container */}
                <div className="relative rounded-xl overflow-hidden aspect-square">
                  <div className={`absolute inset-0 bg-gradient-to-r ${member.color} 
                    opacity-75 animate-pulse`}></div>
                  
                  {/* Image */}
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="relative z-10 w-full h-full object-cover transition-transform 
                      duration-500 group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                    transition-opacity duration-300 ${hoveredMember === index ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-lg font-bold">{member.name}</p>
                      <p className="text-sm text-cyan-400">{member.role}</p>
                    </div>
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-slate-900 rounded-full
                  flex items-center justify-center border-2 border-cyan-400 z-20">
                  <member.icon className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoTeamDisplay;
