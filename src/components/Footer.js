import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Technological Adventure newsletter to receive our best deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Our Services</h2>
            <Link to='/DBSolution'>Database Solution</Link>
            <Link to='/WebAndGraphicsDesign'>Web & Graphic Design</Link>
            <Link to='/WebApplication'>Web Application</Link>
            <Link to='/SEO'>SEO Solution</Link>
            <Link to='/PaymentGateway'>Payment Gateway Integration</Link>
            <Link to='/CRM'>CRM</Link>
          </div>
          <div class='footer-link-items'>
            <h2>



            </h2>
            <Link to='/ReactAndNode'>React & Node Application</Link>
            <Link to='/ContentWriting'>Content Writing</Link>
            <Link to='/ApplicationTesting'>Application Testing</Link>
            <Link to='/ECommerce'>E-Commerce</Link>
            <Link to='/OpenStack'>Open Stack Services</Link>
            <Link to='/DBServices'>Database Services</Link>
            <Link to='/OTP'>One Time Password</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Legal</h2>
            <Link to='/PrivacyPolicy'>Privacy Policy</Link>
            <Link to='/TandC'>Terms & Condition</Link>
            <Link to='/AboutUs'>About us</Link>
            <Link to='/CoreTeam'>Core Team</Link>
            <Link to='/WhatWeStand'>What we stand</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <h3>
            21064 RED FIR COURT</h3>
           <h3>CUPERTINO - 95014 USA</h3> 
           <h3>Call Us :<br/> </h3> 
           <h3>+1 4086892781</h3>
           <h3>Call Us 24*7 :<br/> +1 4084772643</h3>
            
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              99ideas
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>99ideas © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
