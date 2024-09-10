import React from 'react';
import Navbar from './Navbar';

const HeroSection = () => {
  return (
    <div className='w-full h-screen bg-gray-700'>
      <Navbar />
      <div className='relative w-full h-[90%] flex justify-center items-center'>
        <div className='relative w-[70%] h-[70%] bg-white flex justify-center items-center overflow-hidden rounded-2xl'>
          <video 
            src="/Car.mp4" 
            autoPlay 
            loop 
            muted 
            className='absolute  w-[90%] h-[80%] '
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
