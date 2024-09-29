import { ButtonProps } from '@/Types/types';
import React from 'react';

const Button = ({ txt, onClick }: ButtonProps) => {
  return (
    <button 
      onClick={onClick} 
      className='bg-orange-400  p-2 rounded-lg absolute bottom-10 md:bottom-8 lg:block transition ease-in-out duration-200 left-1/2 transform -translate-x-1/2 hover:bg-blue-600 text-blue-800 hover:text-blue-200 font-semibold h'
    >
      {txt}
    </button>
  );
}

export default Button;
