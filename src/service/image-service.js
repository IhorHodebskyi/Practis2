import axios from 'axios';

const API_KEY = 'ip7dqNuxVHKHhyv3POYa5J0wbE6k70zizjfuEa8kiySo1xXf09krJAf9';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getImages = async (query, page) => {
  const {data}= await axios.get(`search?query=${query}&page=${page}`);
  return data
};
