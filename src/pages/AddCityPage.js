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
    <div className="">
      <h1>Add New City</h1>
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
          className="btn btn-primary text-white btn-block mb-2"
          type="submit"
        >
          Add City
        </button>
      </form>
    </div>
  );
};

export default AddCityPage;
