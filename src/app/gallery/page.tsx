import BackComponent from '../components/BackComponent/BackComponent';
import FilterForm from '../components/FilterForm/FilterForm';
import LesftSection from '../components/LeftSection/LesftSection';
import LikeLinks from '../components/LikeLinks/LikeLinks';
import SearchBar from '../components/SearchBar/SearchBar';

const Gallery = () => {
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
            </div>
         </section>
      </main>
   );
};

export default Gallery;
