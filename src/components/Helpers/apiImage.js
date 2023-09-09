import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchImages = async (searchQuery, page = 1, totalHitsPages) => {
  const API_KEY = '37960229-568719668cd9d6c687eddc6ce';
  const resp = await axios.get(
    `?key=${API_KEY}&image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&image_type=photo&orientation=horizontal&per_page=${totalHitsPages}`
  );
  return resp.data;
};
