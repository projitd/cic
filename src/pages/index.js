import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Tagline from '../components/tagline';
import Highlights from '../components/highlights';
import News from '../components/news';

const IndexPage = () => (
  <Layout>
    <SEO title="Cloud Information Center" />
    <Hero />
    <News />
    <Highlights />
    <Tagline />
  </Layout>
);

export default IndexPage;
