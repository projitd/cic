import React from "react";
import Layout from "../../components/layout";
import {Link} from "gatsby"

export default class ManufacturerOfferings extends React.Component {
    state = {
        offering: {
            csoName: 'Amazon Inc',
            nistDeployModel: 'Saas',
            nistServiceModel: 'Test',
            authorizationSource: 'FedRamp',
            fedRampImpactLevel: 'High',
            fedRampAuthorizationLevel: '3',
            dodImpactLevel: 'Low',
            dodAuthorizationDate: 'high',
            csoDescription: 'this is test',
            csoBusinessCategories: ['Option 1', 'Option 2', 'Option 3']
        }
    };

    render() {
        return (
            <Layout>
                <div className="grid">
                    <div className="grid-row">
                        <div className="desktop:grid-col-10 margin-top-4">
                            <div className="grid-container margin-top-105 margin-bottom-105">
                                <div className="grid-row">
                                    <div className="grid-col-6">
                                        <legend className="usa-legend">Manufacturer Corporate Information</legend>
                                    </div>
                                </div>
                                <div className="grid-row">
                                    <div className="grid-col-12">
                                        <label className="usa-label labelHeadings" htmlFor="options">Please select an offering/CSO
                                            Name</label>
                                        <select className="usa-select" name="options" id="options">
                                            <option value>- Select -</option>
                                            <option value="value1">Option A</option>
                                            <option value="value2">Option B</option>
                                            <option value="value3">Option C</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="grid-row">
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="nist_deploy_model">NIST Deployment
                                            Model: {this.state.offering.nistDeployModel}</label>
                                    </div>
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="nist_service_model">NIST Service
                                            Model: {this.state.offering.nistServiceModel}</label>
                                    </div>
                                </div>
                                <div className="grid-row">
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="auth_source">Authorization Source: {this.state.offering.authorizationSource}</label>
                                    </div>
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="cso_desc">CSO Description: {this.state.offering.csoDescription}</label>
                                    </div>
                                </div>
                                <div className="grid-row">
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="fedramp_impact_level">FedRamp Impact
                                            Level: {this.state.offering.fedRampImpactLevel}</label>
                                    </div>
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="fedramp_auth_date">FedRamp Authorization
                                            Date: {this.state.offering.fedRampAuthorizationLevel}</label>
                                    </div>
                                </div>
                                <div className="grid-row">
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="dod_impact_level">DoD Impact Level: {this.state.offering.dodImpactLevel}</label>
                                    </div>
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="dod_auth_date">DoD Authorization
                                            Date: {this.state.offering.dodAuthorizationDate}</label>
                                    </div>
                                </div>
                                <div className="grid-row">
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="dod_impact_level">CSO Business
                                            Categories<span className="required">*</span></label>
                                        <select className="usa-select" name="options" id="options">
                                            <option value>- Select -</option>
                                            <option value="value1">Option A</option>
                                            <option value="value2">Option B</option>
                                            <option value="value3">Option C</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="grid-row margin-top-4">
                                    <div className="grid-col-6">
                                    </div>
                                    <div className="grid-col-6 text-right">
                                        <button className="usa-button">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="desktop:grid-col-2 margin-top-4">
                            <aside className="desktop:grid-col-2 margin-top-4">
                                <nav>
                                    <ul className="usa-sidenav">
                                        <div><h3>Vendor Information</h3>
                                            <li className="usa-sidenav__item"><Link
                                                to='/manufacturers/manufacturerHome'
                                                activeClassName="usa-focus">Manufacturer Info</Link></li>
                                            <li className="usa-sidenav__item"><Link
                                                to='/manufacturers/manufacturerOfferings'
                                                activeClassName="usa-focus">Manufacturer Offerings</Link>
                                            </li>
                                            <li className="usa-sidenav__item"><Link
                                                to='/manufacturers/manufacturerVendors'
                                                activeClassName="usa-focus">Vendors</Link>
                                            </li>
                                        </div>
                                    </ul>
                                </nav>

                            </aside>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
