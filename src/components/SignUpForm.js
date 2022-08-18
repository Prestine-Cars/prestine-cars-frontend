// @ts-nocheck
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import { signup } from '../redux/actions/user';

const SignUpForm = () => {
  const { loginLoader = false, signupError = null } = useSelector(
    (state) => state.user
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
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSignup}>
          {loginLoader && (
            <div>
              <TailSpin
                height='80'
                width='80'
                radius='3'
                color='#98be20'
                ariaLabel='tail-spin'
              />
            </div>
          )}
          {signupError && <p>Name/Email already exists </p>}
          <label htmlFor='name'>
            <span>Name</span>
            <input
              onChange={handleOnChange}
              type='text'
              name='name'
              placeholder='Name'
              required
            />
          </label>
          <label htmlFor='email'>
            <span>Email</span>
            <input
              onChange={handleOnChange}
              type='email'
              name='email'
              placeholder='Email'
              required
            />
          </label>
          <label htmlFor='password'>
            <span>Password</span>
            <input
              onChange={handleOnChange}
              type='password'
              name='password'
              placeholder='Password'
              required
            />
          </label>
          <div>
            <input type='submit' value='Sign Up' />
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
