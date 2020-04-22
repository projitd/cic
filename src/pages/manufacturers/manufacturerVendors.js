import React from "react";
import Layout from "../../components/layout";
import {Link} from "gatsby"

export default class ManufacturerVendors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vendors: [
                {
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
                },
                {
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
                },
                {
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
                }
            ]
        };
        this.addVendor = this.addVendor.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.saveVendor = this.saveVendor.bind(this);
        this.deleteVendor = this.deleteVendor.bind(this);
    }

    handleInputChange(event) {
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.vendor);
        event.preventDefault();
    }

    addVendor() {
        const vendor = {
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
        };
        let temp = this.state.vendors;
        temp.push(vendor);
        this.setState((state) => {
            // Important: read `state` instead of `this.state` when updating.
            return {vendors: temp}
        });
    }
    saveVendor(event) {
        console.log(event);
        alert('A name was saved:');
        event.preventDefault();
    }
    deleteVendor(event) {
        console.log(event);
        alert('A name was deleted:');
        event.preventDefault();
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
                                        <legend className="usa-legend">Vendors</legend>
                                    </div>
                                    <div className="grid-col-6 text-right">
                                        <button className="usa-button"
                                                onClick={this.addVendor}>Add
                                        </button>
                                    </div>
                                </div>
                                {this.state.vendors.map((v, index) => {
                                        return (
                                            <div className="grid-row margin-top-4">
                                                <div className="usa-accordion">
                                                    <h2 className="usa-accordion__heading">
                                                        <button className="usa-accordion__button"
                                                                aria-expanded="true"
                                                                aria-controls={index}>
                                                            {v.vendorName}
                                                        </button>
                                                    </h2>
                                                    <div id={index} className="usa-accordion__content usa-prose">
                                                        <form>
                                                            <div className="grid-row">
                                                                <div className="grid-col-12">
                                                                    <label className="usa-label labelHeadings"
                                                                           htmlFor="vendor_name">Vendor Name<span
                                                                        className="required">*</span></label>
                                                                    <input className="usa-input" id="vendor_name"
                                                                           name="vendorName" type="text"
                                                                           value={v.vendorName}
                                                                           onChange={this.handleInputChange}/>
                                                                </div>
                                                            </div>
                                                            <div className="grid-row">
                                                                <div className="grid-col-6">
                                                                    <label className="usa-label labelHeadings"
                                                                           htmlFor="vendor_website">Vendor Website<span
                                                                        className="required">*</span></label>
                                                                    <input className="usa-input" id="vendor_website"
                                                                           name="vendorWebsite" type="text"
                                                                           value={v.vendorWebsite}
                                                                           onChange={this.handleInputChange}/>
                                                                </div>
                                                                <div className="grid-col-6">
                                                                    <label className="usa-label labelHeadings"
                                                                           htmlFor="vendor_duns_number">DUNS Number<span
                                                                        className="required">*</span></label>
                                                                    <input className="usa-input" id="vendor_duns_number"
                                                                           name="vendorDuns" type="text"
                                                                           value={v.vendorDuns}
                                                                           onChange={this.handleInputChange}/>
                                                                </div>
                                                            </div>
                                                            <div className="grid-row">
                                                                <div className="grid-col-6">
                                                                    <label className="usa-label labelHeadings"
                                                                           htmlFor="vendor_poc_name">Vendor POC Name<span
                                                                        className="required">*</span></label>
                                                                    <input className="usa-input" id="vendor_poc_name"
                                                                           name="vendorPoc" type="text" value={v.vendorPoc}
                                                                           onChange={this.handleInputChange}/>
                                                                </div>
                                                                <div className="grid-col-6">
                                                                    <label className="usa-label labelHeadings"
                                                                           htmlFor="vendor_poc_email">Vendor POC Email<span
                                                                        className="required">*</span></label>
                                                                    <input className="usa-input" id="vendor_poc_email"
                                                                           name="vendorPocEmail" type="text"
                                                                           value={v.vendorPocEmail}
                                                                           onChange={this.handleInputChange}/>
                                                                </div>
                                                            </div>
                                                            <div className="grid-row">
                                                                <div className="grid-col-6">
                                                                    <label className="usa-label labelHeadings"
                                                                           htmlFor="vendor_facility_clearance">Facility
                                                                        Clearance</label>
                                                                    <input className="usa-input"
                                                                           id="vendor_facility_clearance"
                                                                           name="vendorFacilityClearance" type="text"
                                                                           value={v.vendorFacilityClearance}
                                                                           onChange={this.handleInputChange}/>
                                                                </div>
                                                                <div className="grid-col-6">
                                                                    <label className="usa-label labelHeadings"
                                                                           htmlFor="vendor_cage_code">Vendor CAGE
                                                                        Code</label>
                                                                    <input className="usa-input" id="vendor_cage_code"
                                                                           name="vendorCage" type="text"
                                                                           value={v.vendorCage}
                                                                           onChange={this.handleInputChange}/>
                                                                </div>
                                                            </div>
                                                            <div className="margin-top-4">
                                                                <button className="usa-button"
                                                                        onClick={this.saveVendor}>Save
                                                                </button>
                                                                <button className="usa-button usa-button--secondary"
                                                                        value={index} onClick={this.deleteVendor}>Delete
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                )}
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
