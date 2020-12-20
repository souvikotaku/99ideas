import React from 'react';
import '../../App.css';
import './OTP.css';


function OTP() {
  return (
    <div className='otp-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h2>One Time Password Authentication</h2>
            
      <p>A one-time password (OTP) is an automatically generated numeric or alphanumeric string of characters that authenticates the user for a single transaction or session. 99ideas is an OTP reseller and uses OTP to validate customer transactions and identity, assuring that 100% OTP will never fail. 
</p>

<p>OTP Verification module verifies Email Address/Mobile Number of users by sending verification code(OTP) during registration. It removes the possibility of a user registering with fake Email Address/Mobile Number. This module checks the existence of the Email Address/Mobile Number and the ability of a user to access that Email Address/Mobile Number.</p>
        <p>
        How does this module work?
        </p>
        <p>On submitting the registration form or login form, an Email/SMS with OTP is sent to the email address/mobile number provided by the user.
Once the OTP is entered, it is verified and the user gets registered or logged in.</p>
<p>User Authentication while making a transaction is the most significant factor for any business. Being an OTP reseller, 99ideas provides one of the most secure authentication method by creating a code and sends OTP via. SMS, Email to the users. Once the user gets the randomly generated code, the user can enter those details A one-time password (OTP) is a password that is valid for only one login session or transaction, on a computer system or other digital device.</p>

<p>Advantages Of OTP</p>
<div class='otp-links'>
        <div className='otp-link-wrapper'>
          <div class='otp-link-items'>
            <ul className='otp-container-list-items'>
           <li>The most important advantage that is addressed by OTPs is that, in contrast to static passwords, they are not vulnerable to replay attacks. This means that a potential intruder who manages to record an OTP that was already used to log into a service or to conduct a transaction will not be able to abuse it since it will no longer be valid.</li>
               <li>A second major advantage is that a user who uses the same (or similar) password for multiple systems, is not made vulnerable on all of them if the password for one of these is gained by an attacker. A number of OTP systems also aim to ensure that a session cannot easily be intercepted or impersonated without knowledge of unpredictable data created during the previous session, thus reducing the attack surface</li>
            <li> OTPs avoid a number of shortcomings that are associated with traditional (static) password-based authentication</li>
                       
            
            </ul>
          </div>
        </div>
        </div>

       


    
    </div>
  );
}

export default OTP;
