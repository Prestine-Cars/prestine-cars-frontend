// @ts-nocheck
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import { login } from '../redux/actions/user';
import classes from './modules/SignInForm.module.css';
import logoImg from '../assets/logo.png';

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
      <div className={classes['logo-image']}>
        <img src={logoImg} className={classes.logo} alt="Logo" />
      </div>
      <div className="container pt-4 mt-4">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className={`card shadow-5-strong ${classes.sign_up_card}`}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-2 mt-md-2 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-black-50 mb-5">
                    Please enter your login and password!
                  </p>
                  <form onSubmit={handleLogin}>
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

                    {loginError && (
                      <p>You have entered an invalid email/password</p>
                    )}
                    <div className="form-outline form-white mb-4">
                      <label htmlFor="email" className="form-label">
                        <input
                          onChange={handleOnChange}
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                          className="form-control form-control-lg"
                        />
                      </label>
                    </div>
                    <div className="form-outline form-white mb-4">
                      <label htmlFor="password" className="form-label">
                        <input
                          onChange={handleOnChange}
                          type="password"
                          name="password"
                          placeholder="Password"
                          required
                          className="form-control form-control-lg"
                        />
                      </label>
                    </div>
                    <p className="small mb-3 pb-lg-2">
                      <a className={`${classes.green_link}`} href="#!">
                        Forgot password?
                      </a>
                    </p>
                    <button
                      className={`btn text-white btn-block mb-2 ${classes.green_btn}`}
                      type="submit"
                    >
                      Login
                    </button>
                  </form>
                </div>

                <div>
                  <p className="mb-0">
                    Dont have an account?
                    {' '}
                    <NavLink className={`fw-bold ${classes.green_link}`} to="/signup">Sign Up</NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
