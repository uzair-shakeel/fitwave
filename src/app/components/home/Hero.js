"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const HeroSection = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".image-section",
        start: "top top", // Start when the top of the trigger hits the top of the viewport
        end: "top 60%", // Increase the end point to create more scroll space for the animation
        scrub: 2, // Smooth scrub
        markers: true, // Markers for debugging
        pin: true, // Pin the section to simulate a fixed position
        pinSpacing: false, // Remove extra spacing added by pinning
      },
    });
    // First width increase to 50%
    tl.fromTo(
      ".image-section",
      { width: "30%", right: "0" }, // Start from 30%
      {
        width: "50%", // Increase to 50%
        duration: 2,
      }
    );
    // Second width increase to 100%
    tl.to(".image-section", {
      width: "100%", // Finally increase to 100%
      duration: 2,
    });
    // Adjust section height to simulate pinning effect
    gsap.to(".image-section", {
      height: "100vh", // Ensure section height stays at 100vh
      scrollTrigger: {
        trigger: ".image-section",
        start: "top top",
        end: "+=2000", // Adjust based on scroll length
        scrub: 2,
        markers: true,
        pin: true,
        pinSpacing: false,
      },
    });
  }, []);

  return (
    <section className="relative w-full h-screen bg-white overflow-hidden">
      <div className="flex items-center justify-between h-full max-w-6xl mx-auto p-8">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold text-black leading-tight">
            The finance platform you don't hate.
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Runway is the modern and intuitive way to model, plan, and align
            your business for everyone on your team.
          </p>
        </div>
        <div className="absolute top-0 right-0 h-screen bg-blue-100 hero-image-container image-section">
          <Image
            src="/public/OIP.jpeg"
            alt="Runway Financial App"
            layout="fill"
            objectFit="cover"
            className="rounded-lg "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
