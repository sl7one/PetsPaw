import axios from 'axios';

const apiKey = 'live_ly5DxqJrUSw1DoNQe0mO6jsCdxZW8NugNjD2pAkrBLSblmM9oHw1FLcAVN1J1tgC';
const url = 'https://api.thecatapi.com/v1';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = apiKey;


export const getRandom = async () => {
   const { data } = await axios.get(url + '/images/search');
   return data;
};

export const getVotes = async () => {
   const { data } = await axios.get(url + '/votes?limit=10&order=DESC');
   return data;
};

export const getBreeds = async () => {
   const { data } = await axios.get(url + '/breeds');
   return data;
};

export const getSingleBreed = async (id) => {
   const { data } = await axios.get(url + `/breeds/${id}`);
   return data;
};

export const getBreedsImgLimited = async (id) => {
   const { data } = await axios.get(url + `/images/search?breed_ids=${id}&limit=5&size=med`);
   return data;
};





