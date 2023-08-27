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
import { addToFavorites, getCatsGallery } from '../API/api';
import Icon from '../components/Icon/Icon';
import Loader from '../components/Loader/Loader';
import { useCallback, useRef, useState } from 'react';
import './gallery.scss';
import Modal from '../components/Modal/Modal';
import useMedia from '../hooks/useMedia';
import ButtonBurger from '../components/ButtonBurrger/ButtonBurger';

const Gallery = () => {
   const { isMobile, isTablet } = useMedia();
   const modalRef = useRef(null);
   const [form, setForm] = useState({
      breed: 'None',
      limit: 5,
      order: 'Random',
      type: 'Static',
   });
   const [submitTrigger, setSubmitTrigger] = useState(null);
   const [handleIsLoading, setHandleIsLoading] = useState(false);

   const { data, isLoading, error } = useFetch({
      api_cb: useCallback(() => getCatsGallery(form), [form]),
      dependency: submitTrigger,
   });

   const onClickItem = async (id: string) => {
      setHandleIsLoading(true);
      await addToFavorites(id);
      setHandleIsLoading(false);
   };

   const onChange = ({ id, value }: { id: number; value: number | string }) => {
      setForm((prev) => ({ ...prev, [id]: value }));
   };

   const onClickSubmit = (e) => {
      e.preventDefault();
      setSubmitTrigger(form);
   };

   const onClickUpload = () => {
      if (modalRef.current) {
         modalRef.current.classList.add('opened');
      }
   };

   return (
      <main className="gallery home container">
         {!isMobile && !isTablet && <LesftSection />}
         <section className="home__right ">
            <div className="page__header">
               <ButtonBurger />
               <SearchBar />
               <LikeLinks />
            </div>
            <div className="page__body">
               <div className="gallery__body-header">
                  <BackComponent />
                  <Button
                     width={143}
                     className="upload"
                     onClick={onClickUpload}
                  >
                     <span>
                        <Icon
                           name="icon-upload"
                           width={16}
                           height={16}
                        />{' '}
                        upload
                     </span>
                  </Button>
               </div>
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
                           onClick={() => onClickItem(id)}
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
                                    isDisabled={handleIsLoading}
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
         <Modal ref={modalRef} />
      </main>
   );
};

export default Gallery;
