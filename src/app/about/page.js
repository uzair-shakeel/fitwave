import Header from "@/app/components/Header";
import React from "react";
import Footer from "../components/Footer";
import TeamSection from "../components/TeamSection";
import Timeline from "../components/Timeline";
import { IoMdArrowRoundForward } from "react-icons/io";

const About = () => {
  return (
    <div className="bg-[#192227]">
      <Header />
      <div className="max-w-[1920px] h-[83vh] overflow-hidden px-[15px] mx-auto">
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
      <div className="max-w-[1920px] mx-auto bg-blue-300 h-[1200px] rounded-[1.389vw] flex flex-col justify-start items-center mb-[-400px] gap-[1.597vw]">
        <h1 className="text-white text-[6.5vw] leading-[115%] tracking-[-0.04em] font-[600] text-center px-[15px] pt-[18.194vw]">
          Join the crew!
        </h1>
        <button className="bg-orangish text-[1.042vw] text-blackish leading-[100%] tracking-[-0.02em] rounded-full py-[10px] px-[0.9vw] font-[600] flex items-center justify-center gap-[0.694vw]">
          <span className="mt-[-3px]">Careers at Runway</span>{" "}
          <IoMdArrowRoundForward size={16} />
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default About;
