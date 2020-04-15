import React from "react";
import Layout from "../components/layout";
import {Link} from "gatsby"

export default class ManufacturerHome extends React.Component {
    state = {
        username: "",
        password: "",
    };

    render() {
        return (
            <Layout>
                <div className="grid-container margin-top-105 margin-bottom-105">
                    <legend className="usa-legend">Manufacturer Information</legend>
                    <div className="grid-row">
                        <div className="grid-col-12">
                            <label className="usa-label" htmlFor="csp_name">Manufacturer Name</label>
                            <input className="usa-input" id="csp_name" name="csp_name" type="text"/>
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
                </div>
            </Layout>
        )
    }
}

