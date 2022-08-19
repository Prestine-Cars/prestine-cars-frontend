// @ts-nocheck
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import { signup } from '../redux/actions/user';
import classes from './modules/SignInForm.module.css';

const SignUpForm = () => {
  const { Loader = false, signupError = null } = useSelector(
    (state) => state.user,
  );
  const [userSignup, setSignup] = useState({
    name: '',
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(signup(userSignup, navigate));
  };

  const handleOnChange = (event) => {
    setSignup((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <>
      <form onSubmit={handleSignup}>
        <div className={`${classes.loader}`}>
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
        </div>
        {signupError && <p>Name/Email already exists </p>}

        <div className="form-outline mb-4">
          <label htmlFor="name" className="form-label">
            <input
              onChange={handleOnChange}
              type="text"
              name="name"
              placeholder="name"
              required
              className="form-control"
            />
          </label>
        </div>
        <div className="form-outline mb-4">
          <label htmlFor="email" className="form-label">
            <input
              onChange={handleOnChange}
              type="email"
              name="email"
              placeholder="Email"
              required
              className="form-control"
            />
          </label>
        </div>
        <div className="form-outline mb-4">
          <label htmlFor="password" className="form-label">
            <input
              onChange={handleOnChange}
              type="password"
              name="password"
              placeholder="Password"
              required
              className="form-control"
            />
          </label>
        </div>
        <button type="submit" className={`btn text-white btn-block mb-4 ${classes.green_btn}`}>
          Sign up
        </button>
        <div>
          <p className="mb-0">
            Already have an account?
            {' '}
            <NavLink className={`fw-bold ${classes.green_link}`} to="/signin">Login</NavLink>
          </p>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
