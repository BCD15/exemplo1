import axios from 'axios';

const api = axios.create({
  baseURL: '191.52.55.170:19000',
});

export default api;