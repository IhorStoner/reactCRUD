import axios from 'axios';
import config from '../config';

const instance = axios.create({
  baseURL: config.serverUrl,
  withCredentials: false,
  headers: {
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    'x-rapidapi-key': '0dfd8027cdmsh1a03d7d87d7cfbep1cfd71jsn937036d604fa',
  },
});

export default instance;
