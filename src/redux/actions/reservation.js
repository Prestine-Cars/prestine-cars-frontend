import * as API from '../services';

const actionTypes = {
  CREATE_RESERVATION_SUCCESS: 'CREATE_RESERVATION_SUCCESS',
  CREATE_RESERVATION_FAILURE: 'CREATE_RESERVATION_FAILURE',
  FETCH_RESERVATIONS_SUCCESS: 'FETCH_RESERVATIONS_SUCCESS',
  FETCH_RESERVATIONS_FAILURE: 'FETCH_RESERVATIONS_FAILURE',
  FETCH_RESERVATIONS_REQUEST: 'FETCH_RESERVATIONS_REQUEST',
  DELETE_RESERVATION_SUCCESS: 'DELETE_RESERVATION_SUCCESS',
  DELETE_RESERVATION_FAILURE: 'DELETE_RESERVATION_FAILURE',
};

const newReservation = (reservation, navigate) => (dispatch) => {
  API.createReservation(reservation)
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

export const fetchReservations = () => (dispatch) => {
  dispatch({
    type: actionTypes.FETCH_RESERVATIONS_REQUEST,
  });

  API.fetchReservations()
    .then((response) => {
      dispatch({
        type: actionTypes.FETCH_RESERVATIONS_SUCCESS,
        payload: response,
      });
    }).catch((error) => {
      dispatch({
        type: actionTypes.FETCH_RESERVATIONS_FAILURE,
        payload: error.response.error,
      });
    });
};

export const DeleteReservation = (reservation) => (dispatch) => {
  API.deleteReservation(reservation)
    .then((response) => {
      dispatch({
        type: actionTypes.DELETE_RESERVATION_SUCCESS,
        payload: response.message,
      });
    }).catch((error) => {
      dispatch({
        type: actionTypes.DELETE_RESERVATION_FAILURE,
        payload: error.response.error,
      });
    });
};

export default newReservation;
