import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Reviews from '../Reviews';
// import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Reviews/>
      {/* <Footer /> */}
    </>
  );
}

export default Home;
