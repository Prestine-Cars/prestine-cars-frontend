import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCity } from '../redux/reducers/city';

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
        <span className="spinner-border text-primary" />
        <p>Loading...</p>
      </div>
    ))
    || (error && (
      <div className="alert alert-danger" role="alert">
        {city.error}
      </div>
    )) || (
      <div className="">
        <div className="text-center">
          <h2>
            {cityData.name}
            {' '}
            Details
          </h2>
          <p>{cityData.description}</p>
        </div>
        <div className="">
          {cityData.cars.map((car) => (
            <div key={car.id} className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{car.name}</h5>
                <h5 className="card-title">{car.price}</h5>
                <p className="card-text">{car.description}</p>
                <Link to="/cities/reservation" className="btn btn-primary">
                  Reserve
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default CityDetailsPage;
