import React from "react";
import Layout from "../../components/layout";
import {Link} from "gatsby";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class AcquisitionVehicles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        this.addAcquisitionVehicle = this.addAcquisitionVehicle.bind(this);
        this.deleteAcquisitionVehicle = this.deleteAcquisitionVehicle.bind(this);
        this.saveAcquisitionVehicle = this.saveAcquisitionVehicle.bind(this);
    }

    addAcquisitionVehicle() {
        const obj = {
            acquisitionVehicleTitle: 'AV4',
            awardNumber: '333666555',
            awardDate: new Date(),
            termDate: new Date(),
            serviceCategories: ['option1', 'option2', 'option3']
        };
        let temp = this.state.acquisitionVehicles;
        temp.push(obj);
        this.setState((state) => {
            // Important: read `state` instead of `this.state` when updating.
            return {acquisitionVehicles: temp}
        });
    }
    saveAcquisitionVehicle(event) {
        console.log(event);
        alert('A name was saved:');
        event.preventDefault();
    }
    deleteAcquisitionVehicle(event) {
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
                                        <legend className="usa-legend">Acquisition Vehicles</legend>
                                    </div>
                                    <div className="grid-col-6 text-right">
                                        <button className="usa-button"
                                                onClick={this.addAcquisitionVehicle}>Add
                                        </button>
                                    </div>
                                </div>
                                {this.state.acquisitionVehicles.map((ac, index) => {
                                        const {acquisitionVehicleTitle, awardNumber, awardDate, termDate, serviceCategories} = ac;
                                        return (
                                            <div className="grid-row margin-top-4">
                                                <div className="usa-accordion">
                                                    <h2 className="usa-accordion__heading">
                                                        <button className="usa-accordion__button"
                                                                aria-expanded="true"
                                                                aria-controls={index}>
                                                            {acquisitionVehicleTitle}
                                                        </button>
                                                    </h2>
                                                    <div id={index} className="usa-accordion__content usa-prose">
                                                        <form className="usa-form usa-form--large">
                                                            <fieldset className="usa-fieldset">
                                                                <label className="usa-label labelHeadings"
                                                                       htmlFor="acquisition_vehicle_title">Acquisition
                                                                    Vehicle Title<span className="required">*</span></label>
                                                                <select className="usa-select" id="term_date"
                                                                        name="acquisition_vehicle_title">
                                                                    <option value>- Select -</option>
                                                                    <option value>- Option1 -</option>
                                                                    <option value>- Option2 -</option>
                                                                </select>
                                                                <label className="usa-label labelHeadings" htmlFor="award_number">Award
                                                                    Number<span className="required">*</span></label>
                                                                <input className="usa-input" id="award_number"
                                                                       name="award_number" type="text" value={awardNumber}/>
                                                                <div className="grid-row grid-gap">
                                                                    <div className="grid-col-6">
                                                                        <label className="usa-label labelHeadings"
                                                                               htmlFor="award_date">Award Date<span className="required">*</span></label>
                                                                        <DatePicker className="usa-input"
                                                                                    selected={awardDate}
                                                                        />
                                                                    </div>
                                                                    <div className="grid-col-6">
                                                                        <label className="usa-label labelHeadings"
                                                                               htmlFor="term_date">Term Date<span className="required">*</span></label>
                                                                        <DatePicker className="usa-input"
                                                                                    selected={termDate}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <label className="usa-label labelHeadings" htmlFor="service_categories">Professional Services
                                                                    Categories<span className="required">*</span></label>
                                                                <select className="usa-select" id="term_date"
                                                                        name="service_categories">
                                                                    <option value>- Select -</option>
                                                                    <option value>- Option1 -</option>
                                                                    <option value>- Option2 -</option>
                                                                </select>
                                                                <div>
                                                                    <button className="usa-button" value={awardNumber} onClick={this.saveAcquisitionVehicle}>Save</button>
                                                                    <button className="usa-button usa-button--secondary" value={index} onClick={this.deleteAcquisitionVehicle}>Delete</button>
                                                                </div>
                                                            </fieldset>
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
                                                to='/vendors/vendorHome'
                                                activeClassName="usa-focus">Vendor Info</Link></li>
                                            <li className="usa-sidenav__item"><Link to='/vendors/acquisitionVehicles'
                                                                                    activeClassName="usa-focus">Acquisition
                                                Vehicles</Link>
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
