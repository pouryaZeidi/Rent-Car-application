import React from 'react'

const aboutus = () => {
  return (
    <>
    <div className='w-full h-[100vh]' style={{ 
        backgroundImage: "url('/About.jpg')"
        ,backgroundSize: 'cover', 
        backgroundPosition: 'center',
    }}
    ></div>
    
    <div className='w-full h-[100vh] mt-5 rounded-3xl' style={{ 
        backgroundImage: " linear-gradient(to top, rgba(255,255,255,0.1), rgba(255,255,255,0.22)),url('/About2.jpg')"
        ,backgroundSize: 'cover', 
        backgroundPosition: 'center',
    }}
    ></div>
    <div className='w-full h-[100vh] rounded-3xl' style={{ 
        backgroundImage: " linear-gradient(to top, rgba(255,255,255,0.1), rgba(255,255,255,0.22)),url('/About3.jpg')"
        ,backgroundSize: 'cover', 
        backgroundPosition: 'center',
    }}
    ></div>
    
    </>

  )
}

export default aboutus