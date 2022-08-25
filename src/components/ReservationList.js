import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../redux/actions/reservation';
import ReservationCardItem from './ReservationCardItem';

const ReservationList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReservations());
  }, []);

  const { reservations, loading } = useSelector((state) => state.reservation);
  return (
    <div className="main-container">
      <div className="content-container">
        <h1>Reserve a car with prestine-car</h1>
        {loading === true && <p>Loading...</p> }
        <ReservationCardItem reservations={reservations} />
      </div>
    </div>
  );
};

export default ReservationList;
