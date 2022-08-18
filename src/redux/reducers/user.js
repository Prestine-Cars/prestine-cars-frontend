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
    loginLoader: false,
    loginError: null,
  }
  : {
    isLoggedIn: false,
    user: null,
    loginLoader: false,
    loginError: null,
  };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        loginLoader: true,
      };
    case actions.LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        loginError: action.payload,
        loginLoader: false,
      };
    default:
      return state;
  }
};

export default reducer;
