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
        What is the Cloud Information Center?
        </h2>
      </div>
      <div className="tablet:grid-col-8 usa-prose">
        <p>
        An informational hub that:
        
        <ul>
        <li>Explains what cloud computing is and the benefits of federal cloud adoption</li>
        <li>Provides a synthesis of cloud computing best practices, guidance and acquisition templates</li>
        <li>Promotes Government-wide communication and collaboration with fellow cloud decision-makers</li>
        <li>Assists Government users in conducting market research on Cloud Service Providers (CSPs)</li>
        <li>Facilitates Industry collaboration and information-sharing about cloud capabilities with the Government</li>
        <li>Supports the cloud adoption journeys of all Government agencies through direct GSA customer support!</li>
        </ul>
        </p>
        
      </div>
    </div>

    <div class="grid-container-TOPMARGIN">
  <div class="grid-row">
    <div class="tablet:grid-col"><p><h3>See our services at a glance!</h3></p>
            <p class="usa-alert__text">Download the GSA Cloud Resource Guide today:
            <ul>
              <li>Free market research publication service performed on the agency’s behalf</li>
              <li>Free scope reviews and templates on the GSA Cloud Information Center (CIC)</li> 
              <li>Best practices and information forums via the GSA CIC</li>
              <li> Direct agency support by email and phone</li>
            </ul>
            
            </p></div>
    <div class="tablet:grid-col"><a href="../../ITC-Cloud-Solutions-Trifold-508C.pdf"><img src="../../GSA-trifold-mockup.png" /></a></div>
  </div>
</div>


 
  </section>
);

export default Tagline;