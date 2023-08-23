'use client';
import React, { useState } from 'react';
import './search-bar.scss';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

export default function SearchBar() {
   const [value, setValue] = useState('');
   const onClick = ()=>{
      console.log('object')
   }
   return (
      <form className="search-bar">
         <input
            type="text"
            value={value}
            placeholder="Search for breeds by name"
            onChange={({ target: { value } }) => setValue(value.trim().toLowerCase())}
         />
         <Button type="submit" onClick={onClick}>
            <Icon
               name="icon-search"
               height={20}
               width={20}
            ></Icon>
         </Button>
      </form>
   );
}
