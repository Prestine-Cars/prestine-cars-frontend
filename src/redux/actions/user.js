import * as API from '../services';

const actions = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  SIGNUP_REQUEST: 'SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNUP_FAILURE: 'SIGNUP_FAILURE',
  LOGOUT_REQUEST: 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'LOGOUT_FAILURE',
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
    type: actions.SIGNUP_REQUEST,
  });
  API.signup(userData)
    .then((response) => {
      dispatch({
        type: actions.SIGNUP_SUCCESS,
        payload: response.data,
      });
      location('/signin');
    })
    .catch((error) => {
      dispatch({
        type: actions.SIGNUP_FAILURE,
        payload: error,
      });
    });
};

export const logout = (location) => (dispatch) => {
  dispatch({
    type: actions.LOGOUT_REQUEST,
  });
  if (localStorage.getItem('token')) {
    localStorage.removeItem('token');
    localStorage.setItem(
      'user',
      JSON.stringify({
        name: 'User',
      }),
    );
    dispatch({
      type: actions.LOGOUT_SUCCESS,
    });
    location('/signin');
  } else {
    dispatch({
      type: actions.LOGOUT_FAILURE,
    });
  }
};
