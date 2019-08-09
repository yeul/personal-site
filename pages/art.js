import React, { Fragment } from "react";
import Link from "next/link";
import Nav from "../components/Nav";
import Button from "../components/Button";
import Footer from "../components/Footer";

import "../styles/main.scss";

class Art extends React.Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <div className='art-container container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='header-div'>
                <h3 className='illustration-header'>
                  <span className='header-span'>Illustrations</span>
                </h3>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='year-header-div'>
                <h3 className='year-header'>2017</h3>
              </div>
            </div>
          </div>
          <div className='card-columns'>
            <div className='card card-img img-fluid'>
              <a href='../static/images/my-art/Illustrations/2017/year-of-the-rooster-jan-2017-2.jpg' data-lity data-lity-desc='Year of the Rooster - January 2017'>
                <img className='image' src='../static/images/my-art/Illustrations/2017/year-of-the-rooster-jan-2017-2.jpg' alt='' />
              </a>
              <span className='sr-only'>Year of the Rooster - January 2017</span>
            </div>
            <div className='card card-img img-fluid'>
              <a href='../static/images/my-art/Illustrations/2017/year-of-the-rooster-jan-2017.jpg' data-lity data-lity-desc='Rooster illustration - January 2017'>
                <img className='image' src='../static/images/my-art/Illustrations/2017/year-of-the-rooster-jan-2017.jpg' alt='' />
              </a>
              <span className='sr-only'>Rooster illustration - January 2017</span>
            </div>
            <div className='card card-img img-fluid'>
              <a href='../static/images/my-art/Illustrations/2017/knight-jan-2017.jpg' data-lity data-lity-desc='Knight in shining armor - January 2017'>
                <img className='image' src='../static/images/my-art/Illustrations/2017/knight-jan-2017.jpg' alt='' />
              </a>
              <span className='sr-only'>Knight in shining armor - January 2017</span>
            </div>
            <div className='card card-img img-fluid'>
              <a href='../static/images/my-art/Illustrations/2017/girl-feb-2017.png' data-lity data-lity-desc='Stylized illustration of a girl - Febrary 2017'>
                <img className='image' src='../static/images/my-art/Illustrations/2017/girl-feb-2017.png' alt='' />
              </a>
              <span className='sr-only'>Stylized illustration of a girl - February 2017</span>
            </div>
            <div className='card card-img img-fluid'>
              <a href='../static/images/my-art/Illustrations/2017/city-feb-2017.jpg' data-lity data-lity-desc='An elven girl and the dried fountain - February 2017'>
                <img className='image' src='../static/images/my-art/Illustrations/2017/city-feb-2017.jpg' alt='' />
              </a>
              <span className='sr-only'>An elven girl and the dried fountain - February 2017</span>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='year-header-div'>
                <h3 className='year-header'>2016</h3>
              </div>
            </div>
          </div>
          <div className='card-columns'>
            <div className='card card-img img-fluid'>
              <a href='../static/images/my-art/Illustrations/2016/girl-2016.png' data-lity data-lity-desc='Illustration of a girl - 2016'>
                <img className='image' src='../static/images/my-art/Illustrations/2016/girl-2016.png' alt='' />
              </a>
              <span className='sr-only'>Black and white illustration of a girl with black hair - 2016</span>
            </div>
            <div className='card card-img img-fluid'>
              <a href='../static/images/my-art/Illustrations/2016/space-2016.jpg' data-lity data-lity-desc='Space explorer - 2016'>
                <img className='image' src='../static/images/my-art/Illustrations/2016/space-2016.jpg' alt='' />
              </a>
              <span className='sr-only'>Female space explorer holding dogtags with an image of a galaxy in front of her - 2016</span>
            </div>
            <div className='card card-img img-fluid'>
              <a href='../static/images/my-art/Illustrations/2016/girl-nov-2016.jpg' data-lity data-lity-desc='Stylized illustration of a girl - November 2016'>
                <img className='image' src='../static/images/my-art/Illustrations/2016/girl-nov-2016.jpg' alt='' />
              </a>
              <span className='sr-only'>Colorful stylized image of a girl - November 2016</span>
            </div>
            <div className='card card-img img-fluid'>
              <a href='../static/images/my-art/Illustrations/2016/elf-2016.png' data-lity data-lity-desc='Elven mage concept art - November 2016'>
                <img className='image' src='../static/images/my-art/Illustrations/2016/elf-2016.png' alt='' />
              </a>
              <span className='sr-only'>Elven mage girl with a staff concept art - November 2016</span>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='header-div'>
                <h3 className='sculpt-header'>
                  <span className='header-span'>Sculpts</span>
                </h3>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='year-header-div'>
                <h3 className='year-header'>2017</h3>
              </div>
            </div>
          </div>
          <div className='card-columns'>
            <div className='card card-img img-fluid'>
              <a href='../static/images/my-art/Sculpts/2017/girl-render-2017.png' data-lity data-lity-desc='3D bust of a woman - 2017'>
                <img className='image' src='../static/images/my-art/Sculpts/2017/girl-render-2017.png' alt='' />
              </a>
              <span className='sr-only'>3D bust of a girl rendered in blue with a red background - 2017</span>
            </div>
            <div className='card card-img img-fluid'>
              <a href='../static/images/my-art/Sculpts/2017/girl-modo-2017.png' data-lity data-lity-desc='3D bust rendered in Modo - 2017'>
                <img className='image' src='../static/images/my-art/Sculpts/2017/girl-modo-2017.png' alt='' />
              </a>
              <span className='sr-only'>3D bust of a girl rendered inside of the 3D program Modo - 2017</span>
            </div>
            <div className='card card-img img-fluid'>
              <a href='../static/images/my-art/Sculpts/2017/girl-front-2017.jpg' data-lity data-lity-desc='3D bust rendered in Keyshot - 2017'>
                <img className='image' src='../static/images/my-art/Sculpts/2017/girl-front-2017.jpg' alt='' />
              </a>
              <span className='sr-only'>3D bust of a girl rendered in Keyshot - 2017</span>
            </div>
            <div className='card card-img img-fluid'>
              <a href='../static/images/my-art/Sculpts/2017/girl-side-2017.jpg' data-lity data-lity-desc='3D bust rendered in Keyshot - 2017'>
                <img className='image' src='../static/images/my-art/Sculpts/2017/girl-side-2017.jpg' alt='' />
              </a>
              <span className='sr-only'>3D bust of a girl rendered in Keyshot - 2017</span>
            </div>
            <div className='card card-img img-fluid'>
              <a href='../static/images/my-art/Sculpts/2017/girl-process-2017.png' data-lity data-lity-desc='Process of sculpting in ZBrush - 2017'>
                <img className='image' src='../static/images/my-art/Sculpts/2017/girl-process-2017.png' alt='' />
              </a>
              <span className='sr-only'>3D bust of a girl process screenshot in the sculpting program ZBrush - 2017</span>
            </div>
            <div className='card card-img img-fluid'>
              <a
                href='../static/images/my-art/Sculpts/2017/anatomy-test-sculpt-2017.png'
                data-lity
                data-lity-desc='Practice sculpt of an anatomical figure of a woman floating - 2017'
              >
                <img className='image' src='../static/images/my-art/Sculpts/2017/anatomy-test-sculpt-2017.png' alt='' />
              </a>
              <span className='sr-only'>Practice sculpt of an anatomical figure of a woman floating - 2017</span>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='header-div'>
                <h3 className='sketch-header'>
                  <span className='header-span'>Sketches</span>
                </h3>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='year-header-div'>
                <h3 className='year-header'>2016-2017</h3>
              </div>
            </div>
          </div>
          <div className='card-columns'>
            <div className='card card-img img-fluid'>
              <a href='../static/images/my-art/Sketches/2017/may-2017.png' data-lity data-lity-desc='Hand practice sketches - May 2017'>
                <img className='image' src='../static/images/my-art/Sketches/2017/may-2017.png' alt='' />
                <span className='sr-only'>Hand practice sketches - May 2017</span>
              </a>
            </div>
            <div className='card card-img img-fluid'>
              <a href='../static/images/my-art/Sketches/2017/may-2017-2.png' data-lity data-lity-desc='Hand practice sketches 2 - May 2017'>
                <img className='image' src='../static/images/my-art/Sketches/2017/may-2017-2.png' alt='' />
                <span className='sr-only'>Hand practice sketches - May 2017</span>
              </a>
            </div>
            <div className='card card-img img-fluid'>
              <a href='../static/images/my-art/Sketches/2016/wink-dec-2016.png' data-lity data-lity-desc='Girl winking sketch - December 2016'>
                <img className='image' src='../static/images/my-art/Sketches/2016/wink-dec-2016.png' alt='' />
                <span className='sr-only'>Girl winking sketch - December 2016</span>
              </a>
            </div>
            <div className='card card-img img-fluid'>
              <a href='../static/images/my-art/Sketches/2016/july-2016.png' data-lity data-lity-desc='Anatomy practice sketches - July 2016'>
                <img className='image' src='../static/images/my-art/Sketches/2016/july-2016.png' alt='' />
              </a>
              <span className='sr-only'>Anatomy practice sketches - July 2016</span>
            </div>
            <div className='card card-img img-fluid'>
              <a href='../static/images/my-art/Sketches/2016/july-2016-2.png' data-lity data-lity-desc='Anatomy practice sketches - July 2017'>
                <img className='image' src='../static/images/my-art/Sketches/2016/july-2016-2.png' alt='' />
              </a>
              <span className='sr-only'>Anatomy practice sketches - July 2016</span>
            </div>
            <div className='card card-img img-fluid'>
              <a href='../static/images/my-art/Sketches/2016/sept-2016.png' data-lity data-lity-desc='Elven girl smiling - September 2016'>
                <img className='image' src='../static/images/my-art/Sketches/2016/sept-2016.png' alt='' />
              </a>
              <span className='sr-only'>Elven girl smiling - September 2016</span>
            </div>
            <div className='card card-img img-fluid'>
              <a href='../static/images/my-art/Sketches/2016/sept-2016-2.png' data-lity data-lity-desc='Elven girl with face paint - September 2016'>
                <img className='image' src='../static/images/my-art/Sketches/2016/sept-2016-2.png' alt='' />
              </a>
              <span className='sr-only'>Elven girl with face paint - September 2016</span>
            </div>
            <div className='card card-img img-fluid'>
              <a href='../static/images/my-art/Sketches/2016/dec-2016.png' data-lity data-lity-desc='Eyes practice sketches - December 2017'>
                <img className='image' src='../static/images/my-art/Sketches/2016/dec-2016.png' alt='' />
              </a>
              <span className='sr-only'>Eyes drawing practice sketches - December 2016</span>
            </div>
            <div className='card card-img img-fluid'>
              <a href='../static/images/my-art/Sketches/2016/dec-2016-2.png' data-lity data-lity-desc='Anatomy practice sketches - December 2017'>
                <img className='image' src='../static/images/my-art/Sketches/2016/dec-2016-2.png' alt='' />
              </a>
              <span className='sr-only'>Anatomy practice sketches - December 2016</span>
            </div>
            <div className='card card-img img-fluid'>
              <a href='../static/images/my-art/Sketches/2016/dec-2016-3.png' data-lity data-lity-desc='Anatomy practice sketches - December 2016'>
                <img className='image' src='../static/images/my-art/Sketches/2016/dec-2016-3.png' alt='' />
              </a>
              <span className='sr-only'>Anatomy practice sketches - December 2016</span>
            </div>
            <div className='card card-img img-fluid'>
              <a href='../static/images/my-art/Sketches/2016/dec-2016-4.png' data-lity data-lity-desc='Human body anatomy sketch - December 2016'>
                <img className='image' src='../static/images/my-art/Sketches/2016/dec-2016-4.png' alt='' />
              </a>
              <span className='sr-only'>Human body anatomy sketch - December 2016</span>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Art;
