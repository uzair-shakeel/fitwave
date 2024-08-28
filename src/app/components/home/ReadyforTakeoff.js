"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ReadyforTakeoff = () => {
  const pathRef1 = useRef(null);
  const pathRef2 = useRef(null);

  useEffect(() => {
    const pathLength1 = pathRef1.current.getTotalLength();
    const pathLength2 = pathRef2.current.getTotalLength();

    // Initialize pathRef1 with strokeDasharray and strokeDashoffset
    gsap.set(pathRef1.current, {
      strokeDasharray: pathLength1,
      strokeDashoffset: pathLength1, // Start with the path hidden
      stroke: "#FFC655",
    });

    // Initialize pathRef2 with strokeDasharray and strokeDashoffset
    gsap.set(pathRef2.current, {
      strokeDasharray: pathLength2,
      strokeDashoffset: pathLength2, // Start with the path hidden
      stroke: "#DD8411",
    });

    // Animate pathRef1 from end to start
    gsap.to(pathRef1.current, {
      strokeDashoffset: 0, // Animate to fully visible
      duration: 1,
      ease: "none",
      scrollTrigger: {
        trigger: pathRef1.current,
        start: "top 99%",
        end: "top 10%",
        scrub: true,
      },
    });

    // Animate pathRef2 from top to bottom
    gsap.to(pathRef2.current, {
      strokeDashoffset: 0, // Animate to fully visible
      duration: 0.5,
      ease: "none",
      scrollTrigger: {
        trigger: pathRef2.current,
        start: "top 99%",
        end: "bottom 10%",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="bg-blue-300">
      <div className="relative min-h-screen bg-blackish text-white text-center rounded-[1.389vw] overflow-hidden">
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1330 1015"
          className="sc-06-SocialProof__Paths-sc-pkobnw-11 fwYvts absolute ps-[5vw]"
        >
          <g clipPath="url(#socialPaths_svg__clip0_2777_197741)">
            <path
              d="M17.1002 1199.5L17.1002 613.5C17.1002 392.586 196.186 213.5 417.1 213.5L1581.43 213.5"
              stroke="#4A5357"
              strokeWidth="30"
            ></path>
            <path
              d="M17.0997 1199.5L17.0997 0"
              stroke="#4A5357"
              strokeWidth="30"
            ></path>
            <path
              ref={pathRef1}
              d="M1581.43 213.5L417.1 213.5C196.186 213.5 17.1002 392.586 17.1002 613.5L17.1002 1199.5"
              stroke="#FFC655"
              strokeWidth="30"
              strokeLinecap="round"
            ></path>
            <path
              ref={pathRef2}
              d="M17.0997 0L17.0997 1199.5"
              stroke="#DD8411"
              strokeWidth="30"
              strokeLinecap="round"
            ></path>
          </g>
          <defs>
            <clipPath id="socialPaths_svg__clip0_2777_197741">
              <rect width="1359" height="1015" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
        <div className="pt-[26.042vw] pb-[8.333vw] ps-[33.264vw]">
          <div className="flex justify-center items-center w-fit bg-orangish rounded-full mb-[-10px]">
            <span className="w-[74.9px] h-[74.9px] p-[2px] flex items-center justify-center">
              <img src="/assets/plan.svg" alt="plan" />
            </span>
          </div>
          <h2 className="lg:text-[10.069vw] md:text-[12.207vw] text-[10.069vw] leading-[90%] tracking-[-0.04em] text-white font-[600] py-[2.083vw] w-[53.125vw] text-left">
            Ready for Takeoff
          </h2>{" "}
          <p className="text-left lg:text-[1.736vw] md:text-[2.441vw] text-[1.736vw] tracking-[-0.02em] leading-[125%] font-[400] text-orangish my-[3.083vw] w-[33vw]">
            Runway is ready to help you and your team get off the ground.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReadyforTakeoff;
