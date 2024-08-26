import React from "react";
import { BiSolidPlaneTakeOff } from "react-icons/bi";

const ReadyforTakeoff = () => {
  return (
    <section className="min-h-screen bg-blackish text-white text-left rounded-[1.389vw] overflow-hidden pt-[26.042vw] pb-[8.333vw] ps-[33.264vw]">
      <div className="flex justify-center items-center w-fit bg-orangish rounded-full mb-[-10px]">
        <span className="w-[74.9px] h-[74.9px] p-[5px] flex items-center justify-center">
          <BiSolidPlaneTakeOff size={45} color="#192227" />
        </span>
      </div>
      <h2 className="lg:text-[10.069vw] md:text-[12.207vw] lg:text-[145px] text-[10.069vw] leading-[90%] tracking-[-0.04em] text-white font-[600] my-[2.083vw] w-[53.125vw]">
        Ready for Takeoff
      </h2>
      <p className="lg:text-[1.736vw] md:text-[2.441vw] text-[1.736vw] tracking-[-0.02em] leading-[125%] font-[400] text-orangish my-[3.083vw] w-[33vw]">
        Runway is ready to help you and your team get off the ground.
      </p>
    </section>
  );
};

export default ReadyforTakeoff;
