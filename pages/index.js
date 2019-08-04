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
                  I'm Julia Furman, a web developer based in the DC-metro area looking to work collaboratively with other developers to build high-quality websites. I received a
                  Bachelor's degree in East Asian Studies and Cybersecurity from University of Maryland University College, am a Certified Surgical Technologist, and am highly
                  interested in the nexus of technology and security with its ever-increasing importance in today's international landscape.
                </p>
                <p className='about-paragraph'>
                  <br />
                  My continuing goals are to become increasingly knowlegeable in the realm of web development in addition to cybersecurity.
                  <span className='recent-tech'> Below are some of the technologies that I have been using recently:</span>
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
          <div className='more-skills-row row'>
            <div className='col-lg-6' />
            <div className='more-skills-col col-lg-6'>
              <h3 className='more-skills-header'>
                <span className='more-skills-title'>Additional Skills</span>
              </h3>
            </div>
          </div>
          <div className='more-skills-description-row row'>
            <div className='col-lg-6' />
            <div className='more-skills-desc-col-lg-6'>
              <p className='more-skills-1-p'>I have also had exposure to...</p>
            </div>
          </div>
          <div className='more-skills-row row'>
            <div className='col-lg-8' />
            <div className='more-skills-col col-lg-4'>
              <ul className='more-skills-1'>
                <li>MongoDB</li>
                <li>GraphQL</li>
                <li>Socket.io</li>
              </ul>
            </div>
          </div>
          <div className='more-skills-description-row row'>
            <div className='col-lg-6' />
            <div className='more-skills-desc-col-lg-6'>
              <p className='more-skills-2-p'>...And use design and illustration tools such as...</p>
            </div>
          </div>
          <div className='more-skills-row row'>
            <div className='col-lg-8' />
            <div className='more-skills-col-1 col-lg-2'>
              <ul className='more-skills-2a'>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>Lightroom</li>
                <li>InDesign</li>
              </ul>
            </div>
            <div className='more-skills-col-2 col-lg-2'>
              <ul className='more-skills-2b'>
                <li>InVision Studio</li>
                <li>Sketch</li>
                <li>ZBrush</li>
                <li>3dsMax</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='projects-container container'>
          <div className='projects-header-row row'>
            <div className='projects-header-col col-lg-12'>
              <h3 className='projects-header'>
                <span className='project-header-text'>Featured Projects</span>
              </h3>
            </div>
          </div>
          <div className='project-samples-row row'>
            <div className='project-samples-col col-lg-7'>
              <div className='project-sample-1'>
                {/* <div className='project-image' /> */}
                <img className='project-image' src='../static/images/planum-australe.png' />
              </div>
            </div>
            <div className='project-samples-col col-lg-5'>
              <div className='project-sample-info'>
                A Mars tribute site showcasing transitioning hero images with pure SCSS, animation-on-scroll, responsive design, and a cohesive theme. Built in React using Next.js
                for SSR.
              </div>
              <div className='background-border' />
            </div>
          </div>
          <div className='project-samples-row row'>
            <div className='project-samples-col col-lg-5'>
              <div className='project-sample-info-2'>
                Website created for an imaginary start-up web development business. Uniform design language and responsiveness can be found throughout all pages.
              </div>
              <div className='background-border-2' />
            </div>
            <div className='project-samples-col col-lg-7'>
              <div className='project-sample-1'>
                <div className='project-image' />
                <img className='project-image' src='../static/images/sourst.png' />
              </div>
            </div>
          </div>
          <div className='image' />
        </div>
      </Fragment>
    );
  }
}

export default App;
