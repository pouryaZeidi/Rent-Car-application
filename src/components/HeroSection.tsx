/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import Button from './Button';

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);

  // {For banner of herosection on the center of page}

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
        backgroundImage: " linear-gradient(to top, rgba(255,255,255,1.3), rgba(255,255,255,0.22)),url('/Road.jpg')", 
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
            className='w-[80%] sm:w-[70%]  md:w-[60%] lg:w-[40%] h-auto md:h-[100%] object-cover' />
          <img src="/RightCar.jpg" alt="CarRent" className='hidden lg:block w-[25%] h-auto object-cover md:w-[30%] md:h-[100%]' />
          <Button txt={'BOOK NOW'} onClick={function (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
            throw new Error('Function not implemented.');
          } }/>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
