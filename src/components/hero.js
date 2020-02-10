import React from 'react';

/*
  This will be displayed on the homepage. Ideally, you want to highlight key goals of the website
*/

const Hero = () => (
  <section className="usa-hero">
    <div className="grid-container">
      <div className="usa-hero__callout">
        <h2 className="usa-hero__heading">
          <span className="usa-hero__heading--alt">Note:</span>This site is under development.
        </h2>
        <p>
          We are working to bring the Cloud Information Center to a new home.  In the meantime, please visit the production Cloud Information Center at gsa.gov/cic</p>

        <a className="usa-button" href="https://www.gsa.gov/cic">
          CIC Production Site
        </a>
        <p><small><small>
          Image by <a className="usa-link" href="https://pixabay.com/users/JanBaby-3005373/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3625053">Jan Alexander</a> from <a className="usa-link" href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3625053">Pixabay</a>
        </small></small></p>
      </div>
    </div>
  </section>
);

export default Hero;
