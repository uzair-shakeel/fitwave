// components/GetStarted.js
import React from "react";
import { IoIosAirplane } from "react-icons/io";

const GetStarted = () => {
  return (
    <div className="w-[94.444vw] mx-auto flex justify-center items-center min-h-screen py-[150px]">
      <div className="flex overflow-hidden rounded-[1.389vw] h-[36.181vw]">
        {/* Left Section */}
        <div className="shadow-lg bg-orangish p-7 flex flex-col justify-between items-center">
          <img
            className="h-full min-w-[5.208vw]"
            src="/assets/barcode.webp"
            alt="barcode"
          />
        </div>

        {/* Main Content */}
        <div className="flex shadow-lg">
          <div className="flex flex-col justify-between py-[2.083vw] pe-[0.694vw] ps-[2.083vw] bg-[#fdfcfc]">
            <div className="flex items-start justify-between gap-[30px] pb-[0.972vw]">
              <h1 className="text-[5.903vw] font-[600] leading-[90%] tracking-[-0.04em] text-blackish pt-[0.1em]">
                Let's get started
              </h1>
              <div
                className="rounded-[0.694vw] overflow-hidden z-[2]"
                style={{
                  background:
                    "radial-gradient(125% 125% at -12.2682% 0.975981%, rgb(42, 208, 202) 0%, rgb(255, 255, 254) 22.92%, rgb(255, 211, 255) 46.88%, rgb(214, 218, 255) 68.23%, rgb(191, 251, 233) 87.5%, rgb(154, 223, 255) 100%)",
                }}
              >
                <div className="relative w-[7.292vw] h-[7.292vw] flex justify-center z-[0]">
                  <div
                    className="absolute h-full w-full z-[3] opacity-[0.8]"
                    style={{
                      background:
                        "conic-gradient(from -1.47767deg at 50% 50%, rgba(0, 0, 0, 0.35) -24.66deg, rgba(255, 255, 255, 0.35) 0.25deg, rgba(0, 0, 0, 0.35) 50.63deg, rgba(0, 0, 0, 0.35) 51.97deg, rgba(255, 255, 255, 0.35) 88.12deg, rgba(0, 0, 0, 0.35) 142.5deg, rgba(255, 255, 255, 0.35) 196.87deg, rgba(0, 0, 0, 0.35) 256.87deg, rgba(255, 255, 255, 0.35) 300deg, rgba(0, 0, 0, 0.35) 335.2deg, rgba(0, 0, 0, 0.35) 335.34deg, rgba(255, 255, 255, 0.35) 360.25deg)",
                    }}
                  ></div>
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 31"
                    className="w-[4.861vw] relative z-[6]"
                  >
                    <path
                      d="M32.7188 30.2092L25.6611 30.1823L29.01 13.9866L12.2259 29.4822C11.7383 29.9323 11.099 30.1823 10.4353 30.1823H0.350586L24.5691 7.7427L9.97643 7.72816L12.817 1.29864C13.0989 0.660689 13.7309 0.24938 14.4283 0.250001L34.8251 0.268164C37.6565 0.269449 39.7495 2.90594 39.1084 5.66374L34.4507 28.7968C34.2848 29.6208 33.5593 30.2124 32.7188 30.2092Z"
                      fill="#192227"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex w-[11.806vw] items-center justify-between mb-[2.882vw]">
              <p className="text-[1.528vw] font-[600] leading-[100%] tracking-[-0.01em] text-blackish">
                XLS
              </p>
              <span className="h-full w-[38px]">
                <IoIosAirplane className="h-full w-full" />
              </span>
              <p className="text-[1.528vw] font-[600] leading-[100%] tracking-[-0.01em] text-blackish">
                RNW
              </p>
            </div>

            <div className="flex justify-between">
              <div>
                <p className="uppercase text-gray-500">Status</p>
                <p className="text-xl font-bold">NOW BOARDING</p>
              </div>
              <div className="text-center">
                <p className="uppercase text-gray-500">Seat</p>
                <p className="text-xl font-bold">1A</p>
              </div>
              <div className="text-right">
                <p className="uppercase text-gray-500">Group</p>
                <p className="text-xl font-bold">FIRST CLASS</p>
              </div>
            </div>

            <div className="mt-6 gap-[3.4vw] w-full justify-between flex items-center">
              <div className="min-w-[6.944vw] min-h-[6.944vw] h-[6.944vw] text-white flex items-center justify-center">
                <img
                  className="h-full w-full object-contain"
                  src="/assets/QRCode.png"
                  alt="QRCODE"
                />
              </div>
              <div className="w-[37.569vw]">
                <p className="text-[1.25vw] leading-[125%] tracking-[-0.02em] ">
                  Runway's white glove service and intuitive design will get you
                  up and running in a matter of hours—not weeks or months.
                  Complex models welcome—we've seen it all.
                </p>
                <p className="text-[0.694vw] leading-[128%] text-blackish mt-[1.25vw]  pb-[0.278vw]">
                  We’ll use the information you provide consistent with our{" "}
                  <a className="text-[#2c8ac0] underline">Privacy Policy</a>
                </p>
              </div>
            </div>
          </div>
          <img
            className="h-full transform scale-x-[-1] ms-[-1px]"
            src="/assets/breakpoint.webp"
            alt="breakpoint"
          />
        </div>

        {/* Right Section */}
        <div className="flex shadow-lg  ms-[1.40vw]">
          <img
            className="h-full me-[-0.5px]"
            src="/assets/breakpoint.webp"
            alt="breakpoint"
          />

          <div className="bg-[#fdfcfc] py-[2.083vw] pe-[1.389vw] flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <p className="text-gray-500"># RNW5147</p>
              <p className="text-gray-500">DATE 26 AUG. 2024</p>
            </div>

            <div className="mt-6">
              <input
                className="border-b-2 border-gray-300 w-full mb-4 py-2 focus:outline-none"
                type="text"
                placeholder="First Name"
              />
              <input
                className="border-b-2 border-gray-300 w-full mb-4 py-2 focus:outline-none"
                type="text"
                placeholder="Last Name"
              />
              <input
                className="border-b-2 border-gray-300 w-full mb-4 py-2 focus:outline-none"
                type="email"
                placeholder="Work Email"
              />
              <input
                className="border-b-2 border-gray-300 w-full mb-4 py-2 focus:outline-none"
                type="text"
                placeholder="Job Title"
              />
            </div>

            <button className="bg-yellow-500 text-white py-3 mt-4 flex items-center justify-center rounded">
              Get Access
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
