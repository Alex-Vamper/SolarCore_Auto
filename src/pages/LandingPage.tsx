import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Steps from "../components/Steps";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const LandingPage=()=>{

  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Steps />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default LandingPage;
