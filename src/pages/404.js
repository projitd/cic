import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Sorry about that, please email to let us know about the issue: cloudinfo@gsa.gov </p>
  </Layout>
);

export default NotFoundPage;
