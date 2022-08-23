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

// const { user } = authHeader();
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
      // city: car.city,
      // user_id: user.id, // getting the current user id
    },
    { headers });
    
  return {...response.data};
  // console.log(authHeader());
};
