import React, { useState, useEffect } from 'react';

const LitHelm = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [longPressedMember, setLongPressedMember] = useState(null);
  const longPressTimeout = React.useRef(null);

  const teamMembers = [
    {
      name: 'Satwik Srivastava',
      role: 'Joint Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/satwikJtsecyLit.jpg?updatedAt=1737979022463',
      color: 'bg-blue-100',
    },
    {
      name: 'Gunjit Jain',
      role: 'Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/litSecy.jpg?updatedAt=1737979024010',
      color: 'bg-purple-100',
    },
    {
      name: 'Laavnya Srivastava',
      role: 'Joint Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/laavnyaJtsecyLit.jpg?updatedAt=1737979023108', 
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
    <div className="bg-gradient-to-t from-[#020617] via-[#0f172a]/90 to-[#1e293b] flex items-center justify-center p-4 relative py-20">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)',
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
          50% { opacity: 0.15; }
          100% { transform: translateY(-100px) scale(1); opacity: 0; }
        }
      `}</style>

      <div className="relative max-w-6xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Our Helm</h2>
          <p className="text-purple-200/60 mt-3 text-lg">Meet our Leadership Team</p>
        </div>

        <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
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
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-900 to-indigo-900 px-6 py-3 rounded-xl shadow-lg transform transition-all duration-300 border border-purple-500/30 backdrop-blur-sm">
                  <p className="text-purple-100 font-medium whitespace-nowrap">{member.role}</p>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-900 transform rotate-45"></div>
                </div>
              )}

              {/* Avatar Container */}
              <div
                className={`relative rounded-full overflow-hidden transform transition-all duration-500 ${
                  hoveredMember === index || longPressedMember === index ? 'scale-110' : 'scale-100'
                }`}
                style={{
                  width: isMobile ? '8rem' : '14rem',
                  height: isMobile ? '8rem' : '14rem',
                }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                
                <div className={`absolute inset-0 ${member.color} opacity-80 transition-all duration-300 group-hover:opacity-90`} />

                <div className="absolute inset-2 bg-gradient-to-br from-purple-100 to-white rounded-full overflow-hidden shadow-inner">
                  <div className="w-full h-full relative">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>

              {/* Name Display */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full transition-all duration-300">
                <div className={`bg-gradient-to-r from-purple-900 to-indigo-900 mx-auto py-2 px-6 rounded-xl shadow-lg border border-purple-500/30 backdrop-blur-sm ${
                  isMobile ? 'hidden' : 'block'
                }`}>
                  <p className="text-purple-100 font-medium text-center">{member.name}</p>
                </div>
              </div>

              {/* Mobile Long Press Info */}
              {isMobile && longPressedMember === index && (
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-900 to-indigo-900 px-6 py-3 rounded-xl shadow-lg border border-purple-500/30 backdrop-blur-sm">
                  <p className="text-purple-100 font-medium text-center">{member.name}</p>
                  <p className="text-purple-200/80 text-sm text-center">{member.role}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LitHelm;