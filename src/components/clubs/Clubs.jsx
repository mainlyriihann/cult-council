import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BrowserRouter, NavLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Clubs = () => {
  const trackRef = useRef(null);
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialAnimationComplete, setIsInitialAnimationComplete] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [isInteractive, setIsInteractive] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const autoScrollRef = useRef(null);

  const navigate = useNavigate();

  const clubNames = [
    { label: 'IMC', fullForm: 'Indian Music Club', href: '/clubs/imc' },
    { label: 'WMC', fullForm: 'Western Music Club', href: '/clubs/wmc' },
    { label: 'DFZ', fullForm: 'Dance CLub', href: '/clubs/dfz' },
    { label: 'FAC', fullForm: 'Fine Arts Club', href: '/clubs/fac' },
    { label: 'AVRN', fullForm: 'Aavran', href: '/clubs/aavran' },
    { label: 'LIT', fullForm: 'Literary Club', href: '/clubs/lit' },
    { label: 'QUIZ', fullForm: 'Quiz Club', href: '/clubs/quiz' },
    { label: 'MASQ', fullForm: 'Theatre Club', href: '/clubs/masq' },
  ];

  const images = [
    "/imcLogo.jpg",
    "/wmcLogo.png",
    "/dfzLogo.jpg",
    "/facLogo.png",
    "/aavranLogo.jpg",
    "/litLogo.png",
    "/quizLogo.png",
    "/masqLogo.jpg"
  ];

  // Duplicate the arrays to create infinite loop effect
  const repeatedClubNames = [...clubNames, ...clubNames, ...clubNames];
  const repeatedImages = [...images, ...images, ...images];

  const handleImageLoad = () => {
    setImagesLoaded((prev) => {
      const newCount = prev + 1;
      if (newCount === images.length) {
        setTimeout(() => {
          setIsLoading(false);
          setTimeout(() => {
            setIsInitialAnimationComplete(true);
            setTimeout(() => {
              setIsInteractive(true);
            }, 100);
          }, 100);
        }, 1200);
      }
      return newCount;
    });
  };

  // Adjusted auto-scroll effect back to previous speed
  useEffect(() => {
    if (!isInteractive || !autoScroll) return;

    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        setPrevPercentage(prev => {
          let next = prev - 0.05; // Back to 0.15 from 0.05
          if (next < -100) {
            next = 0;
          }
          setPercentage(next);
          return next;
        });
      }, 50);
    };

    startAutoScroll();

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isInteractive, autoScroll]);

  // Pause auto-scroll on user interaction
  const handleOnDown = (e) => {
    if (!isInteractive) return;
    setAutoScroll(false);
    setMouseDownAt(e.clientX);
    setIsScrolling(true);
    setHoveredIndex(null);
  };

  const handleOnUp = () => {
    if (!isInteractive) return;
    setMouseDownAt(0);
    setPrevPercentage(percentage);
    setTimeout(() => {
      setIsScrolling(false);
      setAutoScroll(true); // Resume auto-scroll after interaction
    }, 200);
  };

  const handleOnMove = (e) => {
    if (!isInteractive || mouseDownAt === 0) return;

    const mouseDelta = mouseDownAt - e.clientX;
    const maxDelta = window.innerWidth / 2;
    const speedMultiplier = 1.5;
    
    let nextPercentage = prevPercentage + (mouseDelta / maxDelta) * -100 * speedMultiplier;

    // Original logic
    if (nextPercentage > 0) {
      nextPercentage = -100;
      setPrevPercentage(-100);
      setMouseDownAt(e.clientX);
    } else if (nextPercentage < -100) {
      nextPercentage = 0;
      setPrevPercentage(0);
      setMouseDownAt(e.clientX);
    }

    setPercentage(nextPercentage);
  };

  const handleScroll = (direction) => {
    if (!isInteractive) return;
    const step = 20;
    let nextPercentage = prevPercentage + (direction * step);

    // Original logic
    if (nextPercentage > 0) {
      nextPercentage = -100;
    } else if (nextPercentage < -100) {
      nextPercentage = 0;
    }

    setPrevPercentage(nextPercentage);
    setPercentage(nextPercentage);
  };

  const handleImageClick = (index) => {
    if (!isInteractive) return;
    if (activeImageIndex !== null) return;

    setActiveImageIndex(index);

    setTimeout(() => {
      navigate(clubNames[index].href, {
        state: { fromClubsPage: true }
      });
    }, 500);
  };

  // Add hover handler to stop auto-scroll
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setAutoScroll(false); // Stop auto-scroll on hover
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setAutoScroll(true); // Resume auto-scroll when not hovering
  };

  useEffect(() => {
    if (!isInteractive) return;

    const onMouseDown = (e) => handleOnDown(e);
    const onMouseUp = (e) => handleOnUp(e);
    const onMouseMove = (e) => handleOnMove(e);
    const onTouchStart = (e) => handleOnDown(e.touches[0]);
    const onTouchEnd = (e) => handleOnUp(e.touches[0]);
    const onTouchMove = (e) => handleOnMove(e.touches[0]);

    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('touchmove', onTouchMove);

    return () => {
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [mouseDownAt, prevPercentage, percentage, isInteractive]);

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 m-0 overflow-hidden relative">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(0,0,0,0.9))]"></div>
        {/* Dynamic Floating Elements */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-screen opacity-20 animate-float"
            style={{
              width: `${Math.random() * (window.innerWidth < 768 ? 150 : 300) + 50}px`,
              height: `${Math.random() * (window.innerWidth < 768 ? 150 : 300) + 50}px`,
              background: `radial-gradient(circle at center, 
                ${['rgba(59,130,246,0.3)', 'rgba(139,92,246,0.3)', 'rgba(236,72,153,0.3)', 'rgba(6,182,212,0.3)'][Math.floor(Math.random() * 4)]}, 
                transparent)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
            }}
          />
        ))}
      </div>

      <div
        ref={trackRef}
        className={`flex gap-[3vmin] sm:gap-[4vmin] absolute w-[450vw] left-1/2 top-1/2 select-none 
          transition-transform duration-800 ease-out ${isInitialAnimationComplete ? 'cursor-grab active:cursor-grabbing' : ''}`}
        style={{
          transform: `translate(${percentage}%, -50%)`,
          pointerEvents: isInteractive ? 'auto' : 'none'
        }}
      >
        {repeatedImages.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className={`relative transition-all duration-1000 ease-in-out
              ${isLoading ? 'opacity-0 scale-150' : 'opacity-100 scale-100'}
              ${!isInitialAnimationComplete ? 'transform' : ''}`}
            style={{
              transform: isLoading
                ? `translateY(${index % 2 === 0 ? '-100vh' : '100vh'})`
                : 'translateY(0)',
              transitionDelay: `${index * 100}ms`
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="relative group"
              onClick={() => handleImageClick(index % images.length)}
            >
              <Link to={repeatedClubNames[index].href}>
                {/* Enhanced Image Container */}
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    className={`w-[35vmin] h-[52vmin] sm:w-[40vmin] sm:h-[60vmin] md:w-[50vmin] md:h-[75vmin] 
                      object-contain rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.3)] 
                      transition-all duration-500 ease-out border border-white/10 bg-black/40 backdrop-blur-sm
                      ${hoveredIndex === index ? 'scale-110 shadow-[0_0_40px_rgba(59,130,246,0.2)] border-white/20' : ''}
                      ${activeImageIndex === index ? 'fixed top-0 left-0 w-screen h-screen z-50 object-cover' : ''}`}
                    src={src}
                    draggable="false"
                    alt={`Track image ${(index % images.length) + 1}`}
                    onLoad={handleImageLoad}
                  />
                  
                  {/* Enhanced Hover Overlay */}
                  {isInteractive && hoveredIndex === index && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent
                      backdrop-blur-sm transform transition-all duration-300 ease-out">
                      <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
                        text-transparent bg-clip-text mb-1'>{repeatedClubNames[index].label}</h1>
                      <h2 className="text-white/90 text-sm sm:text-base md:text-lg font-light">{repeatedClubNames[index].fullForm}</h2>
                    </div>
                  )}

                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300"></div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 bg-black flex items-center justify-center">
          <div className="text-white text-center px-4">
            <div className="w-48 sm:w-64 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full 
                  transition-all duration-300 ease-out"
                style={{ width: `${(imagesLoaded / images.length) * 100}%` }}
              />
            </div>
            <p className="mt-4 text-sm sm:text-base text-white/70">Exploring Cultural Council, IIT BHU...</p>
          </div>
        </div>
      )}

      {/* Enhanced Navigation Controls */}
      {isInitialAnimationComplete && (
        <>
          <div className={`fixed bottom-6 sm:bottom-8 left-4 sm:left-8 
            transition-opacity duration-500 ${isInteractive ? 'opacity-100' : 'opacity-0'}`}>
            <button
              onClick={() => handleScroll(1)}
              className="p-3 sm:p-4 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 
                hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              disabled={!isInteractive}
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white/70 group-hover:text-white" />
            </button>
          </div>
          <div className={`fixed bottom-6 sm:bottom-8 right-4 sm:right-8
            transition-opacity duration-500 ${isInteractive ? 'opacity-100' : 'opacity-0'}`}>
            <button
              onClick={() => handleScroll(-1)}
              className="p-3 sm:p-4 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 
                hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              disabled={!isInteractive}
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white/70 group-hover:text-white" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Clubs;




