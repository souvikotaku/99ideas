import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Welcome to 99IDEAS </h1>
      <p>99IDEAS  is a California based start-up company which specializes in providing consultation for services like Database Services, React & Node Application, Web Application & Development, Payment Gateway, SEO, E-Commerce, Web & Graphic Design, E-learning, Content Writing, Application Testing, Database Disaster & Recovery, Open Stack Services among many others. With such a strong backbone 99IDEAS  aims to provide a sound and technical consultation for all web based needs.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          PORTFOLIO <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
