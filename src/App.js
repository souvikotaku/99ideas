import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import Footer from './components/Footer';
import AboutUs from './components/pages/AboutUs';
import DBSolution from './components/pages/DBSolution';
import WebAndGraphicsDesign from './components/pages/WebAndGraphicsDesign';
import WebApplication from './components/pages/WebApplication'; 
import SEO from './components/pages/SEO';
import PaymentGateway from './components/pages/PaymentGateway';
import CRM from './components/pages/CRM';
import ContentWriting from './components/pages/ContentWriting';
import ReactAndNode from './components/pages/ReactAndNode';
import ApplicationTesting from './components/pages/ApplicationTesting';
import ECommerce from './components/pages/ECommerce';
import OpenStack from './components/pages/OpenStack';
import DBServices from './components/pages/DBServices';
import OTP from './components/pages/OTP';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TandC from './components/pages/TandC';
import CoreTeam from './components/pages/CoreTeam';
import WhatWeStand from './components/pages/WhatWeStand';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/ContactUs' component={ContactUs} />
          <Route path='/AboutUs' component={AboutUs} />
          <Route path='/DBSolution' component={DBSolution} />
          <Route path='/WebAndGraphicsDesign' component={WebAndGraphicsDesign} />
          <Route path='/WebApplication' component={WebApplication} />
          <Route path='/SEO' component={SEO} />
          <Route path='/PaymentGateway' component={PaymentGateway} />
          <Route path='/CRM' component={CRM} />
          <Route path='/ContentWriting' component={ContentWriting} />
          <Route path='/ReactAndNode' component={ReactAndNode} />
          <Route path='/ApplicationTesting' component={ApplicationTesting} />
          <Route path='/ECommerce' component={ECommerce} />
          <Route path='/OpenStack' component={OpenStack} />
          <Route path='/DBServices' component={DBServices} />
          <Route path='/OTP' component={OTP} />
          <Route path='/PrivacyPolicy' component={PrivacyPolicy} />
          <Route path='/TandC' component={TandC} />
          <Route path='/CoreTeam' component={CoreTeam} />
          <Route path='/WhatWeStand' component={WhatWeStand} />
        </Switch>
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
