'use client';
import { usePathname } from 'next/navigation';
import React from 'react';

import './rout-name.scss';

export default function RoutName() {
   const path = usePathname();
   const pathArr = path.split('/').filter((el) => !!el);
   const items = pathArr.map((el, idx) => (
      <span
         className={
            (idx === pathArr.length - 1) ? 'rout-name primary' : 'rout-name primary-light'
         }
         key={el}
      >
         {el}
      </span>
   ));

   return items;
}
