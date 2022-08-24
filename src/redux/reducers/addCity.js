import axios from 'axios';

const actions = {
  ADD_CITY_REQUEST: 'ADD_CITY_REQUEST',
  ADD_CITY_RESPONSE: 'ADD_CITY_RESPONSE',
  ADD_CITY_FAILURE: 'ADD_CITY_FAILURE',
};

const initialState = {
  loading: true,
  city: {},
  error: null,
};

export const addCity = (city, navigate) => (dispatch) => {
  const cityData = {
    flag_icon: city.flag_icon,
    name: city.name,
    description: city.description,
  };

  axios
    .post('http://localhost:3000/api/v1/cities', cityData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((response) => {
      dispatch({
        type: actions.ADD_CITY_RESPONSE,
        payload: response.data,
      });
      navigate('/cities');
    })
    .catch((err) => {
      dispatch({
        type: actions.ADD_CITY_FAILURE,
        payload: err.response.data.error,
      });
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_CITY_RESPONSE:
      return {
        loading: false,
        city: action.payload,
        error: null,
      };
    case actions.ADD_CITY_FAILURE:
      return {
        loading: false,
        city: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
