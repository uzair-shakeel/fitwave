import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div className="bg-blue-300">
      <Header />
      <section className="text-white body-font relative">
        <div
          className="md:w-2/3 w-[97%] md:px-12 px-4 py-12 my-[140px] mx-auto bg-blackish rounded-[1.389vw]"
          bis_skin_checked="1"
        >
          <div
            className="flex flex-col text-center w-full mb-12"
            bis_skin_checked="1"
          >
            <h1 className="sm:text-[34px] text-[26px] font-[700] mb-5">
              Contact Us
            </h1>
            <p className="mx-auto lg:text-[17px] text-[16px] leading-relaxed">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p>
          </div>
          <div className=" mx-auto" bis_skin_checked="1">
            <div className="flex flex-wrap -m-2" bis_skin_checked="1">
              <div className="p-2 md:w-1/2 w-full" bis_skin_checked="1">
                <div className="relative" bis_skin_checked="1">
                  <label
                    for="name"
                    className="leading-7 md:text-[20px] text-[17px]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full text-white bg-[#585f63] bg-opacity-50 rounded-md border border-[#585f63] focus:border-indigo-500 focus:bg-[#5d6366] focus:ring-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2"
                  />
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full" bis_skin_checked="1">
                <div className="relative" bis_skin_checked="1">
                  <label
                    for="email"
                    className="leading-7 md:text-[20px] text-[17px]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full text-white bg-[#585f63] bg-opacity-50 rounded-md border border-[#585f63] focus:border-indigo-500 focus:bg-[#5d6366] focus:ring-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2"
                  />
                </div>
              </div>
              <div className="p-2 w-full" bis_skin_checked="1">
                <div className="relative" bis_skin_checked="1">
                  <label
                    for="message"
                    className="leading-7 md:text-[20px] text-[17px]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full text-white bg-[#585f63] bg-opacity-50 rounded-md border border-[#585f63] focus:border-indigo-500 focus:bg-[#5d6366] focus:ring-2 focus:ring-indigo-200 h-32 outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out mt-2"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 mt-2 w-full" bis_skin_checked="1">
                <button className="flex mx-auto font-[700] text-blackish bg-orangish border-0 py-3 px-10 focus:outline-none rounded-lg text-lg">
                  Submit
                </button>
              </div>
              <div
                className="p-2 w-full md:pt-8 pt-4 md:mt-8 mt-4 border-t border-gray-200 text-center"
                bis_skin_checked="1"
              >
                <a className="text-orangish">example@email.com</a>
                <p className="leading-normal my-5">
                  49 Smith St.
                  <br />
                  Saint Cloud, MN 56301
                </p>
                <span className="inline-flex">
                  <a className="text-gray-400">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-400">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-400">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
