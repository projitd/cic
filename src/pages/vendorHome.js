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
                <h1>VendorHome</h1>
            </Layout>
        )
    }
}
