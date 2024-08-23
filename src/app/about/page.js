import Header from "@/app/components/Header";
import React from "react";
import Footer from "../components/Footer";
import TeamSection from "../components/TeamSection";

const About = () => {
  return (
    <div className="bg-[#192227]">
      <Header />
      <div className="text-white max-w-[1920px] mx-auto">About</div>
      <TeamSection />
      <Footer />
    </div>
  );
};

export default About;
