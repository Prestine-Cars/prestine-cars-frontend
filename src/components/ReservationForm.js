// @ts-nocheck
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import classes from './modules/AddReservation.module.css';
import newReservation from '../redux/actions/reservation';

const ResevationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const parametters = useParams();
  const { carId, cityId } = parametters;
  const [reservation, setReservation] = useState({
    reserveDate: '',
    cityId,
    carId,
  });

  const handleChange = (e) => {
    setReservation({
      ...reservation,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(newReservation(reservation, navigate));
  };

  return (
    <div className={`${classes.form_container}`}>
      <div className={`${classes.hero}`}>
        <p>
          Book a Prestine Car Today
        </p>
        <input
          className={`${classes.picker}`}
          type="date"
          id="reserveDate"
          name="reserveDate"
          placeholder="Date"
          value={reservation.reserveDate}
          onChange={handleChange}
          required
        />
        <button className={`${classes.button}`} type="submit" onClick={handleSubmit}>
          Reserve now
        </button>
      </div>
    </div>
  // <div className={`test ${classes.main_container}`}>
  //   <div className="bg-lime-500 opacity-90 content-container">
  //     <h1>Reserve a prestine car today</h1>
  //     <div>
  //       <input
  //         className="button"
  //         type="date"
  //         id="reserveDate"
  //         name="reserveDate"
  //         placeholder="Date"
  //         value={reservation.reserveDate}
  //         onChange={handleChange}
  //         required
  //       />
  //       <button className="button" type="submit" onClick={handleSubmit}>
  //         Reserve now
  //       </button>

  //     </div>
  //   </div>
  // </div>
  );
};

export default ResevationForm;
