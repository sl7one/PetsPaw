'use client';

import '../voting/voting.scss';

const Gallery = ({ list, render }) => {
   const items = list.map((el, idx) => <li key={idx}>{render({ el, idx })}</li>);
   return <ul>{items}</ul>;
};

const Test = () => {
   const arr = new Array(10).fill(1);

   return (
      <main className="home container">
         <Gallery
            list={arr}
            render={({ el, idx }) => <button>{(el, idx)}</button>}
         ></Gallery>
         <Gallery
            list={arr}
            render={({ el, idx }) => (
               <div>
                  <span>{el}</span>
                  <span>{idx}</span>
               </div>
            )}
         ></Gallery>
      </main>
   );
};

export default Test;
