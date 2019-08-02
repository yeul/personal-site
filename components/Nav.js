import React, { Fragment } from "react";
import Link from "next/link";

import "../styles/main.scss";

class Nav extends React.Component {
  render() {
    return (
      <Fragment>
        <div className='nav-container container-fluid'>
          <div className='nav-row row no-gutters'>
            <div className='nav-col col-lg-12'>
              <div className='navLinks'>
                <ul className='nav-ul'>
                  <li className='nav-li'>
                    <span className='nav-num'>.01</span> <span className='nav-link-name'>Email</span>
                  </li>
                  <li className='nav-li'>
                    <span className='nav-num'>.02</span> <span className='nav-link-name'>Github</span>
                  </li>
                  <li className='nav-li'>
                    <span className='nav-num'>.03</span> <span className='nav-link-name'>LinkedIn</span>
                  </li>
                  <li className='nav-li'>
                    <span className='nav-link-name link-resume'>Résumé</span>
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
