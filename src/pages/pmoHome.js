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
                <h1>this is test</h1>
                <table className="usa-table usa-table--borderless">
                    <caption>Borderless table: A borderless table can be useful when you want the information to feel
                        more a part of the text it accompanies and extends.
                    </caption>
                    <thead>
                    <tr>
                        <th scope="col">Document Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Year</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">Declaration of Independence</th>
                        <td>Statement adopted by the Continental Congress declaring independence from the British
                            Empire.
                        </td>
                        <td>1776</td>
                    </tr>
                    <tr>
                        <th scope="row">Bill of Rights</th>
                        <td>The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.</td>
                        <td>1791</td>
                    </tr>
                    <tr>
                        <th scope="row">Declaration of Sentiments</th>
                        <td>A document written during the Seneca Falls Convention outlining the rights that American
                            women should be entitled to as citizens.
                        </td>
                        <td>1848</td>
                    </tr>
                    <tr>
                        <th scope="row">Emancipation Proclamation</th>
                        <td>An executive order granting freedom to slaves in designated southern states.</td>
                        <td>1863</td>
                    </tr>
                    </tbody>
                </table>
            </Layout>
        )
    }
}
