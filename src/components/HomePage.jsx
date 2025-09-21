import React from "react";
import Home from "../components/Home";
import Box from "../components/Box";
import Sign from "../components/Sign";
import Services from "../components/Services";
import AstrologySection from "../components/AstrologySection";
import Testimonials from "../components/Testimonials";
import BlogSection from "../components/BlogSection";
import Membership from "../components/Membership";
import LatestVideo from "./LatestVideo";

const HomePage = () => {
  return (
    <>
      <Home />
      <Box />
      <Sign />
      <Services />
      <AstrologySection />
      <Testimonials />
      <BlogSection />
      {/* <Membership /> */}
      <LatestVideo/>
    </>
  );
};

export default HomePage;
