'use client';

import { useEffect, useState } from 'react';
import BackComponent from '../components/BackComponent/BackComponent';
import LesftSection from '../components/LeftSection/LesftSection';
import LikeLinks from '../components/LikeLinks/LikeLinks';
import SearchBar from '../components/SearchBar/SearchBar';

import { getRandom } from '../API/api';

import './voting.scss';
import LikeButtons from '../components/LikeButtons/LikeButtons';
import { useFetch } from '../hooks/useFeth';
import Image from 'next/image';

type RandomItemType = {
   id: string;
   url: string;
   width: number;
   height: number;
};

interface IRandomPet {
   data: [RandomItemType];
   error: unknown;
   isLoading: boolean;
}

const Voting = () => {
   const { data, isLoading, error } = useFetch(getRandom);

   if (!data.length) return;
   const [{ id, url, width, height }] = data;
   return (
      <main className="home voting container">
         <LesftSection />
         <section className="home__right">
            <div className="page__header">
               <SearchBar />
               <LikeLinks />
            </div>
            <div className="page__body">
               <BackComponent />
               <div className='wrapper'>
                  <div className="thumb">
                     <Image
                        src={url}
                        width={width}
                        height={height}
                        alt="pet image"
                     />
                  </div>
                  <LikeButtons />
               </div>
            </div>
         </section>
      </main>
   );
};

export default Voting;
