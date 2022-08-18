import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import { login } from '../redux/actions/user';

const SignUpForm = () => (
  <>
    <div>
      <form>
        <label htmlFor="name">
          <span>Name</span>
          <input id="name" type="text" placeholder="Name" />
        </label>
        <label htmlFor="email">
          <span>Email</span>
          <input id="email" type="text" placeholder="Email" />
        </label>
        <label htmlFor="password">
          <span>Password</span>
          <input id="password" type="password" placeholder="Password" />
        </label>
        <div>
          <button type="button">Sign Up</button>
        </div>
      </form>
    </div>
  </>
);

export default SignUpForm;
