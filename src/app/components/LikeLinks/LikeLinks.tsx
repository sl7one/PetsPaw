'use client';

import Link from 'next/link';
import React from 'react';
import Icon from '../Icon/Icon';
import './like-links.scss';

export default function LikeLinks() {
   return (
      <div className="page-header-wrapper">
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
