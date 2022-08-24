/* eslint-disable no-unused-vars */
import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const login = async (user) => {
  const response = await axios.post(`${BASE_URL}/users/sign_in`, {
    session: {
      email: user.email,
      password: user.password,
    },
  });
  return response;
};

export const signup = async (user) => {
  const response = await axios.post(`${BASE_URL}/users/`, {
    user: {
      name: user.name,
      email: user.email,
      password: user.password,
    },
  });
  return response;
};

export const authHeader = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return `Bearer ${token}`;
  }
  return false;
};

export const createCar = async (car) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: authHeader(),
  };
  const response = await axios.post(`${BASE_URL}/api/v1/cities/${car.city}/cars`, // to be updated with the concerned city ${}{
    {
      model: car.model,
      photo: car.photo,
      description: car.description,
      cost: car.cost,
    },
    { headers });

  return { ...response.data };
};

export const deleteCar = (cityId, CarId) => (dispatch) => {
  API.deleteCar(cityId, CarId)
    .then((response) => {
      dispatch({
        type: actionTypes.DELETE_CAR_SUCCESS,
        payload: response.message,
      });
    }).catch((error) => {
      dispatch({
        type: actionTypes.DELETE_CAR_FAILURE,
        payload: error.response.data.error,
      });
    });
};


export const createReservation = async (reservation) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: authHeader(),
  };
  const response = await axios.post(`${BASE_URL}/api/v1/cities/${reservation.cityId}/cars/${reservation.carId}/reservations`, // to be updated with the concerned city ${}{
    {
      date: reservation.reserveDate,
    },
    { headers });

  return { ...response.data };
};
