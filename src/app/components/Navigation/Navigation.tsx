'use client';

import React from 'react';
import MainButton from '../MainButton/MainButton';
import { usePathname } from 'next/navigation';

export default function Navigation() {
   const path:string = usePathname();

   return (
      <nav className="home__left-wrapper">
         <MainButton
            linkImage="./voting.png"
            linkPath="/voting"
            linkName="voting"
            className="voting"
            width={100}
            height={124.5}
            isActive={path === '/voting' ? true : false}
         />
         <MainButton
            linkImage="./breeds.png"
            linkPath="/breeds"
            linkName="breeds"
            className="breeds"
            width={117}
            height={163}
            isActive={path === '/breeds' ? true : false}
         />
         <MainButton
            linkImage="./gallery.png"
            linkPath="/gallery"
            linkName="gallery"
            className="gallery"
            width={112}
            height={186}
            isActive={path === '/gallery' ? true : false}
         />
      </nav>
   );
}
