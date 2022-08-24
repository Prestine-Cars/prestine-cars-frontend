import React, { useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCity } from '../redux/reducers/city';
import { deleteCar } from '../redux/actions/car';

const CityDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const city = useSelector((state) => state.city);
  const { loading, error, city: cityData } = city;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCity(id));
  }, [id]);

  const getCityId = (id, navigate) => {
    navigate(`/cities/${id}/cars`);
  };

  const handleDeleteCar = (cityId, CarId) => {
    dispatch(deleteCar(cityId, CarId));
  };

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
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => getCityId(id, navigate)}
          >
            Add car
          </button>
        </div>
        <div className="">
          {cityData.cars.map((car) => (
            <div key={car.id} className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{car.name}</h5>
                <h5 className="card-title">{car.price}</h5>
                <p className="card-text">{car.description}</p>
                <Link to={`/cities/${id}/cars/${car.id}/add_resevation`} className="btn btn-primary">
                  Reserve
                </Link>
                <button type="button" onClick={() => handleDeleteCar(id, car.id)} className="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default CityDetailsPage;
