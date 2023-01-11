// @ts-nocheck
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
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h2>Add Car for this city</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-outline form-white mb-4">
          <label htmlFor="name" className="form-label">
            <input
              type="text"
              id="model"
              name="model"
              placeholder="Model Car"
              value={car.model}
              onChange={handleChange}
              minLength="3"
              maxLength="50"
              className="form-control form-control-lg"
              required
            />
          </label>
        </div>
        <div className="form-outline form-white mb-4">
          <label htmlFor="name" className="form-label">
            <input
              type="url"
              id="photo"
              name="photo"
              placeholder="Photo of Car"
              value={car.photo}
              onChange={handleChange}
              className="form-control form-control-lg"
              required
            />
          </label>
        </div>
        <div className="form-outline form-white mb-4">
          <label htmlFor="name" className="form-label">
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Description"
              value={car.description}
              onChange={handleChange}
              className="form-control form-control-lg"
            />
          </label>
        </div>
        <div className="form-outline form-white mb-4">
          <label htmlFor="name" className="form-label">
            <input
              type="number"
              id="cost"
              name="cost"
              placeholder="Cost"
              value={car.cost}
              onChange={handleChange}
              className="form-control form-control-lg"
              required
            />
          </label>
        </div>
        <button
          className="bg-lime-500 text-white hover:bg-lime-400 px-6 py-2 rounded-full font-semibold text-decoration-none text-center"
          type="submit"
        >
          Add car
        </button>
      </form>
    </div>
  );
};

export default CarForm;
