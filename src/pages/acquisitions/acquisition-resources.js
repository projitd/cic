import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Sidenav from '../../components/sidenav';



export default () => (
  <StaticQuery
    query={graphql`
    {
      allVehicles: allDatasetCicAcquisitionResourcesAcquisitionVehiclesCsv {
        nodes {
          Acquisition_Vehicle_Scope
          Acquisition_Vehicle_Title
          Acquisition_Vehicle_Type
          Acquisition_Vehicle_Website
          Authorized_Ordering_Activities_Title1
          Authorized_Ordering_Activities_Title1_Link
          Authorized_Ordering_Activities_Title2
          Authorized_Ordering_Activities_Title2_Link
          Best_In_Class_Link
          Best_In_Class_Title
          Blanket_Purchase_Agreements
          Contract_Access_Fee
          Contract_Holders_Link
          Contract_Holders_Title
          HTML_Anchor
          Last_Reviewed
          Minimum_Order_Value
          Order_Types
          Ordering_Procedures_Link
          Ordering_Procedures_Title
          Ordering_Requirements
          Socioeconomics
        }
      }
      allCSP: allDatasetCicAcquisitionResourcesGovernmentCloudServiceProvidersCsv {
        nodes {
          Authority_for_Interagency_Agreements__IAAs_
          Authorized_Requesting_Agencies_
          Business_Services
          Department_of_Defense__DOD__Impact_Level
          FedRAMP_Impact_Level
          HTML_Anchor
          Infrastructure_as_a_Service__IaaS_
          Last_Reviewed
          Managed_Hosting
          Other_Services
          Platform_as_a_Service__PaaS_
          Professional_Services
          Security_Classification
          Security_Services
          Servicing_Agency_Authorization_to_Operate__ATO_
          Servicing_Agency_Fee
          Servicing_Agency_and_Office
          Servicing_Agency_Scope
          Servicing_Agency_Service_Catalog
          Servicing_Agency_Service_Catalog_URL
          Servicing_Agency_Website_URL
          Software_as_a_Service__SaaS_
        }
      }
    }
  `}
    render={data => <AcqVehiclesPage data={data} />}
  />
)

const AcqVehiclesPage = ({ data }) => (

  <Layout>
    <SEO title="Acquisition Resources / Vehicles" />
    <div className="usa-layout-docs usa-section">
        <div className="grid-container">
          <div className="grid-row grid-gap">
          <Sidenav />
            <div className="usa-layout-docs__main desktop:grid-col-10 usa-prose">

<h2>Acquisition Resources</h2>  
<p>The following table provides links to information on individual Acquisition Vehicles, Blanket Purchase Agreements (BPAs), Assisted Acquisition Services (AAS), and Government Cloud Service Providers.</p>

<div class="usa-alert usa-alert--error" >
  <div class="usa-alert__body">
    <h3 class="usa-alert__heading">Coronavirus (COVID-19) Acquisition Specific Information</h3>
    <p class="usa-alert__text">Please visit <a href="https://www.acquisition.gov/coronavirus"> Coronavirus Acquisition-Related Information and Resources</a> and <a href="https://www.gsa.gov/governmentwide-initiatives/emergency-response/covid19-coronavirus">COVID-19 (CORONAVIRUS)</a> for the latest acquisition information and guidance in response to COVID-19.</p>
  </div>
</div>



<div class="usa-alert usa-alert--info" >
  <div class="usa-alert__body">
    <h3 class="usa-alert__heading"></h3>
    <p class="usa-alert__text">Please contact us to have your Acquisition Vehicle, Blanket Purchase Agreement, Assisted Acquisition Services, or Government Cloud Service Providers listed on the Cloud Information Center (CIC).</p>
    <p><a href="mailto:cloudinfo@gsa.gov?subject=CIC%20Cloud%20Assistance%20Request"><button class="usa-button ">CloudInfo@GSA.gov</button></a></p>
  </div>
</div>

<h3><a href="#ACQ_VEHICLES" >Acquisition Vehicles</a></h3>
<ul>
{data.allVehicles.nodes.length > 0 && data.allVehicles.nodes.map(item => (
              <li><a href={"#" + item.HTML_Anchor}>{item.Acquisition_Vehicle_Title}</a></li>
              ))}
</ul>

<h3><a href="#ACQ_BPA" >Blanket Purchase Agreements</a></h3>
<ul>
  <li>
<a href="#ACQ_BPA_GSA_SIISS">GSA Salesforce Implementation, Integration, and Support Services (SIISS)</a>
</li>
</ul>


<h3><a href="#ACQ_AAS" >Assisted Acquisition Services</a></h3>
<ul>
<li>No Assisted Acquisition Services Yet</li>
</ul>

<h3><a href="#ACQ_GOV_CSP" >Government Cloud Service Providers</a></h3>
<ul>
{data.allCSP.nodes.length > 0 && data.allCSP.nodes.map(item => (
              <li><a href={"#" + item.HTML_Anchor}>{item.Servicing_Agency_and_Office}</a></li>
              ))}
</ul>



<h2 id="ACQ_VEHICLES">Acquisition Vehicles</h2>

{data.allVehicles.nodes.length > 0 && data.allVehicles.nodes.map(item => (

<table border="3" cellspacing="10" cellpadding="10" id={item.HTML_Anchor}>
<tbody>
<tr><th colspan="2"><h2>{item.Acquisition_Vehicle_Title}</h2></th></tr>
<tr><td><b>Website:</b></td><td><a href={item.Acquisition_Vehicle_Website}>{item.Acquisition_Vehicle_Website}</a></td></tr>
<tr><td><b>Type:</b></td><td>{item.Acquisition_Vehicle_Type}</td></tr>
<tr><td><b>Scope:</b></td><td>{item.Acquisition_Vehicle_Scope}</td></tr>
<tr><td><b>Authorized Ordering Activities:</b></td><td>
{(item.Authorized_Ordering_Activities_Title1_Link == "" ? (<div>{item.Authorized_Ordering_Activities_Title1}<br /><a href={item.Authorized_Ordering_Activities_Title2_Link}>{item.Authorized_Ordering_Activities_Title2}</a></div>) : (<div><a href={item.Authorized_Ordering_Activities_Title1_Link}>{item.Authorized_Ordering_Activities_Title1}</a><br /><br /><a href={item.Authorized_Ordering_Activities_Title2_Link}>{item.Authorized_Ordering_Activities_Title2}</a></div>) )}
</td></tr>
<tr><td><b>Ordering Requirements:</b></td><td>{item.Ordering_Requirements}</td></tr>
<tr><td><b>Ordering Procedures:</b></td><td><a href={item.Ordering_Procedures_Link}>{item.Ordering_Procedures_Title}</a></td></tr>
<tr><td><b>Order Types:</b></td><td>{item.Order_Types}</td></tr>
<tr><td><b>Blanket Purchase Agreements (BPA):</b></td><td>{item.Blanket_Purchase_Agreements}</td></tr>
<tr><td><b>Minimum Order Value:</b></td><td>{item.Minimum_Order_Value}</td></tr>
<tr><td><b>Contract Access Fee (CAF):</b></td><td>{item.Contract_Access_Fee}</td></tr>
<tr><td><b>Contract Holders:</b></td><td><a href={item.Contract_Holders_Link}>{item.Contract_Holders_Title}</a></td></tr>
<tr><td><b>Socioeconomics:</b></td><td>{item.Socioeconomics}</td></tr>
<tr><td><b>Best-In Class (BIC):</b></td><td>{(item.Best_In_Class_Title == "Yes" ? (<div><a href={item.Best_In_Class_Link}>{item.Best_In_Class_Title}</a></div>) : (<div>{item.Best_In_Class_Title}</div>) )}</td></tr>
<tr><td><b>Last Reviewed:</b></td><td>{item.Last_Reviewed}</td></tr>
</tbody>
</table>
 
  ))}

<h2 id="ACQ_BPA">Blanket Purchase Agreements</h2>
<table border="5" cellspacing="20" cellpadding="10">
<tbody>
<tr>
<td>BPA&nbsp;Title:</td>
<td>
<p><a id="ACQ_BPA_GSA_SIISS" name="ACQ_BPA_GSA_SIISS"></a>GSA Salesforce Implementation, Integration, and Support Services (SIISS)</p>
</td>
</tr>
<tr>
<td>BPA&nbsp;Website:</td>
<td>
<p><a href="https://www.gsa.gov/technology/technology-products-services/it-software/salesforce-governmentwide-blanket-purchase-agreement-bpa">https://www.gsa.gov/technology/technology-products-services/it-software/salesforce-governmentwide-blanket-purchase-agreement-bpa</a></p>
</td>
</tr>
<tr>
<td>Acquisition Vehicle:</td>
<td>
<p>GSA IT Schedule 70,</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; Special Item Number (SIN) 132-50 Training Courses and</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; Special Item Number (SIN) 132-51 Information Technology (IT) Professional Services</p>
</td>
</tr>
<tr>
<td>BPA Type:</td>
<td>
<p>Multiple Award</p>
</td>
</tr>
<tr>
<td>BPA Award Date:</td>
<td>
<p>December 21, 2015</p>
</td>
</tr>
<tr>
<td>BPA Term:</td>
<td>
<p>5 Years (December 20, 2020)</p>
</td>
</tr>
<tr>
<td>BPA Scope:</td>
<td>
<p>GSA SIISS provides enterprise level Salesforce platform and application (e.g., Software as a Service (SaaS)) implementation, integration, and support services within Government cloud ecosystems. Available services are categorized by functional areas and include:</p>
<p>&bull; Functional Area 1: UX Design, Business Analysis, Development, Integration</p>
<p>&bull; Functional Area 2: Data Management and Security</p>
<p>&bull; Functional Area 3: Program Management Support and Center of Excellence Governance</p>
<p>&bull; Functional Area 4: Release Management and Post-Implementation Maintenance Support</p>
<p>&bull; Functional Area 5: Support / Help Desk</p>
<p>&bull; Functional Area 6: Training</p>
<p>&bull; Functional Area 7: Agile Coaching and Agile Portfolio</p>
</td>
</tr>
<tr>
<td>Authorized Ordering Activities:</td>
<td>
<p>Federal Government Agencies</p>
</td>
</tr>
<tr>
<td>Ordering Requirements:</td>
<td>
<p>Federal Acquisition Regulations (FAR) 8.405 Ordering Procedures for Federal Supply Schedules</p>
<p><a href="https://www.gsa.gov/cdnstatic/SIISSOrderingGuide.pdf">SIISS Ordering Guide</a></p>
</td>
</tr>
<tr>
<td>Type of Orders:</td>
<td>
<p>Fixed Price (FAR 16.2), Time and Materials (FAR 16.601), Labor Hour (FAR 16.602), and Hybrid</p>
</td>
</tr>
<tr>
<td>Estimated Value:</td>
<td>
<p>$503 Million</p>
</td>
</tr>
<tr>
<td>
<p>BPA Fee:</p>
</td>
<td>
<p>GSA IT Schedule 70 Industrial Funding Fee (IFF) of 0.75%</p>
</td>
</tr>
<tr>
<td>BPA Holders:</td>
<td>
<p><a href="https://www.gsaelibrary.gsa.gov/ElibMain/sinDetails.do?executeQuery=YES&amp;scheduleNumber=BPA&amp;flag=&amp;filter=&amp;specialItemNumber=SIISS">SIISS BPA Holders</a></p>
</td>
</tr>
<tr>
<td>Socioeconomic:</td>
<td>
<p>Other than Small Business</p>
</td>
</tr>
<tr>
<td>Best-In Class (BIC):</td>
<td>No</td>
</tr>
<tr>
<td>Last Updated:</td>
<td>January 29, 2020</td>
</tr>
</tbody>
</table>
<h2 id="ACQ_AAS">Assisted Acquisition Services</h2>




<h2 id="ACQ_GOV_CSP">Government Cloud Service Providers</h2>

{data.allCSP.nodes.length > 0 && data.allCSP.nodes.map(item => (

<table border="3" cellspacing="10" cellpadding="10" id={item.HTML_Anchor}>
<tbody>
<tr><td><b>Servicing Agency and Office:</b></td><td><h2>{item.Servicing_Agency_and_Office}</h2></td></tr>
<tr><td><b>Servicing Agency Website:</b></td><td><a href={item.Servicing_Agency_Website_URL}>{item.Servicing_Agency_Website_URL}</a></td></tr>
<tr><td><b>Servicing Agency Scope:</b></td><td>{item.Servicing_Agency_Scope}</td></tr>
<tr><td><b>Servicing Agency Cloud Services:</b></td><td>
Managed Hosting: <b>{item.Managed_Hosting}</b><br />
Infrastructure as a Service (IaaS): <b>{item.Infrastructure_as_a_Service__IaaS_}</b><br />
Platform as a Service (PaaS): <b>{item.Platform_as_a_Service__PaaS_}</b><br />
Software as a Service (SaaS): <b>{item.Software_as_a_Service__SaaS_}</b><br />
Security Services: <b>{item.Security_Services}</b><br />
Professional Services: <b>{item.Professional_Services}</b><br />
Business Services: <b>{item.Business_Services}</b><br />

  <p><b>Other Services:</b> {item.Other_Services}</p>
  <p>See Service Catalog for Complete Listing of Cloud Services: <a href={item.Servicing_Agency_Service_Catalog_URL}>{item.Servicing_Agency_Service_Catalog}</a></p>
  </td></tr>
  <tr><td><b>Servicing Agency Authorization to Operate (ATO):</b></td><td>{item.Servicing_Agency_Authorization_to_Operate__ATO_}</td></tr>
  <tr><td><b>Servicing Agency Cloud Services:</b></td><td>
  FedRAMP Impact Level: <b>{item.FedRAMP_Impact_Level}</b><br />
Department of Defense (DOD) Impact Level: <b>{item.Department_of_Defense__DOD__Impact_Level}</b><br />
Security Classification: <b>{item.Security_Classification}</b><br />
</td></tr>
  <tr><td><b>Authorized Requesting Agencies:</b></td><td>{item.Authorized_Requesting_Agencies_}</td></tr>
  <tr><td><b>Authority for Interagency Agreements (IAAs):</b></td><td>{item.Authority_for_Interagency_Agreements__IAAs_}</td></tr>
  <tr><td><b>Servicing Agency Fee:</b></td><td>{item.Servicing_Agency_Fee}</td></tr>
  <tr><td><b>Last Reviewed:</b></td><td>{item.Last_Reviewed}</td></tr>
</tbody>
</table>
 
  ))}








            </div>
          </div>
        </div>
      </div>
   
   
    
  </Layout>
)

