import React from "react";
import Banner from "./Banner";
import Exceptional from "./Exceptional";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Footer from "../Shared/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <Exceptional />
      <MakeAppointment />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
