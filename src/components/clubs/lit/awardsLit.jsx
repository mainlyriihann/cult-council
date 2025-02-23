import React, { useState } from 'react';

const medals = [
  { id: 1, src: '/gold.png', title: 'English Poetry Slam', year: '', location: 'Antaragni, IIT Kanpur' },
  { id: 2, src: '/silver.png', title: 'Hindi Extempore', year: '', location: 'Antaragni, IIT Kanpur' },
  { id: 3, src: '/silver.png', title: 'Hindi Prose Writing', year: '', location: "Kashiyatra'18" },
  { id: 4, src: '/bronze.png', title: 'Hindi Debate', year: '2020', location: 'Antaragni, IIT Kanpur' },
];

const LitMedalShowcase = () => {
  const [hoveredMedal, setHoveredMedal] = useState(null);

  return (
    <div className="w-full px-4 bg-slate-950 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="hidden md:flex justify-center items-center space-x-12">
          {medals.map((medal) => (
            <div
              key={medal.id}
              className="relative group w-40 h-40 flex-shrink-0 cursor-pointer"
              onMouseEnter={() => setHoveredMedal(medal.id)}
              onMouseLeave={() => setHoveredMedal(null)}
            >
              <div className="absolute inset-0 bg-purple-500/20 rounded-full group-hover:bg-purple-500/30 transition-all duration-300" />
              <img
                src={medal.src}
                alt={medal.title}
                className="w-full h-full object-contain rounded-full transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
              />

              {hoveredMedal === medal.id && (
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-slate-900 to-purple-900 text-white px-6 py-4 rounded-2xl shadow-xl shadow-purple-500/20 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 min-w-[200px] backdrop-blur-sm border border-purple-500/30">
                  <p className="font-bold text-lg text-center">{medal.title}</p>
                  <p className="text-sm mt-2 text-center text-purple-200">{medal.year}</p>
                  <p className="text-sm text-center text-purple-200">{medal.location}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="grid md:hidden grid-cols-1 gap-8 mt-8">
          {medals.map((medal) => (
            <div key={medal.id} className="transform transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-slate-900 to-purple-900 p-6 rounded-2xl border border-purple-500/30 shadow-xl">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="absolute inset-0 bg-purple-500/20 rounded-full" />
                  <img src={medal.src} alt={medal.title} className="w-full h-full object-contain rounded-full" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-lg text-white">{medal.title}</p>
                  <p className="text-sm text-purple-200">{medal.year}</p>
                  <p className="text-sm text-purple-200">{medal.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LitMedalShowcase;
