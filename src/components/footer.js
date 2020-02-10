import React from 'react';
import logo from '../../node_modules/uswds/dist/img/logo-img.png';

const Footer = () => (
  <footer className="usa-footer site-footer" role="contentinfo">
    <div className="footer-section-bottom bg-base-lighter">
      <div className="grid-container">
        <div className="grid-row padding-3">
          <div className="tablet:grid-col">
            <div className="logo-links">
              <a className="footer-logo media_link" href="https://www.gsa.gov">
                <img src="../images/footer-gsa-logo.png" width="50" alt="GSA logo" />
              </a>
            </div>
          </div>
          <div className="tablet:grid-col"></div>
          <div className="tablet:grid-col">
              <p>Contact the GSA Cloud Team</p>
          </div>
          <div className="tablet:grid-col">
            <ul className="add-list-reset">
              <li>
                <a className="footer-logo media_link" href="https://www.gsa.gov">
                <img src="../images/footer-phone-icon.png" width="50" alt="Phone 202-969-7113" />
                </a>
              </li>
              <li>
                <a className="footer-logo media_link" href="mailto:cloudinfo@gsa.gov?subject=CIC%20Cloud%20Assistance%20Request">
                  <img src="../images/footer-email-icon.png" width="50" alt="email cloudinfo@gsa.gov" />
                </a>
              </li>
          </ul>
          </div>
        </div>
      </div>
      <div className="grid-row padding-3">
        <p class="footerborder">
        <p><center><small><b>Disclaimer</b></small></center></p>
          <center><small><small>
            This site is developed by the General Services Administration (GSA) with input from key Federal IT practitioners and industry representatives. Nothing in this site should be construed as official policy or mandated action unless explicitly labeled as such, nor does the content of this site provide authoritative definitions for IT terms unless explicitly labeled as such. Rather, this site supplements existing Federal IT statutes and policies, and builds upon the key components of the Cloud Smart strategy: security, procurement, and workforce.
            </small></small>
          </center>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
