import React, { Fragment } from "react";

import "../styles/main.scss";

const Card = props => {
  return (
    <Fragment>
      <div className='more-projects-card'>
        <div className='row no-gutters'>
          <div className='col-lg-12'>
            <div className='sticky-note'>
              <i class='far fa-sticky-note' />
            </div>
          </div>
        </div>
        <div className='row no-gutters'>
          <div className='col-lg-12'>
            <div className='cardTest'>{props.appTitle}</div>
          </div>
        </div>
        <div className='row no-gutters'>
          <div className='col-lg-6'>
            <div className='cardText'>{props.appInfo}</div>
          </div>
          <div className='col-lg-6'>
            <div className='cardText'>
              <div className='github'>
                <i className='github-icon fab fa-github' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
