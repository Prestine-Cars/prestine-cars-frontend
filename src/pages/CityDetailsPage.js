// @ts-nocheck
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCity } from '../redux/reducers/city';
import classes from '../components/modules/CityDetail.module.css';

const CityDetailsPage = () => {
  const { id } = useParams();
  const city = useSelector((state) => state.city);
  const { loading, error, city: cityData } = city;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCity(id));
  }, [id]);

  return (
    (loading && (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <span className={`spinner-border ${classes.green}`} />
        <p>Loading the city ...</p>
      </div>
    ))
    || (error && (
      <div className="alert alert-danger" role="alert">
        {city.error}
      </div>
    )) || (
      <section className="container">
        <div className={`${classes.test_container}`}>
          <div
            className={` d-flex justify-content-center align-items-center ${classes.test_container}`}
          >
            <p className={`${classes.hero_text}`}>{cityData.name}</p>
          </div>
        </div>
        <div className="text-center">
          <h2>
            {cityData.name}
            {' '}
            City
          </h2>
          <p>{cityData.description}</p>
        </div>
        <div className="container">
          <div className="row">
            {cityData.cars.map((car) => (
              <div key={car.id} className="card">
                <img src={car.photo} className="card-img-top" alt={car.name} />
                <div className="card-body">
                  <h5 className="card-title">{car.name}</h5>
                  <h5 className="card-title">{car.price}</h5>
                  <p className="card-text">{car.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  );
};

export default CityDetailsPage;
