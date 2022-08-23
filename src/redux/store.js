import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import cityReducer from './reducers/city';
import citiesReducer from './reducers/cities';
import carReducer from './reducers/car';

const store = configureStore({
  reducer: {
    user: userReducer,
    cities: citiesReducer,
    city: cityReducer,
    car: carReducer,
  },
});

export default store;
