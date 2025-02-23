import React, { useState } from 'react';

const medals = [
  { id: 1, src: '/gold.png', title: 'Face Painting', year: '2024', location: 'Thomso,IIT Roorkee' },
  { id: 2, src: '/silver.png', title: 'Tote Bag', year: '2024', location: 'Thomso,IIT Roorkee' },
  { id: 3, src: '/gold.png', title: 'Rangoli', year: '2017', location: 'Alcheringa' },
  { id: 4, src: '/bronze.png', title: 'Lip Art', year: '2017', location: 'Alcheringa' },
];

const FacMedalShowcase = () => {
  const [hoveredMedal, setHoveredMedal] = useState(null);

  return (
    <div className="w-full px-2 bg-slate-950 pb-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
        {medals.map((medal) => (
          <div
            key={medal.id}
            className="relative group"
            onMouseEnter={() => setHoveredMedal(medal.id)}
            onMouseLeave={() => setHoveredMedal(null)}
          >
            <div className="w-full aspect-square relative overflow-hidden backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <img
                src={medal.src}
                alt={medal.title}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-[105%] bg-slate-900/95 backdrop-blur-sm text-white px-2 py-1.5 rounded-md transition-all duration-300 ${
              hoveredMedal === medal.id 
                ? 'opacity-100 translate-y-1 scale-100' 
                : 'opacity-0 translate-y-4 scale-95'
            }`}>
              <p className="font-medium text-xs text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {medal.title}
              </p>
              <div className="flex justify-between text-[10px] mt-0.5 text-gray-300">
                <p>{medal.year}</p>
                <p>{medal.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="block md:hidden mt-4">
        {medals.map((medal) => (
          <div key={medal.id} className="mb-3">
            <div className="relative w-full aspect-square overflow-hidden">
              <img 
                src={medal.src} 
                alt={medal.title} 
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent" />
              <div className="absolute bottom-0 w-full p-2 text-white">
                <p className="font-medium text-xs bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {medal.title}
                </p>
                <div className="flex justify-between text-[10px] mt-0.5 text-gray-300">
                  <p>{medal.year}</p>
                  <p>{medal.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Add this at the end of your file for the gradient animation
const styles = `
  @keyframes gradientFlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .animate-gradient {
    background-size: 200% auto;
    animation: gradientFlow 3s linear infinite;
  }
`;

export default FacMedalShowcase;
