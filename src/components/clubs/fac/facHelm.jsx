import React, { useState, useEffect } from 'react';

const FacHelm = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [longPressedMember, setLongPressedMember] = useState(null);
  const longPressTimeout = React.useRef(null);

  const teamMembers = [
    {
      name: 'Vedant Zilpe',
      role: 'Joint Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/VedantZilpeFac.jpg?updatedAt=1737979239443',
      color: 'bg-blue-100',
    },
    {
      name: 'Aditya Raut',
      role: 'Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/AdityaRautFac.jpg?updatedAt=1737979266576',
      color: 'bg-purple-100',
    },
    {
      name: 'Shrishti Singh',
      role: 'Joint Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/ShristiSinghFac.jpg?updatedAt=1737979240535',
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
    <div className="bg-gradient-to-t from-slate-900 via-emerald-900 to-slate-800 flex items-center justify-center p-4 relative py-14">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              background: 'linear-gradient(45deg, rgba(16, 185, 129, 0.3), rgba(6, 95, 70, 0.3))',
              boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)',
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
          0% { transform: translateY(100vh) scale(0) rotate(0deg); opacity: 0; }
          50% { opacity: 0.2; }
          100% { transform: translateY(-100px) scale(1) rotate(360deg); opacity: 0; }
        }
      `}</style>

      <div className="relative max-w-6xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
            Our Helm
          </h2>
          <p className="text-gray-400 mt-3 text-lg">Meet our Visionary Leaders</p>
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
              {(hoveredMember === index || longPressedMember === index) && (
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-xl shadow-lg transform transition-all duration-300 border border-white/20">
                  <p className="text-sm font-semibold whitespace-nowrap text-white">{member.role}</p>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/10 backdrop-blur-md transform rotate-45 border-r border-b border-white/20"></div>
                </div>
              )}

              <div
                className={`relative rounded-full overflow-hidden transform transition-all duration-300 ${
                  hoveredMember === index || longPressedMember === index ? 'scale-110' : 'scale-100'
                }`}
                style={{
                  width: isMobile ? '8rem' : '14rem',
                  height: isMobile ? '8rem' : '14rem',
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-tr from-${member.color.split('-')[1]}-500 to-${member.color.split('-')[1]}-300 opacity-80`}></div>
                
                <div className="absolute inset-1 bg-black rounded-full overflow-hidden backdrop-blur-sm border border-white/20">
                  <div className="w-full h-full relative">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 left-0 right-0 text-center transition-all duration-300">
                <div className={`backdrop-blur-md bg-white/10 mx-auto py-2 px-4 rounded-xl border border-white/20 inline-block ${
                  isMobile ? 'hidden' : 'block'
                }`}>
                  <p className="text-sm font-semibold text-white">{member.name}</p>
                </div>
              </div>

              {isMobile && longPressedMember === index && (
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 backdrop-blur-md bg-white/10 px-6 py-3 rounded-xl border border-white/20">
                  <p className="text-sm font-semibold text-white">{member.name}</p>
                  <p className="text-xs text-gray-300">{member.role}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacHelm;