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
        <Link to="/support"> <img className="usa-media-block__img" src={help} alt="Help!" /> </Link>
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              Help!
            </h3>
            <p>
              <Link to="/support">I need assistance with picking a cloud solution/cloud acquisition.</Link>
            </p>
          </div>
        </div>
          <div className="usa-media-block tablet:grid-col">
          <Link to="/acquisitionguidance/overview"><img className="usa-media-block__img" src={buy} alt="How to Buy Button" /></Link>
           <div className="usa-media-block__body">
             <h3 className="usa-graphic-list__heading">
                How to Buy
             </h3>
             <p>
                <Link to="/acquisitionguidance/overview">I know the solution I need but not how to acquire it.</Link>
              </p>
           </div>
          </div>
        <div className="usa-media-block tablet:grid-col">
        <Link to="/whycloud/overview"><img className="usa-media-block__img" src={cloud} alt="Cloud Overview" /></Link>
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              Cloud Overview
            </h3>
            <p>
              <Link to="/whycloud/overview">I’d like some information about cloud solutions and collaboration with others.</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Highlights;
