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
                <h1>Manufacturer</h1>
            </Layout>
        )
    }
}
