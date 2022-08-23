import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import carReducer from './reducers/car';

const store = configureStore({
  reducer: {
    user: userReducer,
    car: carReducer,
  },
});

export default store;
