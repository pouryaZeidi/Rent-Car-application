/* eslint-disable @typescript-eslint/no-unused-vars */
import InputComponent from '@/components/signincomponents/InputComponent';
import React from 'react';
import { useRouter } from 'next/router'; 

const Signup = () => {
  const router = useRouter();

 
  const handleBackClick = () => {
    router.back(); 
  };

  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center p-6 overflow-hidden"
      style={{
        backgroundImage: "url('/Road1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      
      <div className="w-full max-w-md p-4 backdrop-blur-sm bg-white bg-opacity-20 shadow-lg rounded-lg">
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="mb-2 p-2 bg-gray-800 text-white rounded-2xl hover:bg-gray-700"
        >
          Back
        </button>

        <h1 className="font-bold text-2xl md:text-3xl text-gray-800 mb-2">SIGN UP</h1>

        {/* Inputs and buttons */}
        <div className="space-y-1">
          <InputComponent
            label={'Full name'}
            placeholder={'Type your name'}
            type={'text'}
            className="w-full"
            value={''}
            onChange={() => {}}
          />
          <InputComponent
            label={'E-mail'}
            placeholder={'Type your email'}
            type={'email'}
            className="w-full"
            value={''}
            onChange={() => {}}
          />
          <InputComponent
            label={'Password'}
            placeholder={'Password'}
            type={'password'}
            className="w-full"
            value={''}
            onChange={() => {}}
          />
          <InputComponent
            label={'Phone number'}
            placeholder={'Type your phone number'}
            type={'tel'}
            className="w-full"
            value={''}
            onChange={() => {}}
          />
          <InputComponent
            label={'Your birthday'}
            placeholder={'Type your birthday'}
            type={'date'}
            className="w-full"
            value={''}
            onChange={() => {}}
          />
        </div>

       
        <div className='flex flex-col items-center mt-5 space-y-4'>
          <button className='w-full bg-blue-500 p-2 text-xl rounded-2xl font-semibold transition ease-in-out duration-300 hover:bg-orange-500'>
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
