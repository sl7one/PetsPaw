import axios from 'axios';

const apiKey = 'live_ly5DxqJrUSw1DoNQe0mO6jsCdxZW8NugNjD2pAkrBLSblmM9oHw1FLcAVN1J1tgC';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = apiKey;

export const getRandom = async () => {
   const { data } = await axios.get('/images/search');
   return data;
};

export const getVotes = async () => {
   const { data } = await axios.get('/votes?limit=10&order=DESC');
   return data;
};

export const getBreeds = async (options) => {
   if (!options) {
      const { data } = await axios.get(`/breeds`);
      return data;
   } else {
      const { limit, order } = options;
      const { data } = await axios.get(`/breeds?limit=${limit}&order=${order}`);
      return data;
   }
};

export const getSingleBreed = async (id) => {
   const { data } = await axios.get(`/breeds/${id}`);
   return data;
};

export const getBreedsImgLimited = async (id) => {
   const { data } = await axios.get(`/images/search?breed_ids=${id}&limit=5&size=med`);
   return data;
};

export const getCatsGallery = async (options) => {
   const mimeTypes = (type) => {
      const types = {
         all: 'jpg,gif,png',
         static: 'jpg,png',
         animated: 'gif',
      };
      return types[type];
   };
   const { data } = await axios.get(
      `/images/search?limit=${options['limit']}&page=1&order=${
         options['order']
      }&mime_types=${mimeTypes(options['type'].toLowerCase())}&breed_ids=${
         options['breed'] === 'None' ? '' : options['breed']
      }`
   );
   return data;
};

export const postCatImage = async (formData) => {
   const { data } = await axios.post(`/images/upload`, formData);
   return data;
};