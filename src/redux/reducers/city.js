import axios from 'axios';

const actions = {
  CITY_REQUEST: 'CITY_REQUEST',
  CITY_RESPONSE: 'CITY_RESPONSE',
  CITY_FAILURE: 'CITY_FAILURE',
};

const initialState = {
  loading: true,
  city: {},
  error: null,
};

export const getCity = (id) => (dispatch) => {
  dispatch({
    type: actions.CITY_REQUEST,
  });
  axios
    .get(`http://localhost:3000/api/v1/cities/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    .then((response) => {
      dispatch({
        type: actions.CITY_RESPONSE,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: actions.CITY_FAILURE,
        payload: error.response.data.error,
      });
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CITY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.CITY_RESPONSE:
      return {
        ...state,
        loading: false,
        city: action.payload,
      };
    case actions.CITY_FAILURE:
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
