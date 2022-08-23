// @ts-nocheck
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/user';

const City = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleAddCar() {
    navigate('/add_car');
  }

  function handleLogout() {
    dispatch(logout(navigate));
  }
  return (
    <>
      <div>
        <h1>I am a city</h1>
      </div>
      <button type="button" onClick={handleLogout}>Logout</button>
      <button type="button" onClick={handleAddCar}>Add car</button>

    </>
  );
};

export default City;
