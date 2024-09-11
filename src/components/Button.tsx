import { ButtonProps } from '@/Types/types';
import React from 'react';

const Button = ({ txt, onClick }: ButtonProps) => {
  return (
    <button 
      onClick={onClick} 
      className='bg-orange-400  p-3 rounded-lg absolute bottom-10 md:bottom-8 lg:block left-1/2 transform -translate-x-1/2 hover:bg-blue-600 text-blue-800 hover:text-blue-200 font-semibold hover:text-lg'
    >
      {txt}
    </button>
  );
}

export default Button;
