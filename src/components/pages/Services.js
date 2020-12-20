import React from 'react';
import '../../App.css';
import './Services.css';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className='services-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h2>Our Services</h2>
      <p>Technology is changing every day. With newer needs, new technologies are emerging in the market and in this changing scenario, without adaptation one will perish. At 99Ideas we follow the principle of continuous adaptation so that we are able to provide services required for any type of business needs. Our services span a wide range and make use of multiple technologies, which are again selected as per the industry standards and needs.</p>
      <h1>99IDEAS LLC specializes in providing consultation for various web-based and technology services like:</h1>
      <div class='services-links'>
        <div className='services-link-wrapper'>
          <div class='services-link-items'>
            <ul className='services-container-list-items'>
           <li><Link to='/'>Database Solution</Link> </li> 
           <li><Link to='/'>Web & Graphic Design</Link></li>
           <li><Link to='/'>Web Application</Link></li>
           <li><Link to='/'>SEO Solution</Link></li>
           <li> <Link to='/'>Payment Gateway</Link></li>
           <li><Link to='/'>Integration</Link></li>
           <li> <Link to='/'>CRM</Link></li>
           <li> <Link to='/'>React & Node Application</Link></li>
           <li><Link to='/'>Content Writing</Link></li>
           <li><Link to='/'>Application Testing</Link></li>
           <li> <Link to='/'>E-Commerce</Link></li>
           <li> <Link to='/'>Open Stack Services</Link></li>
           <li> <Link to='/'>Database Services</Link></li>
           <li> <Link to='/'>One Time Password</Link></li>

            </ul>
          </div>
        </div>
        </div>

        <h1>OUR TECHNOLOGIES:</h1>  
        <p>
        We support web development and design using REACT, NODE, PHP, HTML, CMS and JavaScript. Our database management services are developed using the most widely used database tools like mySQL, IBM DB2, ORACLE and mongoDB. Our team of graphic designers creates designs for logos, banners, responsive templates and icons. These images are carefully created keeping in mind the organizational needs and design considerations. Our web development team has strong experience in using Drupal Services and can handle Drupal plug-ins, applications, modules and templates.
        </p>
        <h1>For More Information & Development Please Contact Us.</h1>
    
    
    </div>
  );
}

export default Services;
