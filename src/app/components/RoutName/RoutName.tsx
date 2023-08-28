'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import './rout-name.scss';
import useMedia from '@/app/hooks/useMedia';

export default function RoutName() {
   const { isMobile } = useMedia();
   const path: string = usePathname();
   const pathArr: string[] = path.split('/').filter((el) => !!el);

   const items = pathArr.map((el: string, idx: number) => {
      const classes = (idx: number) => {
         if (isMobile) return 'rout-name primary';
         return idx === pathArr.length - 1
            ? 'rout-name primary'
            : 'rout-name primary-light';
      };

      return (
         <span
            className={classes(idx)}
            key={el}
         >
            {el}
         </span>
      );
   });

   return items;
}
