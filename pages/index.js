import React, { Fragment } from "react";
import Nav from "../components/Nav";
import Button from "../components/Button";

import "../styles/main.scss";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <div className='sideways-email'>
          <a className='email' href='#'>
            mpscqw@gmail.com
          </a>
          <span className='vertical-line' />
        </div>
        <div className='landing-section-container container'>
          <div className='landing-section-row no-gutters'>
            <div className='landing-section-col col-lg-12'>
              <div className='hero-div'>
                <div className='hero-hello'>Hello, my name is</div>
                <h1 className='hero-my-name'>Julia Furman.</h1>
                <h2 className='hero-blurb'>
                  I design and build things for the web.
                  <span className='blinking-cursor' />
                </h2>
                <Button button='Get in Touch with Me' />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
