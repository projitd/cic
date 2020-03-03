import React from 'react';
import { Link } from 'gatsby';
import { Location } from '@reach/router'


/*
  The sidenav is not loaded by default on the main pages. To include this navigation you can
  add "sidenav: true" in the front-matter of your markdown pages

  Eric - changed grid col from 3 to 2
*/

const Sidenav = () => (
  <aside className="usa-layout-docs-sidenav desktop:grid-col-2">
    <nav>
    <ul className="usa-sidenav">
      <h3>Related Topics:</h3>  
      <Location>
      {({ location }) => {
        console.log(location)
        if (location.pathname.startsWith('/whycloud/')) {
          return (<div><li className="usa-sidenav__item"><Link to='/whycloud/overview' activeClassName="usa-focus">Cloud Basics</Link></li>
          <li className="usa-sidenav__item"><Link to='/whycloud/security' activeClassName="usa-focus">Cloud Security</Link></li>
          <li className="usa-sidenav__item"><Link to='/whycloud/technicalcapabilities' activeClassName="usa-focus">Cloud Capabilities</Link></li></div>)
        } 
        else if (location.pathname.startsWith('/cloudplanning/')) {

          return (<div><li className="usa-sidenav__item"><Link to='/cloudplanning/overview' activeClassName="usa-focus">Planning Basics</Link></li>
          <li className="usa-sidenav__item"><Link to='/cloudplanning/business' activeClassName="usa-focus">Business Considerations</Link></li>
          <li className="usa-sidenav__item"><Link to='/cloudplanning/technical' activeClassName="usa-focus">Technical Implementation</Link></li></div>)

        }
        else if (location.pathname.startsWith('/findcloud/')) {

          return (<div><li className="usa-sidenav__item"><Link to='/findcloud/iaas' activeClassName="usa-focus">IaaS</Link></li>
          <li className="usa-sidenav__item"><Link to='/findcloud/paas' activeClassName="usa-focus">PaaS</Link></li>
          <li className="usa-sidenav__item"><Link to='/findcloud/saas' activeClassName="usa-focus">SaaS</Link></li>
          <li className="usa-sidenav__item"><Link to='/findcloud/professionalservices' activeClassName="usa-focus">CPS</Link></li>
          <li className="usa-sidenav__item"><Link to='/findcloud/vendors' activeClassName="usa-focus">Vendors</Link></li></div>)

        }
        else if (location.pathname.startsWith('/acquisitionguidance/')) {

          return (<div><li className="usa-sidenav__item"><Link to='/acquisitionguidance/overview' activeClassName="usa-focus">Acquisition Overview</Link></li>
          <li className="usa-sidenav__item"><Link to='/acquisitionguidance/pricing' activeClassName="usa-focus">Pricing</Link></li>
          <li className="usa-sidenav__item"><Link to='/acquisitionguidance/marketresearch' activeClassName="usa-focus">Market Research</Link></li>
          <li className="usa-sidenav__item"><Link to='/acquisitionguidance/procurementprocess' activeClassName="usa-focus">Procurement Process</Link></li>
          <li className="usa-sidenav__item"><Link to='/acquisitionguidance/acquisitionchallenges' activeClassName="usa-focus">Acquisition Challenges</Link></li>
          <li className="usa-sidenav__item"><Link to='/acquisitionguidance/acquisitionresources' activeClassName="usa-focus">Acquisition Resources</Link></li>
          <li className="usa-sidenav__item"><Link to='/acquisitionguidance/templates' activeClassName="usa-focus">Templates</Link></li>
          <li className="usa-sidenav__item"><Link to='/acquisitionguidance/usecases' activeClassName="usa-focus">Use Cases</Link></li>
          <li className="usa-sidenav__item"><Link to='/acquisitionguidance/helpfuldocuments' activeClassName="usa-focus">Helpful Documents</Link></li>
          </div>)
        }
      }}
     </Location> 
      </ul>  
    </nav>
    
  </aside>
);

export default Sidenav;
