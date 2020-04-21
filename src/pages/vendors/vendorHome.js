import React from "react";
import Layout from "../../components/layout";
import {Link} from "gatsby"

export default class VendorHome extends React.Component {
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
                                        <legend className="usa-legend">Vendor Information</legend>
                                    </div>
                                    <div className="grid-col-6 text-right">
                                        <button className="usa-button">Edit</button>
                                    </div>
                                </div>
                                <div className="grid-row">
                                    <div className="grid-col-12">
                                        <label className="usa-label labelHeadings" htmlFor="vendor_name">Vendor Name<span className="required">*</span></label>
                                        <input className="usa-input" id="vendor_name" name="vendor_name" type="text"/>
                                    </div>
                                </div>
                                <div className="grid-row">
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="vendor_website">Vendor Website<span className="required">*</span></label>
                                        <input className="usa-input" id="vendor_website" name="vendor_website" type="text"/>
                                    </div>
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="vendor_duns_number">DUNS Number<span className="required">*</span></label>
                                        <input className="usa-input" id="vendor_duns_number" name="vendor_duns_number" type="text"/>
                                    </div>
                                </div>
                                <div className="grid-row">
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="vendor_poc_name">Vendor POC Name<span className="required">*</span></label>
                                        <input className="usa-input" id="vendor_poc_name" name="vendor_poc_name" type="text"/>
                                    </div>
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="vendor_poc_email">Vendor POC Email<span className="required">*</span></label>
                                        <input className="usa-input" id="vendor_poc_email" name="vendor_poc_email" type="text"/>
                                    </div>
                                </div>
                                <div className="grid-row">
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="vendor_facility_clearance">Facility Clearance</label>
                                        <input className="usa-input" id="vendor_facility_clearance" name="vendor_facility_clearance" type="text"/>
                                    </div>
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="vendor_cage_code">Vendor CAGE Code</label>
                                        <input className="usa-input" id="vendor_cage_code" name="vendor_cage_code" type="text"/>
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
                                                to='/vendors/vendorHome'
                                                activeClassName="usa-focus">Vendor Info</Link></li>
                                            <li className="usa-sidenav__item"><Link to='/vendors/acquisitionVehicles'
                                                                                    activeClassName="usa-focus">Acquisition Vehicles</Link>
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
