import React, { Fragment } from "react";
import Nav from "../components/Nav";
import Button from "../components/Button";

import "../styles/main.scss";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <i className='fa-icon fab fa-github' />
        <i className='fa-icon fab fa-linkedin-in' />
        <div className='sideways-links'>
          <span className='vertical-line-top'>
            <span className='email-span'>
              <a className='email' href='#'>
                mpscqw@gmail.com
              </a>
            </span>
          </span>
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
        <div className='about-section-container container'>
          <div className='about-section-header-row row no-gutters'>
            <div className='about-section-header-col col-lg-12'>
              <h3 className='about-section-header'>
                <span className='about-title'>About</span>
              </h3>
            </div>
          </div>
          <div className='about-text-row row'>
            <div className='about-text-col col-lg-6'>
              <div className='about-text'>
                <p className='about-paragraph'>
                  I'm Julia Furman, a web developer based in the DC-metro area looking to work collaboratively with developers to build high-quality websites. I received a
                  Bachelor's degree in East Asian Studies and Cybersecurity from University of Maryland University College, am a Certified Surgical Technologist, and am highly
                  interested in the nexus of technology and security with its ever-increasing importance in today's international landscape.
                </p>
                <p className='about-paragraph'>
                  <br />
                  My continuing goals are to become increasingly knowlegeable in the realm of web development in addition to cybersecurity. Below are some of the technologies that
                  I have been using recently:
                </p>
              </div>
            </div>
          </div>
          <div className='skills-row row'>
            <div className='skills-col col-lg-3'>
              <ul className='skills'>
                <li>Javascript (ES6+)</li>
                <li>React/Redux</li>
                <li>HTML & (S)CSS</li>
                <li>Bootstrap 4</li>
                <li>Next.js</li>
              </ul>
            </div>
            <div className='skills-col col-lg-3'>
              <ul className='skills'>
                <li>Node.js</li>
                <li>Express</li>
                <li>Git</li>
                <li>Heroku</li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
