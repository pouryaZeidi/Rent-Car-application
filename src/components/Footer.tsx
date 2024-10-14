import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 ">
      <div className="container mx-auto flex justify-between items-center w-[80%] m-auto">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Rental  Car Company . All rights reserved.
        </div>
        <div className="flex space-x-4">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <span className="hover:text-gray-400">Facebook</span>
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <span className="hover:text-gray-400">Twitter</span>
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <span className="hover:text-gray-400">Instagram</span>
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <span className="hover:text-gray-400">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
