import React from "react";
import Layout from "../../components/layout";
import {Link} from "gatsby"

export default class ManufacturerVendors extends React.Component {
    state = {
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
                                        <label className="usa-label" htmlFor="csp_name">Manufacturer Name</label>
                                        <input className="usa-input" id="csp_name" name="csp_name" type="text" disabled/>
                                    </div>
                                </div>
                                <div className="grid-row">
                                    <div className="grid-col-6">
                                        <label className="usa-label" htmlFor="csp_website">Manufacturer Website</label>
                                        <input className="usa-input" id="csp_website" name="csp_website" type="text"/>
                                    </div>
                                    <div className="grid-col-6">
                                        <label className="usa-label" htmlFor="duns_number">DUNS Number</label>
                                        <input className="usa-input" id="duns_number" name="duns_number" type="text"/>
                                    </div>
                                </div>
                                <div className="grid-row">
                                    <div className="grid-col-6">
                                        <label className="usa-label" htmlFor="poc_name">POC Name</label>
                                        <input className="usa-input" id="poc_name" name="poc_name" type="text"/>
                                    </div>
                                    <div className="grid-col-6">
                                        <label className="usa-label" htmlFor="poc_email">POC Email</label>
                                        <input className="usa-input" id="poc_email" name="poc_email" type="text"/>
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
