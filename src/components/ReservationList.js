// @ts-nocheck
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../redux/actions/reservation';
import ReservationCardItem from './ReservationCardItem';
import classes from './modules/CityDetail.module.css';

const ReservationList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReservations());
  }, []);

  const { reservations, loading } = useSelector((state) => state.reservation);

  return (
    <section className={`${classes.content_container}`}>
      {loading && (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <span className={`spinner-border ${classes.green}`} />
        <p>Loading your reservations...</p>
      </div>
      )}
      <div className="text-center my-4 mw-70">
        <h2 className={`${classes.hero_text}`}>These are your Reservations</h2>
      </div>
      <div className={`pt-4 ${classes.car_wrapper}`}>
        <ReservationCardItem reservations={reservations} />
      </div>
    </section>
  );
};

export default ReservationList;
