import Header from "@/app/components/Header";
import React from "react";
import Footer from "../components/Footer";
import TeamSection from "../components/TeamSection";
import Timeline from "../components/Timeline";

const About = () => {
  return (
    <div className="bg-[#192227]">
      <Header />
      <div className="max-w-[1920px] h-[83vh] rounded-lg overflow-hidden px-[15px] mx-auto">
        <div className="bg-blue-300 h-full rounded-[1.389vw] flex justify-center items-center">
          <h1 className="text-white text-[5.903vw] leading-[100%] tracking-[-0.04em] font-[600] text-center px-[50px]">
            We empower teams to build
            <br />
            great companies by making
            <br />
            business understandable and <br />
            accessible to everyone.
          </h1>
        </div>
      </div>
      <Timeline />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default About;
