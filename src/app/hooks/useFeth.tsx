import { useEffect, useState } from 'react';

export const useFetch = (api_cb: () => Promise<any>) => {
   const [data, setData] = useState({
      data: [],
      isLoading: false,
      error: '',
   });

   useEffect(() => {
      const getData = async () => {
         setData((prev) => ({
            ...prev,
            isLoading: false,
         }));
         try {
            const data = await api_cb();
            setData((prev) => ({
               ...prev,
               data,
            }));
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
   }, [api_cb]);
   return data;
};
