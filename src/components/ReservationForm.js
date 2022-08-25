import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import './modules/AddReservation.css';
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
    <div className="main-container">
      <div className="content-container">
        <h1>Reserve a car with prestine-car</h1>
        <p>Classic cars bring me utter happiness. Reserve a car with us today</p>
        <div>
          <input
            className="button"
            type="date"
            id="reserveDate"
            name="reserveDate"
            placeholder="Date"
            value={reservation.reserveDate}
            onChange={handleChange}
            required
          />
          <button className="button" type="submit" onClick={handleSubmit}>
            Reserve now
          </button>

        </div>
      </div>
    </div>
  );
};

export default ResevationForm;
