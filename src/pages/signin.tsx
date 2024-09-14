/* eslint-disable @typescript-eslint/no-unused-vars */
import InputComponent from '@/components/signincomponents/InputComponent';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router'; // Import useRouter

const SignIn = () => {
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
      <div className="w-full max-w-md p-6 backdrop-blur-sm border rounded-lg  bg-opacity-80 shadow-lg">
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="mb-4 p-2 bg-gray-800 text-white rounded-2xl hover:bg-gray-700"
        >
          Back
        </button>

        <h1 className="font-bold text-3xl md:text-4xl text-gray-800 mb-6">SIGN IN</h1>

        <div className="space-y-4">
          <InputComponent
            label={'E-mail'}
            placeholder={'Type your email'}
            type={'email'}
            value={''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {}}
          />
          <InputComponent
            label={'Password'}
            placeholder={'Password'}
            type={'password'}
            value={''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {}}
          />
        </div>

        <div className='flex flex-col items-center mt-8 space-y-4'>
          <button className='w-full border bg-blue-500 p-4 text-xl rounded-3xl font-semibold hover:bg-orange-500 border-orange-700'>
            LOGIN
          </button>
          <Link href={'/signup'} className='bg-white rounded-3xl p-3 text-blue-500'>
            Create a new account (tap here)
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
