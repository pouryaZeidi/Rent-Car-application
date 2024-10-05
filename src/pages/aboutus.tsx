import React from 'react'

const aboutus = () => {
  return (
    <>
      <div className='w-full h-[100vh] flex flex-col justify-center items-center text-white' style={{ 
        backgroundImage: "url('/About.jpg')",
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
      }}>
        <h1 className='text-4xl font-bold'>Title One</h1>
        <p className='text-lg mt-2 m-16 text-wrap'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Rerum, perferendis velit! Eos illum necessitatibus quos doloremque aspernatur vero iusto at nostrum 
          ipsum accusamus, voluptas, consequuntur quidem magni quibusdam. Hic, cupiditate.</p>
      </div>
      
      <div className='w-full h-[100vh] mt-5 rounded-3xl flex flex-col justify-center items-center text-white' style={{ 
        backgroundImage: "linear-gradient(to top, rgba(255,255,255,0.1), rgba(255,255,255,0.22)), url('/About2.jpg')",
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
      }}>
        <h1 className='text-4xl font-bold'>Title Two</h1>
        <p className='text-lg mt-2 m-16 text-wrap'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Rerum, perferendis velit! Eos illum necessitatibus quos doloremque aspernatur vero iusto at nostrum 
          ipsum accusamus, voluptas, consequuntur quidem magni quibusdam. Hic, cupiditate.</p>
      </div>
      
      <div className='w-full h-[100vh] rounded-3xl flex flex-col justify-center items-center text-white' style={{ 
        backgroundImage: "linear-gradient(to top, rgba(255,255,255,0.1), rgba(255,255,255,0.22)), url('/About3.jpg')",
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
      }}>
        <h1 className='text-4xl font-bold'>Title Three</h1>
        <p className='text-lg mt-2 m-16 text-wrap'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Rerum, perferendis velit! Eos illum necessitatibus quos doloremque aspernatur vero iusto at nostrum 
          ipsum accusamus, voluptas, consequuntur quidem magni quibusdam. Hic, cupiditate.</p>
      </div>
    </>
  )
}

export default aboutus
