// @ts-nocheck
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCities } from '../../redux/reducers/cities';
import classes from '../modules/Cities.module.css';

const Cities = () => {
  const cities = useSelector((state) => state.cities);
  const { loading, error, cities: citiesData } = cities;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities());
  }, []);

  return (
    <>
      <div className="text-center m-4 p-4">
        <h2 className="text-center m-2 p-2">These are the available Cities</h2>
        <h3 className="text-center mt-2">
          Choose a country flag to see available cars
        </h3>
      </div>
      {loading && (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
          <span className={`spinner-border ${classes.green}`} />
          <p>Loading the cities...</p>
        </div>
      )}
      {' '}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      {' '}
      <div className="container">
        <div className="row">
          {citiesData.map((city) => (
            <div
              key={city.id}
              className={`col-md-6 m-2 d-flex justify-content-center align-items-center flex-column ${classes.img_wrap}`}
            >
              <Link to={`/cities/${city.id}`}>
                <img
                  className={`shadow p-3 mb-2 bg-body rounded ${classes.img}`}
                  alt={city.name}
                  src={city.flag_icon}
                />
              </Link>
              <hr className="mx-auto border-t-4 border-dotted w-32" />
              <h5 className="my-2 h5">{city.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cities;
