import React from 'react';
import './icons.scss';

interface IProps {
   name: string;
   width?: number;
   height?: number;
}

export default function Icon({ name, width = 20, height = 15.5 }: IProps) {
   return (
      <svg
         className="icons"
         style={{ width: `${width}px`, height: `${height}px` }}
      >
         <use href={'/sprite.svg' + `#${name}`}></use>
      </svg>
   );
}
