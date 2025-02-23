import React, { useEffect, useRef, useState } from "react";

const images = [
  "https://ik.imagekit.io/mrityunjay/stageplay4.jpg?updatedAt=1737978255171",
  "https://ik.imagekit.io/mrityunjay/stageplay1.jpg?updatedAt=1737978254610",
  "https://ik.imagekit.io/mrityunjay/stageplay2.jpg?updatedAt=1737978254420",
  "https://ik.imagekit.io/mrityunjay/stageplay3.jpg?updatedAt=1737978253791",
  "https://ik.imagekit.io/mrityunjay/nukkad3.jpg?updatedAt=1737978153453",
  "https://ik.imagekit.io/mrityunjay/nukkad4.jpg?updatedAt=1737978153161",
  "https://ik.imagekit.io/mrityunjay/nukkad6.jpg?updatedAt=1737978153106",
  "https://ik.imagekit.io/mrityunjay/nukkad5.jpg?updatedAt=1737978153155",
  "https://ik.imagekit.io/mrityunjay/nukkad1.jpg?updatedAt=1737978153647",
  "https://ik.imagekit.io/mrityunjay/nukkad7.jpg?updatedAt=1737978153643",
  "https://ik.imagekit.io/mrityunjay/mime3.jpg?updatedAt=1737978001961",
  "https://ik.imagekit.io/mrityunjay/mime5.jpg?updatedAt=1737978000531",
  "https://ik.imagekit.io/mrityunjay/mime4.jpg?updatedAt=1737978000436",
  "https://ik.imagekit.io/mrityunjay/mime1.jpg?updatedAt=1737978000113",
  "https://ik.imagekit.io/mrityunjay/mime2.jpg?updatedAt=1737977999813",
];

const MasqCarousel = () => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollWidth = container.scrollWidth; // Total width of all images combined
    let currentScroll = 0;
    let animationFrameId;

    const moveCarousel = () => {
      if (!isHovered) {
        currentScroll += 0.5; // Slow scroll speed
        if (currentScroll >= scrollWidth) {
          currentScroll = 0; // Reset scroll to the start
        }
        container.scrollLeft = currentScroll; // Update scroll position
      }
      animationFrameId = requestAnimationFrame(moveCarousel); // Continue the animation
    };

    moveCarousel(); // Start the scroll animation

    return () => {
      cancelAnimationFrame(animationFrameId); // Clean up animation on component unmount
    };
  }, [isHovered]);

  return (
    <>
      <div className="bg-black pt-20">
        <h1 className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 py-8 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-6xl">
          Moments on Stage
        </h1>
        <p className="text-red-500 text-center text-lg italic mb-8">
          Capturing the essence of theatrical excellence
        </p>
      </div>
      <div className="relative w-full h-[32rem] overflow-hidden bg-gradient-to-b from-black via-red-950/30 to-black">
        {/* Add decorative elements */}
        <div className="absolute inset-0 bg-[url('/curtain-texture.png')] opacity-10 pointer-events-none" />
        <div
          ref={containerRef}
          className="flex items-center justify-start gap-16 w-full h-full overflow-x-scroll scrollbar-none px-8"
        >
          {images.map((src, index) => (
            <div
              key={index}
              onMouseEnter={() => {
                setIsHovered(true);
                setHoveredIndex(index);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
                setHoveredIndex(null);
              }}
              className={`relative w-72 h-96 flex-shrink-0 rounded-lg transition-all duration-700 
                ${
                  hoveredIndex === index || hoveredIndex === null
                    ? "scale-110 z-10 shadow-[0_0_30px_rgba(220,38,38,0.3)] rotate-0"
                    : "scale-75 z-0 opacity-30 rotate-6"
                }
              `}
            >
              <div
                className="w-full h-full rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: `url(${src})`,
                }}
              />
              {/* Add a subtle red overlay on hover */}
              <div
                className={`absolute inset-0 rounded-lg transition-opacity duration-500 ${
                  hoveredIndex === index
                    ? "bg-gradient-to-t from-red-950/80 via-transparent to-transparent opacity-100"
                    : "opacity-0"
                }`}
              />
            </div>
          ))}
        </div>
        {/* Add vignette effect */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black via-transparent to-black" />
      </div>
    </>
  );
};

export default MasqCarousel;
