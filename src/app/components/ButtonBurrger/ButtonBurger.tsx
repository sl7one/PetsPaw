import useMedia from '@/app/hooks/useMedia';
import React from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

export default function ButtonBurger() {
   const { isDesktop } = useMedia();
   const onClick = () => {
      console.log('modal');
   };
   return (
      <>
         {!isDesktop && (
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
      </>
   );
}
