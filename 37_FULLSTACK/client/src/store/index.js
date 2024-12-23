import { configureStore } from '@reduxjs/toolkit';
import phonesReducer from './slices/phonesSlice';
import brandsReducer from './slices/brandsSlice';

const store = configureStore({
  reducer: {
    phonesData: phonesReducer,
    brandsData: brandsReducer,
  },
});

export default store;
