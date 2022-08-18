/* eslint-disable*/
/* eslint-disable import/prefer-default-export */
import * as API from '../services';

const actions = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
};

export const login = (userData, location) => (dispatch) => {
  dispatch({
    type: actions.LOGIN_REQUEST,
  });
  API.login(userData)
    .then((response) => {
      dispatch({
        type: actions.LOGIN_SUCCESS,
        payload: response.data,
      });
      const res = response.data;
      localStorage.setItem('token', res[Object.keys(res)[1]]);
      localStorage.setItem('user', JSON.stringify(res[Object.keys(res)[0]]));

      location('/cities');
    })
    .catch((error) => {
      dispatch({
        type: actions.LOGIN_FAILURE,
        payload: error,
      });
    });
};
