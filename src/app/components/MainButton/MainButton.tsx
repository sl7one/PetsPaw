import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import './main-button.scss';

interface IProps {
   linkPath: string;
   linkImage: string;
   linkName: string;
   className?: string;
   width: number;
   height: number;
   isActive?: boolean;
}

export default function MainButton({
   linkPath,
   linkImage,
   linkName,
   className,
   isActive = false,
   width,
   height,
}: IProps) {
   return (
      <Link
         href={linkPath}
         className={!isActive ? `main-button` : 'main-button active'}
      >
         <div className={`thumb ${className}`}>
            <Image
               src={linkImage}
               alt={linkName}
               width={width}
               height={height}
            />
         </div>
         <span>{linkName}</span>
      </Link>
   );
}
