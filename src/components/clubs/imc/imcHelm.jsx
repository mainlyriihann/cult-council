import React, { useState, useEffect } from 'react';

const ImcHelm = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [longPressedMember, setLongPressedMember] = useState(null);
  const longPressTimeout = React.useRef(null);

  const teamMembers = [
    {
      name: 'Mehul Goyal',
      role: 'Joint Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/mehulimc.jpg?updatedAt=1737978885902',
      color: 'bg-blue-100',
    },
    {
      name: 'Vinayak Tyagi',
      role: 'Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/VinayakImc.jpg?updatedAt=1737978885928',
      color: 'bg-purple-100',
    },
    {
      name: 'Punyansh Juneja',
      role: 'Joint Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/punyansh_imc.png?updatedAt=1737978886150',
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
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4 relative py-32">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'center top'
          }}
        />
      </div>

      <div className="relative max-w-7xl w-full z-10">
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent pb-2">
              Our Helm
            </h2>
            {/* Decorative lines */}
            <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <div className="absolute -bottom-4 left-[10%] w-[80%] h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          </div>
          <p className="text-cyan-400/80 mt-8 text-lg md:text-xl">Meet the Visionaries Leading Our Journey</p>
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
            >
              {/* Hexagonal Frame */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-lg transform rotate-45 scale-[0.7] group-hover:scale-[0.75] transition-transform duration-500" />
              
              {/* Avatar Container */}
              <div className="relative w-[280px] h-[320px] bg-slate-900/90 rounded-lg overflow-hidden backdrop-blur-xl transform transition-all duration-500 group-hover:scale-105">
                {/* Glowing Effects */}
                <div className="absolute inset-0 opacity-75 mix-blend-overlay bg-gradient-to-b from-transparent via-cyan-500/10 to-cyan-500/20" />
                
                {/* Image */}
                <div className="h-[220px] overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Info Section */}
                <div className="absolute bottom-0 left-0 right-0 bg-slate-900/95 p-6 backdrop-blur-sm">
                  <h3 className="text-cyan-300 font-semibold text-xl mb-1">{member.name}</h3>
                  <p className="text-cyan-400/80 text-sm">{member.role}</p>
                  
                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-[10%] w-[80%] h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                </div>

                {/* Hover Effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400" />
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyan-400" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyan-400" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-400" />
            </div>
          ))}
        </div>
      </div>

      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
            style={{
              top: `${20 * i}%`,
              animation: `scanline 8s ${i * 1.5}s linear infinite`,
              opacity: 0.5,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes scanline {
          0% { transform: translateY(100vh); }
          100% { transform: translateY(-100vh); }
        }
      `}</style>
    </div>
  );
};

export default ImcHelm;