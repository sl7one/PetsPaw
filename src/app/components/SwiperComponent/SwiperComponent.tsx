import React, { useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { useFetch } from '@/app/hooks/useFeth';
import { getBreedsImgLimited } from '@/app/API/api';
import Loader from '../Loader/Loader';
import Image from 'next/image';
import './swiper-component.scss'

type ItemType = {
   id: string;
   url: string;
   width: number;
   height: number;
};

export interface IState {
   data: ItemType[];
   isLoading: boolean;
   error: string;
}

export default function SwiperComponent({ breedId }: { breedId: string }) {
   const { data, isLoading, error }: IState = useFetch({
      api_cb: useCallback(() => getBreedsImgLimited(breedId), [breedId]),
   });

   console.log(data);

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
            style={{ objectFit: 'cover', objectPosition: 'center', width: "640px" , height: "360px"}}
         />
      </SwiperSlide>
   ));

   return (
      <Swiper
         slidesPerView={1}
         modules={[Pagination]}
         pagination={{ clickable: true }}
         style={{
            width: '640px',
            height: '360px',
            marginTop: '20px',
            borderRadius: '20px',
         }}
      >
         {items}
      </Swiper>
   );
}
