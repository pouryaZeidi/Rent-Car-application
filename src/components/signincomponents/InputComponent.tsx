import { InputComponentProps } from '@/Types/types';
import React from 'react';

const InputComponent = ({ label, placeholder, type, className }: InputComponentProps) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <label className="mb-2 font-medium text-gray-800">{label}</label>
      <input
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default InputComponent;
