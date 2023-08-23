'use client'
import { usePathname } from 'next/navigation';
import React from 'react'

import "./rout-name.scss"

export default function RoutName() {
    const path = usePathname();

  return (
    <span className='rout-name'>
      {path.slice(1)}
    </span>
  )
}
