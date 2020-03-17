import Layout from '../../components/layout';
import React, {useEffect, useState} from 'react';
import {Link} from 'gatsby';

const CspList = () => {
    const endpoint = 'https://raw.githubusercontent.com/18F/fedramp-data/master/data/data.json';
    const [state, setState] = useState({
        providers: [],
        impactLevelFilter: [],
        cloudServiceProvidersNameFilter: []
    });
    useEffect(() => {
        fetch(endpoint)
            .then(r => {
                if (r.ok) {
                    return r.json();
                }
                throw new Error(r.statusText);
            })
            .then(csps => {
                const cspProviders = csps.data.Providers.filter(x => x.Designation === 'Compliant');
                const impactLevelFilter = getDistinctFilters('Impact_Level', cspProviders);
                const cloudServiceProvidersNameFilter = getDistinctFilters('Cloud_Service_Provider_Name', cspProviders);
                setState({
                    ...state,
                    providers: cspProviders,
                    impactLevelFilter: impactLevelFilter,
                    cloudServiceProvidersNameFilter: cloudServiceProvidersNameFilter
                });
            })
            .catch(err => console.log(err));
    }, [state]);

    function getDistinctFilters(propertyName, array) {
        const temp = new Set(array.map(x => x[propertyName]));
        return Array.from(temp);
    }

    return (
        <Layout>
            <div className="grid-container">
                <h1>Cloud Service Provider List</h1>
                <div className="grid-row">
                    <div className="desktop:grid-col-2 margin-top-4">
                        <nav>
                            <ul className="filters-list">
                                <div><h3>Filters:</h3>
                                    <div className="usa-accordion usa-accordion--bordered">
                                        <h2 className="usa-accordion__heading">
                                            <button className="usa-accordion__button"
                                                    aria-expanded="true"
                                                    aria-controls="b-a1">
                                                Service Models
                                            </button>
                                        </h2>
                                        <div id="b-a1" className="usa-accordion__content usa-prose">
                                            <ul className='noListStyle'>
                                                <li>IaaS</li>
                                                <li>PaaS</li>
                                                <li>Saas</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="usa-accordion usa-accordion--bordered">
                                        <h2 className="usa-accordion__heading">
                                            <button className="usa-accordion__button"
                                                    aria-expanded="true"
                                                    aria-controls="b-a2">
                                                Impact Level
                                            </button>
                                        </h2>
                                        <div id="b-a2" className="usa-accordion__content usa-prose">
                                            <ul className='noListStyle'>
                                                {state.impactLevelFilter.map((impact, idx) => (
                                                    <li key={idx}>{impact}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="usa-accordion usa-accordion--bordered">
                                        <h2 className="usa-accordion__heading">
                                            <button className="usa-accordion__button"
                                                    aria-expanded="true"
                                                    aria-controls="b-a3">
                                                Providers
                                            </button>
                                        </h2>
                                        <div id="b-a3" className="usa-accordion__content usa-prose">
                                            <ul className='noListStyle'>
                                                {state.cloudServiceProvidersNameFilter.map((csp, idx) => (
                                                    <li key={idx}>{csp}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </nav>

                    </div>
                    <div className="desktop:grid-col-8 usa-prose">
                        {state.providers.length > 0 ? (
                            <ul className='noListStyle'>
                                {state.providers.map((r, idx) => (
                                    <div className="grid-container" key={idx}>
                                        <div className="grid-row">
                                            <div className="tablet:grid-col-6"><img src={r.CSP_URL}
                                                                                    alt="Img Here"/>{r.Cloud_Service_Provider_Package}
                                            </div>
                                            <div className="tablet:grid-col-3">{r.Service_Model}</div>
                                            <div className="tablet:grid-col-3">{r.Impact_Level}</div>
                                        </div>
                                    </div>
                                ))}
                            </ul>
                        ) : (
                            <h4 className="title">
                                No Cloud Service Providers Available
                            </h4>
                        )}
                    </div>
                    <aside className="desktop:grid-col-2 margin-top-4">
                        <nav>
                            <ul className="usa-sidenav">
                                <div><h3>Related Topics:</h3>
                                    <li className="usa-sidenav__item"><Link to='/whycloud/overview'
                                                                            activeClassName="usa-focus">Cloud
                                        Basics</Link></li>
                                    <li className="usa-sidenav__item"><Link to='/whycloud/security'
                                                                            activeClassName="usa-focus">Cloud
                                        Security</Link></li>
                                    <li className="usa-sidenav__item"><Link to='/whycloud/technicalcapabilities'
                                                                            activeClassName="usa-focus">Cloud
                                        Capabilities</Link></li>
                                    <li className="usa-sidenav__item"><Link to='/whycloud/csplist'
                                                                            activeClassName="usa-focus">Cloud Service
                                        Provider List</Link></li>
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
