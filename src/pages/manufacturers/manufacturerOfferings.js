import React from "react";
import Layout from "../../components/layout";
import {Link} from "gatsby"

export default class ManufacturerOfferings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            offerings: [{
                csoName: 'CSRA / ARC-P Cloud',
                nistDeployModel: 'Hybrid Cloud',
                nistServiceModel: [
                    "IaaS, PaaS"
                ],
                authorizationSource: 'FedRamp',
                fedRampImpactLevel: 'High',
                fedRampAuthorizationLevel: '3',
                dodImpactLevel: 'Low',
                dodAuthorizationDate: new Date(),
                csoDescription: 'Autonomic Resources offers the ARC-P Government Community Cloud (GCC), ARC-P Government Private Cloud (GPC), and ARC-P Secure Data Center (SDC) services from within the ARC-P FedRAMP JAB authorized Security Authorization Boundary.',
                csoBusinessCategories: ['Option 1', 'Option 2', 'Option 3']
            }, {
                csoName: 'CGI IaaS Cloud',
                nistDeployModel: 'Government Community Cloud',
                nistServiceModel: [
                    "IaaS"
                ],
                authorizationSource: 'FedRamp',
                fedRampImpactLevel: 'High',
                fedRampAuthorizationLevel: '3',
                dodImpactLevel: 'Low',
                dodAuthorizationDate: new Date(),
                csoDescription: 'CGI delivers centralized, simplified, highly secure and fully managed solutions specifically designed to support Federal agencies, local and state governments, and tribal organizations needs.',
                csoBusinessCategories: ['Option 1', 'Option 2', 'Option 3']
            },
                {
                    csoName: 'Cloud for Public Sector',
                    nistDeployModel: 'Government Community Cloud',
                    nistServiceModel: [
                        "IaaS, PaaS"
                    ],
                    authorizationSource: 'FedRamp',
                    fedRampImpactLevel: 'High',
                    fedRampAuthorizationLevel: '3',
                    dodImpactLevel: 'Low',
                    dodAuthorizationDate: new Date(),
                    csoDescription: 'Perspecta created Cloud for Public Sector for Federal Agency customers looking to lift and shift their existing client server application workloads to the Cloud without significant refactoring. Perspecta Cloud for Public Sector provides Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Replication-based disaster recovery Cloud Service Offering (CSO) services to U.S. Government entities at all levels; Private Sector Contractors doing business with U.S. government entities; and Non-Government Organizations subject to, or implementing, Federal IT Security and Privacy regulation and reporting.',
                    csoBusinessCategories: ['Option 1', 'Option 2', 'Option 3']
                }],
            selectedOffering: {},
            csoNamesList: [],
            selectedCsoName: ''
        };
        this.onOfferingSelect = this.onOfferingSelect.bind(this);
    }
    componentDidMount() {
        const offerings = this.state.offerings;
        const csoNames = offerings.map(x => x.csoName);
        this.setState(state => ({
            ...state,
            csoNamesList: csoNames
        }));
    }

    onOfferingSelect(cso) {
        this.setState(state => ({
            ...state,
            selectedCsoName: cso
        }));
        if (cso === '') {
            const emptyOffering = {
                csoName: '',
                nistDeployModel: '',
                nistServiceModel: [],
                authorizationSource: '',
                fedRampImpactLevel: '',
                fedRampAuthorizationLevel: '',
                dodImpactLevel: '',
                dodAuthorizationDate: null,
                csoDescription: '',
                csoBusinessCategories: []
            }
            this.setState(state => ({
                ...state,
                selectedOffering: emptyOffering
            }));
        } else {
            const offering = this.state.offerings.find(x => x.csoName === cso);
            this.setState(state => ({
                ...state,
                selectedOffering: offering
            }));
        }
    }
    /**
     * @description HTML table render for the csps
     */
    renderTableData() {
        return this.state.offerings.map((cso, index) => {
            return (
                <tr key={index}>
                    <td><strong>{cso.csoName}</strong></td>
                    <td>{cso.csoDescription}</td>
                    <td>
                        <b>Nist Deploy Model:</b>{cso.nistDeployModel},
                        <b>Nist Service Model:</b>{cso.nistServiceModel},
                        <b>Authorization Source:</b>{cso.authorizationSource},
                        <b>FedRamp Impact Level:</b>{cso.fedRampImpactLevel},
                        <b>FedRamp Authorization Level:</b>{cso.fedRampAuthorizationLevel},
                        <b>Business Categories:</b>{cso.csoBusinessCategories},
                        <b>DoD Authorization Date Categories:</b>{cso.dodAuthorizationDate ? cso.dodAuthorizationDate.toUTCString() : ''},
                    </td>
                </tr>
            )
        })
    }


    render() {
        return (
            <Layout>
                <div className="grid">
                    <div className="grid-row">
                        <div className="desktop:grid-col-10 margin-top-4">
                            <div className="grid-container margin-top-105 margin-bottom-105">
                                <div className="grid-row">
                                    <div className="grid-col-6">
                                        <legend className="usa-legend">Manufacturer Offerings</legend>
                                    </div>
                                </div>
                                <div className="grid-row">
                                    <div className="grid-col-12">
                                        <label className="usa-label labelHeadings" htmlFor="options">Please select
                                            an
                                            offering/CSO
                                            Name</label>
                                        <SelectCso entries={this.state.csoNamesList} onCsoChange={this.onOfferingSelect}/>
                                    </div>
                                </div>
                                <div className="grid-row">
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="nist_deploy_model">NIST
                                            Deployment
                                            Model: {this.state.selectedOffering.nistDeployModel}</label>
                                    </div>
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="nist_service_model">NIST
                                            Service
                                            Model: {this.state.selectedOffering.nistServiceModel}</label>
                                    </div>
                                </div>
                                <div className="grid-row">
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="auth_source">Authorization
                                            Source: {this.state.selectedOffering.authorizationSource}</label>
                                    </div>
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="cso_desc">CSO
                                            Description: {this.state.selectedOffering.csoDescription}</label>
                                    </div>
                                </div>
                                <div className="grid-row">
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="fedramp_impact_level">FedRamp
                                            Impact
                                            Level: {this.state.selectedOffering.fedRampImpactLevel}</label>
                                    </div>
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="fedramp_auth_date">FedRamp
                                            Authorization
                                            Date: {this.state.selectedOffering.fedRampAuthorizationLevel}</label>
                                    </div>
                                </div>
                                <div className="grid-row">
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="dod_impact_level">DoD
                                            Impact
                                            Level: {this.state.selectedOffering.dodImpactLevel}</label>
                                    </div>
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="dod_auth_date">DoD
                                            Authorization
                                            Date: {this.state.selectedOffering.dodAuthorizationDate ? this.state.selectedOffering.dodAuthorizationDate.toUTCString() : ''}</label>
                                    </div>
                                </div>
                                <div className="grid-row">
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="dod_impact_level">CSO
                                            Business
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
                                <hr/>
                                <div className="grid-row">
                                    <legend className="usa-legend">List of Offerings</legend>
                                    {this.state.offerings.length > 0 ? (
                                        <table id='offering' className="usa-table">
                                            <thead>
                                            <tr>
                                                <th scope="col">Offering</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Details</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {this.renderTableData()}
                                            </tbody>
                                        </table>
                                    ) : (
                                        <h4 className="title">
                                            No Acquisition Vehicle associated to the current vendor
                                        </h4>
                                    )}
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

class SelectCso extends React.Component {
    constructor(props) {
        super(props);
    }

    handleCsoChange(event) {
        this.props.onCsoChange(event.target.value);
    }

    render() {
        return (
            <select class="usa-select" onChange={this.handleCsoChange.bind(this)}>
                { this.props.entries.map((cso, i)=> <option key={i} value={cso}>{cso}</option>) }
            </select>

        );
    }
}
