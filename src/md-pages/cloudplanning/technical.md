---
title: Cloud Planning - Technical Implementation
path: /cloudplanning/technical
sidenav: true
---

# Technical Implementation

Before one can transition to the cloud, it's important to know what systems are currently in place. An accurate and complete inventory/assessment of your assets is critical for IT management and successful migration of those assets to the cloud.

Ideally, everyone would have information for every single IT asset their currently responsible for. However, the complex reality of IT makes doing this difficult at best and impossible at worst. Instead of trying to do everything at once, start with a pilot — if moving a single system to the cloud, focus solely on the assets that touch that system.

Inventory and assessment can be split into three discrete stages.

1. **Inventory** - document and organize all existing IT assets. Where, physically, is your technology? How does it interact with other systems? Who's responsible for it? This information can be gathered both from stakeholders and from automated scans. 

Once all assets are documented, the second stage is...

2. **Application Rationalization** - [OMB MAX Login Required](https://community.max.gov/pages/viewpage.action?spaceKey=Egov&title=Application+Rationalization+Materials) What's the business case for your systems? (In other words, are they still serving their original purpose?) Do they need to be moved to cloud, kept on-premises, merged, or shut down? Do they need re-engineering, are they optimal as-is, or is a cloud ready solution available (e.g., commercial product)? Here is a direct link to the Federal CIO Council's [Application Rationalization Handbook](https://www.cio.gov/assets/files/Application-Rationalization-Playbook.pdf).

After this is known, the third and final stage is...

3. **Planning for Migration** - This includes risk assessments and financial considerations. What can be afforded now, and what should be budgeted for the new fiscal year? What's a good system to use as a pilot — accommodate your learning curve!

If you are unable to perform all of this on your own, there are vendors who can help. At the request of OMB, GSA has developed [Statement of Objectives (SOO) templates](/acquisitionguidance/templates) that can used to acquire cloud support services for things like assessment, planning, execution, and decommissioning.

Whether taking this task on yourself or bringing in outside help, all agencies — regardless of their existing network documentation — should map out their enterprise networks when they decide to move to the cloud. Many agencies who thought they knew their networks are surprised when they enter the discovery phase and find unknown endpoints or unexpected traffic patterns.


## Detailed Areas of Concern


<div class="usa-accordion usa-accordion--bordered">
  
  <!-- Use the accurate heading level to maintain the document outline -->
  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="b-a1">
      Maintenance
    </button>
  </h2>
  <div id="b-a1" class="usa-accordion__content usa-prose">
    <p>
    
If you're used to a traditional IT environment, you're probably also used to having to maintain a traditional IT environment. That means installing machines, updating software, monitoring everything, and fixing anything that goes wrong.

Even at the highest levels of customization, what you put on the cloud will require less maintenance than what you have on-premises. That is because your Cloud Service Provider (CSP) will be taking care of at a minimum your infrastructure and, in some cases, everything down to the code. Just like with compliance, the level of maintenance required of you depends on how deeply you've adopted cloud — and if you can customize it, you're probably responsible for it.

Every solution is unique, but as a general guiding principle, here's the type of maintenance you'll be responsible for in every cloud service model:

- **Software as a Service (SaaS)** solutions offer the least amount of customization and thus has the lightest maintenance burden. There should be very little you need to do to maintain SaaS, with the exception of keeping your own web browsers up to date.

- **Platform as a Service (PaaS)** solutions give you full control over your installed applications, and so you will be responsible for maintaining those applications. You will need to maintain code functionality and compatibility with modern web browsers (e.g., clients), ensure the code remains complaint with security requirements (e.g., vulnerabilities, viruses, malware), address and resolve any operational or performance inefficiencies and software bugs, and develop and test any new capabilities and functions prior to release.
 
- **Infrastructure as a Service (IaaS)** solutions offer a great deal of customization and thus require significant maintenance on your part. You'll be responsible for things like Operating System (OS) installation, patching, and upgrading. 
 
Maintenance is a shared responsibility between the Cloud Service Provided (CSP) and the agency, and you should never assume something is (or isn't) your responsibility. Every FedRAMP authorized CSP should have what's called a "customer responsibility matrix" that will spell out who's responsible for what and in which contexts. Ask your vendor to share theirs with you, and keep it on hand in case questions arise down the line. Also ensure you review and understand all Service Level Agreements (SLAs).
 
    
</p>
  </div>
  
  <!-- Use the accurate heading level to maintain the document outline -->
  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="b-a2">
        Migration</button>
  </h2>
  <div id="b-a2" class="usa-accordion__content usa-prose">
    <p>

Cloud migration is not a "one and done" process — an agency isn't on-premises today and on the cloud tomorrow. In fact, some of the most successful agency transitions are designed from the start to be small, agile, and modular. By piloting and iterating over time, teams can develop the routines that work for them, while at the same time minimizing risk and building buy-in for the entire migration process.

Everyone's modernization is different, but there are some best practices that hold true across agencies. Below is an overview of what you should keep in mind as you plan your migration, or bring on third parties to help the process along.

- Start small. Think about your first transition as a pilot — a chance to get the lay of the land, to learn and make mistakes, and to see how long things take. Many cloud solutions will let you test out their services for free; for example, GSA's cloud.gov offers a free sandbox space to anyone with a valid federal e-mail address.
 
- Whether you're handling your agency's transition yourself or bringing in a vendor to support, getting a sense of how to deploy applications in the cloud can be useful for anyone expecting to manage anything more custom than software as a service (SaaS). Even deploying a "Hello, world!" is a step towards that understanding.

- Work backwards. By the time you're migrating actual programs you should already have completed your audit of existing IT resources, as well as rationalizations and risk assessments. Pick something simple and low risk for your first real migration or deployment, not a mission critical service. That way, your inevitable learning curve won't interfere with your agency's mission.

- Refine your processes. Don't just move things to the cloud — pay attention to the way you move them. Keep track of every step along the way, and at the end of each migration, talk with your team about what worked and what didn't. By experimenting with different ways of doing things, and by replicating your successes, you'll be able to make each migration process a little better than the one before it. Think about which manual processes can be further automated.
 
- Celebrate your successes. Not everyone understands cloud, its value, or why it is worth using the technology. Every time you successfully migrate, merge, or shut down a system, it represents a small step towards improving the overall effectiveness of your agency. The potential cost savings from optimization efforts can enable further cloud transitions.  Be sure to share any progress made towards increasing your FITARA score or meeting DCOI targets.
 
- Closeout and multiply your return on your cloud successes with identifying how you can redeploy the agency's IT resources that have become available with moving to the cloud, this includes IT hardware that can provide increased capacity to other systems and your personnel that can now support other on going or new efforts. If you can not re-utilize your IT hardware, ensure the IT hardware is appropriately decommissioned and disposed of per agency's policies.

</p>

  </div>
  
  <!-- Use the accurate heading level to maintain the document outline -->
  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="b-a3">
      Scaling
    </button>
  </h2>
  <div id="b-a3" class="usa-accordion__content usa-prose">
    <p>

<strong>Scaling Your Technology</strong>

Scaling is one of NIST's five essential characteristics of cloud. A true cloud environment will be able to quickly provision anything you ask for (as long as the requirement is in scope of the service procured) — you should never "run out" of resources.  This is different from reaching a cap; a cap is an imposed limit that can be lifted - service caps are not hard limits to what's possible.

Cloud computing empowers agencies to scale as needed. Scaling can reduce latency and increase capacity when demand requires, as in the instance of tax season for the IRS.  Agencies can scale up in advance of the busy season and scale down when the rush is over.

Scaling doesn't have to be a manual process. Properly architected applications can support Elasticity - Elasticity is the ability to grow or shrink infrastructure resources dynamically as needed to adapt to workload changes in an autonomic manner, maximizing the use of resources based on demand. The more resources you use, the more expensive your bill, so you should be able to cap your auto-scaling based on a specific dollar amount. And of course, if you're using a software as a service (SaaS) solution, elasticity shouldn't be something you need to think about at all.

**Scaling Your Program**

There's another type of scaling you may need to think about, too — scaling your cloud migration program. You will need to consider the best way to get your staff skilled up on cloud. Does that involve making your initial cloud team a resource for other teams moving to the cloud? Do you split the existing cloud team and embed those members throughout the organization? Do you bring on additional staff, either on site or as contractors? Eventually, IT transformation stops being a technical question and starts being a personnel question, and you'll need to figure out what works best and most efficiently within the context of your organization.
    
 </p>

  </div>
  
  <!-- Use the accurate heading level to maintain the document outline -->
  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="b-a4">
      Test Environment
    </button>
  </h2>
  <div id="b-a4" class="usa-accordion__content usa-prose">
    <p>Through the 2000s, releases of software were infrequent and painful because there was no way to guarantee everything would work like it was meant to. Thankfully, things have changed — thanks to cloud computing, test environments can be quickly deploy in the cloud and software releases tested and vetted prior to release to the production environment. 

A test environment is exactly what it sounds like: a cloned version of your production environment, a "mirror universe" that exists completely separately. You can deploy anything you think is production-ready into the test environment and see what happens — no matter what happens, your entire production system is completely untouched.

Some of this is possible on-premises or in private clouds, but it's considerably more difficult. With private clouds on premises you will have to effectively run a second private cloud test environment consisting of separate hardware, operating systems, virtual machines, etc.

In the cloud, your test environments can mimic your production environment in every way except their capacity. (There's no point to making them completely identical — you can do all the tests you need in a fraction of the space.) The disposability of cloud makes it possible to stand up environments only when you need them and then destroy them as soon as they are no longer required, freeing up your resources to be used elsewhere the rest of the time. 

It's easy to create and then get rid of a new cloud infrastructure, but it's difficult to make sure the data you use within it is appropriate. For example, if your production environment processes personally identifiable information (PII), you shouldn't replicate that data without tight controls and a well-thought-out plan for who gets to access it. A simpler choice is to create a mock dataset that can be used in your test environment — that way it doesn't matter who accesses it, and you don't need to worry about any sensitive information potentially being exposed.</p>

  </div>
  
  <!-- Use the accurate heading level to maintain the document outline -->
  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="b-a5">
      On-Premises + Cloud
    </button>
  </h2>
  <div id="b-a5" class="usa-accordion__content usa-prose">
    <p>Your agency has probably invested significant resources in on-premises IT. Cloud migration doesn’t have to waste those investments. A well-designed on-premises IT and cloud solution, a hybrid cloud, can actually augment and expand your on-premises IT, acting as a beneficial initial step in your transition.

Hybrid cloud solutions can support agencies' migration to the cloud in the following ways:

- Use your existing on-premises IT for mission critical or high priority workloads, while moving non-critical, low priority, commercial service workloads to the cloud.  

- Take advantage of existing, new, and emerging (e.g., innovations) cloud technologies, capabilities, and services that are provided by Cloud Service Providers (CSPs).

- Leverage the cloud’s capability to scale when there are increases (e.g., spikes) in demand for IT resources.

- Use your existing IT resources, while updating operations in phases, lowering your operational risks and building an agency-specific cloud capability.

- Select your operational environment (i.e., on-premises, cloud) based on the best available technologies for each requirement.

- Reduce your IT operating costs by being able to offload low priority or commercial services (e.g., email, storage) to Cloud Service Providers (CSPs).

- Utilize the flexibility and agility of the cloud, while still securing and owning your data and applications.

- Increase your budget flexibility and efficiency by exchanging some of your spiking on-premises IT capital expenditures (CapEx) for more evenly spaced out cloud operational expenditures (OpEx).</p>

  </div>
  
</div>





