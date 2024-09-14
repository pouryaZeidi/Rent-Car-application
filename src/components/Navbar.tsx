/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Link from 'next/link';
import MenuIcone from './icones/MenuIcone';
import HomeIcone from './icones/HomeIcone';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
        {/* {navbar on md and lg} */}

      <div className='hidden md:flex w-full h-[40px] items-center justify-between rounded-md p-12 py-15 backdrop-blur-sm'>
        <img src="/Logo.svg" alt="Logo" className='w-[85px] h-[85px] rounded-full' />
        <Link href={'/signin'} className='text-[11px] lg:text-[14px] rounded-2xl hover:scale-125 bg-blue-600 p-3 hover:bg-orange-600 hover:text-blue-800 text-blue-50 font-bold'>
          SIGN IN
        </Link>
        <Link href={'/signup'} className='text-[12px] lg:text-[15px] rounded-2xl hover:scale-125 bg-blue-600 p-3 hover:bg-orange-600 hover:text-blue-800 text-blue-50 font-bold'>
          SIGN UP
        </Link>
        <Link href={'/'} className='text-[11px] lg:text-[14px] rounded-2xl bg-orange-600 p-3 hover:bg-blue-600 hover:text-blue-50 text-blue-800 font-bold'>
          ABOUT US
        </Link>
        <Link href={'/'} className='text-[11px] lg:text-[14px] rounded-2xl bg-orange-600 p-3 hover:bg-blue-600 hover:text-blue-50 text-blue-800 font-bold'>
          PRICING
        </Link>
        <Link href={'/'} className='text-[11px] lg:text-[14px] rounded-2xl bg-orange-600 p-3 hover:bg-blue-600 hover:text-blue-50 text-blue-800 font-bold'>
          CUSTOMERS
        </Link>
        <Link href={'/'} className='text-[11px] lg:text-[14px] rounded-2xl bg-orange-600 p-3 hover:bg-blue-600 hover:text-blue-50 text-blue-800 font-bold'>
          FUTURE RENTAL VEHICLES
        </Link>
      </div>

        {/* {Menu on responsive under md} */}

      <div className='md:hidden flex w-full h-[80px] items-center justify-between rounded-md p-4 py-15 backdrop-blur-sm'>
        <img src="/Logo.svg" alt="Logo" className='w-[50px] h-[50px] rounded-full' />
        <div className='flex items-center w-[70%] sm:w-[30%] justify-end mr-5'>
          <HomeIcone  />
          <MenuIcone onclick={toggleMenu} />
        </div>
      </div>

      
      {menuOpen && (
        <div
          className=' absolute top-0 right-0 w-[300px] h-[320px] backdrop-blur-sm shadow-lg z-40 p-2 flex flex-col rounded-xl items-center'
          onMouseLeave={closeMenu}
        >
          <div className='w-full flex justify-end '>
            <button onClick={closeMenu} className='text-6xl p-3 border rounded-full'>
              &times; 
            </button>
          </div>
          <Link href='/' className='block py-2 px-4 text-lg hover:bg-blue-500 rounded w-full text-center text-blue-900'>
          SIGN IN
          </Link>
          <Link href='/' className='block py-2 px-4 text-lg hover:bg-blue-500 rounded w-full text-center text-blue-900'>
          SIGN UP
          </Link>
          <Link href='/' className='block py-2 px-4 text-lg hover:bg-blue-500 rounded w-full text-center text-blue-900'>
            ABOUT US
          </Link>
          <Link href='/' className='block py-2 px-4 text-lg hover:bg-blue-500 rounded w-full text-center text-blue-900'>
            CUSTOMERS
          </Link>
          <Link href='/' className='block py-2 px-4 text-lg hover:bg-blue-500 rounded w-full text-center text-blue-900'>
          FUTURE RENTAL VEHICLES
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
