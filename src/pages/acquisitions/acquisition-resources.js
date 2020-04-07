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
    <p class="usa-alert__text">Please visit <a href="https://www.acquisition.gov/coronavirus"> Coronavirus Acquisition-Related Information and Resources and COVID-19 (CORONAVIRUS)</a> for the latest acquisition information and guidance in response to COVID-19.</p>
  </div>
</div>



<div class="usa-alert usa-alert--info" >
  <div class="usa-alert__body">
    <h3 class="usa-alert__heading"></h3>
    <p class="usa-alert__text">Please contact us to have your Acquisition Vehicle, Blanket Purchase Agreement, Assisted Acquisition Services, or Government Cloud Service Providers listed on the Cloud Information Center (CIC).</p>
    <p><a href="mailto:cloudinfo@gsa.gov?subject=CIC%20Cloud%20Assistance%20Request"><button class="usa-button ">CloudInfo@GSA.gov</button></a></p>
  </div>
</div>

<h3><a href="#ACQ_VEHICLES" id="TOP">Acquisition Vehicles</a></h3>
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
  <li><a href="#ACQ_GOV_CSP_GSA_Cloud_Gov">GSA Cloud.gov</a></li>
  <li><a href="#ACQ_GOV_CSP_USDA">USDA Digital Infrastructure Services Center</a></li>
</ul>


<h2 id="ACQ_VEHICLES">Acquisition Vehicles</h2>

{data.allVehicles.nodes.length > 0 && data.allVehicles.nodes.map(item => (

<table border="3" cellspacing="10" cellpadding="10" id={item.HTML_Anchor}>
<tbody>
<tr><th colspan="2"><h2>{item.Acquisition_Vehicle_Title}</h2></th></tr>
<tr><td><b>Website:</b></td><td><a href={item.Acquisition_Vehicle_Website}>{item.Acquisition_Vehicle_Website}</a></td></tr>
<tr><td><b>Type:</b></td><td>{item.Acquisition_Vehicle_Type}</td></tr>
<tr><td><b>Scope:</b></td><td>{item.Acquisition_Vehicle_Scope}</td></tr>
<tr><td><b>Authorized Ordering Activities:</b></td><td><a href={item.Authorized_Ordering_Activities_Title1_Link}>{item.Authorized_Ordering_Activities_Title1}</a><br /><a href={item.Authorized_Ordering_Activities_Title2_Link}>{item.Authorized_Ordering_Activities_Title2}</a></td></tr>
<tr><td><b>Ordering Requirements:</b></td><td>{item.Ordering_Requirements}</td></tr>
<tr><td><b>Ordering Procedures:</b></td><td><a href={item.Ordering_Procedures_Link}>{item.Ordering_Procedures_Title}</a></td></tr>
<tr><td><b>Order Types:</b></td><td>{item.Order_Types}</td></tr>
<tr><td><b>Blanket Purchase Agreements (BPA):</b></td><td>{item.Blanket_Purchase_Agreements}</td></tr>
<tr><td><b>Minimum Order Value:</b></td><td>{item.Minimum_Order_Value}</td></tr>
<tr><td><b>Contract Access Fee (CAF):</b></td><td>{item.Contract_Access_Fee}</td></tr>
<tr><td><b>Contract Holders:</b></td><td><a href={item.Contract_Holders_Link}>{item.Contract_Holders_Title}</a></td></tr>
<tr><td><b>Socioeconomics:</b></td><td>{item.Socioeconomics}</td></tr>
<tr><td><b>Best-In Class (BIC):</b></td><td><a href={item.Best_In_Class_Link}>{item.Best_In_Class_Title}</a></td></tr>
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
<table border="5" cellspacing="20" cellpadding="10">
<tbody>
<tr>
<td>Servicing Agency:</td>
<td colspan="3">
<p><a id="ACQ_GOV_CSP_GSA_Cloud_Gov" name="ACQ_GOV_CSP_GSA_Cloud_Gov"></a>General Services Administration (GSA)</p>
</td>
</tr>
<tr>
<td>Servicing Agency Office:</td>
<td colspan="3">
<p>cloud.gov</p>
</td>
</tr>
<tr>
<td>
<p>Servicing Agency Website:</p>
</td>
<td colspan="3">
<p><a href="https://cloud.gov/">https://cloud.gov/</a></p>
</td>
</tr>
<tr>
<td>Servicing Agency Scope:</td>
<td colspan="3">
<p dir="ltr">cloud.gov is a secure, centralized, and open source Platform as a Service (PaaS) solution built specifically for federal government agencies.&nbsp; cloud.gov offers sandbox, prototyping / development, and production environments that allow federal government agencies to host and update applications, websites, Application Program Interfaces (APIs), and other services.&nbsp;</p>
</td>
</tr>
<tr>
<td rowspan="8">
<p>Servicing Agency Cloud Services:</p>
</td>
<td>&bull; Managed Hosting</td>
<td>No</td>
<td>&bull; Other Services</td>
</tr>
<tr>
<td>&bull; Infrastructure as a Service (IaaS)</td>
<td>No</td>
<td>&nbsp; &nbsp; &nbsp;&bull; Enterprise Container Platform</td>
</tr>
<tr>
<td>&bull; Platform as a Service (PaaS)</td>
<td>Yes</td>
<td>&nbsp; &nbsp; &nbsp;&bull; Virtual Application Hosting</td>
</tr>
<tr>
<td>&bull; Software as a Service (SaaS)</td>
<td>No</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&bull; Security Services</td>
<td>No</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&bull; Professional Services</td>
<td>No</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&bull; Business Services</td>
<td>NO</td>
<td>&nbsp;</td>
</tr>
<tr>
<td colspan="3" rowspan="1">See Service Catalog for Complete Listing of Cloud Services</td>
</tr>
<tr>
<td>
<p>Servicing Agency Service Catalog:</p>
</td>
<td colspan="3">
<p><a href="https://cloud.gov/pricing/">https://cloud.gov/pricing/</a></p>
</td>
</tr>
<tr>
<td rowspan="3">Servicing Agency Cloud Security Levels:</td>
<td colspan="2">
<p>FedRAMP Impact Level:&nbsp;</p>
</td>
<td>Low / Moderate</td>
</tr>
<tr>
<td colspan="2">Department of Defense (DOD) Impact Level:</td>
<td>2</td>
</tr>
<tr>
<td colspan="2">Security Classification:</td>
<td>Controlled Unclassified Information (CUI)</td>
</tr>
<tr>
<td>Authorized Requesting Agencies:</td>
<td colspan="3">
<p>Federal Government Agencies</p>
</td>
</tr>
<tr>
<td>
<p>Authority for Interagency Agreements (IAAs):</p>
</td>
<td colspan="3">
<p>40 USC &sect;&nbsp;321 Acquisition Services Fund</p>
<p>40 USC &sect; 501 Services for Executive Agencies</p>
</td>
</tr>
<tr>
<td>
<p>Servicing Agency Fee:</p>
</td>
<td colspan="3">
<p>Fixed Fee</p>
</td>
</tr>
<tr>
<td>Last Updated:</td>
<td colspan="3">March 03, 2020</td>
</tr>
</tbody>
</table>
<table border="5" cellspacing="20" cellpadding="10">
<tbody>
<tr>
<td>Servicing Agency:</td>
<td colspan="3">
<p><a id="ACQ_GOV_CSP_USDA" name="ACQ_GOV_CSP_USDA"></a>United States Department of Agriculture (USDA)</p>
</td>
</tr>
<tr>
<td>Servicing Agency Office:</td>
<td colspan="3">
<p>Office of the Chief Information Officer - Digital Infrastructure Services Center (OCIO-DISC)</p>
</td>
</tr>
<tr>
<td>
<p>Servicing Agency Website:</p>
</td>
<td colspan="3">
<p><a href="https://www.ocio.usda.gov/about-ocio/digital-infrastructure-services-center-disc">https://www.ocio.usda.gov/about-ocio/digital-infrastructure-services-center-disc</a></p>
</td>
</tr>
<tr>
<td>Servicing Agency Scope:</td>
<td colspan="3">
<p>The OCIO-DISC manages a Government Enterprise Data Center providing Cloud services&nbsp;to requesting agencies.</p>
</td>
</tr>
<tr>
<td rowspan="8">
<p>Servicing Agency Cloud Services:</p>
</td>
<td>&bull; Managed Hosting</td>
<td>Yes</td>
<td>&bull; Other Services</td>
</tr>
<tr>
<td>&bull; Infrastructure as a Service (IaaS)</td>
<td>Yes</td>
<td>&nbsp; &nbsp; &nbsp;&bull; Commercial Cloud Access Point (CAP)</td>
</tr>
<tr>
<td>&bull; Platform as a Service (PaaS)</td>
<td>Yes</td>
<td>&nbsp; &nbsp; &nbsp;&bull; Disaster Recovery</td>
</tr>
<tr>
<td>&bull; Software as a Service (SaaS)</td>
<td>Yes</td>
<td>&nbsp; &nbsp; &nbsp;&bull; Enterprise Container Platform</td>
</tr>
<tr>
<td>&bull; Security Services</td>
<td>Yes</td>
<td>&nbsp; &nbsp; &nbsp;&bull; Mainframe</td>
</tr>
<tr>
<td>&bull; Professional Services</td>
<td>Yes</td>
<td>&nbsp; &nbsp; &nbsp;&bull; Social Networking Solutions</td>
</tr>
<tr>
<td>&bull; Business Services</td>
<td>Yes</td>
<td>&nbsp; &nbsp; &nbsp;&bull; Virtual Application Hosting</td>
</tr>
<tr>
<td colspan="3" rowspan="1">See Service Catalog for Complete Listing of Cloud Services</td>
</tr>
<tr>
<td>
<p>Servicing Agency Service Catalog:</p>
</td>
<td colspan="3">
<p><a href="https://www.ocio.usda.gov/document/nitc-service-catalog">OCIO-DISC Service Catalog</a></p>
</td>
</tr>
<tr>
<td rowspan="3">Servicing Agency Cloud Security Levels:</td>
<td colspan="2">
<p>FedRAMP Impact Level:&nbsp;</p>
</td>
<td>Moderate</td>
</tr>
<tr>
<td colspan="2">Department of Defense (DOD) Impact Level:</td>
<td>4</td>
</tr>
<tr>
<td colspan="2">Security Classification:</td>
<td>Controlled Unclassified Information (CUI)</td>
</tr>
<tr>
<td>Authorized Requesting Agencies:</td>
<td colspan="3">
<p>Federal and State Government Agencies</p>
</td>
</tr>
<tr>
<td>
<p>Authority for Interagency Agreements (IAAs):</p>
</td>
<td colspan="3">
<p>31 USC &sect; 1535 The Economy Act</p>
</td>
</tr>
<tr>
<td>
<p>Servicing Agency Fee:</p>
</td>
<td colspan="3">
<p>Cost Reimbursable</p>
</td>
</tr>
<tr>
<td>Last Updated:</td>
<td colspan="3">February 20, 2020</td>
</tr>
</tbody>
</table>






            </div>
          </div>
        </div>
      </div>
   
   
    
  </Layout>
)

