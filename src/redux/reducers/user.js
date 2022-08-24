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

const user = localStorage.getItem('token');
const name = localStorage.getItem('user');

const initialState = user
  ? {
    isLoggedIn: true,
    user,
    name,
    Loader: false,
    formError: null,
  }
  : {
    isLoggedIn: false,
    user: null,
    name,
    Loader: false,
    formError: null,
  };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        name,
        formError: null,
      };
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        name,
        Loader: true,
      };
    case actions.LOGIN_FAILURE:
      return {
        ...state,
        formError: action.payload,
        Loader: false,
      };
    case actions.SIGNUP_SUCCESS:
      return {
        ...state,
        user: null,
        Loader: false,
        formError: null,
      };
    case actions.SIGNUP_REQUEST:
      return {
        ...state,
        user: null,
        Loader: true,
      };
    case actions.SIGNUP_FAILURE:
      return {
        ...state,
        formError: action.payload,
        Loader: false,
      };
    case actions.LOGOUT_REQUEST:
      return {
        ...state,
        user: null,
      };
    case actions.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        name,
        Loader: false,
        formError: null,
      };
    case actions.LOGOUT_FAILURE:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
