import React from 'react';
import '../../App.css';
import './AboutUs.css';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className='aboutus-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h2>ABOUT US</h2>
      <p>99IDEAS is a company that will provide you guaranteed solutions for all your web based needs and beyond.
           We are a California based start-up company. With such a strong backbone 99IDEAS aims to 
           provide a sound and technical consultation for all web based needs and other software technological needs.</p>
      <h1>WHAT ARE OUR SERVICES:</h1>
      <p>
      99IDEAS  specializes in providing consultation for various
       web –based and technology services like:
      </p>
      <div class='aboutus-links'>
        <div className='aboutus-link-wrapper'>
          <div class='aboutus-link-items'>
            <ul className='aboutus-container-list-items'>
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

        <h1>WHY CHOOSE 99IDEAS</h1>  
        <p>
        At 99IDEAS,  
        we strive to attain excellence at every step of our project execution.
         Right from the moment you approach us for technical assistance, we start to believe in your business as our own. 
         The level of attention we pay to the tiniest of details is self-explanatory of our dedication. We aim to offer solutions that are customized as per your business needs; 
         to help you set your business way above your competitors. With 99IDEAS  you are a part of the solution approach at each and every step. We only arrive at cutting-edge solutions 
         after detailed discussions of your business problems.</p>
        
    <h1>
    KNOWLEDGE OF LATEST TECHNOLOGIES
    </h1>

    <p>
    The world of web is continuously changing, therefore it is imperative for us to be adapting to the changing technologies. At 99IDEAS,  we seek to be backed by the latest changes in technology. This not only sets us an edge apart from our competitors but also help us believe in our own strength and capabilities. Our goal is to provide you with solutions that are latest so that your business is unique for all your customers as well.

    </p>
    
    </div>
  );
}

export default AboutUs;
