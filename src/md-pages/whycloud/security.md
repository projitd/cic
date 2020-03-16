---
title: Why Cloud - Security
path: /whycloud/security
sidenav: true
---

## Cloud Security
When it comes to cloud, security is always a concern, and should be appropriately addressed by any organization (e.g., consumer) evaluating or using a cloud solution.

The following graphic illustrates the differences in security responsibilities between cloud consumers and Cloud Service Providers (CSPs) for each cloud service model (IaaS, PaaS, SaaS) in comparison to an organization owned and managed datacenter. 

![cloud secuirty image](../../cloud-security-monitoring.png)

As indicated in the graphic, consumers and Cloud Service Providers (CSPs) security responsibilities are dependent on the cloud service model procured. Understanding this shared security responsibility model is fundamental to ensuring the appropriate allocation of security compliance responsibilities (i.e., impact level, security controls).

### Security Controls
**NIST SP 800-37** - [Risk Management Framework for Information Systems and Organizations Revision 2](https://csrc.nist.gov/publications/detail/sp/800-37/rev-2/final) - provides the guidelines for applying the Risk Management Framework (RMF) to information systems and organizations. The RMF provides a disciplined, structured, and flexible process for managing security and privacy risk that includes information security categorization, control selection, implementation, and assessment, system and common control authorizations, and continuous monitoring.

**NIST SP 800-53** - [Security and Privacy Controls for Information Systems and Organizations Revision 4](https://csrc.nist.gov/publications/detail/sp/800-53/rev-4/final) defines the security control baselines that represent the starting point in determining the functional or operational requirements for securing low-impact, moderate-impact, and high-impact federal information systems. 

NIST SP 800-53 defines security controls for following security control identifiers and families:

<div class="grid-container">
  <div class="grid-row">
    <div class="tablet:grid-col">

- Access Control (AC)
- Awareness and Training (AT)
- Audit and Accountability (AU)
- Security Assessment and Authorization (CA)
- Configuration Management (CM)
- Contingency Planning (CP) 
- Identification and Authentication (IA)
- Incident Response (IR)
- Maintenance (MA)    
    
</div>
    <div class="tablet:grid-col">
    

- Media Protection (MP)
- Physical and Environmental Protection (PE)
- Planning (PL), Personnel Security (PS)
- Risk Assessment (RA)
- System and Services Acquisition (SA)
- System and Communications Protection (SC)
- System and Information Integrity (SI)
- Program Management (PM).



</div>
    
  </div>
</div>

<div class="usa-alert usa-alert--info">
    <div class="usa-alert__body">
    <h3 class="usa-alert__heading">How do agencies mangage all this?</h3>
        <p class="usa-alert__text">With both consumers and Cloud Service Providers (CSPs) being responsible for individual security controls, there needs to be a mechanism that manages, reviews, and audits the CSPs security controls, allowing consumers to inherit the CSPs security controls to support the consumer’s security review and authorization processes.</p><p> This bring us to our next topic, <strong>FedRAMP</strong></p>
    </div>
</div>

### FedRAMP - (Federal Risk and Authorization Management Program)

The Federal Risk and Authorization Management Program [**(FedRAMP)**](https://www.fedramp.gov) is a federal government-wide program that provides a standardized approach to security assessment, authorization, and continuous monitoring of cloud products and services from Cloud Service Providers (CSPs). 

Under FedRAMP, a cloud product or service undergoes a security assessment to identify the applicable security controls and control baselines. The scope of the security assessment is based on two factors:  

1. **Impact Level** - The identification (i.e., low-impact, moderate-impact, high-impact) is based on the federal government’s requirements for the Confidentially, Integrity, and Availability (CIA) of the information or information systems accessed or processed by the cloud product or service per the [**Federal Information Processing Standards Publication 199 (FIPS PUB 199)**](https://csrc.nist.gov/publications/detail/fips/199/final): Standards for Security Categorization of Federal Information and Information Systems. 

2. **Cloud Service Model** - The identification (i.e., IaaS, PaaS, SaaS) is used to identify the applicable security control identifiers and families for the cloud product or service per [**NIST SP 800-53**](https://csrc.nist.gov/publications/detail/sp/800-53/rev-4/final).

Upon the successful completion of an assessment, a cloud product or service will be issued a FedRAMP authorization at the combination of assessed impact level and cloud service model. FedRAMP post-authorization conducts continuous monitoring, re-authorizations, and audits of authorized cloud products and services to ensure that Cloud Service Providers (CSPs) remain in compliance with authorizations and address emerging and evolving security threats. 

FedRAMP publishes a listing of all authorized cloud products and services to the [**FedRAMP Marketplace**](https://marketplace.fedramp.gov/). 

FedRAMP uses a “do once, use many times” framework that reduces cost, time, and labor required for security assessments by maintaining a FedRAMP repository of authorizations for federal government agencies to review, leverage, and inherit the security controls for issuance of federal government agencies Authorizations to Operate (ATOs).

<div class="usa-alert usa-alert--info">
    <div class="usa-alert__body">
        <h3 class="usa-alert__heading">Is FedRAMP a requirement?</h3>
        <p class="usa-alert__text">The Office of Management and Budget (OMB) <a href="https://www.fedramp.gov/assets/resources/documents/FedRAMP_Policy_Memo.pdf">Memorandum Security Authorization of Information Systems in Cloud Computing Environments</a> dated December 8, 2011 states that Executive department or agencies shall:<ul><li>"use FedRAMP when conducting risk assessments, security authorizations, and granting Authorities to Operate (ATO) for all Executive department or agency use of cloud services" and</li><li>"use the FedRAMP PMO process and the JAB-approved FedRAMP security authorization requirements as a baseline when initiating, reviewing, granting and revoking security authorizations for cloud services”</li></ul></p>
    </div>
</div>

<div class="usa-alert usa-alert--info">
    <div class="usa-alert__body">
        <h3 class="usa-alert__heading">What is an Authorization to Operate (ATO)?</h3>
        <p class="usa-alert__text">It's an official management decision issued by a senior organizational official (e.g., Information System Security Officer (ISS)) that authorizes the operation of an information system (e.g., cloud infrastructure) and explicitly accepts security risks based on the implementation of an agreed-upon set of security controls.</p>
    </div>
</div>

## Department of Defense Cloud Security Information

### DoD Cloud Computing Security Requirements Guide (DoD CC SRG)

The Defense Information Systems Agency (DISA) published the [**Department of Defense Cloud Computing Security Requirements Guide (DoD CC SRG)**](https://rmf.org/wp-content/uploads/2018/05/Cloud_Computing_SRG_v1r3.pdf) that outlines the security model and requirements by which DoD will leverage cloud computing along with the security controls and requirements necessary for using cloud-based solutions. 

The DoD CC SRG is based on the [**Federal Information Security Management Act (FISMA)**](https://www.govinfo.gov/app/details/PLAW-113publ283/) and [**NIST Special Publication 800-37**](https://csrc.nist.gov/publications/detail/sp/800-37/rev-2/final).

The DoD CC SRG applies a FedRAMP+ concept, leveraging the work done as part of the FedRAMP assessment and authorization processes, and adds specific security controls and requirements necessary to meet and assure DoD’s security considerations and requirements. 

DISA publishes a listing of all authorized cloud products and services on the [**DISA Storefront – Cloud Service Support**](https://storefront.disa.mil/kinetic/disa/service-catalog#/forms/cloud-service-support). 

### DoD Impact Levels

The DoD CC SRG defines the standards for categorizing DoD information and information systems and breaks them into 4 Impact Levels (DoD ILs): 
-	**DoD IL 2 - Non-Controlled Unclassified Information** - (cloud products or services that have been issued a FedRAMP authorization at the "Moderate Impact Level" are designated DoD IL 2 via reciprocity per [DISA Memorandum of Reciprocity for FedRAMP Authorized Moderate Baseline Cloud Service Offerings (CSO) at Impact Level 2](https://disa.deps.mil/org/RMED/cas/Authorizations/DoD-Memorandum-of-Reciprocity-for-FedRAMP-Authorized-CSOs-at-IL2.pdf) dated August 15, 2019)
-	**DoD IL 4 - Controlled Unclassified Information (CUI)** 
-	**DoD IL 5 - Controlled Unclassified Information (CUI)**, that requires high protection than DOD IL 4
-	**DoD IL 6 - Classified Information up to SECRET**  

The categorization is based on classification and the potential impact should the Confidentially, Integrity, or Availability (CIA) of the DoD information or information system be compromised.

### DoD Risk Management Framework
Department of Defense Instruction (DoDI) [**8510.01 Risk Management Framework (RMF)**](http://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/851001_2014.pdf) - is the implementing policy for the DoD Risk Management Framework (RMF) establishing associated cybersecurity policy and assigning responsibilities for executing and maintaining the RMF.

DoDI 8510.01 is consistent with: 
- [**NIST SP 800-37**](https://csrc.nist.gov/publications/detail/sp/800-37/rev-2/final)
- [**NIST SP 800-53**](https://csrc.nist.gov/publications/detail/sp/800-53/rev-4/final)
- [**Committee on National Security Systems (CNSSI 1253)**](http://www.cnss.gov/CNSS/issuances/Instructions.cfm): Security Categorization and Control Selection for National Security Systems

DoDI 8510.01 "provides procedural guidance for the reciprocal acceptance of authorization decisions and artifacts within DoD, and between DoD and other federal agencies, for the authorization and connection of information systems (ISs)."


## Federal Government Agency Security Responsibilities
Even with FedRAMP and the DoD issuing cloud product and service authorizations, the [**Federal Information Security Management Act (FISMA)**](https://www.govinfo.gov/app/details/PLAW-113publ283/) identifies that federal government agencies are ultimately accountable for maintaining the security of their Information Technology (IT) systems inclusive of IT systems leveraging or completely deployed using cloud technologies. 

Federal government agencies are also responsible for ensuring that cloud products and services are operated and maintained at all times within the parameters of the agencies issued Authorizations to Operate (ATOs) and to conduct appropriate oversight of security operations and management. 

Federal government agencies should familiarize themselves with and understand their Cloud Service Providers (CSPs) security tools (e.g., Identity Access Management (IAM)) in addition to ensuring that their existing suite of security tools are operational with, and extended as appropriate, to secure their cloud solutions. 





<div class="usa-alert usa-alert--success" >
  <div class="usa-alert__body">
    <h3 class="usa-alert__heading">You've got the basics of cloud security.</h3>
    <p class="usa-alert__text">Next, take a look at what's possible:</p><br />
    <a href="/whycloud/technicalcapabilities"><button class="usa-button">Cloud Capabilities</button></a>
  </div>
</div>