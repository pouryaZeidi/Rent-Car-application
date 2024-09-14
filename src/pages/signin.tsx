/* eslint-disable @typescript-eslint/no-unused-vars */
import InputComponent from '@/components/signincomponents/InputComponent';
import React from 'react';

const SignIn = () => {
  return (
    <div
      className="w-full h-[100vh] flex justify-center items-center"
      style={{
        backgroundImage: "url('/Road.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-[80%] h-[70vh] m-auto backdrop-blur-sm border p-8">
        <h1 className="font-bold text-4xl text-white mb-6">SIGN IN</h1>
        
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputComponent label={'E-mail'} placeholder={'Type your email'} type={'email'} value={''} onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                      throw new Error('Function not implemented.');
                  } } />
          <InputComponent label={'Password'} placeholder={'Password'} type={'password'} value={''} onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                      throw new Error('Function not implemented.');
                  } } />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
