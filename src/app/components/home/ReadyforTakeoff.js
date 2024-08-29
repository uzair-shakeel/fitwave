"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Data1,
  Data2,
  Data3,
} from "../../../../public/assets/brandandfounders/brandandfounders.js";
import Marquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger);

const ReadyforTakeoff = () => {
  var settings1 = {
    speed: 50,
    pauseOnHover: true,
  };
  var settings2 = {
    speed: 30,
    pauseOnHover: true,
  };
  var settings3 = {
    speed: 20,
    pauseOnHover: true,
  };

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
      <div className="min-h-screen bg-blackish text-white text-center rounded-[1.389vw] overflow-hidden">
        <div className="mt-[1.389vw] flex sm:flex-row flex-col gap-[1.042vw] px-[1.2vw]">
          <div className="relative flex flex-col sm:w-[31.319vw] sm:min-h-[17.708vw] min-h-[28vw] sm:rounded-[1.389vw] rounded-[5.333vw] p-[1.875vw] sm:ps-[1.875vw] ps-[4.267vw] bg-orangish">
            <span className="sm:flex hidden bg-blackish w-[4vw] h-full items-center justify-center rounded-full">
              <img
                className="w-[2vw]"
                src="/assets/arrow-right.svg"
                alt="arrow-right"
              />
            </span>
            <h2 className="text-left sm:text-[3.125vw] text-[6.667vw] font-[600] sm:leading-[90%] leading-[100%] tracking-[-0.04em] text-blackish sm:w-[22.083vw] w-[45.333vw] sm:mt-[4.653vw] sm:mb-[0.972vw]">
              {" "}
              Supported By
            </h2>
            <p className="text-left sm:text-[1.528vw] text-[5.867vw] font-[400] leading-[125%] tracking-[-0.02em] text-blackish sm:w-auto w-[56vw] ">
              Investors and founders we admire
            </p>
            <span className="absolute sm:hidden flex bg-blackish w-[6.6vw] h-[6.6vw] items-center justify-center rounded-full right-[3.5vw] bottom-[7.5vw]">
              <span className="rotate-[90deg]">
                <img
                  className="w-[2.5vw]"
                  src="/assets/arrow-right.svg"
                  alt="arrow-right"
                />
              </span>
            </span>
          </div>
          <div className="sm:w-[64.931vw] w-full min-h-[17.708vw] sm:rounded-[1.389vw] rounded-[5.333vw] overflow-hidden border border-[#fdfcfc]">
            <div className="sm:h-[5.833vw] h-[11.467vw] border-b border-gray-600 ">
              <Marquee
                {...settings1}
                direction="left"
                className="sm:h-[5.833vw] h-[11.467vw] my-auto"
              >
                <div className="flex ">
                  {" "}
                  {/* Adjust space-x-4 to control spacing */}
                  {Data1.map((brand) => (
                    <div key={brand}>
                      {" "}
                      {/* Add a key prop for better performance */}
                      <img
                        className="sm:h-[3.472vw] h-[6.667vw] sm:w-[10.764vw] w-[20.8vw] object-contain"
                        src={brand}
                        alt="logo"
                      />
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
            <div className="sm:h-[5.833vw] h-[11.467vw] border-b border-gray-600 ">
              <Marquee
                {...settings2}
                direction="left"
                className="sm:h-[5.833vw] h-[11.467vw] my-auto"
              >
                <div className="flex ">
                  {" "}
                  {/* Adjust space-x-4 to control spacing */}
                  {Data2.map((brand) => (
                    <div key={brand}>
                      {" "}
                      {/* Add a key prop for better performance */}
                      <img
                        className="sm:h-[3.472vw] h-[6.667vw] sm:w-[10.764vw] w-[20.8vw] object-contain"
                        src={brand}
                        alt="logo"
                      />
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
            <div className="sm:h-[5.833vw] h-[11.467vw]">
              <Marquee
                {...settings3}
                direction="left"
                className="sm:h-[5.833vw] h-[11.467vw] my-auto"
              >
                <div className="flex ">
                  {" "}
                  {/* Adjust space-x-4 to control spacing */}
                  {Data3.map((brand) => (
                    <div key={brand}>
                      {" "}
                      {/* Add a key prop for better performance */}
                      <img
                        className="sm:h-[3.472vw] h-[6.667vw] sm:w-[10.764vw] w-[20.8vw] object-contain"
                        src={brand}
                        alt="logo"
                      />
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="w-[18vw] h-[17vw] absolute ms-[2vw] top-[30px] z-[9] bg-gradient-to-t from-transparent to-blackish"></div>

          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1330 1015"
            className="sc-06-SocialProof__Paths-sc-pkobnw-11 fwYvts absolute ps-[5vw] top-[30px]"
            style={{ height: "-webkit-fill-available" }}
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
          <div className="sm:pt-[26.042vw] pt-[55.8vw] sm:pb-[8.333vw] pb-[6.667vw] sm:ps-[30.264vw] ps-[17.267vw]  flex flex-col sm:gap-0 gap-[4vw]">
            <div className="flex justify-center items-center w-fit bg-orangish rounded-full mb-[-10px]">
              <span className="sm:w-[74.9px] w-[11vw] sm:h-[74.9px] h-[11vw] p-[2px] flex items-center justify-center">
                <img cl src="/assets/plan.svg" alt="plan" />
              </span>
            </div>
            <h2 className="sm:text-[10.069vw] text-[12vw] leading-[90%] tracking-[-0.04em] text-white font-[600] sm:py-[2.083vw] w-[53.125vw] text-left">
              Ready for Takeoff?
            </h2>{" "}
            <p className="text-left sm:text-[1.736vw] text-[4vw] tracking-[-0.02em] leading-[125%] font-[400] text-orangish sm:my-[3.083vw] sm:w-[33vw] w-[53vw]">
              Runway is ready to help you and your team get off the ground.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyforTakeoff;
