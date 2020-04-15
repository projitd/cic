import React from "react";
import Layout from "../components/layout";
import {Link} from "gatsby"

export default class PmoHome extends React.Component {
    state = {
        username: "",
        password: "",
    };

    render() {
        return (
            <Layout>
                <div className="grid-container">
                    <table className="usa-table">
                        <caption>CSP List</caption>
                        <thead>
                        <tr>
                            <th scope="col">CSP</th>
                            <th scope="col">CSP Details</th>
                            <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">Declaration of Independence</th>
                            <td>Statement adopted by the Continental Congress declaring independence from the British
                                Empire.
                            </td>
                            <td>
                                <button className="usa-button">Edit</button>
                                <button className="usa-button usa-button--secondary">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Bill of Rights</th>
                            <td>The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.</td>
                            <td>
                                <button className="usa-button">Edit</button>
                                <button className="usa-button usa-button--secondary">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Declaration of Sentiments</th>
                            <td>A document written during the Seneca Falls Convention outlining the rights that American
                                women should be entitled to as citizens.
                            </td>
                            <td>
                                <button className="usa-button">Edit</button>
                                <button className="usa-button usa-button--secondary">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Emancipation Proclamation</th>
                            <td>An executive order granting freedom to slaves in designated southern states.</td>
                            <td>
                                <button className="usa-button">Edit</button>
                                <button className="usa-button usa-button--secondary">Delete</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </Layout>
        )
    }
}
