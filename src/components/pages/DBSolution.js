import React from 'react';
import '../../App.css';
import './DBSolution.css';


function DBSolution() {
  return (
    <div className='dbsolution-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h2>DATABASE SERVICES</h2>
      <p>99IDEAS has a team of highly experienced professional in database technologies. 
          We understand that the database services vary across different organizations,
           therefore knowledge of multiple database tools becomes highly imperative. 
           We have a in-house team of highly experienced professionals who can support 
           different types of organizational needs- from individual owned companies 
           to huge volume of data of large organizations.</p>
     
      <p>
      99Ideas provides highly technical and expert database services using the following technologies:
      </p>
      <div class='dbsolution-links'>
        <div className='dbsolution-link-wrapper'>
          <div class='dbsolution-link-items'>
            <ul className='dbsolution-container-list-items'>
           <li>mySQL </li> 
           <li>IBM DB2</li>
           <li>ORACLE</li>
           <li>mongo DB</li>

            </ul>
          </div>
        </div>
        </div>

          
        <p>
        All of the technologies listed above are highly scalable and widespread 
        in use across any type of industry. At 99Ideas we employ the best practices 
        followed in the industry while keeping in mind the business needs of your company. 
        We will provide the best services suited as per the requirements and
         services available within the company.</p>
        
    <h1>
    DISASTER RECOVERY
    </h1>

    <p>
    99IDEAS also offers disaster recovery (DR) services.
     DR is a primary solution for increasing database availability 
     and zero data loss requirements. We provide DR Recovery both 
     for Microsoft and Linux Environment. IT disaster recovery plans 
     provide step-by-step procedures for maintaining the secondary backup
      of database and recovering in case of fail over condition,
       and help them resume normal operations. The goal of these
        processes is to minimize any negative impacts to organization
         operations. The disaster recovery process identifies critical 
         IT systems and networks; prioritizes their recovery time objective; 
         and delineates the steps needed to restart, reconfigure, and recover them.
    </p>
    <h1>For More Information & Development Please Contact Us.</h1>
    
    </div>
  );
}

export default DBSolution;
