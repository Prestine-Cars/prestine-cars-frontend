import * as API from '../services';

const actionTypes = {
  CREATE_RESERVATION_SUCCESS: 'CREATE_RESERVATION_SUCCESS',
  CREATE_RESERVATION_FAILURE: 'CREATE_RESERVATION_FAILURE',
};

const newReservation = (reservation, navigate) => (dispatch) => {
  API.createReservation(reservation, navigate)
    .then((response) => {
      dispatch({
        type: actionTypes.CREATE_RESERVATION_SUCCESS,
        payload: response.message,
      });
      navigate('/reservations');
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.CREATE_RESERVATION_FAILURE,
        payload: error.response.data.error,
      });
    });
};

export default newReservation;
