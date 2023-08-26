import { useEffect, useState } from 'react';
var store = require('store');

interface IProps {
   storage?: boolean;
   storageKey?: string;
   api_cb: () => Promise<any>;
   dependency?: any;
}

export const useFetch = ({ api_cb, storageKey, storage = true, dependency }: IProps) => {
   const [data, setData] = useState({
      data: [],
      isLoading: false,
      error: '',
   });

   useEffect(
      () => {
         const dataStorage = storage ? store.get(storageKey) : [];

         if (dataStorage?.length > 0) {
            setData((prev) => ({ ...prev, data: dataStorage }));
            return;
         }
         const getData = async () => {
            setData((prev) => ({
               ...prev,
               isLoading: true,
            }));

            try {
               const data = await api_cb();
               setData((prev) => ({
                  ...prev,
                  data,
               }));

               if (storage) store.set(storageKey, data);
            } catch (error) {
               console.log(error.message);
               setData((prev) => ({
                  ...prev,
                  error: error,
               }));
            } finally {
               setData((prev) => ({
                  ...prev,
                  isLoading: false,
               }));
            }
         };


         getData();
      },
       [api_cb, dependency]
   );

   return data;
};
