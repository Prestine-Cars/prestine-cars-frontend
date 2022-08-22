import React from 'react';
import SignInForm from '../components/SignInForm';
import classes from '../components/modules/SignInPage.module.css';

const SignInPage = () => (
  <>
    <section className={classes.sign_in}>
      <SignInForm />
    </section>
  </>
);

export default SignInPage;
