import React from 'react';
import SignUpForm from '../components/SignUpForm';
import classes from '../components/modules/SignInPage.module.css';

const SignUpPage = () => (
  <>
    <section className={classes.sign_in}>
      <SignUpForm />
    </section>
  </>
);

export default SignUpPage;
