/*eslint-disable */
import React from 'react';

const SignInForm = () => {
  return (
    <>
      <div>
        <form>
          <label htmlFor='email'>
            <span>Email</span>
            <input id='email' type='text' placeholder='Email' />
          </label>
          <label htmlFor='password'>
            <span>Password</span>
            <input id='password' type='password' placeholder='Password' />
          </label>
          <div>
            <button type='button'>Sign In</button>
            <a href='#'>
              <small>Forgot password</small>
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignInForm;
