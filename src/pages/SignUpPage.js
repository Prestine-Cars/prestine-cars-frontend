import React from 'react';
import SignUpForm from '../components/SignUpForm';
import Footer from '../components/Footer';
import classes from '../components/modules/SignUpPage.module.css';

const SignUpPage = () => (
  <>
    <section className={`text-center ${classes.sign_up}`}>
      <div className={`p-5 ${classes.signup_bg}`} />
      <div className={`card shadow-5-strong ${classes.sign_up_card}`}>
        <div className="card-body py-5 px-md-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <h2 className={`fw-bold mb-5 ${classes.green}`}>Sign up now</h2>
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  </>
);

export default SignUpPage;
