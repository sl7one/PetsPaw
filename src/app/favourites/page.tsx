'use client';
import BackComponent from '../components/BackComponent/BackComponent';
import LesftSection from '../components/LeftSection/LesftSection';
import { addToFavorites, deleteFromFavorites, getFavorites, getVotes } from '../API/api';
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
import VotingList from '../components/VotingList/VotingList';
import Button from '../components/Button/Button';
import Icon from '../components/Icon/Icon';

export type OptionType = {
   label: string;
   value: string | number;
};

export type SelectEventType = {
   id: string;
   value: string;
};

const Breeds = () => {
   const { isMobile, isTablet } = useMedia();
   const [vote, setVote] = useState(null);
   const [value, setValue] = useState('');
   const [handleIsLoading, setHandleIsLoading] = useState(false);

   const {
      data: catsData,
      isLoading: catsIsLoading,
      error: catsError,
   } = useFetch({
      api_cb: getFavorites,
   });

   const {
      data: dataVotes = null,
      isLoading: isLoadingVotes,
      error: errorVotes,
   } = useFetch({
      api_cb: getVotes,
      dependency: vote,
   });

   const onChangeSearchForm = useCallback((value: string) => {
      setValue(value);
   }, []);

   const onClickFavorite = async () => {
      if (isAddedToFavorites) {
         setHandleIsLoading(true)
         await deleteFromFavorites(favoriteId);
         setHandleIsLoading(false);
      } else {
         setHandleIsLoading(true)
         const data = await addToFavorites(dataCats[0].id);
         setHandleIsLoading(false);
      }
   };


   if (!catsData) return;

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
                     galleryList={catsData}
                     render={({ id, image, name }) => (
                        <div
                           key={id}
                           className="gallery-list__item"
                        >
                           <Image
                              src={image?.url ? image.url : '/default.jpg'}
                              alt={'cat picture'}
                              width={image?.width ? image.width : 500}
                              height={image?.height ? image.height : 500}
                           />
                           <Button
                              width={40}
                              height={40}
                              className="like-gallery-item"
                              isDisabled={handleIsLoading}
                              onClick={onClickFavorite}
                           >
                              <Icon
                                 name="icon-favorite"
                                 width={20}
                                 height={20}
                              />
                           </Button>
                        </div>
                     )}
                  />
               )}

               <VotingList
                  list={dataVotes}
                  isLoading={isLoadingVotes}
               />
            </div>
         </section>
      </main>
   );
};

export default Breeds;
