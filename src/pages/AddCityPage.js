import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCity } from '../redux/reducers/addCity';

const AddCityPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [city, setCity] = useState({
    flag_icon: '',
    name: '',
    description: '',
  });

  const handleOnChange = (event) => {
    setCity((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCity(city, navigate));
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h2>Add New City</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-outline form-white mb-4">
          <label htmlFor="name" className="form-label">
            <input
              onChange={handleOnChange}
              type="text"
              name="flag_icon"
              placeholder="Flag_icon"
              className="form-control form-control-lg"
            />
          </label>
        </div>
        <div className="form-outline form-white mb-4">
          <label htmlFor="name" className="form-label">
            <input
              onChange={handleOnChange}
              type="text"
              name="name"
              placeholder="City Name"
              className="form-control form-control-lg"
            />
          </label>
        </div>
        <div className="form-outline form-white mb-4">
          <label htmlFor="name" className="form-label">
            <input
              onChange={handleOnChange}
              type="text"
              name="description"
              placeholder="Description"
              className="form-control form-control-lg"
            />
          </label>
        </div>
        <button
          className="bg-lime-500 text-white hover:bg-lime-400 px-6 py-2 rounded-full font-semibold text-decoration-none text-center"
          type="submit"
        >
          Add City
        </button>
      </form>
    </div>
  );
};

export default AddCityPage;
