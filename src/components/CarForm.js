import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import newCar from '../redux/actions/car';

const CarForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cityId } = useParams();

  const [car, setCar] = useState({
    model: '',
    photo: '',
    description: '',
    cost: '',
    city: cityId,
  });

  const handleChange = (e) => {
    setCar({
      ...car,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newCar(car, navigate));
  };

  return (
    <div>
      <h1>I am a car form</h1>
      <form>
        <input
          type="text"
          id="model"
          name="model"
          placeholder="model"
          value={car.model}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          id="photo"
          name="photo"
          placeholder="photo"
          value={car.photo}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          id="description"
          name="description"
          placeholder="description"
          value={car.description}
          onChange={handleChange}
        />

        <input
          type="integer"
          id="cost"
          name="cost"
          placeholder="cost"
          value={car.cost}
          onChange={handleChange}
          required
        />
        <button type="submit" onClick={handleSubmit}>Add car</button>
      </form>
    </div>
  );
};

export default CarForm;
