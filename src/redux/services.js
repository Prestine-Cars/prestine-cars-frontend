/* eslint-disable*/
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
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

const authHeader = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return token;
  }
  return {};
};
