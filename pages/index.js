import React, { Fragment } from "react";
import Link from "next/link";
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
        <a className='fa-icon-1' href='https://github.com/yeul' target='_blank'>
          <i className='fa-icon fab fa-github' />
        </a>
        <a className='fa-icon-2' href='https://www.linkedin.com/in/juliafurman/' target='_blank'>
          <i className='fa-icon fab fa-linkedin-in' />
        </a>
        <div className='sideways-links'>
          <span className='vertical-line-top'>
            <span className='email-span'>
              <a className='email' href='mailto:juliamfurman@gmail.com' target='_top'>
                juliamfurman@gmail.com
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
                <a className='email-button-link' href='mailto:juliamfurman@gmail.com' target='_top'>
                  <Button button='Get in Touch with Me' />
                </a>
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
                  My continuing goals are to become increasingly knowledgeable in the realm of web development in addition to cybersecurity.
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
            <div className='art-portfolio-btn-div col-lg-12'>
              <Link href='/art'>
                <a>
                  <Button button='Click to See Art Portfolio' />
                </a>
              </Link>
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
                <a href='https://portfolio-1.mpscqw.now.sh/' target='_blank'>
                  <img className='project-image' src='../static/images/planum-australe.png' alt='Image of Planum Australe portfolio site that links to site when clicked.' />
                </a>
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
                <li className='project-tools-item-1'>Bootstrap</li>
              </ul>
              <div className='project-source-links-1'>
                <a href='https://github.com/yeul/portfolio-1' target='_blank'>
                  <i className='github-icon fab fa-github' />
                </a>
                <a href='https://portfolio-1.mpscqw.now.sh/' target='_blank'>
                  <i className='external-link fas fa-external-link-alt' />
                </a>
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
                <li className='project-tools-item-1'>Bootstrap</li>
              </ul>
              <div className='project-source-links-2'>
                <a href='https://github.com/yeul/portfolio-2' target='_blank'>
                  <i className='github-icon fab fa-github' />
                </a>
                <a href='https://portfolio-2.mpscqw.now.sh/' target='_blank'>
                  <i className='external-link fas fa-external-link-alt' />
                </a>
              </div>
              <div className='project-sample-info-2'>
                Created for Jupio Labs as a template/toolbox of components for future use on web development projects. Uniform design language and responsiveness can be found
                throughout.
              </div>
              <div className='background-border-2' />
            </div>
            <div className='project-samples-col col-lg-7'>
              <div className='project-sample-1'>
                <a href='https://portfolio-2.mpscqw.now.sh/' target='_blank'>
                  <img className='project-image' src='../static/images/sourst.png' alt='Image of Sourst portfolio site that links to site when clicked.' />
                </a>
              </div>
            </div>
          </div>
          <div className='project-samples-row row'>
            <div className='project-samples-col col-lg-7'>
              <div className='project-sample-1'>
                <a href='https://puppies-portfolio-3.mpscqw.now.sh/' target='_blank'>
                  <img className='project-image' src='../static/images/topdogs.png' alt='Image of Topdogs portfolio site that links to site when clicked.' />
                </a>
              </div>
            </div>
            <div className='project-samples-col col-lg-5'>
              <div className='project-sample-title-3'>
                <span>03.</span> Topdogs
              </div>
              <ul className='project-tools-ul-1'>
                <li className='project-tools-item-1'>React</li>
                <li className='project-tools-item-1'>Next.js</li>
                <li className='project-tools-item-1'>SCSS</li>
                <li className='project-tools-item-1'>Bootstrap</li>
              </ul>
              <div className='project-source-links-1'>
                <a href='https://github.com/yeul/puppies-portfolio-3' target='_blank'>
                  <i className='github-icon fab fa-github' />
                </a>
                <a href='https://puppies-portfolio-3.mpscqw.now.sh/' target='_blank'>
                  <i className='external-link fas fa-external-link-alt' />
                </a>
              </div>
              <div className='project-sample-info-1'>
                Website demonstrating a carousel of dog images/breed info written in JS and React. Background color/button colors also change depending upon carousel position.
              </div>
              <div className='background-border-1' />
            </div>
          </div>
        </div>
        <div className='more-projects-container container'>
          <div className='more-projects-row row'>
            <div className='more-projects-header-col col-lg-12'>
              <h3 className='more-projects-header'>
                <span className='more-projects-header-text'>More Projects</span>
              </h3>
            </div>
          </div>
          <div className='more-projects-row-1 row'>
            <div className='more-projects-col col-lg-4'>
              <Card
                appTitle='Full-stack Emaily'
                appInfo='Fullstack feedback campaign creation site for business owners based on a Udemy course. Send surverys to your users for feedback.'
                appTools='Node.js Express React Redux MongoDB'
                githubLink='https://github.com/yeul/fullstack-emaily'
              />
            </div>
            <div className='more-projects-col col-lg-4'>
              <Card
                appTitle='React/Redux Streamy'
                appInfo='This React/Redux application is a live-streaming video app based on a Udemy course.'
                appTools='React Redux/Redux Thunk'
                githubLink='https://github.com/yeul/react-redux-streamy'
              />
            </div>
            <div className='more-projects-col col-lg-4'>
              <Card
                appTitle='Socket.io Chat App'
                appInfo='Chat application using Node.js, Express, and Socket.io.'
                appTools='Node.js Express Socket.io'
                githubLink='https://github.com/yeul/socket.io-chat-app'
              />
            </div>
          </div>
          <div className='more-projects-row-2 row'>
            <div className='more-projects-col col-lg-4'>
              <Card
                appTitle='Async/Await Currency Converter'
                appInfo='Simple currency converter made in order to learn Javascript ES7 feature async/await.'
                appTools='Javascript ES7'
                githubLink='https://github.com/yeul/async-await-currency-converter'
              />
            </div>
            <div className='more-projects-col col-lg-4'>
              <Card
                appTitle='React Pics'
                appInfo='Based on a Udemy course, this app is a simple photo grid utilizing React and the Unsplash API. Search for photos to show your results.'
                appTools='React Unsplash API'
                githubLink='https://github.com/yeul/react-pics'
              />
            </div>
            <div className='more-projects-col col-lg-4'>
              <Card
                appTitle='Tindog'
                appInfo='Udemy bootcamp website based on the concept of advertising a fake-application called "Tindog".'
                appTools='HTML CSS Bootstrap 4'
                githubLink='https://github.com/yeul/tindog'
              />
            </div>
          </div>
          <div className='see-more-row row no-gutters'>
            <div className='see-more-col col-lg-12'>
              <a className='see-more-button-link' href='https://github.com/yeul?tab=repositories' target='_blank'>
                <Button button='See More on My Github' />
              </a>
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
                <a className='email-button-link' href='mailto:juliamfurman@gmail.com' target='_top'>
                  <Button button='Email Me' />
                </a>
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
