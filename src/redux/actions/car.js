import * as API from '../services';

const actionTypes = {
  CREATE_CAR_SUCCESS: 'CREATE_CAR_SUCCESS',
  CREATE_CAR_FAILURE: 'CREATE_CAR_FAILURE',
  DELETE_CAR_SUCCESS: 'DELETE_CAR_SUCCESS',
  DELETE_CAR_FAILURE: 'DELETE_CAR_FAILURE',
};

const newCar = (car, navigate) => (dispatch) => {
  API.createCar(car)
    .then((bike) => {
      dispatch({
        type: actionTypes.CREATE_CAR_SUCCESS,
        payload: bike,
      });
      navigate(`/cities/${car.city}`); // to be updated with the concerned city
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.CREATE_CAR_FAILURE,
        payload: error,
      });
    });
};

export const deleteCar = (car) => (dispatch) => {
  API.deleteCar(car)
    .then((response) => {
      dispatch({
        type: actionTypes.DELETE_CAR_SUCCESS,
        payload: response.message,
      });
    }).catch((error) => {
      dispatch({
        type: actionTypes.DELETE_CAR_FAILURE,
        payload: error.response.data.error,
      });
    });
};

export default newCar;
