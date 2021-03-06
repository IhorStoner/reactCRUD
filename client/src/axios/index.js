import axios from 'axios';
import config from '../config';

const instance = axios.create({
  baseURL: config.serverUrl,
  withCredentials: false,
});

export default instance;
