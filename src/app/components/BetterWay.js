"use client";
import React, { useRef } from "react";
import DesignedForFinance from "./home/DesignedForFinance";
import BuiltForExecutives from "./home/BuiltForExecutives";
import usePathAnimation from "../hooks/useAnimation"; // Adjust the import path

const BetterWay = () => {
  // Create refs for each path
  const pathRef1 = useRef(null);
  const pathRef2 = useRef(null);
  const pathRef3 = useRef(null);

  // Apply the animation hook to the refs
  usePathAnimation([pathRef1, pathRef2, pathRef3]);

  return (
    <div className="rounded-[1.389vw] bg-blackish overflow-hidden">
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 3325"
        className="Desktop__Paths-sc-uvilzz-1 fgVVhV"
      >
        <g clipPath="url(#clip0_4897_320934)">
          <path
            d="M928.999 1070.39L928.999 863C928.999 642.086 1108.09 463 1329 463L1440.22 463"
            stroke="#4A5357"
            strokeWidth="30"
          />
          <path
            d="M929 1001L929 415.001C929 194.087 749.913 15.0002 528.999 15.0005L-0.0078125 15.0012"
            stroke="#4A5357"
            strokeWidth="30"
          />
          <path
            ref={pathRef1}
            d="M928.999 1070.39L928.999 863C928.999 642.086 1108.09 463 1329 463L1440.22 463"
            strokeLinecap="round"
            stroke="#FFC655"
            strokeWidth="30"
          />
          <path
            ref={pathRef2}
            d="M929 1001L929 415.001C929 194.087 749.913 15.0002 528.999 15.0005L-0.0078125 15.0012"
            stroke="#DD8411"
            strokeLinecap="round"
            strokeWidth="30"
          />
          <path
            ref={pathRef3}
            d="M96.3359 3289.47V1549.47C96.3359 1439.01 185.879 1349.47 296.336 1349.47H728.997C839.454 1349.47 928.997 1259.87 928.997 1149.41C928.998 897.4 928.999 707.809 929 415C929 194.086 1108.09 15 1329 15H1439.99"
            stroke="#F9A600"
            strokeLinecap="round"
            strokeWidth="30"
          />
          {/* Your other SVG elements */}
        </g>
        <defs>
          <clipPath id="clip0_4897_320934">
            <rect width="1440" height="3325" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div className="lg:w-[40.347vw] md:w-[72.852vw] flex flex-col mb-[30px] py-[27.778vw] ps-[3.125vw]">
        {/* Icon and Heading */}
        <div className="flex justify-center items-center w-fit  bg-orangish rounded-full mb-[-10px]">
          <span className="w-[74.9px] h-[74.9px] p-[5px] flex items-center justify-center">
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 31"
              className="w-[39px] h-[39px]"
            >
              <path
                d="M32.7188 30.2092L25.6611 30.1823L29.01 13.9866L12.2259 29.4822C11.7383 29.9323 11.099 30.1823 10.4353 30.1823H0.350586L24.5691 7.7427L9.97643 7.72816L12.817 1.29864C13.0989 0.660689 13.7309 0.24938 14.4283 0.250001L34.8251 0.268164C37.6565 0.269449 39.7495 2.90594 39.1084 5.66374L34.4507 28.7968C34.2848 29.6208 33.5593 30.2124 32.7188 30.2092Z"
                fill="#192227"
              ></path>
            </svg>
          </span>
        </div>
        <h2 className="lg:text-[7.094vw] md:text-[12.207vw] text-[10.069vw] leading-[90%] tracking-[-0.04em] text-white font-[600] py-[2.083vw] w-[53.125vw]">
          Runway is a better way
        </h2>
        <p className="lg:text-[1.736vw] md:text-[2.441vw] text-[1.736vw] tracking-[-0.02em] leading-[125%] font-[400] text-orangish pt-[2.083vw] w-[36.042vw]">
          Model, plan, and align your business with a modern, intuitive
          experience designed for everyone on your team.
        </p>
      </div>
      <DesignedForFinance />
      <BuiltForExecutives />
      <div className="bg-blackish py-16 max-w-[1920px] mx-auto xl:ps-[200px] ps-[8.984vw] pe-[15px]">
        <h2 className="text-white text-[7.292vw] font-[600] leading-[90%] tracking-[-0.04em] mb-[1.528vw] max-w-[50.694vw] pt-[0.694vw]">
          Built for Executives
        </h2>
        <p className="text-white pt-[0.694vw] max-w-[54.583vw] text-[1.528vw] font-[400] leading-[125%] tracking-[-0.02em]">
          Runway's mission is to make your business accessible and
          understandable to everyone—from finance to engineering. That starts
          with an intuitive, responsive, and thoughtfully designed user
          experience that helps everyone understand how to make an impact.
        </p>
      </div>
    </div>
  );
};

export default BetterWay;
