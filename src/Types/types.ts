import React from 'react';

export type HamburgerProps = {
  onclick: React.MouseEventHandler<SVGElement>;
}

export type ButtonProps = {
  txt: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};
export type carCardsprops = {
  txt1: string;
  txt2: string;
  txt3: string;
  src:string;
  hoverSrc:string;
 
}
export type InputComponentProps = {
  label: string;
  placeholder: string;
  type: string;
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  className:string;
};
