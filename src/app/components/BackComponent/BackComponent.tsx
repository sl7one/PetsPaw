'use client';

import React from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import RoutName from '../RoutName/RoutName';
import './back-component.scss';
import { useRouter } from 'next/navigation';

export default function BackComponent() {
   const router = useRouter();

   return (
      <div className="back-component">
         <Button onClick={() => router.back()}>
            <Icon name="icon-arrow-left" />
         </Button>
         <RoutName />
      </div>
   );
}
