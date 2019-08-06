import React, { Fragment } from "react";
import Nav from "../components/Nav";
import Button from "../components/Button";
import Card from "../components/Card";
import Footer from "../components/Footer";

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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className='about-paragraph'>
                  <br />
                  Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus.
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
                <img className='project-image' src='../static/images/planum-australe.png' />
              </div>
            </div>
            <div className='project-samples-col col-lg-5'>
              <div className='project-sample-title-1'>
                <span>01.</span> Planum Australe
              </div>
              <ul className='project-tools-ul-1'>
                <li className='project-tools-item-1'>React</li>
                <li className='project-tools-item-1'>Next.js</li>
                <li className='project-tools-item-1'>SCSS</li>
              </ul>
              <div className='project-source-links-1'>
                <i className='github-icon fab fa-github' />
                <i class='external-link fas fa-external-link-alt' />
              </div>
              <div className='project-sample-info-1'>
                A Mars tribute site showcasing transitioning hero images with pure SCSS, animation-on-scroll, responsive design, and a cohesive theme. Built in React using Next.js
                for SSR.
              </div>
              <div className='background-border-1' />
            </div>
          </div>
          <div className='project-samples-row row'>
            <div className='project-samples-col col-lg-5'>
              <div className='project-sample-title-2'>
                <span>02.</span> Sourst
              </div>
              <ul className='project-tools-ul-2'>
                <li className='project-tools-item-2'>React</li>
                <li className='project-tools-item-2'>Next.js</li>
                <li className='project-tools-item-2'>SCSS</li>
              </ul>
              <div className='project-source-links-2'>
                <i className='github-icon fab fa-github' />
                <i class='external-link fas fa-external-link-alt' />
              </div>
              <div className='project-sample-info-2'>
                Website created for an imaginary start-up web development business. Uniform design language and responsiveness can be found throughout all pages.
              </div>
              <div className='background-border-2' />
            </div>
            <div className='project-samples-col col-lg-7'>
              <div className='project-sample-1'>
                <img className='project-image' src='../static/images/sourst.png' />
              </div>
            </div>
          </div>
        </div>
        <div className='more-projects-container container'>
          <div className='more-projects-row row'>
            <div className='more-projects-header-col col-lg-12'>
              <h3>More Projects</h3>
            </div>
          </div>
          <div className='more-projects-row-1 row'>
            <div className='more-projects-col col-lg-4'>
              <Card
                appTitle='Full-stack Emaily'
                appInfo='Fullstack feedback campaign creation site for business owners based on a Udemy course. Send surverys to your users for feedback.'
                appTools='Node.js Express React Redux MongoDB'
              />
            </div>
            <div className='more-projects-col col-lg-4'>
              <Card
                appTitle='React/Redux Streamy'
                appInfo='This React/Redux application is a live-streaming video app based on a Udemy course.'
                appTools='React Redux/Redux Thunk'
              />
            </div>
            <div className='more-projects-col col-lg-4'>
              <Card appTitle='Socket.io Chat App' appInfo='Chat application using Node.js, Express, and Socket.io.' appTools='Node.js Express Socket.io' />
            </div>
          </div>
          <div className='more-projects-row-2 row'>
            <div className='more-projects-col col-lg-4'>
              <Card
                appTitle='Async/Await Currency Converter'
                appInfo='Simple currency converter made in order to learn Javascript ES7 feature async/await.'
                appTools='Javascript ES7'
              />
            </div>
            <div className='more-projects-col col-lg-4'>
              <Card
                appTitle='React Pics'
                appInfo='Based on a Udemy course, this app is a simple photo grid utilizing React and the Unsplash API. Search for photos to show your results.'
                appTools='React Unsplash API'
              />
            </div>
            <div className='more-projects-col col-lg-4'>
              <Card appTitle='Tindog' appInfo='Udemy bootcamp website based on the concept of advertising a fake-application called "Tindog".' appTools='HTML CSS Bootstrap 4' />
            </div>
          </div>
          <div className='see-more-row row no-gutters'>
            <div className='see-more-col col-lg-12'>
              <Button button='See More on My Github' />
            </div>
          </div>
        </div>
        <div className='contact-container container'>
          <div className='contact-row row no-gutters'>
            <div className='contact-col col-lg-12'>
              <h3 className='contact-header'>Drop Me a Line</h3>
              <div className='contact-cta'>
                I would very much enjoy he opportunity to work with you! <br />
                Please don't hesitate to get in touch!
              </div>
              <div className='contact-button-col col-lg-12'>
                <Button button='Email Me' />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
