'use client';

import BackComponent from '@/app/components/BackComponent/BackComponent';
import LesftSection from '@/app/components/LeftSection/LesftSection';
import LikeLinks from '@/app/components/LikeLinks/LikeLinks';
import SearchBar from '@/app/components/SearchBar/SearchBar';
import './breed-page.scss';
import PetInfo from '@/app/components/PetInfo/PetInfo';
import SwiperComponent from '@/app/components/SwiperComponent/SwiperComponent';
import useMedia from '@/app/hooks/useMedia';
import ButtonBurger from '@/app/components/ButtonBurrger/ButtonBurger';
import { useFetch } from '@/app/hooks/useFeth';
import { useCallback, useState } from 'react';
import { getBreedsImgLimited, getSingleBreed } from '@/app/API/api';

type DataType = {
   name: string;
   description: string;
   temperament: string;
   data: string;
   origin: string;
   weight: {
      metric: string;
   };
   life_span: string;
};

export interface IState {
   data: DataType;
   isLoading: boolean;
   error: string;
}

interface IProps {
   params: {
      breedId: string;
   };
}

const BreedPage = ({ params: { breedId } }: IProps) => {
   const { isMobile, isTablet } = useMedia();
   const [value, setValue] = useState('');

   const {
      data: dataSingle,
      isLoading: isLoadingSingle,
   }: any = useFetch({
      api_cb: useCallback(() => getSingleBreed(breedId), [breedId]),
   });

   const {
      data: dataLimited,
      isLoading: isLoadingLimited,
   }: any = useFetch({
      api_cb: useCallback(() => getBreedsImgLimited(breedId), [breedId]),
   });

   const onChangeSearchForm = useCallback((value: string) => {
      setValue(value);
   }, []);

   if (!dataLimited.length) return;

   return (
      <main className="breed-page home container">
         {!isMobile && !isTablet && <LesftSection />}
         <section className="home__right">
            <div className="page__header">
               <ButtonBurger />
               <SearchBar
                  onChange={onChangeSearchForm}
                  value={value}
               />
               <LikeLinks />
            </div>
            <div className="page__body">
               <div className="page__header">
                  <BackComponent />
               </div>
               <SwiperComponent
                  data={dataLimited}
                  isLoading={isLoadingLimited}
               />
               <PetInfo
                  data={dataSingle}
                  isLoading={isLoadingSingle}
               />
            </div>
         </section>
      </main>
   );
};

export default BreedPage;
