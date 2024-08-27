"use client";
import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "+=1000", // Adjust based on how far you want the animation to progress
        scrub: true,
        pin: true,
        markers: false,
      },
    });

    tl.to(".hero-image-container", {
      width: "100%",
      duration: 1,
      ease: "power1.out",
    });
  }, []);

  return (
    <section className="hero-section relative w-full h-screen bg-white overflow-hidden">
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
        <div className="absolute top-0 right-0 h-[99%] w-[30%] rounded-[30%] bg-blue-100 hero-image-container  overflow-hidden">
          <Image
            src="/OIP.jpeg"
            alt="Runway Financial App"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
