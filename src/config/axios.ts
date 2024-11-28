import axios from 'axios';
import { config } from './public/dev';

const api = axios.create({
  baseURL: config.apis.NEXT_PUBLIC_URL_API,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
