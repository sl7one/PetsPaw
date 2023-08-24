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
import Loader from '../components/Loader/Loader';

// type RandomItemType = {
//    id: string;
//    url: string;
//    width: number;
//    height: number;
// };

// interface IRandomPet {
//    data: [RandomItemType];
//    error: unknown;
//    isLoading: boolean;
// }

const Voting = () => {
   const { data, isLoading, error } = useFetch({
      storage: false,
      api_cb: getRandom,
   });

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
               {isLoading ? (
                  <Loader />
               ) : (
                  <div className="wrapper">
                     <div className="thumb">
                        <Image
                           src={data[0]?.url}
                           width={data[0]?.width}
                           height={data[0]?.height}
                           alt="pet image"
                        />
                     </div>
                     <LikeButtons />
                  </div>
               )}
            </div>
         </section>
      </main>
   );
};

export default Voting;
