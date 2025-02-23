import React, { useState, useEffect } from 'react';

const QuizHelm = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [longPressedMember, setLongPressedMember] = useState(null);
  const longPressTimeout = React.useRef(null);

  const teamMembers = [
    {
      name: 'Priyadarshi Annupam',
      role: 'Joint Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/PriyadarshiQuiz.jpg?updatedAt=1737979640127',
      color: 'bg-blue-100',
    },
    {
      name: 'Aayush Bhat',
      role: 'Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/jtSecyQuiz2.jpeg?updatedAt=1737979640147',
      color: 'bg-purple-100',
    },
    {
      name: 'Avanish Dhapare',
      role: 'Joint Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/jtSecyQuiz1.jpeg?updatedAt=1737979640038',
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
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 
                    flex items-center justify-center p-4 relative py-14">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,255,0.1),transparent_50%)]"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.5), rgba(147, 51, 234, 0.5))',
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
          50% { opacity: 0.1; }
          100% { transform: translateY(-100px) scale(1) rotate(360deg); opacity: 0; }
        }
      `}</style>

      <div className="relative max-w-6xl z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 
                        bg-clip-text text-transparent">Our Helm</h2>
          <p className="text-slate-400 mt-2">Meet our Helm Team</p>
        </div>

        {/* Update the team members container and styling */}
        <div className="flex justify-center items-center -space-x-8 flex-wrap">
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
              {/* Enhanced tooltip */}
              {(hoveredMember === index || longPressedMember === index) && (
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 
                              bg-gradient-to-r from-slate-800 to-slate-900
                              px-4 py-2 rounded-xl border border-purple-500/50
                              shadow-[0_0_20px_rgba(124,58,237,0.3)] backdrop-blur-sm">
                  <p className="text-sm font-semibold text-white whitespace-nowrap">{member.role}</p>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 
                                bg-gradient-to-r from-slate-800 to-slate-900 transform rotate-45 
                                border-r border-b border-purple-500/50"></div>
                </div>
              )}

              {/* Enhanced avatar container */}
              <div
                className={`relative rounded-full overflow-hidden transform transition-all duration-500
                          ${hoveredMember === index || longPressedMember === index ? 'scale-110' : 'scale-100'}`}
                style={{
                  width: isMobile ? '6rem' : '12rem',
                  height: isMobile ? '6rem' : '12rem',
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                                transition-all duration-500
                                ${hoveredMember === index || longPressedMember === index ? 'scale-105' : 'scale-100'}`}></div>

                <div className="absolute inset-2 bg-gradient-to-r from-slate-800 to-slate-900 
                              rounded-full overflow-hidden border border-purple-500/30">
                  <div className="w-full h-full relative">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 
                               group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 
                                   transition-opacity duration-300
                                   ${hoveredMember === index || longPressedMember === index ? 'opacity-100' : 'opacity-0'}`}></div>
                  </div>
                </div>
              </div>

              {/* Enhanced name display */}
              <div className="absolute -bottom-8 left-0 right-0 text-center transition-all duration-300">
                <div className={`bg-gradient-to-r from-slate-800 to-slate-900 mx-4 py-2 px-4 
                                rounded-xl border border-purple-500/30 shadow-[0_0_15px_rgba(124,58,237,0.2)]
                                ${isMobile ? 'hidden' : 'block'}`}>
                  <p className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 
                              bg-clip-text text-transparent">{member.name}</p>
                </div>
              </div>

              {/* Enhanced mobile long press display */}
              {isMobile && longPressedMember === index && (
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 
                              bg-gradient-to-r from-slate-800 to-slate-900
                              px-4 py-2 rounded-xl border border-purple-500/50
                              shadow-[0_0_20px_rgba(124,58,237,0.3)] backdrop-blur-sm">
                  <p className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 
                              bg-clip-text text-transparent">{member.name}</p>
                  <p className="text-xs text-slate-300">{member.role}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizHelm;