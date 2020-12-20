import React from 'react';
import '../../App.css';
import './ContactUs.css';


function ContactUs() {
  return (
    <div className='contactus-container_2'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1 >Contact Us</h1>
<div>
<form >
<label>First Name</label>
<input type = "text"id="fname"name="firstname"placeholder="Your name.."/>
<label>Last Name</label>
<input type="text"id="lname" name="lastname" placeholder="Your last name.."/>


<label>Email</label>
<input type = "email"id="email"name="email"placeholder="Your email"/>


<label>Your message</label>
<textarea id="message"name="message"placeholder="Write something.."></textarea>
<input type="submit"value="Submit" cols="40" rows="10"/>
</form>
</div>



    </div>
  );
}

export default ContactUs;
