/* eslint-disable react-hooks/exhaustive-deps */
import { HamburgerProps } from '@/Types/types';
import React from 'react';
import { TiThMenuOutline } from "react-icons/ti";


const MenuIcone = ({onclick}:HamburgerProps) => {

  return (
    <>
      <TiThMenuOutline
        className='text-3xl text-orange-500 hover:text-blue-500 cursor-pointer z-50'  
        onClick={onclick}
      />
    </>
  );
};

export default MenuIcone;


