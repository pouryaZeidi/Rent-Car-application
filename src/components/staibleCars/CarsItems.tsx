/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { carCardsprops } from '@/Types/types';

const CarsItems = ({ txt1, txt2, txt3, src, hoverSrc }: carCardsprops) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className='w-[200px] h-[300px] p-4 backdrop-blur-sm rounded-3xl overflow-hidden relative flex flex-col items-center'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <img 
        src={isHovered ? hoverSrc : src} 
        alt="Car Image" 
        className='w-[90%] h-[60%] mt-3 object-cover rounded-2xl hover:scale-105  hover:transition-opacity cursor-pointer hover:duration-700 hover:ease-in-out'
      />
      <div className='flex flex-col justify-start w-full h-[40%]  p-2'>
        <h1 className='text-[15px] bg-white p-[4px] rounded mb-1 hover:text-blue-700 cursor-pointer'>Model: {txt1}</h1>
        <h2 className='text-[13px] bg-white p-[4px] rounded mb-1 hover:text-blue-700 cursor-pointer'>Daily Price: {txt2}$</h2>
        <h3 className='text-[11px] bg-white p-[4px] rounded mb-1 hover:text-blue-700 cursor-pointer'>Status: {txt3}</h3>
      </div>
    </motion.div>
  );
}

export default CarsItems;
