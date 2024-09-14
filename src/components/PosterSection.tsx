/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import Button from './Button'

const PosterSection = () => {
  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2, // duration of the animation
        ease: 'easeOut'
      }
    }
  }

  return (
    <>
      {/*md Responsive*/}
      <div 
        className='hidden sm:flex relative w-full h-screen bg-gray-700 items-center justify-center' 
        style={{ 
          backgroundImage: `linear-gradient(to top, rgba(255,255,255,0.1), rgba(255,255,255,1.3)),url('/pagetwomobile.jpg')`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
        }}
      >
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // ensures animation only runs once when the element is in view
          variants={textVariants}
        >
          <motion.h1 
            className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'
          >
            Stop Dreaming and Start Traveling.
          </motion.h1>

        </motion.div>
      </div>
      
      {/*Mobile responsive*/}
      <div 
        className=' sm:hidden relative w-full h-screen bg-gray-700 items-center justify-center flex' 
        style={{ 
            backgroundImage: ` linear-gradient(to top, rgba(255,255,255,0.1), rgba(255,255,255,1.3)),url('/pagetwomobile.jpg')`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
        }}
      >
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textVariants}
        >
          <motion.h1 
            className='text-3xl font-bold text-white mb-4'
          >
            Stop Dreaming and Start Traveling.
          </motion.h1>
        </motion.div>
          <Button 
            txt={'BOOK FOR TRAVEL'} 
            onClick={function (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
              throw new Error('Function not implemented.')
            }}
          />
      </div>
    </>
  )
}

export default PosterSection
