// @ts-nocheck
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const City = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logout(navigate));
  }
  return (
    <>
      <div>
        <h1>I am a city</h1>
      </div>
      <button type="button" onClick={handleLogout}>Logout</button>
    </>
  );
};

export default City;
