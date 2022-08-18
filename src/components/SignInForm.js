// @ts-nocheck
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import { login } from '../redux/actions/user';

const SignInForm = () => {
  const { Loader = false, loginError = null } = useSelector(
    (state) => state.user,
  );
  const [userLogin, setLogin] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(userLogin, navigate));
  };

  const handleOnChange = (event) => {
    setLogin((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          {Loader && (
            <div>
              <TailSpin
                height="80"
                width="80"
                radius="3"
                color="#98be20"
                ariaLabel="tail-spin"
                wrapperStyle
                wrapperClass
              />
            </div>
          )}
          {loginError && <p>You have entered an invalid email/password</p>}
          <label htmlFor="email">
            <span>Email</span>
            <input
              onChange={handleOnChange}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </label>
          <label htmlFor="name">
            <span>Name</span>
            <input
              onChange={handleOnChange}
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </label>
          <input type="submit" value="Login" />
        </form>
      </div>
    </>
  );
};

export default SignInForm;
