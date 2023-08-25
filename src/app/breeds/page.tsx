'use client';
import { useCallback, useMemo, useState } from 'react';
import BackComponent from '../components/BackComponent/BackComponent';
import LesftSection from '../components/LeftSection/LesftSection';
import { getBreeds } from '../API/api';
import { useFetch } from '../hooks/useFeth';
import './breeds.scss';
import SearchBar from '../components/SearchBar/SearchBar';
import LikeLinks from '../components/LikeLinks/LikeLinks';
import SelectComponent from '../components/SelectComponent/SelectComponent';
import Button from '../components/Button/Button';
import Icon from '../components/Icon/Icon';
import GalleryGrid from '../components/GalleryGrid/GalleryGrid';
import { optionsLimit } from '../utils/utils';
import Loader from '../components/Loader/Loader';
import Link from 'next/link';
import Image from 'next/image';

export type OptionType = {
   label: string;
   value: string | number;
};

export type SelectEventType = {
   id: string;
   value: string;
};

const Breeds = () => {
   const [filter, setFilter] = useState({
      order: 'Random',
      type: 'All',
      limit: 10,
      breed: 'None',
   });
   const {
      data: catsData,
      isLoading: catsIsLoading,
      error: catsError,
   } = useFetch({
      api_cb: useCallback(() => getBreeds(filter), [filter]),
      storage: false,
   });

   const {
      data: optionsData,
      isLoading: optionsIsLoading,
      error: optionsError,
   } = useFetch({
      api_cb: getBreeds,
      storageKey: 'breedsOptionts',
   });

   const optionsBreeds: OptionType[] = useMemo(
      () =>
         optionsData.map(({ name }: { name: string }) => ({
            label: name,
            value: name.toLowerCase(),
         })),
      [optionsData]
   );

   const onChange = ({ id, value }: SelectEventType) => {
      setFilter((prev) => ({ ...prev, [id]: value }));
   };

   // console.log(data)

   return (
      <main className="breeds home container">
         <LesftSection />
         <section className="home__right">
            <div className="page__header">
               <SearchBar />
               <LikeLinks />
            </div>
            <div className="page__body">
               <div className="page__header">
                  <BackComponent />
                  <SelectComponent
                     width={101}
                     options={optionsBreeds}
                     isDisabled={optionsIsLoading}
                     onChange={onChange}
                     id="option"
                     defaulValue={{ label: 'All breeds', value: 'None' }}
                  />
                  <SelectComponent
                     width={101}
                     options={optionsLimit}
                     defaulValue={{
                        label: `Limit: ${filter.limit}`,
                        value: filter.limit,
                     }}
                     onChange={onChange}
                     id="limit"
                  />
                  <Button
                     height={40}
                     width={40}
                     className="sort"
                     onClick={() => setFilter((prev) => ({ ...prev, ['order']: 'desc' }))}
                  >
                     <Icon
                        height={22}
                        width={18.5}
                        name="icon-desc"
                     />
                  </Button>
                  <Button
                     height={40}
                     width={40}
                     className="sort"
                     onClick={() => setFilter((prev) => ({ ...prev, ['order']: 'asc' }))}
                  >
                     <Icon
                        height={22}
                        width={18.5}
                        name="icon-asc"
                     />
                  </Button>
               </div>
               {catsIsLoading ? (
                  <Loader />
               ) : (
                  <GalleryGrid
                     galleryList={catsData}
                     render={({ id, image, name }) => (
                        <Link
                           href={`/breeds/${id}`}
                           key={id}
                           className="gallery-list__item"
                        >
                           <Image
                              src={image?.url ? image.url : '/default.jpg'}
                              alt={name}
                              width={image?.width && 500}
                              height={image?.height && 500}
                           />
                           <p className="gallery-list__item-text">{name}</p>
                        </Link>
                     )}
                  />
               )}
            </div>
         </section>
      </main>
   );
};

export default Breeds;
