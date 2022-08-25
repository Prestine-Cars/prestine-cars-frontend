import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types'; // ES6
import { DeleteReservation, fetchReservations } from '../redux/actions/reservation';
import classes from './modules/CityDetail.module.css';

function ReservationCardItem({ reservations }) {
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    await dispatch(DeleteReservation(id));
    await dispatch(fetchReservations());
  };

  while (reservations === undefined || typeof reservations !== 'object') {
    return <div>Loading...</div>;
  }

  const result = Object.keys(reservations).map((key) => reservations[key]);

  return result.map((reservation) => (
    <div
      className={`shadow pb-3 mb-5 bg-body rounded ${classes.car_box}`}
      key={reservation.id}
      id={`reservation_${reservation.id}`}
    >
      <img
        className="rounded img-fluid"
        src={reservation.car.photo}
        alt={reservation.car.name}
      />

      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Reservation date:
          {' '}
          {reservation.car.model}
        </li>
        <li className="list-group-item">
          Reserved car:
          {' '}
          {reservation.car.model}
        </li>
        <li className="list-group-item">
          Rate per day: $
          {reservation.car.cost}
        </li>
        <li className="list-group-item">
          Car description:
          {' '}
          {reservation.car.description}
        </li>
      </ul>
      <div className={`card-body ${classes.car_content}`}>
        <button
          type="button"
          onClick={() => handleDelete(reservation)}
          className="bg-red-500 text-white hover:bg-red-400 px-6 py-2 rounded-full font-semibold text-decoration-none text-center"
        >
          Cancel Reservation
        </button>
      </div>
    </div>
  ));
}

ReservationCardItem.propTypes = {
  reservations: PropTypes.shape({
    id: PropTypes.number,
    car: PropTypes.shape({
      id: PropTypes.number,
      model: PropTypes.string,
      description: PropTypes.string,
      photo: PropTypes.string,
      cost: PropTypes.number,
      city: PropTypes.string,
    }),
  }).isRequired,
};

export default ReservationCardItem;
