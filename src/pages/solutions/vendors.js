import Layout from '../../components/layout';
import React, {useEffect, useState} from 'react';
import {Link} from 'gatsby';
import * as _ from 'lodash';
import data from '../../../static/documents/categories-test';
import {isNullOrWhiteSpace, isNotNull} from "../../utilities";

const Vendors = () => {
    const endpoint = 'https://raw.githubusercontent.com/18F/fedramp-data/master/data/data.json';
    const cspCategoriesDataset = transformCategoriesJson(data);
    const [state, setState] = useState({
        providers: [],
        impactLevelFilter: [],
        cloudServiceProvidersNameFilter: [],
        cloudServiceProviders: [],
        businessCategoryFilters: [],
        serviceModelFilters: [{filter: 'IaaS', checked: false},
            {filter: 'PaaS', checked: false},
            {filter: 'SaaS', checked: false}]
    });
    /**
     * @description state effect: makes na API call to get the list of providers and sets the state after appropriate transformation of the values
     */
    useEffect(() => {
        fetch(endpoint)
            .then(r => {
                if (r.ok) {
                    return r.json();
                }
                throw new Error(r.statusText);
            })
            .then(csps => {
                const cspProviders = parsingMultiServiceModelCsps(csps.data.Providers.filter(x => x.Designation === 'Compliant'));
                const impactLevelFilter = getDistinctFilters('Impact_Level', cspProviders);
                const cloudServiceProvidersNameFilter = getDistinctFilters('Cloud_Service_Provider_Name', cspProviders);
                const categoryFilters = getDistinctFilters('Business_Category', cspProviders);
                setState({
                    ...state,
                    providers: cspProviders,
                    impactLevelFilter: impactLevelFilter,
                    cloudServiceProvidersNameFilter: cloudServiceProvidersNameFilter,
                    cloudServiceProviders: cspProviders,
                    businessCategoryFilters: categoryFilters
                });
            })
            .catch(err => console.log(err));
    }, []);

    /**
     * @description gets the distinct property value for the given property name: to serve the purpose of filters
     */
    function getDistinctFilters(propertyName, array) {
        let temp = [];
        let filterableArray = [];
        if (propertyName === 'Business_Category') {
            let categoriesArray = array.map(x => x[propertyName]);
            temp = new Set(categoriesArray.flat(Infinity));
        } else {
            temp = new Set(array.map(x => x[propertyName]));
        }
        temp.forEach(v => filterableArray.push({
            filter: v, checked: false
        }));
        filterableArray.sort((a, b) => (a.filter > b.filter) ? 1 : -1);
        return filterableArray;
    }
    /**
     * @description parses the service model string if it consists of more than one model value and their respective values.
     */
    function parsingMultiServiceModelCsps(csps) {
        let parsedArray = [];
        _.clone(csps).forEach(x => {
           const serviceModels = x.Service_Model[0].split(', ');
           if (serviceModels.length > 1) {
               serviceModels.forEach(y => {
                   parsedArray.push({...x, Service_Model: [y]});

               });
               csps.splice(csps.indexOf(x), 1);
           }
        });
        if (parsedArray.length > 0) {
           parsedArray.forEach(z => {
               csps.push(z);
           });
        }
        let unmatchers = [];
        cspCategoriesDataset.forEach(x => {
            let isFound = false;
            csps.forEach(y => {
                /*if(y.Cloud_Service_Provider_Package.toUpperCase() === 'Office 365 MultiTenant & Supporting Services' && x.Cloud_Service_Provider_Package.toUpperCase() === 'Office 365 MultiTenant & Supporting Services') {*/
                    if (isNotNull(x.Cloud_Service_Provider_Name) && isNotNull(x.Cloud_Service_Provider_Package) && isNotNull(x.Impact_Level) && isNotNull(x.Service_Model)) {
                        if (y.Cloud_Service_Provider_Name.toUpperCase().trim() === x.Cloud_Service_Provider_Name.toUpperCase().trim() &&
                            y.Cloud_Service_Provider_Package.toUpperCase().trim() === x.Cloud_Service_Provider_Package.toUpperCase().trim() &&
                            y.Impact_Level.toUpperCase().trim() === x.Impact_Level.toUpperCase().trim() && _.isEqual(y.Service_Model, x.Service_Model)) {
                            y.Business_Category = x.Business_Category;
                            isFound = true;
                        }
                    /*}*/
                }
            });
            if (!isFound) {
                unmatchers.push(x);
            }
        });
        csps.sort((a, b) => (a.Cloud_Service_Provider_Package > b.Cloud_Service_Provider_Package) ? 1 : -1);
        return csps;
    }

    return (
        <Layout>
            <div className="grid">
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
                                                {state.serviceModelFilters.map((model, idx) => (
                                                    <li>
                                                        <input
                                                            onChange={event => {
                                                                filterProviders('Service Model', event)
                                                            }}
                                                            type="checkbox" checked={model.checked}
                                                            value={model.filter}/> {model.filter}
                                                    </li>
                                                ))}
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
                                                    <li>
                                                        <input
                                                            onChange={event => {
                                                                filterProviders('Impact Level', event)
                                                            }}
                                                            type="checkbox" checked={impact.checked}
                                                            value={impact.filter}/> {impact.filter}
                                                    </li>
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
                                                    <li>
                                                        <input
                                                            onChange={event => {
                                                                filterProviders('Providers', event)
                                                            }}
                                                            type="checkbox" checked={csp.checked}
                                                            value={csp.filter}/> {csp.filter}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="usa-accordion usa-accordion--bordered">
                                        <h2 className="usa-accordion__heading">
                                            <button className="usa-accordion__button"
                                                    aria-expanded="true"
                                                    aria-controls="b-a3">
                                                Business Categories
                                            </button>
                                        </h2>
                                        <div id="b-a3" className="usa-accordion__content usa-prose">

                                            <ul className='noListStyle'>
                                                {state.businessCategoryFilters.map((csp, idx) => (
                                                    <li>
                                                        <input
                                                            onChange={event => {
                                                                filterProviders('Business Category', event)
                                                            }}
                                                            type="checkbox" checked={csp.checked}
                                                            value={csp.filter}/> {csp.filter}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </nav>

                    </div>
                    <div className="desktop:grid-col-8 usa-prose cspTable">
                        {state.providers.length > 0 ? (
                            <table id='providers' className='cspTable'>
                                <tbody className="cspTableList">
                                {renderTableData()}
                                </tbody>
                            </table>
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
                                    <li className="usa-sidenav__item"><Link to='/solutions/iaas'
                                                                            activeClassName="usa-focus">IaaS</Link></li>
                                    <li className="usa-sidenav__item"><Link to='/solutions/paas'
                                                                            activeClassName="usa-focus">PaaS</Link></li>
                                    <li className="usa-sidenav__item"><Link to='/solutions/saas'
                                                                            activeClassName="usa-focus">SaaS</Link></li>
                                    <li className="usa-sidenav__item"><Link
                                        to='/solutions/cloud-professional-services-cps'
                                        activeClassName="usa-focus">CPS</Link></li>
                                    <li className="usa-sidenav__item"><Link to='/solutions/vendors'
                                                                            activeClassName="usa-focus">Vendors</Link>
                                    </li>
                                </div>
                            </ul>
                        </nav>

                    </aside>
                </div>
            </div>
        </Layout>
    );

    /**
     * @description HTML table render for the csps
     */
    function renderTableData() {
        return state.providers.map((provider, index) => {
            const {CSP_URL, Cloud_Service_Provider_Package, Service_Model, Impact_Level} = provider //destructuring
            return (
                <tr>
                    <td><img src={CSP_URL} className="cspIcon"
                             alt="Img Here"/><br/><strong>{Cloud_Service_Provider_Package}</strong></td>
                    <td>{Service_Model}</td>
                    <td>{Impact_Level}</td>
                </tr>
            )
        })
    }

    function transformCategoriesJson(categoriesJsonFile) {
        if (categoriesJsonFile !== '' && categoriesJsonFile !== null && categoriesJsonFile !== undefined) {
            categoriesJsonFile.forEach(x => {
                let businessCategories = [];
                Object.getOwnPropertyNames(x).forEach(
                    function (val, idx, array) {
                        if (val.indexOf('Business Category') > -1) {
                            !isNullOrWhiteSpace(x[val]) ? businessCategories.push(x[val]) : console.log();
                            x.Business_Category = businessCategories;
                        }
                        if (val.indexOf('Service_Model') > -1) {
                            x.Service_Model = [x.Service_Model];
                        }
                    }
                );
            });
        }
        return categoriesJsonFile;
    }

    /**
     * @description filters the csps providers based on the filters selected (event triggered by the checkbox)
     * @summary filters all the filters user have selected based on the checked box boolean value from the event emitted and pushes into all filter array.
     * filter the table master data based on allFilters, if the filter type is service model makes the array indexOf comparision, for other strings, regular comparision using
     * toUpperCase()
     */
    function filterProviders(filterType, event) {
        // let tableMasterData = _.cloneDeep(state.providers);
        let masterData = _.cloneDeep(state.cloudServiceProviders);
        // let filteredData = tableMasterData;
        const models = state.serviceModelFilters;
        const impacts = state.impactLevelFilter;
        const providers = state.cloudServiceProvidersNameFilter;
        const businessCategories = state.businessCategoryFilters;
        models.filter(x => {
            if (x.filter === event.target.value) {
                x.checked = !x.checked;
            }
        });
        impacts.filter(x => {
            if (x.filter === event.target.value) {
                x.checked = !x.checked;
            }
        });
        providers.filter(x => {
            if (x.filter === event.target.value) {
                x.checked = !x.checked;
            }
        });
        businessCategories.filter(x => {
            if (x.filter === event.target.value) {
                x.checked = !x.checked;
            }
        });
        setState({
            ...state,
            serviceModelFilters: models,
            cloudServiceProvidersNameFilter: providers,
            impactLevelFilter: impacts,
            businessCategoryFilters: businessCategories
        });
        let impactFilters = [];
        let modelFilter = [];
        let providerFilter = [];
        let categoryFilters = [];
        models.forEach(x => {
            if (x.checked === true) {
                modelFilter.push(x.filter);
            }
        });
        providers.forEach(x => {
            if (x.checked === true) {
                providerFilter.push(x.filter);
            }
        });
        impacts.forEach(x => {
            if (x.checked === true) {
                impactFilters.push(x.filter);
            }
        });
        impacts.forEach(x => {
            if (x.checked === true) {
                categoryFilters.push(x.filter);
            }
        });

        let data = [];

        if (modelFilter.length > 0) {
            masterData.forEach(function (item) {
                modelFilter.forEach(function (item2) {
                    if (item.Service_Model.indexOf(item2) > -1) {
                        data.push(item);
                    }
                });
            });
        } else {
            data = masterData;
        }

        let filteredData = [];

        if (impactFilters.length > 0) {
            data.forEach(function (item) {
                impactFilters.forEach(function (item2) {
                    if (item.Impact_Level.toUpperCase() === item2.toUpperCase()) {
                        filteredData.push(item);
                    }
                });
            });
        } else {
            filteredData = data;
        }

        let finalData = [];
        if (providerFilter.length > 0) {
            filteredData.forEach(function (item) {
                providerFilter.forEach(function (item2) {
                    if (item.Cloud_Service_Provider_Name.toUpperCase() === item2.toUpperCase()) {
                        finalData.push(item);
                    }
                });
            });
        } else {
            finalData = filteredData;
        }

        let finalFilteredData = [];

        if (categoryFilters.length > 0) {
            finalData.forEach(function (item) {
                categoryFilters.forEach(function (item2) {
                    if (item.Business_Category.indexOf(item2) > -1) {
                        finalFilteredData.push(item);
                    }
                });
            });
        } else {
            finalFilteredData = finalData;
        }

        setState({
            ...state,
            serviceModelFilters: models,
            businessCategoryFilters: businessCategories,
            providers: finalFilteredData
        });
    }
};

export default Vendors;
