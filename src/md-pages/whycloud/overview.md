---
title: Why Cloud
permalink: /whycloud/overview
path: /whycloud/overview
sidenav: false
---

## Cloud Basics

The first thing to know is that there is no single "cloud." Moving to the cloud isn't as simple as unplugging existing servers and turning them over to a Cloud Service Provider (CSP).  You will need to evaluate your current and future needs, then select the best deployment and services models that meet the requirements to support your organizations mission.   

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/UorIwPZU_eg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>



### What is Cloud?

Definitions vary, but government follows guidance from the National Institute of Standards and Technology (NIST). To be properly considered "cloud," third-party systems must meet these **3 NIST cloud model components**:

<div class="grid-container">
  <div class="grid-row">
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
    <table class="usa-table usa-table--borderless">
  
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">On-demand self-service</th>
      <td>Scale resources like server time or network storage on your own, whenever you want - you don't need to work with an IT department.</td>
    </tr>
    <tr>
      <th scope="row">Broad network access</th>
      <td>Gives you a variety of ways to access your resources outside of your organization's network: mobile phones, tablets, laptops, workstations, etc.</td>
    </tr>
    <tr>
      <th scope="row">Resource pooling</th>
      <td>Multiple users access a shared set of physical and virtual resources based on demand.</td>
    </tr>
    <tr>
      <th scope="row">Rapid elasticity</th>
      <td>Gives you the ability to scale your resources quickly, both outward and inward.</td>
    </tr>
    <tr>
      <th scope="row">Measured Service</th>
      <td>Automatically track your resource usage so that you pay for only what you actually use.</td>
    </tr>
  </tbody>
</table>
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
      <th scope="row">Public clouds</th>
      <td>Allow multiple organizations (from both the public and private sectors) to access the same computing resources. This drives innovation, as well as economies of scale. It's a mistake to assume public clouds aren't secure; many public clouds are FedRAMP-authorized and supported by large security teams, and industry relies on these types of clouds to keep their information safe. Unless the information you need to store is sensitive, a public cloud could easily meet your security requirements. If you do need additional data safeguarding, some cloud providers offer special government-only clouds that are "public" while still meeting higher levels of security and compliance.</td>
    </tr>
    <tr>
      <th scope="row">Private clouds</th>
      <td>Offer the same characteristics as a public cloud, but are only available to a single agency, they rarely offer the same benefits as a public cloud. A large part of what makes clouds more efficient is that computing resources are pooled; when an agency relies on its own private cloud, it sacrifices the efficiency and scale offered from pooled resources. Additionally, private clouds are more likely to be "cloud" in name only - more accurately described as outsourcing of the data center - because they lack self-service, broad network access, resource pooling, rapid elasticity or expansion.</td>
    </tr>
    <tr>
      <th scope="row">Community clouds</th>
      <td>Cloud resources shared by multiple (usually just a few) organizations with similar interests and requirements — for example, defense, intelligence, or medical communities. It's effectively a middle ground between a public and private cloud; some of the innovation and cost savings are still available because some or all of the resources are shared. Community clouds can be hosted on-premises by one agency or off-site via a Cloud Service Provider (CSP).</td>
    </tr>
    <tr>
      <th scope="row">Hybrid clouds</th>
      <td>Multiple types of clouds (i.e., public, private, community) working together by standard or proprietary technology that enables data and application portability, coordinated by a cloud broker that federates data, applications, user identity, security, and other details. Hybrid cloud providers are responsible for managing resources based on agencies requirements. As with a private cloud model, it's important to make sure your "cloud" services actually make the most of cloud's benefits; ask potential vendors about the five National Institute of Standards and Technology (NIST) characteristics listed above.</td>
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
    <p>In addition to selecting the deployment model(s), the appropriate service model(s) also need to be selected. These different cloud service models work together, the underlying infrastructure supporting the platforms, and those platforms in turn support the application software.</p>

| IaaS  | PaaS | SaaS |
| ----| ----| ----|
|**Infrastructure as a Service**|**Platform as a Service**|**Software as a Service**|
|Outsource the physical parts of computing: power, cooling, racks, connectivity, and more. IaaS solutions give you full control over virtual machines, which can be both a positive and a negative: just like on-premises, the configuration is highly customizable, but just like on-premises, staff (or contractors) are required to manage and maintain everything but the hardware. That includes operating systems, databases, and compliance, as well as any applications installed on top of the operating systems.|Outsource both infrastructure and operations. With PaaS, the provider is  responsible for  system administration, operating systems, or networking.   User applications are deployed on top of a set of predetermined configurations. PaaS solutions are less customizable than IaaS solutions, but also require less staff time to maintain and support, especially in terms of security and compliance.|Outsource everything, including the code of the applications used. Users have very little responsibility for the application software — the provider is responsible for keeping it up to date, easy to use, or compliant.  In exchange, the user has minimal control over what the application software does, how it works or when it changes/updates. SaaS solutions, unlike other cloud models, tend to be direct end-user-facing.|

  </div>
  
</div>
</p>

No one cloud deployment or service model is fundamentally better than another — each offers unique functionality.  Some deployment models may be better suited, depending on the agency's requirements.  Indeed the lines between the service models continues to blur with hybrid clouds deployed with combinations of service models becoming commonplace.  

<div class="usa-alert usa-alert--success" >
  <div class="usa-alert__body">
    <h3 class="usa-alert__heading">You've got the basics!</h3>
    <p class="usa-alert__text">Next take a deeper look at secuity or capabilities:</p>
    <a href="/whycloud/security"><button class="usa-button">Cloud Security</button></a>
    <a href="/whycloud/technicalcapabilities"><button class="usa-button">Cloud Capabilities</button></a>
  </div>
</div>