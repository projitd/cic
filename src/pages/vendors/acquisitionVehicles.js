import React from "react";
import Layout from "../../components/layout";
import {Link} from "gatsby";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class AcquisitionVehicles extends React.Component {
    state = {
        acquisitionVehicles: [
            {
                acquisitionVehicleTitle: 'AV1',
                awardNumber: '111999444',
                awardDate: new Date(),
                termDate: new Date(),
                serviceCategories: ['option1']
            },
            {
                acquisitionVehicleTitle: 'AV2',
                awardNumber: '222888777',
                awardDate: new Date(),
                termDate: new Date(),
                serviceCategories: ['option1', 'option2']
            },
            {
                acquisitionVehicleTitle: 'AV3',
                awardNumber: '333666555',
                awardDate: new Date(),
                termDate: new Date(),
                serviceCategories: ['option1', 'option2', 'option3']
            }]
    };

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

    deleteAcquisitionVehicle(index) {

    }

    saveAcquisitionVehicle(index) {}

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
                                        <button className="usa-button" onClick={() => this.addAcquisitionVehicle()}>Add</button>
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
                                                                <label className="usa-label"
                                                                       htmlFor="acquisition_vehicle_title">Acquisition
                                                                    Vehicle Title</label>
                                                                <select className="usa-select" id="term_date"
                                                                        name="acquisition_vehicle_title">
                                                                    <option value>- Select -</option>
                                                                    <option value>- Option1 -</option>
                                                                    <option value>- Option2 -</option>
                                                                </select>
                                                                <label className="usa-label" htmlFor="award_number">Award
                                                                    Number</label>
                                                                <input className="usa-input" id="award_number"
                                                                       name="award_number" type="text" value={awardNumber}/>
                                                                <div className="grid-row grid-gap">
                                                                    <div className="grid-col-6">
                                                                        <label className="usa-label"
                                                                               htmlFor="award_date">Award Date</label>
                                                                        <DatePicker className="usa-input"
                                                                                    selected={awardDate}
                                                                        />
                                                                    </div>
                                                                    <div className="grid-col-6">
                                                                        <label className="usa-label"
                                                                               htmlFor="term_date">Term Date</label>
                                                                        <DatePicker className="usa-input"
                                                                                    selected={termDate}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <label className="usa-label" htmlFor="service_categories">Service
                                                                    Categories</label>
                                                                <select className="usa-select" id="term_date"
                                                                        name="service_categories">
                                                                    <option value>- Select -</option>
                                                                    <option value>- Option1 -</option>
                                                                    <option value>- Option2 -</option>
                                                                </select>
                                                                <div>
                                                                    <button className="usa-button" onClick={() => this.deleteAcquisitionVehicle(index)}>Save</button>
                                                                    <button className="usa-button" onClick={() => this.saveAcquisitionVehicle(index)}>Delete</button>
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
