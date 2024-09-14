import { InputComponentProps } from '@/Types/types';
import React from 'react';



const InputComponent = ({ label, placeholder,type }:InputComponentProps) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 font-medium text-gray-700">{label}</label>
      <input 
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 w-[50%] focus:ring-blue-500" 
        placeholder={placeholder} 
        type={type}
      />
    </div>
  );
};

export default InputComponent;
