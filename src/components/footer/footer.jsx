// import React from 'react';
// import { IoLocationSharp, IoMail } from "react-icons/io5";
// import { RiInstagramFill } from 'react-icons/ri';
// import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
// import Home from '../home/home';

// function Footer() {
//   return (
//     <div className='bg-slate-900 w-screen'>
//     <footer className=' w-full gradient-bg h-1/6 text-white py-4 flex flex-col gap-8 custom-rounded-tl'>

//         <div className='flex justify-around items-center'>
//             <div className='flex gap-4'>
//                 <Link to={'/'}><img src="/councillogo.png" alt="logo" className='h-20 w-20 hover:scale-105 transition-transform duration-200 ease-in-out hover:cursor-pointer' /></Link>
//                 <Link to={'/'}><h1 className='text-2xl font-bold hover:text-indigo-100 transition-colors duration-200 ease-in-out hover:cursor-pointer tracking-wide leading-tight'>Cultural <br></br> Council</h1></Link>
//                 <div className="h-16 w-px bg-gray-400"></div>
//                 <img src="/collegelogo.png" alt="collegelogo" className='h-14 w-14 hover:scale-105 transition-transform duration-200 ease-in-out' />
//             </div>
//             <div>
//                 <ul className='flex gap-16 font-semibold text-lg'>
//                     <Link to={'/'} className='hover:text-gray-300 hover:cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out'>Home</Link>
//                     <Link to={'/events'} className='hover:text-gray-300 hover:cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out'>Events</Link>
//                     <Link to={'/clubs'} className='hover:text-gray-300 hover:cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out'>Clubs</Link>
//                     <Link to={'/team'} className='hover:text-gray-300 hover:cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out'>Teams</Link>
//                 </ul>
//             </div>
//         </div>
//         <div className='flex justify-around'>
//             <div className='flex items-center gap-1 text-lg pr-40'><IoLocationSharp /> Gymkhana Building, IIT (BHU), Varanasi</div>
//             <div>
//                 <ul className='flex gap-4'>
//                     <li className='flex items-center gap-1'><IoMail />culturalcouncil.iitbhu.in</li>
//                     <li className='flex items-center'><RiInstagramFill /></li>
//                     <li></li>
//                     <li></li>
//                 </ul>
//             </div>
//         </div>
//     </footer>
//     </div>
//   );
// }

// export default Footer;



import React from 'react';
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { RiInstagramFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='bg-gradient-to-b from-slate-900 to-black w-screen'>
      <footer className='w-full backdrop-blur-lg bg-black/30 text-white py-8 flex flex-col custom-rounded-tl border-t border-white/10 relative overflow-hidden'>
        {/* Enhanced shine effects */}
        <div className='absolute w-[10px] h-[200%] bg-gradient-to-b from-transparent via-white/20 to-transparent -rotate-45 animate-shine-slow'></div>
        <div className='absolute w-[10px] h-[200%] bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent -rotate-45 animate-shine-fast'></div>
        <div className='absolute w-[10px] h-[200%] bg-gradient-to-b from-transparent via-purple-400/20 to-transparent -rotate-45 animate-shine-medium'></div>
        
        {/* Radial gradient background */}
        <div className='absolute inset-0 bg-radial-gradient opacity-20'></div>
        
        {/* Glow orbs */}
        <div className='absolute -top-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl'></div>
        <div className='absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl'></div>

        {/* Mobile View */}
        <div className='flex flex-col gap-8 md:hidden px-4 relative'>
          {/* Logo Section with enhanced shine */}
          <div className='flex flex-col items-center gap-6 relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-200%] before:animate-shine-rtl before:pointer-events-none'>
            <div className='flex gap-4 items-center'>
              <Link to={'/'}>
                <div className='relative group'>
                  <div className='absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-1000'></div>
                  <img
                    src="/councillogo.png"
                    alt="logo"
                    className='relative h-16 w-16 hover:scale-110 transition-all duration-300 hover:cursor-pointer hover:brightness-125'
                  />
                </div>
              </Link>
              <Link to={'/'}>
                <h1 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent hover:to-purple-400 transition-all duration-300 hover:cursor-pointer tracking-wide leading-tight hover:scale-105'>
                  Cultural <br /> Council
                </h1>
              </Link>
            </div>
            <div className='relative group'>
              <div className='absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-1000'></div>
              <img
                src="/collegelogo.png"
                alt="collegelogo"
                className='relative h-12 w-12 hover:scale-110 transition-all duration-300 hover:brightness-125'
              />
            </div>
          </div>

          {/* Navigation Links with glass effect */}
          <div className='bg-white/5 rounded-2xl p-4 backdrop-blur-sm relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-200%] before:animate-shine-rtl-slow before:pointer-events-none border border-white/10 hover:border-white/20 transition-colors duration-300'>
            <ul className='flex flex-wrap gap-6 justify-center font-medium text-lg'>
              {['Home', 'Events', 'Clubs', 'Teams'].map((item) => (
                <Link 
                  key={item} 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className='relative hover:text-cyan-400 transition-all duration-300 after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-cyan-400 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full'
                >
                  {item}
                </Link>
              ))}
            </ul>
          </div>

          {/* Contact Info with enhanced styling */}
          <div className='space-y-4 text-center backdrop-blur-sm bg-white/5 rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-colors duration-300'>
            <div className='flex items-center justify-center gap-2 text-lg group'>
              <IoLocationSharp className='text-cyan-400 group-hover:animate-bounce' />
              <span className='text-gray-300 hover:text-white transition-colors duration-300 bg-gradient-to-r from-transparent via-white/5 to-transparent p-2 rounded-lg'>
                Gymkhana Building, IIT (BHU), Varanasi
              </span>
            </div>
            <div className='flex justify-center gap-6'>
              <a href="mailto:culturalcouncil.iitbhu.in" className='flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300 group'>
                <IoMail className='text-xl group-hover:rotate-12 transition-transform duration-300' /> 
                culturalcouncil.iitbhu.in
              </a>
              <a href="#" className='text-2xl hover:text-pink-500 transition-colors duration-300 hover:scale-110 transform'>
                <RiInstagramFill />
              </a>
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className='hidden md:flex flex-col gap-10 px-8 relative'>
          <div className='flex justify-between items-center relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-200%] before:animate-shine-rtl-slow before:pointer-events-none'>
            <div className='flex gap-6 items-center'>
              <Link to={'/'}>
                <img src="/councillogo.png" alt="logo" className='h-20 w-20 hover:scale-110 transition-all duration-300 hover:brightness-125' />
              </Link>
              <Link to={'/'}>
                <h1 className='text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:to-purple-400 transition-all duration-300 tracking-wide leading-tight'>
                  Cultural <br /> Council
                </h1>
              </Link>
              <div className="h-16 w-px bg-gradient-to-b from-transparent via-gray-400 to-transparent"></div>
              <img src="/collegelogo.png" alt="collegelogo" className='h-16 w-16 hover:scale-110 transition-all duration-300 hover:brightness-125' />
            </div>
            
            <div className='bg-white/5 rounded-2xl px-8 py-3 backdrop-blur-sm'>
              <ul className='flex gap-16 font-medium text-lg'>
                {['Home', 'Events', 'Clubs', 'Teams'].map((item) => (
                  <Link 
                    key={item} 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className='relative hover:text-cyan-400 transition-all duration-300 after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full'
                  >
                    {item}
                  </Link>
                ))}
              </ul>
            </div>
          </div>

          <div className='flex justify-between items-center px-4 pb-2'>
            <div className='flex items-center gap-2 group'>
              <IoLocationSharp className='text-cyan-400 text-xl group-hover:animate-bounce' />
              <span className='text-gray-300 hover:text-white transition-colors duration-300'>
                Gymkhana Building, IIT (BHU), Varanasi
              </span>
            </div>
            <div className='flex gap-8'>
              <a href="mailto:culturalcouncil.iitbhu.in" className='flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300'>
                <IoMail className='text-xl' /> culturalcouncil.iitbhu.in
              </a>
              <a href="#" className='text-2xl hover:text-pink-500 transition-colors duration-300'>
                <RiInstagramFill />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
