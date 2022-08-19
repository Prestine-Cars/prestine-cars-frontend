import React from 'react';
import classes from './modules/Footer.module.css';

const Footer = () => (
  <>
    <footer
      className={`d-flex flex-column flex-md-row text-center text-md-start justify-content-center pt-4 px-4 px-xl-5 bottom ${classes.footer_styles}`}
    >
      <div className="text-white mb-1 mb-md-0 fw-bold">
        <p>
          <small>&copy; 2022 Prestine Cars. All rights reserved.</small>
        </p>
      </div>
    </footer>
  </>
);

export default Footer;
