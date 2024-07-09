import React from "react";
import Navbar_ham from "./components/navbar/Navbar_ham";
import HeroSection from "./components/hero-section/HeroSection";
import Feature_modified from "./components/feature/Feature_modified"
import Testimonials from "./components/testimonials/Testimonials";
import ContactUs from "./components/contact-us/ContactUs";
import Footer from "./components/footer/Footer_modified";
import WhatsAppIcon from "./components/watsapp/WhatsAppIcon"

function App() {
  return (
    <div className="App">
      <Navbar_ham />
      <div id="home"><HeroSection /></div>
      <div id="Feature_modified"><Feature_modified /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="contact-us"><ContactUs /></div>
      <div id="footer"><Footer /></div>
      <WhatsAppIcon />
    </div>
  );
}

export default App;
