import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner.js";
import Features from '../../components/Features.js';
import About from '../../components/About.js';
import Services from '../../components/Services.js';
import Roadmap from '../../components/Roadmap';
import History from '../../components/History';
import Testimonial from '../../components/Testimonial';
import Footer from '../../components/Footer.js';
import PartnerSection from '../../components/PartnerSection';
import './Home.css';


function Home() {
  return (
      <div className="App" >
        <Navbar />
            <Banner />
            <Features />
            <About />
            <Services />
            <Roadmap />
            <History />
            <Testimonial />
            <PartnerSection />
        <Footer />
      </div>
  );
}

export default Home;