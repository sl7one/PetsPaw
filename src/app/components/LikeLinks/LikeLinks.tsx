'use client';

import Link from 'next/link';
import React from 'react';
import Icon from '../Icon/Icon';
import './like-links.scss';
import Button from '../Button/Button';
import useMedia from '@/app/hooks/useMedia';

export default function LikeLinks() {
   const { isMobile } = useMedia();
   const onClick = () => {
      console.log('modal');
   };
   return (
      <div className='page-header-wrapper'>
         {isMobile && (
            <Button
               onClick={onClick}
               width={60}
               height={60}
               className="burger"
            >
               <Icon
                  name="icon-burger"
                  width={30}
                  height={18}
               />
            </Button>
         )}
         <div className="like-links">
            <Link
               href="/"
               className="like-links__item"
            >
               <Icon
                  name="icon-like"
                  width={30}
                  height={30}
               />
            </Link>
            <Link
               href="/"
               className="like-links__item"
            >
               <Icon
                  name="icon-favorite"
                  width={30}
                  height={26}
               />
            </Link>
            <Link
               href="/"
               className="like-links__item"
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
