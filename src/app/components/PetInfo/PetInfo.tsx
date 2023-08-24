import { getSingleBreed } from '@/app/API/api';
import { useFetch } from '@/app/hooks/useFeth';
import React, { useCallback } from 'react';
import Loader from '../Loader/Loader';

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

export default function PetInfo({ breedId }: { breedId: string }) {
   const { data, isLoading, error }: IState = useFetch({
      api_cb: useCallback(() => getSingleBreed(breedId), [breedId]),
   });


   if (isLoading) {
      return (
         <Loader
            width={80}
            height={80}
         />
      );
   }

   return (
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
   );
}
