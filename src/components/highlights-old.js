import React from 'react';
import { Link } from "gatsby"
import help from '../images/help-icon-2.png';
import buy from '../images/buy-icon-2.png';
import cloud from '../images/cloud-icon-2.png';

/*
  Use this section to highlight key elements of your site. Some sites will only have two while others may have six to eight. 
*/

const Highlights = () => (
  <section className="usa-graphic-list usa-section usa-section--dark">
    <div className="grid-container">
    <div class="grid-row">

    <div class="tablet:grid-col-4">
      <div class="box">
      
    <Link to="/support" class="nodecor"> <img className="usa-media-block__img" src={help} alt="Get Help Button" /> 
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">Get Help</h3>
            <p>I need help from a cloud expert.</p>
          </div>
          </Link>

      </div>
      </div>

    <div class="tablet:grid-col-4">
      <div class="box">

    <Link to="/acquisitions/overview" class="nodecor"><img className="usa-media-block__img" src={buy} alt="How to Buy Button" />
           <div className="usa-media-block__body">
             <h3 className="usa-graphic-list__heading">How to Buy</h3>
            <p>I need help to acquire a cloud solution.</p>
          </div>
          </Link>

      </div>
      </div>

    <div class="tablet:grid-col-4">
      <div class="box">

    <Link to="/basics/cloud-basics" class="nodecor"><img className="usa-media-block__img" src={cloud} alt="Cloud Basics Button" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">Cloud Basics</h3>
            <p>I need help with understanding the cloud.</p>
          </div>
          </Link>

      </div>
      </div>

    </div>
    </div>    

 

  </section>



);

export default Highlights;
