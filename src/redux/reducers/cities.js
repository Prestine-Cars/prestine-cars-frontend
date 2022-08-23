import axios from 'axios';

const actions = {
  CITIES_REQUEST: 'CITIES_REQUEST',
  CITIES_RESPONSE: 'CITIES_RESPONSE',
  CITIES_FAILURE: 'CITIES_FAILURE',
};

const initialState = {
  loading: false,
  cities: [],
  error: null,
};

export const getCities = () => (dispatch) => {
  dispatch({
    type: actions.CITIES_REQUEST,
  });
  axios
    .get('http://localhost:3000/api/v1/cities', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    .then((response) => {
      dispatch({
        type: actions.CITIES_RESPONSE,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: actions.CITIES_FAILURE,
        payload: error.response.data.error,
      });
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CITIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.CITIES_RESPONSE:
      return {
        ...state,
        loading: false,
        cities: action.payload,
      };
    case actions.CITIES_FAILURE:
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
