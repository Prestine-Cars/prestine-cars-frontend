import React from 'react';
import Cities from '../components/Cities/Cities';
import classes from '../components/modules/CitiesPage.module.css';

const CitiesPage = () => (
  <>
    <section className={classes.wrapper}>
      <Cities />
    </section>
  </>
);

export default CitiesPage;
