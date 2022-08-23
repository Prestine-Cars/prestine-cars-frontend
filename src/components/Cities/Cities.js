import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCities } from '../../redux/reducers/cities';

const Cities = () => {
  const cities = useSelector((state) => state.cities);
  const { loading, error, cities: citiesData } = cities;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities());
  }, []);

  return (
    (loading && (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <span className="spinner-border text-primary" />
        <p>Loading...</p>
      </div>
    ))
    || (error && (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    )) || (
      <div className="">
        {citiesData.map((city) => (
          <div className="card" key={city.id}>
            <Link to={`/cities/${city.id}`}>
              <img
                className="card-img-top"
                src={city.flag_icon}
                alt={city.name}
              />
            </Link>
            <div className="card-body">
              <h5 className="card-title">{city.name}</h5>
              <p className="card-text">{city.description}</p>
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default Cities;
