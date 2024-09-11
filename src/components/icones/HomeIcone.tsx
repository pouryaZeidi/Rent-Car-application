import Link from 'next/link';
import React from 'react'
import { FaTachometerAlt } from "react-icons/fa";

const HomeIcone = () => {
  return (
    <>
    <Link href={'/'} >
    <FaTachometerAlt className='text-5xl text-orange-500 hover:text-blue-500 mr-7 sm:mr-7' />
    </Link>
    </>
  )
}

export default HomeIcone