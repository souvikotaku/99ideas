import React from 'react';
import '../../App.css';
import './OpenStack.css';


function OpenStack() {
  return (
    <div className='openstack-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h2>Open Stack Services</h2>
<p>Open Stack is free and open-source software platform for cloud computing, mostly deployed as an infrastructure as a service. The software platform consists of interrelated components that control diverse, multi-vendor hardware pools of processing, storage, and networking resources throughput a data center. Users either manage it through a web based dashboard, through command line tools or through a RESTful API.</p>
        <p>

        As our OpenStack services we provide the following services:
        </p>
        <h1>Private cloud using open stack:</h1>
        <p>OpenStack is flexible and can be designed in many ways so it is very important to architect your cloud correctly. The private cloud offers most of the advantages of the public cloud : Self-service and scalability, multi tenancy, the ability to provision machines and computing resources on-demand,compliance and improved security.</p>
       <h1>Virtualization of a server using OpenStack:</h1>
       
        <p>Major Enterprises are combining their existing legacy data center virtualization technologies with the OpenStack cloud to speed new applications. We employ VMware Integrated OpenStack. VMware Integrated OpenStack offers VMware users an alternative that combines the benefits of OpenStack with those of VMware in a single stack.</p>
        
       


    
    </div>
  );
}

export default OpenStack;
