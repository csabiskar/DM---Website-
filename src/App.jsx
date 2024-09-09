import { useState, useEffect } from 'react';
import Navbar from './pages/navbar';
import HeroSection from './pages/herosection';
import Contactform from './pages/contactsfor';
import About from './pages/about';
import Testimonial from './pages/testimonial';
import BenefitsOfDigitalMarketing from './pages/beniftsofDM';
import ClientLogos from './pages/client';
import Footer from './pages/footer';
import Blog from './pages/blog';
import CombinedComponent from './pages/Dmpage';

function App() {
  return (
    <div className="min-h-screen">
      {/* <Navbar />
      <HeroSection />
      <About />
      <BenefitsOfDigitalMarketing />
      <Blog />
      <Testimonial />
    <Footer dark={hi}/> */}
      <CombinedComponent/>
      {/* <ClientLogos /> */}
    {/* <Contactform /> */}
    </div>
  );
}

export default App;
