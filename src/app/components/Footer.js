"use client";
import { useEffect } from "react";
import { IoMdArrowForward, IoMdArrowRoundForward } from "react-icons/io";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    // Create a GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer-line", // You can use the first line as the trigger
        start: "top 60%", // Adjust this as necessary
        end: "top center",
        toggleActions: "play none none none",
        markers: true,
        scroller: "body",
        scrub: 5,
      },
    });

    // Animate the first line
    tl.fromTo(
      ".footer-line",
      { width: "3%", right: "0" },
      { width: "100%", duration: 3 }
    );

    // Animate the second line
    tl.fromTo(
      ".footer-line-2",
      { width: "6%", right: "0" },
      { width: "100%", duration: 3 },
      "-=1" // Starts 2 seconds before the previous animation ends
    );

    // Animate the third line
    tl.fromTo(
      ".footer-line-3",
      { width: "9%", right: "0" },
      { width: "100%", duration: 3 },
      "-=1" // Starts 2 seconds before the previous animation ends
    );
  }, []);

  return (
    <footer className="bg-[#192227]">
      <div className="max-w-[1920px] mx-auto text-white py-[15px]">
        <div className="footer-line h-[2.083vw] bg-[#dd8411] w-full rounded-t-[1.389vw]"></div>
        <div className="footer-line-2 h-[2.083vw] bg-[#f9a600] w-full"></div>
        <div className="footer-line-3 h-[2.083vw] bg-[#ffc655] w-full"></div>
        <div className="max-w-[95.556vw] mx-auto mb-[3.819vw] mt-[7.5vw] px-[15px]">
          <img className="w-[100%]" src="/assets/logo.png" alt="logo" />
        </div>
        <div className="mx-auto flex flex-col gap-[0.694vw] md:flex-row justify-between px-[15px]">
          <div className="bg-[#f9a600] flex flex-grow flex-col text-gray-900 pt-[15px] rounded-[1.389vw] md:max-w-[27.153vw] min-h-full justify-between">
            <div className="flex flex-col gap-[7px]">
              <div className="flex justify-center items-center bg-[#192227] rounded-full w-[3.472vw] h-[3.472vw] mx-[15px]">
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 31"
                  className="w-[25px] h-[19px]"
                >
                  <path
                    d="M32.7188 30.2092L25.6611 30.1823L29.01 13.9866L12.2259 29.4822C11.7383 29.9323 11.099 30.1823 10.4353 30.1823H0.350586L24.5691 7.7427L9.97643 7.72816L12.817 1.29864C13.0989 0.660689 13.7309 0.24938 14.4283 0.250001L34.8251 0.268164C37.6565 0.269449 39.7495 2.90594 39.1084 5.66374L34.4507 28.7968C34.2848 29.6208 33.5593 30.2124 32.7188 30.2092Z"
                    fill="#f9a600"
                  ></path>
                </svg>
              </div>

              <div className="font-[600] text-[2.431vw] max-w-[350px] tracking-[-0.03em] text-[#192227] mt-2 leading-[90%] px-[15px]">
                <p className="flex-grow flex w-full">
                  Business planning, for humans.
                </p>
              </div>
            </div>
            <div>
              <div className="text-sm border-y border-[#dd8411] h-[3.819vw] flex items-center">
                <span className="px-[15px] font-[400] text-[18px] tracking-[-0.01em]">
                  © Runway 2024.
                </span>
              </div>
              <div className="flex gap-[6px] px-[15px] items-center justify-between h-[3.819vw] text-[18px] font-[400] leading-[-0.02em]">
                <a
                  href="/terms"
                  className="flex items-center gap-[3px] hover:underline"
                >
                  <IoMdArrowForward size={12} /> Terms
                </a>
                <a
                  href="/privacy"
                  className="flex items-center gap-[3px] hover:underline"
                >
                  <IoMdArrowForward size={12} /> Privacy
                </a>
                <a
                  href="/security"
                  className="flex items-center gap-[3px] hover:underline me-[10px]"
                >
                  <IoMdArrowForward size={12} /> Security
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-0 flex flex-grow rounded-[1.389vw] border border-[#fdfcfc]">
            <ul className="w-full">
              {[
                "Get Access",
                "Log In",
                "About",
                "Careers",
                "Contact",
                "Twitter",
                "LinkedIn",
                "YouTube",
                "Instagram",
              ].map((item) => (
                <li
                  key={item}
                  className="flex justify-between items-center h-[3.819vw] px-[2.083vw] border-t border-gray-700"
                >
                  <a
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:underline text-[18px] font-[600] tracking-[-0.03em]"
                  >
                    {item}
                  </a>
                  <IoMdArrowRoundForward size={18} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
