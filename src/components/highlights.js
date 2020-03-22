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
      <div className="usa-graphic-list__row grid-row grid-gap">
        <div className="usa-media-block tablet:grid-col">
        <Link to="/support"> <img className="usa-media-block__img" src={help} alt="Get Help Button" /> </Link>
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
            <Link to="/support">Help</Link>
            </h3>
            <p>
              I need help with cloud.
            </p>
          </div>
        </div>
          <div className="usa-media-block tablet:grid-col">
          <Link to="/acquisitionguidance/overview"><img className="usa-media-block__img" src={buy} alt="How to Buy Button" /></Link>
           <div className="usa-media-block__body">
             <h3 className="usa-graphic-list__heading">
             <Link to="/acquisitionguidance/overview">How to Buy</Link>
             </h3>
             <p>
                I need help to acquire a cloud solution.
              </p>
           </div>
          </div>
        <div className="usa-media-block tablet:grid-col">
        <Link to="/basics/cloud-basics"><img className="usa-media-block__img" src={cloud} alt="Cloud Basics Button" /></Link>
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
            <Link to="/basics/cloud-basics">Cloud Basics</Link>
            </h3>
            <p>
              I need help with understanding the cloud.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Highlights;
