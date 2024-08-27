"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".card-container");

    gsap.fromTo(
      sections,
      {
        y: "100vh",
      },
      {
        y: "0",
        duration: 1,
        stagger: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".card-section",
          start: "top top",
          end: "+=600",
          scrub: true,
          pin: true,
        },
      }
    );
  }, []);

  return (
    <section className="card-section bg-blue-300 min-h-screen py-[140px] px-[15px]">
      <div className="flex relative flex-col gap-[100px]">
        <div className="card-container absolute top-[-60px] left-1/2 -translate-x-1/2 rounded-[1.389vw] w-[55.139vw] h-[22.153vw] mx-auto rotate-[3.00023deg]">
          <img src="/assets/card1.webp" alt="card" />
        </div>
        <div className="card-container  absolute top-[-30px] left-1/2 -translate-x-1/2 rounded-[1.389vw] w-[55.139vw] h-[22.153vw] mx-auto rotate-[-4deg]">
          <img src="/assets/card2.webp" alt="card" />
        </div>
        <div className="card-container  absolute top-[60px] left-1/2 -translate-x-1/2 rounded-[1.389vw] w-[55.139vw] h-[22.153vw] mx-auto rotate-[2deg]">
          <img src="/assets/card3.webp" alt="card" />
        </div>
        <div className="card-container  absolute top-[90px] left-1/2 -translate-x-1/2 rounded-[1.389vw] w-[55.139vw] h-[22.153vw] mx-auto rotate-[-2deg]">
          <img src="/assets/card4.webp" alt="card" />
        </div>
        <div className="card-container  absolute top-[120px] left-1/2 -translate-x-1/2 rounded-[1.389vw] w-[55.139vw] h-[22.153vw] mx-auto rotate-[3deg]">
          <img src="/assets/card5.webp" alt="card" />
        </div>
        <div className="card-container  absolute top-[150px] left-1/2 -translate-x-1/2 rounded-[1.389vw] w-[55.139vw] h-[22.153vw] mx-auto rotate-[-3deg]">
          <img src="/assets/card6.webp" alt="card" />
        </div>
      </div>
    </section>
  );
};

export default Cards;
