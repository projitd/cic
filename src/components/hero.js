import React from 'react';

/*
  This will be displayed on the homepage. Ideally, you want to highlight key goals of the website
*/

const Hero = () => (
  <section className="usa-hero">
    <div className="grid-container">
      <div className="usa-hero__callout">
        <h2 className="usa-hero__heading">
          <span className="usa-hero__heading--alt">Helping Government get on the Cloud</span>
        </h2>
        <p>
        Whether you’re piloting a program or migrating an agency, we're here to help.</p>
      </div>
    </div>
  </section>
);

export default Hero;
