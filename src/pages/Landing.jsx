import React from "react";
import Header from "../components/common/Header";
import Hero from "../components/landing/Hero";
import Vision from "../components/landing/Vision";
import ChooseUs from "../components/landing/ChooseUs";
import Summary from "../components/landing/Summary";
import Footer from "../components/common/Footer";
import ServicesSection from "../components/landing/ServicesSection";
import OurTeamSection from "../components/landing/OurTeamSection ";
import AboutUsSection from "../components/landing/AboutUsSection";
import FAQSection from "../components/landing/FAQSection ";
import ContactSection from "../components/landing/ContactSection";
import EllipzaLanding from "../components/landing/EllipzaLanding ";
import KeyBenefits from "../components/landing/KeyBenefits";

const Landing = () => {
  return (
    <>
      <div
        className="bg-gradient-to-br from-[#e0f7ff] via-[#e7e6ff] to-[#f1e6ff]
 min-h-screen"
      >
        <Header />
      
        <Hero/>
       
      </div>
      <Vision/>
      <ChooseUs/>
      <Summary/>
      <ServicesSection/>
      <OurTeamSection/>
      <KeyBenefits/>
      <AboutUsSection/>
      <ContactSection />
      <FAQSection/>
      <Footer/>
    </>
  );
};

export default Landing;
