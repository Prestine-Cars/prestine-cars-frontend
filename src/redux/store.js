import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import cityReducer from './reducers/city';
import citiesReducer from './reducers/cities';
import carReducer from './reducers/car';
import reservationReducer from './reducers/reservation';

const store = configureStore({
  reducer: {
    user: userReducer,
    cities: citiesReducer,
    city: cityReducer,
    car: carReducer,
    reservation: reservationReducer,
  },
});

export default store;
