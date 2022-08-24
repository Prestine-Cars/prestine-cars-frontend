import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import cityReducer from './reducers/city';
import citiesReducer from './reducers/cities';
import carReducer from './reducers/car';
import reservationReducer from './reducers/reservation';
import addCityReducer from './reducers/addCity';

const store = configureStore({
  reducer: {
    user: userReducer,
    cities: citiesReducer,
    city: cityReducer,
    add_city: addCityReducer,
    car: carReducer,
    reservation: reservationReducer,
  },
});

export default store;
