'use client';

import BackComponent from '../components/BackComponent/BackComponent';
import LesftSection from '../components/LeftSection/LesftSection';
import LikeLinks from '../components/LikeLinks/LikeLinks';
import SearchBar from '../components/SearchBar/SearchBar';

import {
   addToFavorites,
   deleteFromFavorites,
   getRandom,
   getVotes,
   postVotes,
} from '../API/api';

import './voting.scss';
import LikeButtons from '../components/LikeButtons/LikeButtons';
import { useFetch } from '../hooks/useFeth';
import Image from 'next/image';
import Loader from '../components/Loader/Loader';
import VotingList from '../components/VotingList/VotingList';
import { useEffect, useState } from 'react';
import useMedia from '../hooks/useMedia';
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
   const [vote, setVote] = useState(null);
   const [dataVotes, setDataVotes] = useState(null);
   const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);
   const { isMobile } = useMedia();

   const {
      data: dataCats = null,
      isLoading: isLoadingCats,
      error: errorCats,
   } = useFetch({
      storage: false,
      api_cb: getRandom,
   });

   useEffect(() => {
      setDataVotes((prev) => ({ ...prev, isLoadingVotes: true }));
      const getData = async () => {
         try {
            const data = await getVotes();
            setDataVotes((prev) => ({ ...prev, dataVotes: data }));
         } catch (error) {
            setDataVotes((prev) => ({ ...prev, errorVotes: error.message }));
         } finally {
            setDataVotes((prev) => ({ ...prev, isLoadingVotes: false }));
         }
      };
      getData();
   }, [vote]);

   const onClickVote = async (value: number) => {
      try {
         await postVotes({ value, image_id: dataCats[0].id });
         setVote({ value, image_id: dataCats[0].id });
      } catch (error) {
         console.log(error.message);
      }
   };

   const onClickFavorite = async () => {
      if (!isAddedToFavorites) {
         // console.log('need to del')
         // await deleteFromFavorites(dataCats[0].id);
         // setVote({ value: -1000, image_id: dataCats[0].id });
         setIsAddedToFavorites(true);
      } else {
         // await addToFavorites(dataCats[0].id);
         // setVote({ value, image_id: dataCats[0].id });
         setIsAddedToFavorites(false);
      }
   };

   if (!dataCats || !dataVotes) return;

   return (
      <main className="voting home container">
         {!isMobile && <LesftSection />}
         <section className="home__right">
            <div className="page__header">
               <SearchBar />
               <LikeLinks />
            </div>
            <div className="page__body">
               <BackComponent />
               {isLoadingCats ? (
                  <Loader />
               ) : (
                  <div className="wrapper">
                     <div className="thumb">
                        <Image
                           src={dataCats[0]?.url || '/default.jpg'}
                           width={dataCats[0]?.width || 500}
                           height={dataCats[0]?.height || 500}
                           alt="pet image"
                        />
                     </div>
                     <LikeButtons
                        onClickVote={onClickVote}
                        onClickFavorite={onClickFavorite}
                        isDisabled={dataVotes.isLoading}
                        isAddedToFavorites={isAddedToFavorites}
                     />
                  </div>
               )}

               <VotingList
                  list={dataVotes.dataVotes}
                  isLoading={dataVotes.isLoadingVotes}
               />
            </div>
         </section>
      </main>
   );
};

export default Voting;
