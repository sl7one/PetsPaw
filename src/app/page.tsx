import Image from 'next/image';
import LesftSection from './components/LeftSection/LesftSection';

const Home = () => {
   return (
      <main className="home container">
         <LesftSection />
         <section className="home__right">
            <div className="home__right-thumb">
               <Image
                  src="/girl-and-pet.png"
                  alt="pic"
                  width={775}
                  height={900}
               ></Image>
            </div>
         </section>
      </main>
   );
};

export default Home;
