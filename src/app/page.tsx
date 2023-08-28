'use client';

import Image from 'next/image';
import LesftSection from './components/LeftSection/LesftSection';
import useMedia from './hooks/useMedia';

const Home = () => {
   const { isMobile, isTablet } = useMedia();

   return (
      <main className="home container">
         <LesftSection />
         {!isMobile && !isTablet && (
            <section className="home__right">
               <div className="home__right-thumb">
                  <Image
                     src="./girl-and-pet.png"
                     alt="pic"
                     width={775}
                     height={900}
                  ></Image>
               </div>
            </section>
         )}
      </main>
   );
};

export default Home;
