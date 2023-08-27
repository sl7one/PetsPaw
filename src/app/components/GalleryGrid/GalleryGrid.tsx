'use client';

import React from 'react';
import './gallery-grid.scss';

type GalleryType = {
   id: string;
   name: string;
   image: {
      url: string;
      width: number;
      height: number;
   };
   url?: string;
   width?: number;
   height?: number;
};

interface IProps {
   galleryList: GalleryType[];
   render: (params: GalleryType) => React.ReactNode;
}

export default function GalleryGrid({ galleryList, render }: IProps) {

   if (!galleryList.length) return <p className='no-items'>Items not found</p>;

   const items = galleryList.map(({ id, image, name, url, width, height }) =>
      render({ id, image, name, url, width, height })
   );
   return <div className="gallery-list">{items} </div>;
}
