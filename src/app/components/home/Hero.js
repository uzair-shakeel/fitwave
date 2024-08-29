"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import { IoMdArrowRoundForward } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    const timings = [
      { duration: 1, delay: 1 }, // Timing for the first block
      { duration: 1, delay: 1.5 }, // Timing for the second block
      { duration: 1, delay: 1.9 }, // Timing for the third block
    ];

    const displayTime = 2; // Time each image stays on the screen

    imageRefs.current.forEach((imageRef, index) => {
      const images = imageRef.querySelectorAll(".image-item");
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

      images.forEach((image, i) => {
        tl.to(image, {
          rotationX: 90,
          transformOrigin: "top",
          duration: timings[index].duration,
          ease: "power2.inOut",
          opacity: 0,
          delay: i === 0 ? timings[index].delay : displayTime,
        })
          .fromTo(
            images[(i + 1) % images.length],
            { rotationX: -90, opacity: 0 },
            {
              rotationX: 0,
              opacity: 1,
              duration: timings[index].duration,
              ease: "power2.inOut",
              transformOrigin: "bottom",
            }
          )
          .delay(displayTime); // Delay added after each flip
      });
    });
  }, []);

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

  const imageBlocks = [
    [
      "/assets/img1.png",
      "/assets/img2.svg",
      "/assets/img3.svg",
      "/assets/img4.png",
      "/assets/img5.png",
    ],
    [
      "/assets/img3.svg",
      "/assets/img5.png",
      "/assets/img1.png",
      "/assets/img2.svg",
      "/assets/img4.png",
    ],
    [
      "/assets/img5.png",
      "/assets/img4.png",
      "/assets/img3.svg",
      "/assets/img2.svg",
      "/assets/img1.png",
    ],
  ];

  return (
    <div className="bg-blackish">
      <div className="mx-auto bg-blackish px-[15px]">
        <div className="flex flex-wrap pt-[54px] py-[0.556vw] flex-col md:flex-row items-center gap-[2.222vw]">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <img
              className="h-[25px] w-auto"
              src="/assets/hero.webp"
              alt="logo"
            />
          </Link>
          <nav className="md:ml-auto flex flex-wrap text-[1.042vw] font-[600] tracking-[-0.02em] items-center justify-center text-[#fdfcfc] gap-[3.125vw]">
            <Link
              href="/"
              className="flex items-center gap-[0.521vw] hover:text-gray-100"
            >
              <IoMdArrowRoundForward size={16} /> Product
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-[0.521vw] hover:text-gray-100"
            >
              <IoMdArrowRoundForward size={16} /> About
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-[0.521vw] hover:text-gray-100"
            >
              <IoMdArrowRoundForward size={16} /> Contact
            </Link>
            <Link
              href="/"
              className="flex items-center gap-[0.521vw] hover:text-gray-100"
            >
              <IoMdArrowRoundForward size={16} /> Log in
            </Link>
          </nav>
          <button className="inline-flex gap-[0.694vw] bg-[#f9a600] items-center py-[7px] px-[15px] justify-center w-[11.806vw] text-[#192227] rounded-full mt-4 md:mt-0">
            <span className="text-[1.042vw] font-[600] tracking-[-0.02em]">
              Get Access{" "}
            </span>{" "}
            <IoMdArrowRoundForward size={16} />
          </button>
        </div>
      </div>
      <section className="hero-section  relative w-full h-screen  overflow-hidden max-w-6xl mx-auto space-y-8 ">
        <div className="flex relative bg-white items-center justify-between h-[65%] p-8">
          <div className="w-1/2">
            <h1 className="text-5xl font-bold text-black leading-tight">
              The finance platform you don't hate.
            </h1>
            <p className="mt-4 text-lg text-gray-500">
              Runway is the modern and intuitive way to model, plan, and align
              your business for everyone on your team.
            </p>
          </div>
          <div className="absolute top-0 right-0 h-full w-[30%] rounded-[30%] bg-blue-100 hero-image-container  overflow-hidden">
            <Image
              src="/OIP.jpeg"
              alt="Runway Financial App"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex gap-8 h-[20%]">
          {/* <div className="rounded-[20px] border border-white w-[75%]"></div> */}
          <div className="flex w-[75%] justify-center items-center space-x-4 p-6 border border-white rounded-[1.389vw]">
            {imageBlocks.map((images, index) => (
              <div
                key={index}
                ref={(el) => (imageRefs.current[index] = el)}
                className="relative w-60 h-24 flex justify-center items-center bg-blackish  rounded-lg overflow-hidden perspective-500"
              >
                {images.map((image, i) => (
                  <div
                    key={i}
                    className={`absolute w-full h-full flex text-white justify-center items-center ${
                      i === 0 ? "opacity-100" : "opacity-0"
                    } image-item`}
                  >
                    <Image
                      src={image}
                      alt={`Image ${i}`}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg p-9"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <button className="bg-orangish h-full text-blackish w-[30%] text-[2.431vw] font-[600] leading-[90%] tracking-[-0.03em] gap-[1.528vw] py-[2.778vw] rounded-[1.389vw] flex items-center justify-center">
            Get Access
            <span className="bg-blackish w-[4.861vw] h-full flex items-center justify-center rounded-full">
              <img
                className="w-[2.153vw]"
                src="/assets/arrow-right.svg"
                alt="arrow-right"
              />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
