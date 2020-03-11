import React from 'react';
import { Link } from "gatsby"
/*
  This tagline will appear in your homepage
*/

const Tagline = () => (
  <section className="grid-container usa-section usa-prose">
    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-4">
        <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
        What is the GSA Cloud Information Center?
        </h2>
      </div>
      <div className="tablet:grid-col-8 usa-prose">
        <p>
        An actively managed informational hub for the federal government that:
        <ul>
        <li>Explains what cloud computing is and the benefits of cloud computing</li>
        <li>Provides a managed collection of cloud computing best practices, guidance, and templates</li>
        <li>Promotes communications and collaborations between the government cloud community</li>
        <li>Assists in identifying and conducting market research on Cloud Service Providers (CSPs)</li>
        <li>Promotes industry communications and collaborations between industry and the government cloud community </li>
        <li>Provides assistance from cloud experts to support the journey through the cloud lifecycle</li>
        </ul>
        </p>
        
      </div>
    </div> 
  </section>
);

export default Tagline;