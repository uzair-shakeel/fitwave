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
    <footer className="bg-blackish max-w-[1920px] mx-auto text-white mt-[15px] pb-[15px] overflow-hidden rounded-t-[1.389vw]">
      <div className="footer-line h-[2.083vw] bg-[#dd8411] w-full rounded-t-[1.389vw]"></div>
      <div className="footer-line-2 h-[2.083vw] bg-[#f9a600] w-full"></div>
      <div className="footer-line-3 h-[2.083vw] bg-[#ffc655] w-full"></div>
      <div className="max-w-[95.556vw] mx-auto sm:mb-[3.819vw] mb-[8vw] mt-[7.5vw] px-[15px]">
        <img className="w-[100%]" src="/assets/logo.png" alt="logo" />
      </div>
      <div className="mx-auto flex flex-col sm:gap-[0.694vw] gap-[2.667vw] sm:flex-row justify-between px-[15px]">
        <div className="sm:order-1 order-2 bg-[#f9a600] flex flex-grow flex-col text-blackish pt-[15px] sm:rounded-[1.389vw] rounded-[5.333vw] md:max-w-[27.153vw] sm:min-h-0 min-h-[59.2vw] sm:max-w-[38.184vw]  min-h-full justify-between">
          <div className="flex flex-col gap-[7px]">
            <div className="sm:flex hidden justify-center items-center bg-[#192227] rounded-full w-[3.472vw] h-[3.472vw] mx-[15px]">
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 31"
                className="w-[1.8vw]"
              >
                <path
                  d="M32.7188 30.2092L25.6611 30.1823L29.01 13.9866L12.2259 29.4822C11.7383 29.9323 11.099 30.1823 10.4353 30.1823H0.350586L24.5691 7.7427L9.97643 7.72816L12.817 1.29864C13.0989 0.660689 13.7309 0.24938 14.4283 0.250001L34.8251 0.268164C37.6565 0.269449 39.7495 2.90594 39.1084 5.66374L34.4507 28.7968C34.2848 29.6208 33.5593 30.2124 32.7188 30.2092Z"
                  fill="#f9a600"
                ></path>
              </svg>
            </div>

            <div className="font-[600] sm:text-[2.431vw] text-[8vw] sm:max-w-[30vw] max-w-[70vw] tracking-[-0.03em] text-[#192227] sm:mt-2 mt-[2.2vw] leading-[90%] sm:ps-[15px] sm-pe-[15px] ps-[4vw]">
              <p className="flex-grow flex w-full">
                Business planning, for humans.
              </p>
            </div>
          </div>
          <div>
            <div className="text-sm border-y border-[#dd8411] sm:h-[3.819vw] h-[16vw] flex items-center">
              <span className="px-[15px] font-[400] md:text-[1.25vw] sm:text-[1.9vw] text-[4.8vw] tracking-[-0.01em]">
                © Runway 2024.
              </span>
            </div>
            <div className="flex sm:gap-[6px] gap-[2.133vw] px-[15px] items-center justify-between sm:h-[3.819vw] h-[16vw]  md:text-[1.25vw] sm:text-[1.9vw] text-[4.8vw] font-[400] leading-[-0.02em]">
              <a
                href="/terms"
                className="flex items-center gap-[3px] hover:underline"
              >
                <IoMdArrowForward className="sm:h-[2.667vw] h-[3.2vw]" /> Terms
              </a>
              <a
                href="/privacy"
                className="flex items-center gap-[3px] hover:underline"
              >
                <IoMdArrowForward className="sm:h-[2.667vw] h-[3.2vw]" />{" "}
                Privacy
              </a>
              <a
                href="/security"
                className="flex items-center gap-[3px] hover:underline me-[10px]"
              >
                <IoMdArrowForward className="sm:h-[2.667vw] h-[3.2vw]" />{" "}
                Security
              </a>
            </div>
          </div>
        </div>
        <div className="sm:order-2 order-1 flex flex-grow sm:rounded-[1.389vw] rounded-[5.333vw] border border-[#fdfcfc] overflow-hidden">
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
            ].map((item, index) => (
              <li
                key={item}
                className={`flex justify-between items-center md:min-h-[3.819vw] sm:min-h-[4vw] min-h-[16vw] sm:px-[2.083vw] px-[8vw] ${
                  index !== 0 ? "border-t border-gray-700" : ""
                } hover:bg-orangish hover:text-blackish transition duration-300`}
              >
                <a
                  href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="md:text-[1.25vw] sm:text-[1.8vw] text-[4.8vw] font-[600] tracking-[-0.03em]"
                >
                  {item}
                </a>
                <span className=" md:w-[1.042vw] sm:w-[1.465vw] w-[4vw]">
                  <svg
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="Footer__ButtonArrow-sc-1ykx3f8-0 eENHCH w-full"
                  >
                    <path
                      d="M17.086 0.424667L32.4375 15.8262L17.0847 31.2277L8.37224 31.2277L20.6941 18.9058L0.408366 18.9058L0.408367 12.7452L20.6941 12.7452L8.37361 0.424666L17.086 0.424667Z"
                      fill="white"
                    ></path>
                  </svg>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
