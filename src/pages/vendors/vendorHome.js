import React from "react";
import Layout from "../../components/layout";
import {Link} from "gatsby"

export default class VendorHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {vendor: {
                vendorName: 'Akamai',
                vendorWebsite: 'https://www.akamai.com/',
                vendorDuns: '15-048-3782',
                vendorPoc: 'Akamai FedRAMP Team',
                vendorPocEmail: 'fedramp_info@akamai.com',
                vendorFacilityClearance: 'Test',
                vendorCage: '15-048-3782',
                acquisitionVehicles: [
                    {
                        acquisitionVehicleTitle: '8(a) STARS II',
                        awardNumber: 'GS-03F-0011L',
                        awardDate: new Date(),
                        termDate: new Date(),
                        serviceCategories: ['Custom computer applications software programming services']
                    },
                    {
                        acquisitionVehicleTitle: 'VETS 2',
                        awardNumber: 'GS-03F-0057W',
                        awardDate: new Date(),
                        termDate: new Date(),
                        serviceCategories: ['Custom computer applications software programming services', 'Custom computer programming services']
                    },
                    {
                        acquisitionVehicleTitle: 'Alliant 2 (A2) & Alliant 2 Small Business (A2SB) GWACs',
                        awardNumber: '47QSMA18D08NR',
                        awardDate: new Date(),
                        termDate: new Date(),
                        serviceCategories: ['Custom computer applications software programming services', 'Custom computer programming services', 'CAD (computer-aided design) systems integration design services']
                    }]
            }};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = event.target.value;
        const name = target.name;

        this.setState({
            vendor: {
                ...this.state.vendor,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.vendor);
        event.preventDefault();
    }
    /**
     * @description HTML table render for the csps
     */
    renderTableData() {
        return this.state.vendor.acquisitionVehicles.map((vehicle, index) => {
            const {acquisitionVehicleTitle, awardNumber, awardDate, termDate, serviceCategories} = vehicle //destructuring
            return (
                <tr key={index}>
                    <td><strong>{acquisitionVehicleTitle}</strong></td>
                    <td>
                        <b>Award Number:</b>{awardNumber},
                        <b>Award Date:</b>{awardDate.toUTCString()},
                        <b>Term Date:</b>{termDate.toUTCString()},
                        <b>Service Categories Number:</b>{serviceCategories}
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
                                        <legend className="usa-legend">Vendor Information</legend>
                                    </div>
                                    {/*<div className="grid-col-6 text-right">
                                        <button className="usa-button">Edit</button>
                                    </div>*/}
                                </div>
                                <form>
                                <div className="grid-row">
                                    <div className="grid-col-12">
                                        <label className="usa-label labelHeadings" htmlFor="vendor_name">Vendor Name<span className="required">*</span></label>
                                        <input className="usa-input" id="vendor_name" name="vendorName" type="text" value={this.state.vendor.vendorName} onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                                <div className="grid-row">
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="vendor_website">Vendor Website<span className="required">*</span></label>
                                        <input className="usa-input" id="vendor_website" name="vendorWebsite" type="text" value={this.state.vendor.vendorWebsite} onChange={this.handleInputChange}/>
                                    </div>
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="vendor_duns_number">DUNS Number<span className="required">*</span></label>
                                        <input className="usa-input" id="vendor_duns_number" name="vendorDuns" type="text" value={this.state.vendor.vendorDuns} onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                                <div className="grid-row">
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="vendor_poc_name">Vendor POC Name<span className="required">*</span></label>
                                        <input className="usa-input" id="vendor_poc_name" name="vendorPoc" type="text" value={this.state.vendor.vendorPoc} onChange={this.handleInputChange}/>
                                    </div>
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="vendor_poc_email">Vendor POC Email<span className="required">*</span></label>
                                        <input className="usa-input" id="vendor_poc_email" name="vendorPocEmail" type="text" value={this.state.vendor.vendorPocEmail} onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                                <div className="grid-row">
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="vendor_facility_clearance">Facility Clearance</label>
                                        <input className="usa-input" id="vendor_facility_clearance" name="vendorFacilityClearance" type="text" value={this.state.vendor.vendorFacilityClearance} onChange={this.handleInputChange}/>
                                    </div>
                                    <div className="grid-col-6">
                                        <label className="usa-label labelHeadings" htmlFor="vendor_cage_code">Vendor CAGE Code</label>
                                        <input className="usa-input" id="vendor_cage_code" name="vendorCage" type="text" value={this.state.vendor.vendorCage} onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                                </form>
                                <div className="grid-row margin-top-4">
                                    <div className="grid-col-6">
                                    </div>
                                    <div className="grid-col-6 text-right">
                                        <button className="usa-button" onClick={this.handleSubmit}>Save</button>
                                    </div>
                                </div>
                                <hr/>
                                <div className="grid-row">
                                    <legend className="usa-legend">Vendor Information</legend>
                                    {this.state.vendor.acquisitionVehicles.length > 0 ? (
                                        <table id='vehicles' className="usa-table">
                                            <thead>
                                            <tr>
                                                <th scope="col">Acquisition Vehicle</th>
                                                <th scope="col">Description</th>
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
