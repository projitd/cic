import React from "react";
import Layout from "../components/layout";
import {Link} from "gatsby"
import SEO from "../components/seo";

const ResetAccount = ({location}) => {
    const {state = {}} = location;
    const {reset} = state;
    return (
        <Layout>
            <h1>Reset Page</h1>
        </Layout>
    );
}

export default ResetAccount;
