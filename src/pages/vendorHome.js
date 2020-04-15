import React from "react";
import Layout from "../components/layout";
import {Link} from "gatsby"

export default class VendorHome extends React.Component {
    state = {
        username: "",
        password: "",
    };

    render() {
        return (
            <Layout>
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
                            <label className="usa-label" htmlFor="vendor_name">Vendor Name</label>
                            <input className="usa-input" id="vendor_name" name="vendor_name" type="text"/>
                        </div>
                    </div>
                    <div className="grid-row">
                        <div className="grid-col-6">
                            <label className="usa-label" htmlFor="vendor_website">Vendor Website</label>
                            <input className="usa-input" id="vendor_website" name="vendor_website" type="text"/>
                        </div>
                        <div className="grid-col-6">
                            <label className="usa-label" htmlFor="vendor_duns_number">DUNS Number</label>
                            <input className="usa-input" id="vendor_duns_number" name="vendor_duns_number" type="text"/>
                        </div>
                    </div>
                    <div className="grid-row">
                        <div className="grid-col-6">
                            <label className="usa-label" htmlFor="vendor_poc_name">Vendor POC Name</label>
                            <input className="usa-input" id="vendor_poc_name" name="vendor_poc_name" type="text"/>
                        </div>
                        <div className="grid-col-6">
                            <label className="usa-label" htmlFor="vendor_poc_email">Vendor POC Email</label>
                            <input className="usa-input" id="vendor_poc_email" name="vendor_poc_email" type="text"/>
                        </div>
                    </div>
                    <div className="grid-row">
                        <div className="grid-col-6">
                            <label className="usa-label" htmlFor="vendor_facility_clearance">Facility Clearance</label>
                            <input className="usa-input" id="vendor_facility_clearance" name="vendor_facility_clearance" type="text"/>
                        </div>
                        <div className="grid-col-6">
                            <label className="usa-label" htmlFor="vendor_cage_code">Vendor CAGE Code</label>
                            <input className="usa-input" id="vendor_cage_code" name="vendor_cage_code" type="text"/>
                        </div>
                    </div>
                    <div className="grid-row">
                        <div className="grid-col-6">
                            <label className="usa-label" htmlFor="vendor_facility_clearance">Facility Clearance</label>
                            <input className="usa-input" id="vendor_facility_clearance" name="vendor_facility_clearance" type="text"/>
                        </div>
                        <div className="grid-col-6">
                            <label className="usa-label" htmlFor="vendor_cage_code">Vendor CAGE Code</label>
                            <input className="usa-input" id="vendor_cage_code" name="vendor_cage_code" type="text"/>
                        </div>
                    </div>
                    <div className="grid-row">
                        <div className="grid-col-6">
                            <label className="usa-label" htmlFor="vendor_acquisition_vehicle_award_number">Vehicle Acquisition Vehicle Award Number</label>
                            <input className="usa-input" id="vendor_acquisition_vehicle_award_number" name="vendor_acquisition_vehicle_award_number" type="text"/>
                        </div>
                        <div className="grid-col-6">
                            <label className="usa-label" htmlFor="vendor_acquisition_vehicle_award_date">Vendor Acquisition Vehicle Award Date</label>
                            <input className="usa-input" id="vendor_acquisition_vehicle_award_date" name="vendor_acquisition_vehicle_award_date" type="text"/>
                        </div>
                    </div>
                    <div className="grid-row">
                        <div className="grid-col-6">
                            <label className="usa-label" htmlFor="vendor_acquisition_vehicle_term_date">Vendor_Acquisition_Vehicle_Term_Date</label>
                            <input className="usa-input" id="vendor_acquisition_vehicle_term_date" name="vendor_acquisition_vehicle_term_date" type="text"/>
                        </div>
                        <div className="grid-col-6">
                            <label className="usa-label" htmlFor="vendor_professional_services_category">Vendor Professional Services Category</label>
                            <input className="usa-input" id="vendor_professional_services_category" name="vendor_professional_services_category" type="text"/>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
