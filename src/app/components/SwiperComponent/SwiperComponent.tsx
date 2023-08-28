import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';
import Loader from '../Loader/Loader';
import Image from 'next/image';
import './swiper-component.scss';
import useMedia from '@/app/hooks/useMedia';

type ItemType = {
   id: string;
   url: string;
   width: number;
   height: number;
};

export interface IState {
   data: ItemType[];
   isLoading: boolean;
   error?: string;
}

export default function SwiperComponent({ data, isLoading }: IState) {
   const { isMobile } = useMedia();

   if (isLoading) {
      return (
         <Loader
            width={80}
            height={80}
         />
      );
   }

   const items = data.map(({ id, url, width, height }: ItemType) => (
      <SwiperSlide key={id}>
         <Image
            src={url}
            width={width}
            height={height}
            alt="cat-photo"
            style={{
               objectFit: 'cover',
               objectPosition: 'center',
               width: '100%',
               height: '100%',
            }}
         />
      </SwiperSlide>
   ));

   return (
      <Swiper
         slidesPerView={1}
         modules={[Pagination]}
         pagination={{ clickable: true }}
         style={{
            width: isMobile ? '85vw' : '40vw',
            maxHeight: '40vh',
            marginTop: '20px',
            borderRadius: '20px',
         }}
      >
         {items}
      </Swiper>
   );
}
