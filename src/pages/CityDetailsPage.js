/* eslint-disable jsx-a11y/anchor-is-valid */
// @ts-nocheck
import React, { useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCity } from '../redux/reducers/city';
import { deleteCar } from '../redux/actions/car';
import classes from '../components/modules/CityDetail.module.css';

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
        <span className={`spinner-border ${classes.green}`} />
        <p>Loading the city ...</p>
      </div>
    ))
    || (error && (
      <div className="alert alert-danger" role="alert">
        {city.error}
      </div>
    )) || (
      <section className={`${classes.content_container}`}>
        <div
          className={`${classes.test_container}`}
        />
        <div className="text-center my-4 mw-70">
          <h2>
            {cityData.name}
            {' '}
            City
          </h2>
          <p>{cityData.description}</p>
          <button
            type="button"
            className="bg-lime-500 text-white hover:bg-lime-400 px-6 py-2 rounded-full font-semibold text-decoration-none text-center"
            onClick={() => getCityId(id, navigate)}
          >
            Add car
          </button>
        </div>
        <div className={`pt-4 ${classes.car_wrapper}`}>
          {cityData.cars.map((car) => (
            <div key={car.id} id={`car_${car.id}`} className={`shadow pb-3 mb-5 bg-body rounded ${classes.car_box}`}>
              <div className={`${classes.car_img}`}>
                <img className="rounded img-fluid" src={car.photo} alt={car.name} />
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Car Model:
                  {' '}
                  {car.model}
                </li>
                <li className="list-group-item">
                  Rate per day: $
                  {car.cost}
                </li>
                <li className="list-group-item">
                  Car description:
                  {' '}
                  {car.description}
                </li>
              </ul>
              <div className={`card-body ${classes.car_content}`}>
                <Link to={`/cities/${id}/cars/${car.id}/add_resevation`} className="bg-lime-500 text-white hover:bg-lime-400 px-6 py-2 rounded-full font-semibold text-decoration-none text-center">
                  Reserve
                </Link>
                <button type="button" onClick={() => handleDeleteCar(id, car.id)} className="bg-red-500 text-white hover:bg-red-400 px-6 py-2 rounded-full font-semibold text-decoration-none text-center">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  );
};

export default CityDetailsPage;
