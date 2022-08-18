import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/actions/user';

const Login = () => {
  const { errorLogin = null } = useSelector(
    // @ts-ignore
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
    // @ts-ignore
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
          {errorLogin && <p>You have entered an invalid email/password</p>}
          <input
            onChange={handleOnChange}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            onChange={handleOnChange}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <small>{}</small>
          <input type="submit" value="Login" />
        </form>
      </div>
    </>
  );
};

export default Login;
