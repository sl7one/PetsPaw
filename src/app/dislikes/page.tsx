'use client';

import BackComponent from '../components/BackComponent/BackComponent';
import LesftSection from '../components/LeftSection/LesftSection';
import { getVotes } from '../API/api';
import { useFetch } from '../hooks/useFeth';
import SearchBar from '../components/SearchBar/SearchBar';
import LikeLinks from '../components/LikeLinks/LikeLinks';
import GalleryGrid from '../components/GalleryGrid/GalleryGrid';
import Loader from '../components/Loader/Loader';
import Image from 'next/image';
import useMedia from '../hooks/useMedia';
import ButtonBurger from '../components/ButtonBurrger/ButtonBurger';
import '../likes/likes.scss';
import { useCallback, useState } from 'react';

export type OptionType = {
   label: string;
   value: string | number;
};

export type SelectEventType = {
   id: string;
   value: string;
};

const Dislikes = () => {
   const { isMobile, isTablet } = useMedia();
   const [value, setValue] = useState('');

   const {
      data: catsData,
      isLoading: catsIsLoading,
   } = useFetch({
      api_cb: getVotes,
   });

   const onChangeSearchForm = useCallback((value: string) => {
      setValue(value);
   }, []);

   if (!catsData) return;

   const items = catsData.filter(({ value }) => value === -1);

   return (
      <main className="likes home container">
         {!isMobile && !isTablet && <LesftSection />}
         <section className="home__right">
            <div className="page__header">
               <ButtonBurger />
               <SearchBar
                  value={value}
                  onChange={onChangeSearchForm}
               />
               <LikeLinks />
            </div>
            <div className="page__body">
               <div className="breeds__body-header">
                  <BackComponent />
                  <div className="breeds__header-wrapper"></div>
               </div>
               {catsIsLoading ? (
                  <Loader />
               ) : (
                  <GalleryGrid
                     galleryList={items}
                     render={({ id, image, name }) => (
                        <div
                           key={id}
                           className="gallery-list__item"
                        >
                           <Image
                              src={image?.url ? image.url : './default.jpg'}
                              alt={'cat picture'}
                              width={image?.width ? image.width : 500}
                              height={image?.height ? image.height : 500}
                           />
                        </div>
                     )}
                  />
               )}
            </div>
         </section>
      </main>
   );
};

export default Dislikes;
