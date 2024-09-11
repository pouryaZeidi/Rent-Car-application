/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className='relative w-full h-screen bg-gray-700' 
      style={{ 
        backgroundImage: " linear-gradient(to top, rgba(255,255,255,0.99), rgba(255,255,255,0.3)),url('/Road.jpg')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
      }}
    >
      <Navbar />
      <div className='relative w-full h-[90%] flex justify-center items-center'>
        <div className={`relative w-full max-w-[90%] md:max-w-[80%] h-[70%] z-10 bg-white flex flex-col md:flex-row justify-center lg:justify-between items-center overflow-hidden rounded-2xl transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          
          
          <img src="/leftcar.jpg" alt="CarRent" className='hidden lg:block w-[25%] h-[80%] object-cover md:w-[28%] md:h-[100%]' />
          
          <video 
            src="/Car.mp4" 
            autoPlay 
            loop 
            muted 
            className='w-[80%] sm:w-[70%]  md:w-[60%] lg:w-[40%] h-auto md:h-[100%] object-cover' 
          />

          <img src="/RightCar.jpg" alt="CarRent" className='hidden lg:block w-[25%] h-auto object-cover md:w-[30%] md:h-[100%]' />

          <button className='bg-orange-400 p-3 rounded-lg absolute bottom-10 md:bottom-8  lg:block left-1/2 transform -translate-x-1/2 hover:bg-blue-600 text-blue-800 hover:text-blue-200 font-semibold hover:text-lg'>
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
