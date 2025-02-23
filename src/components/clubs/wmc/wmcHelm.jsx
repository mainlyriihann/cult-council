import React, { useState, useEffect } from 'react';

const WmcHelm = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [longPressedMember, setLongPressedMember] = useState(null);
  const longPressTimeout = React.useRef(null);

  const teamMembers = [
    {
      name: 'Kalyani Pande',
      role: 'Joint Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/KalyaniWMC.jpg?updatedAt=1737979509507',
      color: 'bg-blue-100',
    },
    {
      name: 'Anubhav Bhushan',
      role: 'Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/SecyWmc.jpg?updatedAt=1737979509777',
      color: 'bg-purple-100',
    },
    {
      name: 'Devraj Singh Bhogal',
      role: 'Joint Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/JtSecyWmc.jpg?updatedAt=1737979508967',
      color: 'bg-pink-100',
    },
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
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-gray-900 to-slate-900 flex items-center justify-center p-4 py-14 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              background: 'linear-gradient(45deg, #ff3d00, #00e5ff)',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `floatBubble ${Math.random() * 15 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              filter: 'blur(8px)',
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes floatBubble {
          0% { transform: translateY(100vh) rotate(0deg) scale(0); opacity: 0; }
          50% { opacity: 0.15; }
          100% { transform: translateY(-100vh) rotate(360deg) scale(1); opacity: 0; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }

        .animation-delay-2000 {
          animation-delay: -2s;
        }
      `}</style>

      <div className="relative max-w-7xl w-full z-10">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
            Our Helm
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mt-2 font-light">
            The Visionaries Behind Western Music Club
          </p>
        </div>

        <div className="flex justify-center items-center gap-6 md:gap-12 lg:gap-16 flex-wrap">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="relative group"
              onMouseEnter={() => !isMobile && setHoveredMember(index)}
              onMouseLeave={() => !isMobile && setHoveredMember(null)}
              onTouchStart={() => isMobile && handleLongPressStart(index)}
              onTouchEnd={() => isMobile && handleLongPressEnd()}
              style={{ zIndex: hoveredMember === index || longPressedMember === index ? 10 : 1 }}
            >
              {/* Role Tooltip */}
              {(hoveredMember === index || longPressedMember === index) && (
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 backdrop-blur-xl bg-white/10 px-6 py-3 rounded-2xl shadow-xl transform transition-all duration-300 border border-white/20 group-hover:scale-105">
                  <p className="text-white font-medium whitespace-nowrap text-base md:text-lg">{member.role}</p>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 backdrop-blur-xl bg-white/10 transform rotate-45 border-r border-b border-white/20"></div>
                </div>
              )}

              {/* Avatar Container */}
              <div
                className={`relative rounded-full overflow-hidden transform transition-all duration-500 
                  ${hoveredMember === index || longPressedMember === index 
                    ? 'scale-110 shadow-[0_0_50px_rgba(255,255,255,0.3)]' 
                    : 'scale-100 shadow-[0_0_30px_rgba(255,255,255,0.1)]'
                  } 
                  hover:shadow-[0_0_50px_rgba(255,255,255,0.3)]`}
                style={{
                  width: isMobile ? '10rem' : '14rem',
                  height: isMobile ? '10rem' : '14rem',
                }}
              >
                {/* Animated border effect */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 animate-spin-slow opacity-75" />
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-blue-500 to-purple-500 animate-spin-slow opacity-75 animation-delay-2000" />
                </div>
                
                <div className="absolute inset-[2px] rounded-full overflow-hidden backdrop-blur-sm bg-slate-900/90 group-hover:inset-[1px] transition-all duration-300">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Name Display */}
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-full text-center">
                <div className="backdrop-blur-xl bg-white/10 mx-auto py-2.5 px-6 rounded-2xl border border-white/20 
                  transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105 shadow-lg
                  max-w-[90%] md:max-w-none">
                  <p className="text-white font-medium text-sm md:text-base truncate">{member.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WmcHelm;