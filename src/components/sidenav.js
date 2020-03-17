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
      <Location>
      {({ location }) => {
        console.log(location)
        if (location.pathname.startsWith('/basics/')) {
          return (<div><h3>Related Topics:</h3><li className="usa-sidenav__item"><Link to='/basics/cloud-basics' activeClassName="usa-focus">Cloud Basics</Link></li>
          <li className="usa-sidenav__item"><Link to='/basics/cloud-security' activeClassName="usa-focus">Cloud Security</Link></li>
          <li className="usa-sidenav__item"><Link to='/basics/cloud-capabilities' activeClassName="usa-focus">Cloud Capabilities</Link></li></div>)
        } 
        else if (location.pathname.startsWith('/planning/')) {

          return (<div><h3>Related Topics:</h3><li className="usa-sidenav__item"><Link to='/planning/planning-basics' activeClassName="usa-focus">Planning Basics</Link></li>
          <li className="usa-sidenav__item"><Link to='/planning/business-considerations' activeClassName="usa-focus">Business Considerations</Link></li>
          <li className="usa-sidenav__item"><Link to='/planning/technical-implementation' activeClassName="usa-focus">Technical Implementation</Link></li></div>)

        }
        else if (location.pathname.startsWith('/findcloud/')) {

          return (<div><h3>Related Topics:</h3><li className="usa-sidenav__item"><Link to='/findcloud/iaas' activeClassName="usa-focus">IaaS</Link></li>
          <li className="usa-sidenav__item"><Link to='/findcloud/paas' activeClassName="usa-focus">PaaS</Link></li>
          <li className="usa-sidenav__item"><Link to='/findcloud/saas' activeClassName="usa-focus">SaaS</Link></li>
          <li className="usa-sidenav__item"><Link to='/findcloud/professionalservices' activeClassName="usa-focus">CPS</Link></li>
          <li className="usa-sidenav__item"><Link to='/findcloud/vendors' activeClassName="usa-focus">Vendors</Link></li></div>)

        }
        else if (location.pathname.startsWith('/acquisitionguidance/')) {

          return (<div><h3>Related Topics:</h3><li className="usa-sidenav__item"><Link to='/acquisitionguidance/overview' activeClassName="usa-focus">Acquisition Overview</Link></li>
          <li className="usa-sidenav__item"><Link to='/acquisitionguidance/pricing' activeClassName="usa-focus">Pricing</Link></li>
          <li className="usa-sidenav__item"><Link to='/acquisitionguidance/marketresearch' activeClassName="usa-focus">Market Research</Link></li>
          <li className="usa-sidenav__item"><Link to='/acquisitionguidance/procurementprocess' activeClassName="usa-focus">Procurement Process</Link></li>
          <li className="usa-sidenav__item"><Link to='/acquisitionguidance/acquisitionchallenges' activeClassName="usa-focus">Acquisition Challenges</Link></li>
          <li className="usa-sidenav__item"><Link to='/acquisitionguidance/acquisitionresources' activeClassName="usa-focus">Acquisition Resources</Link></li>
          <li className="usa-sidenav__item"><a href="#TOP" activeClassName="usa-focus"><strong>Top of Page</strong></a></li>
          </div>)
        }
        else if (location.pathname.startsWith('/references/policy')) {

          return (<div><h3>On This Page:</h3> <li className="usa-sidenav__item"><a href="#FITARA" activeClassName="usa-focus">FITARA</a></li>
          <li className="usa-sidenav__item"><a href="#MEGABYTE" activeClassName="usa-focus">MEGABYTE</a></li>
          <li className="usa-sidenav__item"><a href="#CLOUDFIRST" activeClassName="usa-focus">CLOUD FIRST</a></li>
          <li className="usa-sidenav__item"><a href="#CLOUDSMART" activeClassName="usa-focus">CLOUD SMART</a></li>
          <li className="usa-sidenav__item"><a href="#DCOI" activeClassName="usa-focus">DCOI</a></li>
          <li className="usa-sidenav__item"><a href="#FedRAMP" activeClassName="usa-focus">FedRAMP</a></li>
          <li className="usa-sidenav__item"><a href="#ITMODERNIZATION" activeClassName="usa-focus">IT MODERNIZATION</a></li>
          <li className="usa-sidenav__item"><a href="#CENTEROFEXCELLENCE" activeClassName="usa-focus">CENTER OF EXCELLENCE</a></li>
          <li className="usa-sidenav__item"><a href="#CLOUDADOPTION" activeClassName="usa-focus">CLOUD ADOPTION</a></li>
          <li className="usa-sidenav__item"><a href="#USSM" activeClassName="usa-focus">USSM</a></li>
          <li className="usa-sidenav__item"><a href="#OMBGUIDANCE" activeClassName="usa-focus">OMB GUIDANCE</a></li>
          </div>)
        }
        else if (location.pathname.startsWith('/resources/')) {

          return (<div><h3>Related Topics:</h3><li className="usa-sidenav__item"><Link to='/resources/templates' activeClassName="usa-focus">Templates</Link></li>
          <li className="usa-sidenav__item"><Link to='/resources/use-cases' activeClassName="usa-focus">Use Cases</Link></li>
          <li className="usa-sidenav__item"><Link to='/resources/success-stories' activeClassName="usa-focus">Success Stories</Link></li>
          <li className="usa-sidenav__item"><Link to='/resources/helpful-documents' activeClassName="usa-focus">Helpful Documents</Link></li>
          </div>)
        }
      }}
     </Location> 
      </ul>  
    </nav>
    
  </aside>
);

export default Sidenav;
