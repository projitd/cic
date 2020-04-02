import React from 'react';

const Footer = () => (
  <footer className="usa-footer site-footer" role="contentinfo">
    <div className="footer-section-bottom bg-base-lighter">
      <div className="grid-container">
        <div className="grid-row padding-1">
          <div className="tablet:grid-col">
            <div className="logo-links">
            <a className="footer-logo media_link" href="https://www.gsa.gov">
                <img src="../../images/logo-gsa.png" width="90" alt="GSA logo" />
              </a>
              <a className="footer-logo media_link" href="https://www.omb.gov">
                <img src="../../images/logo-omb.png" alt="OMB logo" />
              </a>
              <a className="footer-logo media_link" href="https://www.coi.gov">
                <img src="../../images/logo-cio-council.png" alt="CIO Council logo" />
              </a>
              <a className="footer-logo media_link" href="https://cloud.cio.gov/">
                <img src="../../images/logo-cloud-smart.PNG" alt="Cloud Smart logo" />
              </a>
            </div>
          </div>
                  <div className="tablet:grid-col" align="right">
           <div class="nomargin"><h3>Contact the GSA Cloud Team</h3></div>
           <ul className="add-list-reset">
              <li>
                <p><a className="footer-logo media_link" href="mailto:cloudinfo@gsa.gov?subject=CIC%20Cloud%20Assistance%20Request"><button class="usa-button usa-button--outline">CloudInfo@GSA.gov</button></a></p>
              </li>
          </ul>
          </div>
      <div className="grid-row">
        <p class="footerborder">
        <center><small><b>Disclaimer</b></small></center>
          <center>
            <small>
            This site is developed by the General Services Administration (GSA) with input from key Federal IT practitioners and industry representatives. Nothing in this site should be construed as official policy or mandated action unless explicitly labeled as such, nor does the content of this site provide authoritative definitions for IT terms unless explicitly labeled as such. Rather, this site supplements existing Federal IT statutes and policies, and builds upon the key components of the Cloud Smart strategy: security, procurement, and workforce.
            </small>
          </center>
        </p>
      </div>
      </div>
      </div>
    </div>
  </footer>
);

export default Footer;
