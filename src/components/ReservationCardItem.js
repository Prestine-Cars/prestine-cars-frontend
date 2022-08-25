import React from 'react';
import { useDispatch } from 'react-redux';
import { DeleteReservation } from '../redux/actions/reservation';

function ReservationCardItem({ reservations }) {
  const dispatch = useDispatch();
  // const [reservation, setReservation] = useState(reservations);

  const handleDelete = (id) => {
    dispatch(DeleteReservation(id));
  };

  const result = Object.keys(reservations).map((key) => reservations[key]);
  return result.map((reservation) => (
    <div key={reservation.id} id={`reservation_${reservation.id}`}>
      <h1>{reservation.car.model}</h1>
      <p>{reservation.car.city}</p>
      <p>{reservation.car.cost}</p>
      <p>{reservation.car.photo}</p>
      <p>{reservation.date}</p>
      <button type="button" className="btn btn-danger" onClick={() => handleDelete(reservation)}>Cancel Reservation</button>
    </div>
  ));
}

export default ReservationCardItem;
