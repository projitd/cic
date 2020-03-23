import React from 'react';
import { Link } from "gatsby"

/*
  Use this section to highlight key elements of your site. Some sites will only have two while others may have six to eight. 
*/

const Highlights = () => (
  <section className="usa-graphic-list usa-section usa-section--dark">
        <center><h3 className="font-heading-xl color:#000 margin-top-0 tablet:margin-bottom-0">Government Cloud Roadmap</h3>
    <div className="grid-container">

   
    <div class="grid-row grid-gap-05">

    <div class="tablet:grid-col">
      <div class="box">
      
    <Link to="/basics/cloud-basics" class="nodecor">
          <div>

  <div class="large">1</div>
 
            <h3 className="usa-graphic-list__heading">BASICS</h3>
            <p>Learn all things Federal Cloud</p>
          </div>
          </Link>

      </div>
      </div>

    <div class="tablet:grid-col">
      <div class="box">

    <Link to="/planning/planning-basics" class="nodecor">
           <div>
           <div class="large">2</div>
             <h3 className="usa-graphic-list__heading">PLANNING</h3>
            <p>The What, Why, and How</p>
          </div>
          </Link>

      </div>
      </div>

    <div class="tablet:grid-col">
      <div class="box">

    <Link to="/findcloud/overview" class="nodecor">
          <div>
          <div class="large">3</div>
            <h3 className="usa-graphic-list__heading">SOLUTIONS</h3>
            <p>Find the Right Providers</p>
          </div>
          </Link>

      </div>
      </div>

      <div class="tablet:grid-col">
      <div class="box">

    <Link to="/acquisitionguidance/overview" class="nodecor">
          <div>
          <div class="large">4</div>
            <h3 className="usa-graphic-list__heading">ACQUISITIONS</h3>
            <p>Acquire a Cloud Solution</p>
          </div>
          </Link>

      </div>
      </div>

      <div class="tablet:grid-col">
      <div class="box">

    <Link to="/support" class="nodecor">
          <div>
          <div class="large">5</div>
            <h3 className="usa-graphic-list__heading">OPERATIONS</h3>
            <p>Maintain with Confidence</p>
          </div>
          </Link>

      </div>
      </div>

     

    </div>
    </div>    
  

    </center>

  </section>





);

export default Highlights;
