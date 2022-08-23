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
      <h1>Add Car for this city</h1>
      <form>
        <input
          type="text"
          id="model"
          name="model"
          placeholder="Model Car"
          value={car.model}
          onChange={handleChange}
          minLength="3"
          maxLength="50"
          required
        />

        <input
          type="url"
          id="photo"
          name="Photo of Car"
          placeholder="photo"
          value={car.photo}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          id="description"
          name="description"
          placeholder="Description"
          value={car.description}
          onChange={handleChange}
        />

        <input
          type="number"
          id="cost"
          name="cost"
          placeholder="Cost"
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
