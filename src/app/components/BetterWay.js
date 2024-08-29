"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import DesignedForFinance from "./home/DesignedForFinance";
import BuiltForExecutives from "./home/BuiltForExecutives";

gsap.registerPlugin(ScrollTrigger);

const BetterWay = () => {
  const pathRef0 = useRef(null);
  const pathRef1 = useRef(null);
  const pathRef2 = useRef(null);
  const checkRef0 = useRef(null);
  const checkRef1 = useRef(null);
  const checkRef2 = useRef(null);

  useEffect(() => {
    const pathLength0 = pathRef0.current.getTotalLength();
    const pathLength1 = pathRef1.current.getTotalLength();
    const pathLength2 = pathRef2.current.getTotalLength();

    // Initialize pathRef0 with strokeDasharray and strokeDashoffset
    gsap.set(pathRef0.current, {
      strokeDasharray: pathLength0,
      strokeDashoffset: pathLength0, // Start with the path hidden
      stroke: "#FFC655",
    });

    // Initialize pathRef1 with strokeDasharray and strokeDashoffset
    gsap.set(pathRef1.current, {
      strokeDasharray: pathLength1,
      strokeDashoffset: pathLength1, // Start with the path hidden
      stroke: "#DD8411",
    });

    // Initialize pathRef2 with strokeDasharray and strokeDashoffset
    gsap.set(pathRef2.current, {
      strokeDasharray: pathLength2,
      strokeDashoffset: pathLength2, // Start with the path hidden
      stroke: "#F9A600",
    });

    // Animate pathRef0 from hidden to visible
    gsap.to(pathRef0.current, {
      strokeDashoffset: 0, // Animate to fully visible
      duration: 1,
      ease: "none",
      scrollTrigger: {
        trigger: pathRef0.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: true, // Remove or set to false for production
      },
    });

    gsap.to(checkRef0.current, {
      opacity: 1,
      duration: 0.3,
      scale: 1.07,
      ease: "none",
      scrollTrigger: {
        trigger: checkRef0.current,
        // start: "top 50%",
        // end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(
      checkRef1.current,
      {
        opacity: 1,
        duration: 1.5,
        ease: "none",
      },
      "-=0.5"
    ); // Make sure this starts when the path animation is halfway done
    gsap.to(
      checkRef2.current,
      {
        opacity: 1,
        duration: 1.5,
        ease: "none",
      },
      "-=0.5"
    ); // Make sure this starts when the path animation is halfway done

    // Animate pathRef1 from hidden to visible
    gsap.to(pathRef1.current, {
      strokeDashoffset: 0, // Animate to fully visible
      duration: 1,
      ease: "none",
      scrollTrigger: {
        trigger: pathRef1.current,
        start: "top 95%",
        end: "bottom center",
        scrub: true,
        markers: true, // Remove or set to false for production
      },
    });

    // Animate pathRef2 from hidden to visible
    gsap.to(pathRef2.current, {
      strokeDashoffset: 0, // Animate to fully visible
      duration: 1,
      ease: "none",
      scrollTrigger: {
        trigger: pathRef2.current,
        start: "top 95%",
        end: "bottom center",
        scrub: true,
        markers: true, // Remove or set to false for production
      },
    });
  }, []);

  return (
    <div className="rounded-[1.389vw] bg-blackish overflow-hidden">
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 3325"
        className="Desktop__Paths-sc-uvilzz-1 fgVVhV absolute"
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
            d="M96.3359 3289.47V1549.47C96.3359 1439.01 185.879 1349.47 296.336 1349.47H728.997C839.454 1349.47 928.997 1259.87 928.997 1149.41C928.998 897.4 928.999 707.809 929 415C929 194.086 1108.09 15 1329 15H1439.99"
            stroke="#4A5357"
            strokeWidth="30"
          />
          <path
            ref={pathRef0}
            className="runway-is-better-path-0"
            d="M1440.22 463L1329 463C1108.09 463 928.999 642.086 928.999 863L928.999 1070.39"
            strokeLinecap="round"
            stroke="#FFC655"
            strokeWidth="30"
          />
          <path
            ref={pathRef1}
            className="runway-is-better-path-1"
            d="M-0.0078125 15.0012L528.999 15.0005C749.913 15.0002 929 194.087 929 415.001L929 1001"
            stroke="#DD8411"
            strokeLinecap="round"
            strokeWidth="30"
          />
          <path
            ref={pathRef2}
            className="runway-is-better-path-2"
            d="M1439.99 15 H1329 C1108.09 15 929 194.086 929 415 C928.999 707.809 928.998 897.4 928.997 1149.41 C928.997 1259.87 839.454 1349.47 728.997 1349.47 H296.336 C185.879 1349.47 96.3359 1439.01 96.3359 1549.47 V3289.47
"
            stroke="#F9A600"
            strokeLinecap="round"
            strokeWidth="30"
          />
          {/* <circle
            className="circle circle-1"
            cx="96.3359"
            cy="3287.36"
            r="37.5"
            fill="#4A5357"
          />
          <g
            className="check check-1"
            ref={checkRef0}
            data-svg-origin="96.33590316772461 3287.360107421875"
            transform="matrix(0.5,0,0,0.5,48.16795,1643.68005)"
            style={{ opacity: 0 }}
          >
            <rect
              x="63.8359"
              y="3254.86"
              width="65"
              height="65"
              rx="32.5"
              fill="#192227"
            />
            <path
              d="M79.0313 3288.77L95.3675 3302.15"
              stroke="#FDFCFC"
              strokeWidth="5.2"
            />
            <path
              d="M115.375 3274.34L91.7476 3302.45"
              stroke="#FDFCFC"
              strokeWidth="5.2"
            />
          </g>
          <circle
            className="circle circle-2"
            cx="96.334"
            cy="2442.84"
            r="37.5"
            fill="#4A5357"
          />
          <g
            className="check check-2"
            data-svg-origin="96.33399963378906 2442.840087890625"
            transform="matrix(0.5,0,0,0.5,48.167,1221.42004)"
            ref={checkRef1}
            style={{ opacity: 0 }}
          >
            <rect
              x="63.834"
              y="2410.34"
              width="65"
              height="65"
              rx="32.5"
              fill="#192227"
            />
            <path
              d="M79.0293 2444.25L95.3656 2457.63"
              stroke="#FDFCFC"
              strokeWidth="5.2"
            />
            <path
              d="M115.373 2429.82L91.7456 2457.94"
              stroke="#FDFCFC"
              strokeWidth="5.2"
            />
          </g>
          <circle
            className="circle circle-3"
            cx="96.3359"
            cy="1596.2"
            r="37.5"
            fill="#4A5357"
          />
          <g
            className="check check-3"
            data-svg-origin="96.33590316772461 1596.2000732421875"
            transform="matrix(0.5,0,0,0.5,48.16795,798.10004)"
            style={{ opacity: 0 }}
            ref={checkRef2}
          >
            <rect
              x="63.8359"
              y="1563.7"
              width="65"
              height="65"
              rx="32.5"
              fill="#192227"
            />
            <path
              d="M79.0313 1597.61L95.3675 1610.99"
              stroke="#FDFCFC"
              strokeWidth="5.2"
            />
            <path
              d="M115.375 1583.18L91.7476 1611.3"
              stroke="#FDFCFC"
              strokeWidth="5.2"
            />
          </g> */}
        </g>
        <defs>
          <clipPath id="clip0_4897_320934">
            <rect width="1440" height="3325" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div className="lg:w-[40.347vw] md:w-[72.852vw] flex flex-col mb-[14%] py-[27.778vw] ps-[3.125vw]">
        {/* Icon and Heading */}
        <div className="flex justify-center items-center w-fit bg-orangish rounded-full mb-[-10px]">
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
      <div className="bg-blackish py-[7%] max-w-[1920px] mx-auto xl:ps-[200px] ps-[8.984vw] pe-[15px]">
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
