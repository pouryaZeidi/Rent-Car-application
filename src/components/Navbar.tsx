/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='hidden md:flex w-[100%] h-[40px] items-center justify-between p-12 py-15 backdrop-blur-3xl '>
        <img src="/Logo.svg" alt="Logo" className=' w-[85px] h-[85px] rounded-full ' />
        <Link href={'/'} className=' text-[14px] rounded-2xl bg-blue-200 p-3 hover:bg-blue-600 hover:text-blue-50 text-blue-800 '>ABOUT US</Link>
        <Link href={'/'} className=' text-[14px] rounded-2xl bg-blue-200 p-3 hover:bg-blue-600 hover:text-blue-50 text-blue-800 '>PRICING</Link>
        <Link href={'/'} className=' text-[14px] rounded-2xl bg-blue-200 p-3 hover:bg-blue-600 hover:text-blue-50 text-blue-800 '>CUSTOMERS</Link>
        <Link href={'/'} className=' text-[14px] rounded-2xl bg-blue-200 p-3 hover:bg-blue-600 hover:text-blue-50 text-blue-800 '>FUTURE RENTAL VEHICLES</Link>
    </div>
  )
}

export default Navbar
