'use client';

import React, { ReactElement } from 'react';
import './button.scss';

interface IProps {
   width?: number;
   height?: number;
   children: ReactElement;
   className?: string;
   type?: string;
   onClick: () => void;
}

export default function Button({
   width = 40,
   height = 40,
   children,
   className,
   type = 'button',
   onClick,
}: IProps) {


   return (
      <button
         className={className ? `button ${className}` : 'button'}
         style={{ width: `${width}px`, height: `${height}px` }}
         onClick={onClick}
         type={type}
      >
         {children}
      </button>
   );
}
