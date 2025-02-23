import React, { useState, useEffect } from 'react';

const AavranHelm = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [longPressedMember, setLongPressedMember] = useState(null);
  const longPressTimeout = React.useRef(null);

  const teamMembers = [
    {
      name: 'Mehul Kassi',
      role: 'Joint Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/mehulAavran.jpg?updatedAt=1737978833148',
      color: 'bg-blue-100',
    },
    {
      name: 'Sanchita Kalra',
      role: 'Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/sanchitaAavran.jpg?updatedAt=1737978832707',
      color: 'bg-purple-100',
    },
    {
      name: 'Smarth Sood',
      role: 'Joint Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/smarthAavran.jpeg?updatedAt=1737978829085',
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
    <div className="bg-gradient-to-b from-purple-950 via-[#150025] to-black flex items-center justify-center p-4 relative py-14">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              background: 'linear-gradient(45deg, #bf00ff, #7000ff)',
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
          50% { opacity: 0.05; }
          100% { transform: translateY(-100px) scale(1); opacity: 0; }
        }
        @keyframes glowPulse {
          0% { box-shadow: 0 0 10px #bf00ff; }
          50% { box-shadow: 0 0 25px #bf00ff; }
          100% { box-shadow: 0 0 10px #bf00ff; }
        }
      `}</style>

      <div className="relative max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
            Our Helm
          </h2>
          <p className="text-purple-300 mt-2">Leading the Future</p>
        </div>

        <div className="flex justify-center items-center gap-8 flex-wrap">
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
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-purple-900/90 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 border border-purple-500/30">
                  <p className="text-purple-100 text-sm font-semibold whitespace-nowrap">{member.role}</p>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-900 transform rotate-45 border-r border-b border-purple-500/30"></div>
                </div>
              )}

              {/* Avatar Container */}
              <div
                className={`relative rounded-full overflow-hidden transform transition-all duration-500 ${
                  hoveredMember === index || longPressedMember === index ? 'scale-110' : 'scale-100'
                }`}
                style={{
                  width: isMobile ? '7rem' : '13rem',
                  height: isMobile ? '7rem' : '13rem',
                  animation: (hoveredMember === index || longPressedMember === index) ? 'glowPulse 2s infinite' : 'none'
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-tr from-purple-600 to-pink-500 transition-all duration-500 ${
                  hoveredMember === index || longPressedMember === index ? 'scale-105 opacity-70' : 'scale-100 opacity-50'
                }`}></div>

                <div className="absolute inset-1.5 bg-purple-950 rounded-full overflow-hidden backdrop-blur-sm">
                  <div className="w-full h-full relative">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-purple-900/30 transition-opacity duration-300 ${
                      hoveredMember === index || longPressedMember === index ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                  </div>
                </div>
              </div>

              {/* Name Display */}
              <div className="absolute -bottom-8 left-0 right-0 text-center transition-all duration-300">
                <div className={`bg-purple-900/90 backdrop-blur-sm mx-4 py-2 px-4 rounded-lg border border-purple-500/30 ${
                  isMobile ? 'hidden' : 'block'
                }`}>
                  <p className="text-sm font-semibold text-purple-100">{member.name}</p>
                </div>
              </div>

              {/* Mobile Long Press Name */}
              {isMobile && longPressedMember === index && (
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-purple-900/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-purple-500/30">
                  <p className="text-sm font-semibold text-purple-100">{member.name}</p>
                  <p className="text-xs text-purple-300">{member.role}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AavranHelm;