import React, { Fragment } from "react";
import Link from "next/link";

import "../styles/main.scss";

class Nav extends React.Component {
  render() {
    return (
      <Fragment>
        <div className='nav-container container-fluid'>
          <div className='nav-row row no-gutters'>
            <div className='nav-col-left col-lg-1'>
              <a href='/'>
                <img className='self-logo' src='../static/images/self-logo.svg' />
              </a>
            </div>
            <div className='nav-col-right col-lg-11'>
              <div className='navLinks'>
                <ul className='nav-ul'>
                  <li className='nav-li'>
                    <span className='nav-num'>.01</span>
                    <span className='nav-link-name'>
                      <a className='nav-link-email' href='mailto:juliamfurman@gmail.com' target='_top'>
                        Email
                      </a>
                    </span>
                  </li>
                  <li className='nav-li'>
                    <span className='nav-num'>.02</span>
                    <span className='nav-link-name'>
                      <a className='nav-link-github' href='https://github.com/yeul' target='_blank'>
                        Github
                      </a>
                    </span>
                  </li>
                  <li className='nav-li'>
                    <span className='nav-num'>.03</span>
                    <span className='nav-link-name'>
                      <Link href='/art'>
                        <a className='nav-link-link'>Art</a>
                      </Link>
                    </span>
                  </li>
                  <li className='nav-li'>
                    <span className='nav-num'>.04</span>
                    <span className='nav-link-name'>
                      <a className='nav-link-link' href='/' target='_blank'>
                        LinkedIn
                      </a>
                    </span>
                  </li>
                  <li className='nav-li'>
                    <span className='nav-link-name link-resume'>
                      <a className='nav-link-resume' href='#'>
                        Résumé
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Nav;
