/* eslint-disable @typescript-eslint/no-unused-vars */
import InputComponent from '@/components/signincomponents/InputComponent';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router'; 

const SignIn = () => {
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
      
      <div className="w-full max-w-md p-8 backdrop-blur-sm bg-white bg-opacity-20 shadow-lg rounded-lg">
        
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
            className="w-full"
            value={''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {console.log(e)}}
          />
          
          <InputComponent
            label={'Password'}
            placeholder={'Password'}
            type={'password'}
            className="w-full"
            value={''}
            onChange={(_e: React.ChangeEvent<HTMLInputElement>) => {}}
          />
        </div>
        
        <div className='flex flex-col items-center mt-8 space-y-4'>
          
          <button className='w-full bg-blue-500 p-2 text-xl rounded-3xl font-semibold transition ease-in-out duration-300 hover:bg-orange-500'>
            LOGIN
          </button>
          
          <Link href={'/signup'} className='w-full text-center text-white  hover:underline transition '>
            Create a new account (tap here)
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
