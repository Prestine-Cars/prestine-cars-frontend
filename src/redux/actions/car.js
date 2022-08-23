import * as API from '../services';

const actionTypes = {
  CREATE_CAR_SUCCESS: 'CREATE_CAR_SUCCESS',
  CREATE_CAR_FAILURE: 'CREATE_CAR_FAILURE',
};

const newCar = (car, navigate) => (dispatch) => {
  API.createCar(car)
    .then((bike) => {
      dispatch(
        {
          type: actionTypes.CREATE_CAR_SUCCESS,
          payload: bike,
        },
      );
      navigate('/cities'); // to be updated with the concerned city
    })
    .catch((error) => {
      dispatch(
        {
          type: actionTypes.CREATE_CAR_FAILURE,
          payload: error,

        },
      );
    });
};

export default newCar;
