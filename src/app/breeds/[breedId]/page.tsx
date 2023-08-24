'use client';

import BackComponent from '@/app/components/BackComponent/BackComponent';
import LesftSection from '@/app/components/LeftSection/LesftSection';
import LikeLinks from '@/app/components/LikeLinks/LikeLinks';
import SearchBar from '@/app/components/SearchBar/SearchBar';
import './breed-page.scss';

const BreedPage = ({ params }) => {
   console.log(params);

   return (
      <main className="breed-page home container">
         <LesftSection />
         <section className="home__right">
            <div className="page__header">
               <SearchBar />
               <LikeLinks />
            </div>
            <div className="page__body">
               <div className="page__header">
                  <BackComponent />
                  {/* <span className="nested-rout-name">{count}</span> */}
               </div>
            </div>
         </section>
      </main>
   );
};

export default BreedPage;
