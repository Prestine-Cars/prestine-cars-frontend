const actionTypes = {
  CREATE_CAR_SUCCESS: 'CREATE_CAR_SUCCESS',
  CREATE_CAR_FAILURE: 'CREATE_CAR_FAILURE',
  DELETE_CAR_SUCCESS: 'DELETE_CAR_SUCCESS',
  DELETE_CAR_FAILURE: 'DELETE_CAR_FAILURE',
};

const initialState = {
  car: [],
  loading: false,
  error: null,
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_CAR_SUCCESS:
      return {
        ...state,
        car: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.CREATE_CAR_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.DELETE_CAR_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case actionTypes.DELETE_CAR_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default carReducer;
