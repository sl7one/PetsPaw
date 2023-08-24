'use client';

import BackComponent from '@/app/components/BackComponent/BackComponent';
import LesftSection from '@/app/components/LeftSection/LesftSection';
import LikeLinks from '@/app/components/LikeLinks/LikeLinks';
import SearchBar from '@/app/components/SearchBar/SearchBar';
import './breed-page.scss';
import { useFetch } from '@/app/hooks/useFeth';
import { getSingleBreed } from '@/app/API/api';
import { useCallback } from 'react';
import Loader from '@/app/components/Loader/Loader';

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
   const api_cb = useCallback(() => getSingleBreed(breedId), [breedId]);
   const { data, isLoading, error }: IState = useFetch({
      api_cb,
   });

   console.log(isLoading)

   return (
      <main className="breed-page home container">
         <LesftSection />
         <section className="home__right">
            <div className="page__header">
               <SearchBar />
               <LikeLinks />
            </div>
            <div className="page__body">
               <div className="page__header">
                  <BackComponent />
               </div>
               {isLoading ? (
                  <Loader width={100} height={100}/>
               ) : (
                  <div className="pet-info-block">
                     <h1>{data?.name}</h1>
                     <p>{data?.description}</p>
                     <div className="pet-info-text-block">
                        <div className="pet-info-text-block__left">
                           <p>Temperament:</p>
                           <span>{data?.temperament}</span>
                        </div>
                        <div className="pet-info-text-block__right">
                           <p>
                              Origin: <span>{data?.origin}</span>
                           </p>
                           <p>
                              Weight: <span>{data?.weight?.metric + ' kgs'}</span>
                           </p>
                           <p>
                              Life span: <span>{data?.life_span + ' years'}</span>
                           </p>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         </section>
      </main>
   );
};

export default BreedPage;
