import React from 'react';
import { Link } from "gatsby"
import provides from '../../static/provides.png';
import assists from '../../static/assists.png';
import promotes from '../../static/promotes.png';
/*
  This tagline will appear in your homepage
*/

const Tagline = () => (
  <section className="grid-container usa-section usa-prose">
    <div className="grid-row grid-gap-sm">
      <div className="tablet:grid-col-3">
        <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
        What is the GSA Cloud Information Center?
        </h2>
      </div>
      <div className="tablet:grid-col-3">
        <div id="outside-box">
          <div id="inside-box">
          <img src={provides} alt="Provides heading" width="200px" />
          <div id="inside-content">
          <ul>
          <li>a Managed Collection of Cloud Computing Best Practices, Guidance, and Templates</li><br />
          <li>an explaination of what Cloud Computing is and the Benefits</li>
          </ul>    
          </div>
          </div>    
        </div>
        
      </div>
      <div className="tablet:grid-col-3">
        <div id="outside-box"> 
        <div id="inside-box">
        <img src={assists} alt="Assists heading" width="200px" />
        <div id="inside-content">
          <ul>
           <li>in identifying and conducting Market Research on Cloud Service Providers (CSPs)</li><br />
          <li>your journey through the Cloud Lifecycle with Cloud Experts to Support</li>
          </ul>
        </div></div></div>
        
      </div>
      <div className="tablet:grid-col-3">
      <div id="outside-box"> 
        <div id="inside-box">
        <img src={promotes} alt="Promotes heading" width="200px" />
        <div id="inside-content">
        <ul>
          <li>the Communication and Collaboration between the Government Cloud Community and Industry Experts</li>
          </ul> 
          </div>
          </div></div>        
      </div>
    </div> 



  

  </section>
);

export default Tagline;