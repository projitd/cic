import Layout from '../../components/layout';
import React, { useEffect, useState } from 'react';
import { getPageData } from '../../../.cache/socketIo';

const CspList = () => {
  // const endpoint = 'https://github.com/18F/fedramp-data/blob/master/data/data.json';
  const endpoint = 'https://raw.githubusercontent.com/18F/fedramp-data/master/data/data.json';
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch(endpoint)
      .then(r => {
        if (r.ok) {
          return r.json();
        }
        throw new Error(r.statusText);
      })
      .then(csps => {
        setResults(csps.data.Providers);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <Layout>
      <h1>Cloud Service Provider List</h1>
      <div className="usa-layout-docs usa-section">
        <div className="grid-container">
          <div className="grid-row grid-gap">
            <div className="usa-layout-docs__main desktop:grid-col-12 usa-prose">
              <div className="grid-row grid-gap">
                {results.length > 0 ? (
                  <ol>
                    {results.map((r, idx) => (
                      <li
                        key={idx}
                        className="padding-bottom-5 margin-top-4 usa-prose border-bottom-05 border-base-lightest"
                      >
                        <div className='eachProvider'><img className='providerImg' src={r.CSP_URL} alt="Img Here" /></div> - {r.Cloud_Service_Provider_Name}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <h4 className="title">
                    No Cloud Service Providers Available
                  </h4>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

/*<div className="usa-layout-docs__main desktop:grid-col-5 eachProvider" key={item.id}>
  <img className='providerImg' src={item.Logo} alt="Img Here" />
  <p>{item.Name}</p>
</div>*/

export default CspList;
