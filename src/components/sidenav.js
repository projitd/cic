import React from 'react';
import { Link } from 'gatsby';

/*
  The sidenav is not loaded by default on the main pages. To include this navigation you can
  add "sidenav: true" in the front-matter of your markdown pages
*/

const Sidenav = () => (
  <aside className="usa-layout-docs-sidenav desktop:grid-col-3 padding-bottom-4">
    <nav>

/*
  Home Page
*/

      <ul className="usa-sidenav">
        <li className="usa-sidenav__item">
          <Link to="/">Home</Link>
        </li>
      </ul>

/*
  Why Cloud
*/

<li className="usa-sidenav__item">
          <Link to="/whycloud/whycloud" className="usa-sidenav__item">
            Why Cloud
          </Link>
          <ul className="usa-sidenav__sublist">
            <li className="usa-sidenav__item">
              <Link to="/whycloud/security">Security Compliance</Link>
            </li>
            <li className="usa-sidenav__item">
              <Link to="/whycloud/technicalcapabilities" className="usa-sidenav__item">
                Technical Capabilities
              </Link>
              <ul className="usa-sidenav__sublist">
                <li className="usa-sidenav__item">
                  <Link to="/">Grandchild link</Link>
                </li>
                <li className="usa-sidenav__item">
                  <Link to="/">Grandchild link</Link>
                </li>
                <li className="usa-sidenav__item">
                  <Link to="/" className="usa-sidenav__item">
                    Grandchild link
                  </Link>
                </li>
                <li className="usa-sidenav__item">
                  <Link to="/">Grandchild link</Link>
                </li>
              </ul>
            </li>
            <li className="usa-sidenav__item">
              <Link to="/">Child link</Link>
            </li>
            <li className="usa-sidenav__item">
              <Link to="/">Child link</Link>
            </li>
            <li className="usa-sidenav__item">
              <Link to="/">Child link</Link>
            </li>
          </ul>
        </li>

/*
  Cloud Planning
*/


<ul className="usa-sidenav__sublist">
            <li className="usa-sidenav__item">
              <Link to="/">Child link</Link>
            </li>
            <li className="usa-sidenav__item">
              <Link to="/" className="usa-current">
                Child link
              </Link>
              <ul className="usa-sidenav__sublist">
                <li className="usa-sidenav__item">
                  <Link to="/">Grandchild link</Link>
                </li>
                <li className="usa-sidenav__item">
                  <Link to="/">Grandchild link</Link>
                </li>
                <li className="usa-sidenav__item">
                  <Link to="/" className="usa-current">
                    Grandchild link
                  </Link>
                </li>
                <li className="usa-sidenav__item">
                  <Link to="/">Grandchild link</Link>
                </li>
              </ul>
            </li>
            <li className="usa-sidenav__item">
              <Link to="/">Child link</Link>
            </li>
            <li className="usa-sidenav__item">
              <Link to="/">Child link</Link>
            </li>
            <li className="usa-sidenav__item">
              <Link to="/">Child link</Link>
            </li>
          </ul>

/*
  Find Cloud
*/

<ul className="usa-sidenav__sublist">
            <li className="usa-sidenav__item">
              <Link to="/">Child link</Link>
            </li>
            <li className="usa-sidenav__item">
              <Link to="/" className="usa-current">
                Child link
              </Link>
              <ul className="usa-sidenav__sublist">
                <li className="usa-sidenav__item">
                  <Link to="/">Grandchild link</Link>
                </li>
                <li className="usa-sidenav__item">
                  <Link to="/">Grandchild link</Link>
                </li>
                <li className="usa-sidenav__item">
                  <Link to="/" className="usa-current">
                    Grandchild link
                  </Link>
                </li>
                <li className="usa-sidenav__item">
                  <Link to="/">Grandchild link</Link>
                </li>
              </ul>
            </li>
            <li className="usa-sidenav__item">
              <Link to="/">Child link</Link>
            </li>
            <li className="usa-sidenav__item">
              <Link to="/">Child link</Link>
            </li>
            <li className="usa-sidenav__item">
              <Link to="/">Child link</Link>
            </li>
          </ul>

/*
  Acquisition Guidance
*/

<ul className="usa-sidenav__sublist">
            <li className="usa-sidenav__item">
              <Link to="/">Child link</Link>
            </li>
            <li className="usa-sidenav__item">
              <Link to="/" className="usa-current">
                Child link
              </Link>
              <ul className="usa-sidenav__sublist">
                <li className="usa-sidenav__item">
                  <Link to="/">Grandchild link</Link>
                </li>
                <li className="usa-sidenav__item">
                  <Link to="/">Grandchild link</Link>
                </li>
                <li className="usa-sidenav__item">
                  <Link to="/" className="usa-current">
                    Grandchild link
                  </Link>
                </li>
                <li className="usa-sidenav__item">
                  <Link to="/">Grandchild link</Link>
                </li>
              </ul>
            </li>
            <li className="usa-sidenav__item">
              <Link to="/">Child link</Link>
            </li>
            <li className="usa-sidenav__item">
              <Link to="/">Child link</Link>
            </li>
            <li className="usa-sidenav__item">
              <Link to="/">Child link</Link>
            </li>
          </ul>      

/*
  Policy Directives
*/

      <ul className="usa-sidenav">
        <li className="usa-sidenav__item">
          <Link to="/">Home</Link>
        </li>
      </ul>

/*
  Partner Sites
*/

      <ul className="usa-sidenav">
        <li className="usa-sidenav__item">
          <Link to="/">Home</Link>
        </li>
      </ul>

/*
  Support
*/

      <ul className="usa-sidenav">
        <li className="usa-sidenav__item">
          <Link to="/">Home</Link>
        </li>
      </ul>

/*
  DEOS
*/

      <ul className="usa-sidenav">
        <li className="usa-sidenav__item">
          <Link to="/">Home</Link>
        </li>
      </ul>

    </nav>
  </aside>
);

export default Sidenav;
