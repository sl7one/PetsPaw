'use client';

import Image from 'next/image';
import BackComponent from '../components/BackComponent/BackComponent';
import Button from '../components/Button/Button';
import FilterForm from '../components/FilterForm/FilterForm';
import GalleryGrid from '../components/GalleryGrid/GalleryGrid';
import LesftSection from '../components/LeftSection/LesftSection';
import LikeLinks from '../components/LikeLinks/LikeLinks';
import SearchBar from '../components/SearchBar/SearchBar';
import { useFetch } from '../hooks/useFeth';
import { getCatsGallery } from '../API/api';
import Icon from '../components/Icon/Icon';
import Loader from '../components/Loader/Loader';
import { useCallback, useState } from 'react';

const Gallery = () => {
   const [form, setForm] = useState({
      breed: 'None',
      limit: 5,
      order: 'Random',
      type: 'Static',
   });
   const [trigger, setTrigger] = useState(0);
   const { data, isLoading, error } = useFetch({
      api_cb: useCallback(() => getCatsGallery(form), [form]),
   });

   const onClikItem = (id: string) => {
      console.log(id);
   };

   const onChange = ({ id, value }: { id: number; value: number | string }) => {
      setForm((prev) => ({ ...prev, [id]: value }));
   };

   const onClickSubmit = (e) => {
      e.preventDefault();
      setTrigger(Date.now());
   };
   return (
      <main className="home container">
         <LesftSection />
         <section className="home__right ">
            <div className="page__header">
               <SearchBar />
               <LikeLinks />
            </div>
            <div className="page__body">
               <BackComponent />
               <FilterForm
                  onChange={onChange}
                  onClickSubmit={onClickSubmit}
                  defaultValue={form}
               />
               {isLoading ? (
                  <Loader
                     width={80}
                     height={80}
                  />
               ) : (
                  <GalleryGrid
                     galleryList={data}
                     render={({ id, name, url, width, height }) => (
                        <div
                           key={id}
                           className="gallery-list__item"
                           onClick={() => onClikItem(id)}
                        >
                           {
                              <>
                                 <Image
                                    src={url ? url : '/default.jpg'}
                                    alt={name}
                                    width={width && 500}
                                    height={height && 500}
                                 />
                                 <Button
                                    width={40}
                                    height={40}
                                    className="like-gallery-item"
                                 >
                                    <Icon
                                       name="icon-favorite"
                                       width={20}
                                       height={20}
                                    />
                                 </Button>
                              </>
                           }
                        </div>
                     )}
                  />
               )}
            </div>
         </section>
      </main>
   );
};

export default Gallery;
