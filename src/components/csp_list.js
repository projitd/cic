// import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
const CspListPage = () => {
  const cspList = "https://api.gsa.gov/acquisition/discovery/v2/agencies/";
  var csp_list = [];
  get(cspList)
    .then(r => {
      if (r.ok) {
        // return r.json();
        csp_list = r.json();
      }
      throw new Error(r.statusText);
    }).catch(err => console.log(err));

  return (
    <Layout>
      <div>
        <ul>
          {csp_list.data.map((cspGroup, idx) => (
            <li key={idx} >
              {cspGroup.id} - {cspGroup.name} - {cspGroup.url}
            </li>
          ))};
        </ul>
      </div>
    </Layout>
  );

};

export default CspListPage;
