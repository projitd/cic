import React from "react";
import Layout from "../../components/layout";
import {Link} from "gatsby"

export default class ManufacturerHome extends React.Component {
    state = {
        manufacturer: {
            manufacturerName: 'Amazon Inc.',
            manufacturerWebsite: 'www.amazon.com',
            manufacturerDuns: '12r5689h',
            manufacturerPoc: 'John Doe',
            manufacturerPocEmail: 'john.doe@amazon.com'
        },
        username: "",
        password: "",
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
                                        <label className="usa-label labelHeadings" htmlFor="csp_name">Manufacturer Name: {this.state.manufacturer.manufacturerName}</label>
                                    </div>
                                </div>
                                <div className="grid-row">
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="csp_website">Manufacturer Website<span className="required">*</span></label>
                                        <input className="usa-input" id="csp_website" name="csp_website" type="text" value={this.state.manufacturer.manufacturerWebsite}/>
                                    </div>
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="duns_number">DUNS Number<span className="required">*</span></label>
                                        <input className="usa-input" id="duns_number" name="duns_number" type="text" value={this.state.manufacturer.manufacturerDuns}/>
                                    </div>
                                </div>
                                <div className="grid-row">
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="poc_name">POC Name<span className="required">*</span></label>
                                        <input className="usa-input" id="poc_name" name="poc_name" type="text" value={this.state.manufacturer.manufacturerPoc}/>
                                    </div>
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="poc_email">POC Email<span className="required">*</span></label>
                                        <input className="usa-input" id="poc_email" name="poc_email" type="text" value={this.state.manufacturer.manufacturerPocEmail}/>
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
                                            <li className="usa-sidenav__item"><Link to='/manufacturers/manufacturerOfferings'
                                                                                    activeClassName="usa-focus">Manufacturer Offerings</Link>
                                            </li>
                                            <li className="usa-sidenav__item"><Link to='/manufacturers/manufacturerVendors'
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
