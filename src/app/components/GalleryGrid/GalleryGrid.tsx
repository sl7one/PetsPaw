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
};

interface IProps {
   galleryList: GalleryType[];
   render: (params: GalleryType) => React.ReactNode;
}


export default function GalleryGrid({ galleryList, render }: IProps) {
   if (!galleryList.length) return;

   const items = galleryList.map(({ id, image, name }) => render({id, image, name}));
   return <div className="gallery-list">{items} </div>;
}
