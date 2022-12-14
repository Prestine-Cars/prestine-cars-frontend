// @ts-nocheck
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { DeleteReservation } from '../redux/actions/reservation';
import classes from './modules/CityDetail.module.css';

function ReservationCardItem({ reservations }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(DeleteReservation(id));
  };

  while (reservations === undefined || typeof reservations !== 'object') {
    return <div>Loading...</div>;
  }

  return reservations.map((reservation) => (
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
          {reservation.date}
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

export default ReservationCardItem;
