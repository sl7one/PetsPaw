'use client';

import Link from 'next/link';
import React from 'react';
import Icon from '../Icon/Icon';
import { usePathname } from 'next/navigation';
import './like-links.scss';

export default function LikeLinks() {
   const path = usePathname();

   return (
      <div className="page-header-wrapper">
         <div className="like-links">
            <Link
               href="/likes"
               className={
                  path === '/likes'
                     ? 'like-links__item active'
                     : 'like-links__item'
               }
            >
               <Icon
                  name="icon-like"
                  width={30}
                  height={30}
               />
            </Link>
            <Link
               href="/favourites"
               className={
                  path === '/favourites'
                     ? 'like-links__item active'
                     : 'like-links__item'
               }
            >
               <Icon
                  name="icon-favorite"
                  width={30}
                  height={26}
               />
            </Link>
            <Link
               href="/dislikes"
               className={
                  path === '/dislikes'
                     ? 'like-links__item active'
                     : 'like-links__item'
               }
            >
               <Icon
                  name="icon-dislike"
                  width={30}
                  height={30}
               />
            </Link>
         </div>
      </div>
   );
}
