---
title: Cloud Basics
path: /basics/cloud-basics
sidenav: true
---

## Cloud Basics

The first thing to know is that there is no single "cloud." Moving to the cloud isn't as simple as unplugging existing servers and turning them over to a Cloud Service Provider (CSP).

Your organization (e.g., consumer) will need to evaluate your current and future technology needs, and then select the cloud solution that best meets your organization requirements to support your organizations mission.

<div class="usa-embed-container" aria-label="16:9">
<iframe src="https://www.youtube.com/embed/UorIwPZU_eg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br>
<div class="usa-alert usa-alert--info">
    <div class="usa-alert__body">
        <h3 class="usa-alert__heading">The Definition of Cloud</h3>
        <p class="usa-alert__text">The Cloud Information Center (CIC) will use the definition of "cloud" as defined by the <a href="https://csrc.nist.gov/publications/detail/sp/800-145/final">National Institute of Standards and Technology (NIST) Special Publication 800-145 The NIST Definition of Cloud Computing</a></p><p>This NIST "cloud" definition is composed of five essential characteristics, four deployment models, and three service models.</p>
    </div>
</div>

<div class="grid-container">
  <div class="grid-row" style="text-align:center">
    <div class="tablet:grid-col"><div style="font-size:62px">5</div>Essential Characteristics</div>
    <div class="tablet:grid-col"><div style="font-size:62px">4</div>Deployment Models</div>
    <div class="tablet:grid-col"><div style="font-size:62px">3</div>Service Models</div>
    
  </div>
</div>
<br>


<p>
<div class="usa-accordion usa-accordion--bordered">
  
  <!-- Use the accurate heading level to maintain the document outline -->
  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="b-a1">
    5 Essential Characteristics 
   </button>
  </h2>
  <div id="b-a1" class="usa-accordion__content usa-prose">
  

- **On-Demand Self-Service** - A consumer can unilaterally provision the cloud infrastructure, such as server time and network storage, as needed automatically without requiring assistance form the Cloud Service Provider (CSP). 

 - **Broad Network Access** - The cloud infrastructure is available over the network and accessed through standard devices (e.g., mobile phones, tablets, laptops, and workstations).

 - **Resource Pooling** - The cloud infrastructure is pooled or shared to serve multiple consumers, with different physical and virtual resources dynamically assigned and reassigned according to consumer demand.
 
 - **Rapid Elasticity** - The cloud infrastructure can be elastically provisioned and released, in some cases automatically, to scale rapidly outward and inward based on demand. To the consumer, the cloud infrastructure  available for provisioning often appear to be unlimited and can be appropriated in any quantity at any time.
 
 - **Measured Service** - The cloud infrastructure usage can be monitored, controlled, and reported, providing transparency for both the provider and the consumer of the utilized service (i.e., pay for only what you use).

</div>
  
  <!-- Use the accurate heading level to maintain the document outline -->
  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="b-a2">
      4 Deployment Models
    </button>
  </h2>
  <div id="b-a2" class="usa-accordion__content usa-prose">
     <table class="usa-table usa-table--borderless">
  
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Public Cloud</th>
      <td>The cloud infrastructure is provisioned for open use by any consumer (e.g., business, academic, government). The cloud infrastructure may be owned, managed, and operated by the consumer, a third party, or a combination of them. The cloud infrastructure exists on the premises of the cloud provider.</td>
    </tr>
    <tr>
      <th scope="row">Private Cloud</th>
      <td>The cloud infrastructure is provisioned for exclusive use by a single consumer. The cloud infrastructure may be owned, managed, and operated by the consumer, a third party, or some combination of them, and it may exist on or off premises.</td>
    </tr>
    <tr>
      <th scope="row">Community Cloud</th>
      <td>The cloud infrastructure is provisioned for exclusive use by a specific
community of consumers from organizations that have shared concerns (e.g., mission, security requirements, policy, and compliance considerations). The cloud infrastructure may be owned, managed, and operated by one or more of the organizations in the community, a third party, or some combination of them, and it may exist on or off premises.
</td>
    </tr>
    <tr>
      <th scope="row">Hybrid Cloud</th>
      <td>The cloud infrastructure is a composition of two or more distinct cloud deployment models (i.e., private, community, public) that remain unique entities, but are bound together by standardized or proprietary technology that enables data and application portability (e.g., cloud bursting for load balancing between clouds).</td>
    </tr>
  </tbody>
</table>
  </div>
  
  <!-- Use the accurate heading level to maintain the document outline -->
  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="b-a3">
        3 Service Models
    </button>
  </h2>
  <div id="b-a3" class="usa-accordion__content usa-prose">

- **Infrastructure as a Service (IaaS)** - The capability provided to the consumer is to provision processing, storage, networks, and other fundamental computing resources where the consumer is able to deploy and run arbitrary software, which can include operating systems and applications. The consumer does not manage or control the underlying cloud infrastructure but has control over operating systems, storage, and deployed applications; and possibly limited control of select networking components (e.g., host firewalls).

- **Platform as a Service (PaaS)** - The capability provided to the consumer is to deploy onto the cloud infrastructure consumer-created or acquired applications created using programming languages, libraries, services, and tools supported by the provider. The consumer does not manage or control the underlying cloud infrastructure including network, servers, operating systems, or storage, but has control over the deployed applications and possibly configuration settings for the application-hosting environment. 

- **Software as a Service (SaaS)** - The capability provided to the consumer is to use the provider’s applications running on a cloud infrastructure. The applications are accessible from various client devices through either a thin client interface, such as a web browser (e.g., web-based email), or a program interface. The consumer does not manage or control the underlying cloud infrastructure including network, servers, operating systems, storage, or even individual application capabilities, with the possible exception of limited user specific application configuration settings.


  </div>
  
</div>
</p>

The following graphic illustrates the differences in Operations and Management (O&M) responsibilities between the cloud consumers and the Cloud Service Providers (CSPs) for each cloud service model (i.e., IaaS, PaaS, SaaS).


![Cloud Service Models diagram](../../cloud-security-monitoring.png)

As indicated in the graphic, consumers and Cloud Service Providers (CSPs) responsibilities are dependent on the cloud service model procured. Understanding this shared responsibility model is fundamental to procuring the appropriate cloud based on your organizations requirements and ensuring appropriate Operations and Maintenance (O&M).

No one cloud deployment model or cloud service model combination is fundamentally better than another combination — each combination offers unique functionality. The selection of a cloud deployment model and a cloud service model combination should be based on the consumer’s requirements. As cloud technologies have advance and consumers have matured their cloud ecosystems hybrid cloud deployment models supporting multiple cloud services models are becoming more commonplace.  

<div class="usa-alert usa-alert--success" >
  <div class="usa-alert__body">
    <h3 class="usa-alert__heading">You've got the basics of what cloud is.</h3>
    <p class="usa-alert__text">Next, take a high-level look at security:</p><br />
    <a href="/basics/cloud-security"><button class="usa-button">Cloud Security</button></a>
  </div>
</div>