"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [imageExpanded, setImageExpanded] = useState(false);

  const handleScroll = () => {
    const maxScroll = 500; // Adjust this to control how much the user can scroll to expand the image
    const currentScroll = Math.min(window.scrollY, maxScroll);

    if (currentScroll < maxScroll) {
      setScrollY(currentScroll);
    } else {
      setImageExpanded(true);
    }

    // Prevent scrolling past the maxScroll point
    if (window.scrollY > maxScroll) {
      window.scrollTo(0, maxScroll);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
        <div
          className="absolute top-0 right-0 h-screen bg-blue-100"
          style={{
            width: `${30 + (scrollY / 500) * 70}%`, // Changes from 30% to 100%
            transition: "width 0.2s ease", // Smooth transition
          }}
        >
          <Image
            src="/path-to-your-image.jpg"
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
