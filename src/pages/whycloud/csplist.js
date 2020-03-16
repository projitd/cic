import Layout from '../../components/layout';
import React, { useEffect, useState } from 'react';
import { getPageData } from '../../../.cache/socketIo';
import { graphql, Link } from 'gatsby';
import { Location } from '@reach/router';

const CspList = () => {
  const endpoint = 'https://raw.githubusercontent.com/18F/fedramp-data/master/data/data.json';
  const [results, setResults] = useState([]);
  var filtersArray = ['Service Models', 'Impact Level', 'Providers'];
  var cspProviders = [];
  var impactLevelFilter = [];
  var cloudServiceProvidersNameFilter = [];
  useEffect(() => {
    fetch(endpoint)
      .then(r => {
        if (r.ok) {
          return r.json();
        }
        throw new Error(r.statusText);
      })
      .then(csps => {
        cspProviders = csps.data.Providers.filter(x => x.Designation === 'Compliant');
        setResults(cspProviders);
        impactLevelFilter = getDistinctFilters('Impact_Level', cspProviders);
        cloudServiceProvidersNameFilter = getDistinctFilters('Cloud_Service_Provider_Name', cspProviders);
      })
      .catch(err => console.log(err));
  }, []);
  function getDistinctFilters(propertyName, array)  {
    return new Set(array.map(x => x[propertyName]));
  }
  return (
    <Layout>
      <h1>Cloud Service Provider List</h1>
      <div className="grid-container">
        <div className="grid-row">
          <aside className="desktop:grid-col-2 margin-top-4 padding-right-4">
            <nav>
              <ul className="usa-sidenav">
                <div><h3>Filters:</h3>
                  <li className="usa-sidenav__item"><Link>Service Models</Link></li>
                  <li className="usa-sidenav__item"><Link>Impact Level</Link></li>
                  <li className="usa-sidenav__item"><Link>Providers</Link></li>
                </div>
              </ul>
            </nav>

          </aside>
          <div className="desktop:grid-col-8 usa-prose padding-right-4">
            {results.length > 0 ? (
              <ol>
                {results.map((r, idx) => (
                  <li
                    key={idx}
                    className="padding-bottom-5 margin-top-4 usa-prose border-bottom-05 border-base-lightest"
                  >
                    <div className='eachProvider'><img className='providerImg' src={r.CSP_URL} alt="Img Here"/></div>
                    - {r.Cloud_Service_Provider_Package}
                  </li>
                ))}
              </ol>
            ) : (
              <h4 className="title">
                No Cloud Service Providers Available
              </h4>
            )}
          </div>
          <aside className="desktop:grid-col-2 margin-top-4 padding-right-4">
            <nav>
              <ul className="usa-sidenav">
                <div><h3>Related Topics:</h3>
                  <li className="usa-sidenav__item"><Link to='/whycloud/overview' activeClassName="usa-focus">Cloud
                    Basics</Link></li>
                  <li className="usa-sidenav__item"><Link to='/whycloud/security' activeClassName="usa-focus">Cloud
                    Security</Link></li>
                  <li className="usa-sidenav__item"><Link to='/whycloud/technicalcapabilities' activeClassName="usa-focus">Cloud Capabilities</Link></li>
                  <li className="usa-sidenav__item"><Link to='/whycloud/csplist' activeClassName="usa-focus">Cloud Service Provider List</Link></li>
                </div>
              </ul>
            </nav>

          </aside>
        </div>
      </div>
    </Layout>
  );
};


export default CspList;
