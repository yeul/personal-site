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
            <div className='appTitle'>{props.appTitle}</div>
          </div>
        </div>
        <div className='row no-gutters'>
          <div className='col-lg-12'>
            <div className='appInfo'>{props.appInfo}</div>
          </div>
        </div>
        <div className='app-tools-row row no-gutters'>
          <div className='app-tools-text-col col-lg-10'>
            <div className='app-tools-text'>{props.appTools}</div>
          </div>
          <div className='app-tool-github-col col-lg-2'>
            <div className='cardText'>
              <div className='github-div'>
                <a className='github' href={props.githubLink} target='_blank'>
                  <i className='github-icon fab fa-github' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
