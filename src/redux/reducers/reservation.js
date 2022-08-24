const actionTypes = {
  CREATE_RESERVATION_SUCCESS: 'CREATE_RESERVATION_SUCCESS',
  CREATE_RESERVATION_FAILURE: 'CREATE_RESERVATION_FAILURE',
};

const initialState = {
  loading: false,
  error: null,
  reservation: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_RESERVATION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        reservation: action.payload,
      };
    case actionTypes.CREATE_RESERVATION_FAILURE:
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
