// @ts-nocheck
/*eslint-disable */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/actions/user';
import { TailSpin } from 'react-loader-spinner';

const SignInForm = () => {
  const {loginLoader = false, errorLogin = null } = useSelector(
    (state) => state.user
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
          {loginLoader && (
            <div>
              <TailSpin
                height='80'
                width='80'
                radius='3'
                color='#98be20'
                ariaLabel='tail-spin'
                wrapperStyle
                wrapperClass
              />
            </div>
          )}
          {errorLogin && <p>You have entered an invalid email/password</p>}
          <input
            onChange={handleOnChange}
            type='email'
            name='email'
            placeholder='Email'
            required
          />
          <input
            onChange={handleOnChange}
            type='password'
            name='password'
            placeholder='Password'
            required
          />
          <small>{}</small>
          <input type='submit' value='Login' />
        </form>
      </div>
    </>
  );
};

export default SignInForm;
