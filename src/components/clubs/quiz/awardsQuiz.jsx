import React, { useState } from 'react';

const medals = [
  { id: 1, src: '/silver.png', title: 'Genral QUiz', year: '', location: 'Inter IIT Cult  ' },
  { id: 2, src: '/silver.png', title: 'Sports Quiz', year: '', location: 'Inter IIT Cult' },
  { id: 3, src: '/bronze.png', title: 'TV Quiz', year: '', location: 'Antaragini, IIT Kanpur' },
  { id: 4, src: '/bronze.png', title: 'India Quiz', year: '', location: 'Gnosiomania, MNNIT' },
];

const QuizMedalShowcase = () => {
  const [hoveredMedal, setHoveredMedal] = useState(null);

  return (
    <div className="w-full px-4 bg-gradient-to-b from-slate-950 to-slate-900 pb-20 relative">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,255,0.1),transparent_50%)]"></div>
        <div className="grid grid-cols-8 gap-8 opacity-10">
          {[...Array(64)].map((_, i) => (
            <div
              key={i}
              className="w-full h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
              style={{
                transform: `translateY(${Math.sin(i * 0.5) * 20}px)`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center space-x-12 scrollbar-none relative z-10">
        {medals.map((medal) => (
          <div
            key={medal.id}
            className="relative group w-40 h-40 flex-shrink-0 perspective-1000"
            onMouseEnter={() => setHoveredMedal(medal.id)}
            onMouseLeave={() => setHoveredMedal(null)}
          >
            <div className="relative transform transition-all duration-500 group-hover:rotate-y-180">
              <img
                src={medal.src}
                alt={medal.title}
                className="w-full h-full object-cover rounded-2xl transition-all duration-500 
                         group-hover:scale-110 shadow-[0_0_15px_rgba(124,58,237,0.5)]
                         group-hover:shadow-[0_0_30px_rgba(124,58,237,0.8)]"
              />
              
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 
                            rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            </div>

            {hoveredMedal === medal.id && (
              <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 
                            bg-gradient-to-r from-slate-800 to-slate-900 text-white
                            px-6 py-3 rounded-xl border border-purple-500/50
                            shadow-[0_0_20px_rgba(124,58,237,0.3)] backdrop-blur-sm
                            transition-all duration-300 opacity-0 group-hover:opacity-100 
                            scale-95 group-hover:scale-100 min-w-[200px]">
                <p className="font-bold text-lg bg-gradient-to-r from-blue-400 to-purple-400 
                            bg-clip-text text-transparent">{medal.title}</p>
                <p className="text-sm mt-2 text-slate-300">{medal.year}</p>
                <p className="text-sm text-slate-300">{medal.location}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="block md:hidden mt-12 space-y-6">
        {medals.map((medal) => (
          <div key={medal.id} className="relative transform transition-all duration-300 hover:scale-105">
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-4 border border-purple-500/30
                          shadow-[0_0_15px_rgba(124,58,237,0.2)]">
              <img 
                src={medal.src} 
                alt={medal.title} 
                className="w-32 h-32 mx-auto rounded-lg object-cover
                         shadow-[0_0_10px_rgba(124,58,237,0.3)]" 
              />
              <div className="text-center mt-4">
                <p className="font-bold text-lg bg-gradient-to-r from-blue-400 to-purple-400 
                            bg-clip-text text-transparent">{medal.title}</p>
                <p className="text-slate-300 mt-1">{medal.year}</p>
                <p className="text-slate-300">{medal.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizMedalShowcase;
