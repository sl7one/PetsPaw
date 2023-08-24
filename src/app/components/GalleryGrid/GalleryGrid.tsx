'use client';

import React from 'react';
import './gallery-grid.scss';
import Image from 'next/image';
import Link from 'next/link';

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
}

export default function GalleryGrid({ galleryList }: IProps) {
   if (!galleryList.length) return;

   const items = galleryList.map(({ id, image, name }) => (
      <Link
         href={`/breeds/${id}`}
         key={id}
         className="gallery-list__item"
      >
         <Image
            src={image?.url ? image.url : '/default.jpg'}
            alt={name}
            width={image?.width ?? 500}
            height={image?.height ?? 500}
         />
         <p className="gallery-list__item-text">{name}</p>
      </Link>
   ));
   return <div className="gallery-list">{items} </div>;
}
