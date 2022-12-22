import axios from 'axios';

const BASE_URL = 'https://prestine-cars.onrender.com/';

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
  const response = await axios.post(`${BASE_URL}/api/v1/cities/${car.city}/cars`,
    {
      model: car.model,
      photo: car.photo,
      description: car.description,
      cost: car.cost,
    },
    { headers });

  return { ...response.data };
};

export const deleteCar = async (car) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: authHeader(),
  };
  const response = await axios.delete(`${BASE_URL}/api/v1/cities/${car.city_id}/cars/${car.id}`, { headers });
  // @ts-ignore
  document.querySelector(`#car_${car.id}`).remove();
  return { ...response.data };
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

export const fetchReservations = async () => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: authHeader(),
  };
  const response = await axios.get(`${BASE_URL}/api/v1/reservations`, { headers });
  return { ...response.data };
};

export const deleteReservation = async (reservation) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: authHeader(),
  };
  const response = await axios.delete(`${BASE_URL}/api/v1/cities/${reservation.car.city_id}/cars/${reservation.car.id}/reservations/${reservation.id}`, { headers });
  return { ...response.data };
};
