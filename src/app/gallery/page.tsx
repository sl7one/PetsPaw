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
import { getBreeds } from '../API/api';
import Icon from '../components/Icon/Icon';
import Loader from '../components/Loader/Loader';

const Gallery = () => {
   const { data, isLoading, error } = useFetch({
      api_cb: getBreeds,
      storageKey: 'breeds',
   });

   const onClikItem = (id:string) => {
      console.log(id);
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
               <FilterForm />
               {isLoading ? <Loader width={80} height={80}/>: <GalleryGrid
                  galleryList={data}
                  render={({ id, image, name }) => (
                     <div
                        key={id}
                        className="gallery-list__item"
                        onClick={() => onClikItem(id)}
                     >
                        {
                           <>
                              <Image
                                 src={image?.url ? image.url : '/default.jpg'}
                                 alt={name}
                                 width={image?.width ?? 500}
                                 height={image?.height ?? 500}
                              />
                              <Button
                                 width={40}
                                 height={40}
                                 className='like-gallery-item'
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
               />}
            </div>
         </section>
      </main>
   );
};

export default Gallery;
