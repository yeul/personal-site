import React, { Fragment } from "react";

import "../styles/main.scss";

const Footer = () => {
  return (
    <Fragment>
      <div className='footer-container'>
        <div className='footer-row row no-gutters'>
          <div className='footer-col col-lg-12'>
            <div className='footer-info'>Designed & Built by Julia Furman</div>
          </div>
        </div>
        <div className='footer-icon-row row no-gutters'>
          <div className='footer-icon-col col-lg-12'>
            <a className='footer-github' href='https://github.com/yeul' target='_blank'>
              <i className='footer-github fab fa-github' />
            </a>
            <a className='footer-github' href='https://www.linkedin.com/in/juliafurman/' target='_blank'>
              <i className='footer-linkedin fab fa-linkedin-in' />
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
