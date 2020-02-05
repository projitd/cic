import React from 'react';
import { Link } from 'gatsby';

/*
  The sidenav is not loaded by default on the main pages. To include this navigation you can
  add "sidenav: true" in the front-matter of your markdown pages
*/

const Sidenav = () => (
  <aside className="usa-layout-docs-sidenav desktop:grid-col-3 padding-bottom-4">
    <nav>

      <ul className="usa-sidenav">
        <li className="usa-sidenav__item">
          <Link to="/">
            Home
          </Link>
        </li>
      </ul>

          <li className="usa-sidenav__item">
          <Link to="/whycloud/whycloud" className="usa-sidenav__item">
            Why Cloud
          </Link>
          <ul className="usa-sidenav__sublist">
            <li className="usa-sidenav__item">
              <Link to="/whycloud/security">
                Security Compliance
              </Link>
            </li>
            <li className="usa-sidenav__item">
              <Link to="/whycloud/technicalcapabilities" className="usa-sidenav__item">
                Technical Capabilities
              </Link>
            </li>
          </ul>
        </li>

          <li className="usa-sidenav__item">
          <Link to="/cloudplanning/overview" className="usa-sidenav__item">
            Cloud Planning
          </Link>
          <ul className="usa-sidenav__sublist">
            <li className="usa-sidenav__item">
              <Link to="/coudplanning/security">
                Security
              </Link>
            </li>
            <li className="usa-sidenav__item">
              <Link to="/cloudplanning/technical" className="usa-sidenav__item">
                Technical Capabilities
              </Link>
            </li>
          </ul>
        </li>

          <li className="usa-sidenav__item">
          <Link to="/cloudplanning/cloudplanning" className="usa-sidenav__item">
            Find Cloud Solutions
          </Link>
          <ul className="usa-sidenav__sublist">
            <li className="usa-sidenav__item">
              <Link to="/lcoudplanning/security">
                IaaS
              </Link>
            </li>
            <li className="usa-sidenav__item">
              <Link to="/cloudplanning/technical" className="usa-sidenav__item">
                PaaS
              </Link>
            </li>
            <li className="usa-sidenav__item">
              <Link to="/cloudplanning/technical" className="usa-sidenav__item">
                SaaS
              </Link>
            </li>
            <li className="usa-sidenav__item">
              <Link to="/cloudplanning/technical" className="usa-sidenav__item">
                Cloud Professional Services
              </Link>
            </li>
            <li className="usa-sidenav__item">
              <Link to="/cloudplanning/technical" className="usa-sidenav__item">
                Vendors
              </Link>
            </li>                                    
          </ul>
        </li>

          <li className="usa-sidenav__item">
          <Link to="/cloudplanning/cloudplanning" className="usa-sidenav__item">
            Acquisition Guidance
          </Link>
          <ul className="usa-sidenav__sublist">
            <li className="usa-sidenav__item">
              <Link to="/lcoudplanning/security">
                Pricing
              </Link>
            </li>
            <li className="usa-sidenav__item">
              <Link to="/cloudplanning/technical" className="usa-sidenav__item">
                Market Research
              </Link>
            </li>
            <li className="usa-sidenav__item">
              <Link to="/cloudplanning/technical" className="usa-sidenav__item">
                Procurement Process
              </Link>
            </li>
            <li className="usa-sidenav__item">
              <Link to="/cloudplanning/technical" className="usa-sidenav__item">
                Acquisition Challanges
              </Link>
            </li>
            <li className="usa-sidenav__item">
              <Link to="/cloudplanning/technical" className="usa-sidenav__item">
                Acquisition Resources
              </Link>
            </li>       
            <li className="usa-sidenav__item">
              <Link to="/cloudplanning/technical" className="usa-sidenav__item">
                Templates
              </Link>
            </li>
            <li className="usa-sidenav__item">
              <Link to="/cloudplanning/technical" className="usa-sidenav__item">
                Use Cases
              </Link>
            </li>
            <li className="usa-sidenav__item">
              <Link to="/cloudplanning/technical" className="usa-sidenav__item">
                Helpful Documents
              </Link>
            </li>                                 
          </ul>
        </li>   

      <ul className="usa-sidenav">
        <li className="usa-sidenav__item">
          <Link to="/policy">
            Policy Directives
          </Link>
        </li>
      </ul>

      <ul className="usa-sidenav">
        <li className="usa-sidenav__item">
          <Link to="/partnersites">
            Partner Sites
          </Link>
        </li>
      </ul>

      <ul className="usa-sidenav">
        <li className="usa-sidenav__item">
          <Link to="/deos">
            DEOS
          </Link>
        </li>
      </ul>

      <ul className="usa-sidenav">
        <li className="usa-sidenav__item">
          <Link to="/eventstraining">
            Events & Training
          </Link>
        </li>
      </ul>

      <ul className="usa-sidenav">
        <li className="usa-sidenav__item">
          <Link to="/discussions">
            Discussions
          </Link>
        </li>
      </ul>

    </nav>
  </aside>
);

export default Sidenav;
