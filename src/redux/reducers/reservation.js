const actionTypes = {
  CREATE_RESERVATION_SUCCESS: 'CREATE_RESERVATION_SUCCESS',
  CREATE_RESERVATION_FAILURE: 'CREATE_RESERVATION_FAILURE',
  FETCH_RESERVATIONS_SUCCESS: 'FETCH_RESERVATIONS_SUCCESS',
  FETCH_RESERVATIONS_FAILURE: 'FETCH_RESERVATIONS_FAILURE',
  FETCH_RESERVATIONS_REQUEST: 'FETCH_RESERVATIONS_REQUEST',
  DELETE_RESERVATION_SUCCESS: 'DELETE_RESERVATION_SUCCESS',
  DELETE_RESERVATION_FAILURE: 'DELETE_RESERVATION_FAILURE',

};

const initialState = {
  loading: false,
  error: null,
  reservations: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_RESERVATION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        reservations: action.payload,
      };
    case actionTypes.CREATE_RESERVATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.FETCH_RESERVATIONS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_RESERVATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        reservations: action.payload,
      };
    case actionTypes.FETCH_RESERVATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.DELETE_RESERVATION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        reservations: action.payload,
      };
    case actionTypes.DELETE_RESERVATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
