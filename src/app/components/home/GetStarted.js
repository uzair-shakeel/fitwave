// components/GetStarted.js
import React from "react";

const GetStarted = () => {
  return (
    <div className="w-[94.444vw] mx-auto flex justify-center items-center min-h-screen py-[150px]">
      <div className="bg-white shadow-lg flex overflow-hidden rounded-[1.389vw]">
        {/* Left Section */}
        <div className="bg-yellow-500 p-6 flex flex-col justify-between items-center">
          <img src="/assets/barcode.webp" alt="barcode" />
        </div>

        {/* Main Content */}
        <div className="flex flex-col justify-between p-8">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold">Let's get started</h1>
            <div className="w-12 h-12 rounded-full flex justify-center items-center bg-gradient-to-r from-purple-400 to-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>

          <div className="flex justify-between mt-8">
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

          <div className="mt-6 flex items-center">
            <div className="w-20 h-20 bg-black text-white flex items-center justify-center">
              <p className="text-xs">QR CODE</p>
            </div>
            <p className="ml-4 text-sm text-gray-500">
              Runway's white glove service and intuitive design will get you up
              and running in a matter of hours—not weeks or months. Complex
              models welcome—we've seen it all.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-blue-100 p-8 flex flex-col justify-between">
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
  );
};

export default GetStarted;
