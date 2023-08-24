'use client';
import { useMemo } from 'react';
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

export type OptionType = {
   label: string;
   value: string | number;
};

export type SelectEventType = {
   id: string;
   label: string;
   value: string;
};

const Breeds = () => {
   const { data, isLoading, error } = useFetch({
      api_cb: getBreeds,
      storageKey: 'breeds',
   });

   console.log(data);

   const optionsBreeds: OptionType[] = useMemo(
      () =>
         data.map(({ name }: { name: string }) => ({
            label: name,
            value: name.toLowerCase(),
         })),
      [data]
   );

   const onChange = (e: SelectEventType) => {
      console.log(e);
   };

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
                     width={226}
                     options={optionsBreeds}
                     placeholder="All breeds"
                     isDisabled={isLoading}
                     onChange={onChange}
                     id="option"
                  />
                  <SelectComponent
                     width={101}
                     options={optionsLimit}
                     placeholder="All breeds"
                     isDisabled={isLoading}
                     defaulValue={optionsLimit[0]}
                     onChange={onChange}
                     id="limit"
                  />
                  <Button
                     height={40}
                     width={40}
                     className="sort"
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
                  >
                     <Icon
                        height={22}
                        width={18.5}
                        name="icon-asc"
                     />
                  </Button>
               </div>
               {isLoading ? <Loader/> : <GalleryGrid galleryList={data} />}
            </div>
         </section>
      </main>
   );
};

export default Breeds;
