import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='1.Web Application                                                
              2.Database Services
              3.CMS Services
              5.Application Testing
              6.CRM
              7.React and Node Application'
              
              label='Web Solution'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='1.Logo Design
              2.Website Design
              3.Brochure Design
              4.Responsive Design
              5.Graphic Design'
              label='Graphic Solution'
              path='/services'
            />
            <CardItem
              src='images/BrauBeviale-2019-Craft-beer-technology-and-other-solutions.jpg'
              text='1.SEO
              2.E Learning
              3.E-Commerce
              4.Content Writing
              5.Payment Gateway'
              label='Other Solution'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
