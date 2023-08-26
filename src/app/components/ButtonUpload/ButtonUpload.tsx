import React from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

export default function ButtonUpload() {
   return (
      <Button width={143} className='upload'>
         <span>
            <Icon
               name="icon-upload"
               width={16}
               height={16} 
            />{' '}
            upload
         </span>
      </Button>
   );
}
