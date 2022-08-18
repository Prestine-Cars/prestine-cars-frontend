/* eslint-disable*/
const actions = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
};

const user = localStorage.getItem('user');
const initialState = user
  ? {
    isLoggedIn: true,
    user,
    errorLogin: null,
  }
  : {
    isLoggedIn: false,
    user: null,
    errorLogin: null,
  };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case actions.LOGIN_REQUEST:
      return {
        ...state,
      };
    case actions.LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        errorLogin: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
