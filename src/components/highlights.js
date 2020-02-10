import React from 'react';
import circle from '../../node_modules/uswds/dist/img/circle-124.png';

/*
  Use this section to highlight key elements of your site. Some sites will only have two while others may have six to eight. 
*/

const Highlights = () => (
  <section className="usa-graphic-list usa-section usa-section--dark">
    <div className="grid-container">
      <div className="usa-graphic-list__row grid-row grid-gap">
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src="/images/Help-Desk.png" alt="Help!" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              <Link to="/support">Help!</Link>
            </h3>
            <p>
              <Link to="/support">I need assistance with picking a cloud solution/cloud acquisition.</Link>
            </p>
          </div>
        </div>
          <div className="usa-media-block tablet:grid-col">
            <img className="usa-media-block__img" src="/images/Help-Desk.png" alt="Help!" />
           <div className="usa-media-block__body">
             <h3 className="usa-graphic-list__heading">
               <Link to="/acquisitionguidance/overview">How to Buy</Link>
             </h3>
             <p>
                <Link to="/acquisitionguidance/overview">I know the solution I need but not how to acquire it.</Link>
              </p>
           </div>
          </div>
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src="/images/Help-Desk.png" alt="Help!" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              <Link to="/whycloud/overview">Cloud Overview</Link>
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
