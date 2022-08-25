import axios from 'axios';

const actions = {
  DELETE_CITY_REQUEST: 'DELETE_CITY_REQUEST',
  DELETE_CITY_RESPONSE: 'DELETE_CITY_RESPONSE',
  DELETE_CITY_FAILURE: 'DELETE_CITY_FAILURE',
};

const initialState = {
  loading: false,
  message: '',
  error: null,
};

export const deleteCity = (cityId, navigate) => (dispatch) => {
  dispatch({ type: actions.DELETE_CITY_REQUEST });
  axios
    .delete(
      `https://prestine-cars-backend.herokuapp.com/api/v1/cities/${cityId}`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      }
    )
    .then((response) => {
      dispatch({
        type: actions.DELETE_CITY_RESPONSE,
        payload: response.data,
      });
      navigate('/cities');
    })
    .catch((err) => {
      dispatch({
        type: actions.DELETE_CITY_FAILURE,
        payload: err.response.data.error,
      });
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.DELETE_CITY_REQUEST:
      return {
        loading: true,
        message: '',
        error: null,
      };
    case actions.DELETE_CITY_RESPONSE:
      return {
        loading: false,
        message: action.payload,
        error: null,
      };
    case actions.DELETE_CITY_FAILURE:
      return {
        loading: false,
        message: '',
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
