---
title: Cloud Planning - Technical Planning
path: /cloudplanning/technical
sidenav: true
---

# Technical Capabilities

Thanks to its speed, scale, and capacity, the cloud offers more functionality with more automation than nearly every on-premises solution. This is for a few reasons:
 

* **Cloud is built around services** The more you have on-premises, the more you and your technology need to be jacks-of-all-trades — you need to handle everything yourselves. But in the cloud's service-based model, you have access to individualized services optimized for specific functions instead of having one centralized group of servers and staff. That means Cloud Service Providers (CSPs) are focused on providing discrete elements of the cloud experience, and both hardware and software have been designed for performance.
 

* **Cloud is automated** The computing power inherent to cloud means that everything mentioned above should be available to you on-demand and in a self-service manner — the Cloud Service Providers (CSPs) experts involved in providing the computing power should be behind the scenes, not in between you and the technology. (Remember, on-demand self-service is one of NIST's five essential elements of cloud computing).
 

* **Cloud (usually) oversees your networking** For the most part, networking — the joining up of resources within a cloud environment — will be managed by your Cloud Service Provider (CSP). They have staff dedicated to monitoring and optimizing the cloud resources, and as the keepers of the infrastructure, the CSP balances the "cloud" resources (e.g., compute, storage, network). The CSP manages resources within your defined configurations and in meeting agreed upon Service Level Agreements (SLAs). The CSP frees you have from having to monitor, manage, and optimize the resources.
 

In addition to new functionality, cloud computing offers new concepts and ways of working. Some of them are confusingly similar to terms you may have used in traditional IT environments. Here are some of the major technical terms you're likely to encounter as you explore cloud computing. (Note: if you're only planning to use SaaS solutions, this info may be less relevant because you won't have access to this level of customization.)

 

* **Containers are basically virtual machines,** just one step higher — they're all running the same operating system. They're faster to spin up and down (and faster to destroy after they're done) than virtual machines. This makes them much more efficient while requiring fewer resources at the same time.
 

* **Clusters are, of course, virtual clusters;** they follow the same rules as physical clusters, and they're housed within a portion of a data center that's been assigned to you. In a physical cluster, you're limited to the machines you have on-premises, and if one machine fails, there can be ramifications on the rest of the system. Virtual clusters can be made of physical or virtual machines situated anywhere in the world, they can be spun up and down on demand, and aren't likely to be brought down by the failure of any one individual component.
 

* **Load balancing** provides automatic oversight over every instance of your production environment and makes sure no servers are receiving an undue amount of strain or reaching their capacity. This isn't really possible on-premises; the increased latency and lack of scale wouldn't be worth the investment.
 

* **Servers** in a cloud context typically mean "space rented on a server". Renting space on a server saves that resource for you until you say otherwise; you can scale up and down on demand, but there's always capacity ready for you on a moment's notice.
 

* **Serverless** is a cloud computing service model where functions of code are the unit of deployment.  There are no machines, VMs or containers to manage.  Computing power only exists for you when you need it; there are no "reserved" resources for you; code is dynamically run as needed and then destroyed when done.  Since there are no VMs or even containers to manage, serverless computing has minimal operational overhead, making it the ideal platform for developers dev and test environments.  Serverless tends to be more affordable for infrequently or sporadically used applications as you only pay for code as it runs, but it is slower than traditional cloud services since you don't have reserved resources dedicated to your applications.  For these reasons applications in continuous use or that are time sensitive are better served by more traditional cloud service models.
 

* **Storage** in a traditional data center, whether databases or files, means having a physical computer with an operating system and a configuration to run your files. Storage on the cloud is fundamentally the same, but the resources aren't usually located in the same place physically. The code might be somewhere in a place optimized to run code, the hardware might be somewhere else optimized to run hardware, and the operating system might be in a third place optimized to run operating systems.
 

* **Virtualization** is effectively the same thing as having virtual machines (i.e., multiple instances of the same operating system on a physical computer). Instead of running these virtual machines yourself, however, your CSP will typically provide the virtualization for you. (Note: Software licensing can become sticky in virtualization, because providers may charge you based on how many virtual instances you have instead of how many physical computers you have — since you don't own those computers yourself anymore.)
 

As you complete your cloud inventory and prioritization, make sure you take a deep dive into the capabilities Cloud Service Providers (CSPs) have to offer. There's likely to be functionality you didn't have on-premises that could change your opinion about which services should be port first. For example, records-keeping doesn't seem like a particularly interesting system to port to the cloud — however, some CSPs offer exceptionally low-cost storage in exchange for high latency rates (e.g., Service Level Agreement), which may be an acceptable trade-off for archive files. Think holistically about your needs, and then explore how cloud solutions could help meet them.