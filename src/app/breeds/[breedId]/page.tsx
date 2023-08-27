'use client';

import BackComponent from '@/app/components/BackComponent/BackComponent';
import LesftSection from '@/app/components/LeftSection/LesftSection';
import LikeLinks from '@/app/components/LikeLinks/LikeLinks';
import SearchBar from '@/app/components/SearchBar/SearchBar';
import './breed-page.scss';
import PetInfo from '@/app/components/PetInfo/PetInfo';
import SwiperComponent from '@/app/components/SwiperComponent/SwiperComponent';
import useMedia from '@/app/hooks/useMedia';
import ButtonBurger from '@/app/components/ButtonBurrger/ButtonBurger';

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

interface IProps {
   params: {
      breedId: string;
   };
}

const BreedPage = ({ params: { breedId } }: IProps) => {
   const { isMobile , isTablet} = useMedia();

   return (
      <main className="breed-page home container">
         {!isMobile && !isTablet && <LesftSection />}
         <section className="home__right">
            <div className="page__header">
               <ButtonBurger/>
               <SearchBar />
               <LikeLinks />
            </div>
            <div className="page__body">
               <div className="page__header">
                  <BackComponent />
               </div>
               <SwiperComponent breedId={breedId} />
               <PetInfo breedId={breedId} />
            </div>
         </section>
      </main>
   );
};

export default BreedPage;
