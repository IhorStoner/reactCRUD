import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import config from '../config';

export default () => {
  return configureStore({
    reducer: rootReducer,
    devTools: config.devTools,
  });
};
