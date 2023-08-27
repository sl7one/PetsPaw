'use client';

import React, { useState } from 'react';
import './search-bar.scss';
import Icon from '../Icon/Icon';
import Link from 'next/link';

export default function SearchBar() {
   const [value, setValue] = useState('');

   return (
      <form className="search-bar">
         <input
            type="text"
            value={value}
            placeholder="Search for breeds by name"
            onChange={({ target: { value } }) => setValue(value.trim().toLowerCase())}
         />
         <Link
            type="submit"
            href={{
               pathname: '/search',
               query: { q: value },
            }}
         >
            <Icon
               name="icon-search"
               height={20}
               width={20}
            ></Icon>
         </Link>
      </form>
   );
}
