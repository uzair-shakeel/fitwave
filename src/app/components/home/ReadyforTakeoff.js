"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ReadyforTakeoff = () => {
  const svgPathRef = useRef(null);

  useEffect(() => {
    // Get the length of the path
    const pathLength = svgPathRef.current.getTotalLength();
    // Set initial styles
    gsap.set(svgPathRef.current, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
      stroke: "orange",
    });

    // GSAP Animation
    gsap.to(svgPathRef.current, {
      strokeDashoffset: 0, // Draws the line from start to end
      stroke: "orange", // Changes the color
      duration: 1,
      ease: "",
      scrollTrigger: {
        trigger: svgPathRef.current,
        start: "top 99%",
        end: "bottom 20%",
        scrub: true,
        markers: true,
      },
    });
  }, []);

  return (
    <section className="bg-blue-300">
      <div className="min-h-screen bg-blackish text-white text-center rounded-[1.389vw] overflow-hidden">
        <h2 className="lg:text-[7.094vw] md:text-[12.207vw] text-[10.069vw] leading-[90%] tracking-[-0.04em] text-white font-[600] py-[2.083vw] w-[53.125vw]">
          Ready for Takeoff
        </h2>
        <div className="responsive-container">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 200 300"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              ref={svgPathRef}
              d="M 190 10 C 190 10, 165 10, 105 10 L 10 10 L 10 250"
              stroke="white" // Initial stroke color set to white
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ReadyforTakeoff;
