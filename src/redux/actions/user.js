/* eslint-disable import/prefer-default-export */
import * as API from '../services';

const actions = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  SIGNIN_REQUEST: 'SIGNIN_REQUEST',
  SIGNIN_SUCCESS: 'SIGNIN_SUCCESS',
  SIGNIN_FAILURE: 'SIGNIN_FAILURE',
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

export const signup = (userData, location) => (dispatch) => {
  dispatch({
    type: actions.SIGNIN_REQUEST,
  });
  API.signup(userData)
    .then((response) => {
      dispatch({
        type: actions.SIGNIN_SUCCESS,
        payload: response.data,
      });
      location('/signin');
    })
    .catch((error) => {
      dispatch({
        type: actions.SIGNIN_FAILURE,
        payload: error,
      });
    });
}
