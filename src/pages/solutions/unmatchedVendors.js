import Layout from '../../components/layout';
import React, {useEffect, useState} from 'react';
import * as _ from 'lodash';
import data from '../../../static/documents/DATASET-Business categories';
import {isNotNull, isNullOrWhiteSpace} from "../../utilities";
import * as FileSaver from 'file-saver';

const UnmatchedVendors = () => {
    const endpoint = 'https://raw.githubusercontent.com/18F/fedramp-data/master/data/data.json';
    const cspCategoriesDataset = transformCategoriesJson(data);
    let cspProviders;
    const [state, setState] = useState({
        providers: [],
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
                cspProviders = parsingMultiServiceModelCsps(csps.data.Providers.filter(x => x.Designation === 'Compliant'));
                setState({
                    ...state,
                    providers: cspProviders
                });
            })
            .catch(err => console.log(err));
    }, []);


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
        let unmatchedRecords = [];
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
                unmatchedRecords.push(x);
            }
        });
        /*csps.sort((a, b) => (a.Cloud_Service_Provider_Package > b.Cloud_Service_Provider_Package) ? 1 : -1);*/
        return unmatchedRecords;
    }

    function handleSaveToPC  () {
        const fileData = JSON.stringify(state.providers);
        const blob = new Blob([fileData], {type: "text/plain"});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = 'filename.json';
        link.href = url; link.click();
    }

    return (
        <Layout>
            <div className="grid-container">
                <div className="grid-row">
                    <h1>Unmatched Cloud Service Provider List</h1>
                </div>
                <div className="grid-row">
                    <div className="desktop:grid-col-2 margin-top-4">
                        <p><a>
                            <button className="usa-button" onClick={(event) => {handleSaveToPC()}}>Download</button>
                        </a></p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default UnmatchedVendors;
