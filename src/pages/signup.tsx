/* eslint-disable @typescript-eslint/no-unused-vars */
import InputComponent from '@/components/signincomponents/InputComponent';
import React from 'react';
import { useRouter } from 'next/router'; // Import useRouter

const Signup = () => {
  const router = useRouter(); // Initialize useRouter

  // Function to handle navigation to the previous page
  const handleBackClick = () => {
    router.back(); // Navigate back to the previous page
  };

  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center px-4"
      style={{
        backgroundImage: "url('/Road1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* دیو اصلی که حالت بلور دارد */}
      <div className="w-full max-w-md p-6 backdrop-blur-sm border rounded-lg  bg-opacity-80 h-auto max-h-[90vh] overflow-y-auto">
        {/* دکمه بازگشت */}
        <button
          onClick={handleBackClick}
          className="mb-4 p-2 bg-blue-500 text-white rounded-3xl hover:bg-gray-700"
        >
          Back
        </button>

        <h1 className="font-bold text-3xl md:text-4xl text-gray-800 mb-6">SIGN UP</h1>

        <div className="space-y-4">
          <InputComponent
            label={'Full name'}
            placeholder={'Type your name'}
            type={'text'}
            value={''}
            onChange={() => {}}
          />
          <InputComponent
            label={'E-mail'}
            placeholder={'Type your email'}
            type={'email'}
            value={''}
            onChange={() => {}}
          />
          <InputComponent
            label={'Password'}
            placeholder={'Password'}
            type={'password'}
            value={''}
            onChange={() => {}}
          />
          <InputComponent
            label={'Phone number'}
            placeholder={'Type your phone number'}
            type={'tel'}
            value={''}
            onChange={() => {}}
          />
          <InputComponent
            label={'Your birthday'}
            placeholder={'Type your birthday'}
            type={'date'}
            value={''}
            onChange={() => {}}
          />
          <button className='w-full border bg-blue-500 p-4 text-2xl rounded-3xl hover:text-blue-500 hover:bg-orange-500 border-orange-700 font-bold'>
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
