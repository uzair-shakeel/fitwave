"use client";
import { useState } from "react";
import { IoIosAirplane } from "react-icons/io";

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState("Meet Runway");

  const videos = {
    "Meet Runway": "/assets/videos/meet-runway.webm", // Replace with your actual video paths
    Integrations: "/assets/videos/integration.webm",
    Modeling: "/assets/videos/modeling.webm",
    "Scenario Planning": "/assets/videos/scenario-planning.webm",
    Reports: "/assets/videos/reports.webm",
    "Ambient Intelligence": "/assets/videos/intelligence.webm",
  };

  return (
    <div className="flex min-h-screen pt-[50px] pb-[140px]">
      <div className="flex gap-[0.694vw] mx-auto max-w-[1411.2px]">
        {/* Tabs */}
        <div className="bg-blackish text-white w-[32.292vw] h-[41.667vw] px-[1.944vw] rounded-[1.389vw] flex flex-col justify-between">
          <div className="flex flex-col justify-between h-full">
            {selectedTab === "Meet Runway" && (
              <div className="flex flex-col py-[2.083vw]">
                <div className="flex justify-center items-center w-fit bg-orangish rounded-full mb-[1vw]">
                  <span className="w-[3.472vw] h-[3.472vw] flex items-center justify-center">
                    <img src="/assets/coctail.svg" alt="icon" />
                  </span>
                </div>
                <h2 className="text-[4.167vw] leading-[90%] tracking-[-0.04em] text-white font-[600] w-fit">
                  First Class Amenities
                </h2>
                <p className="text-[1.042vw] tracking-[-0.01em] leading-[125%] font-[400] text-orangish pt-[0.694vw] w-[14vw]">
                  Business planning, designed for human enjoyment.
                </p>
              </div>
            )}
            <nav className="pb-[2px]">
              <button
                onClick={() => setSelectedTab("Integrations")}
                className={`flex items-center w-full text-[1.736vw] h-[3.5vw] font-[600] leading-[100%] tracking-[-0.03em] text-left hover:text-white text-[#4a5357] border-t border-[#4a5357] border-opacity-[0.9] ${
                  selectedTab === "Integrations" ? "text-white" : ""
                }`}
              >
                Integrations
              </button>
              {selectedTab === "Integrations" && (
                <div className="flex flex-col gap-[2.083vw]">
                  <h2 className="text-[2.431vw] leading-[1] tracking-[-0.03em] text-white font-[600] w-fit">
                    <span className="text-orangish">Automate</span> actuals from
                    all your business tools.
                  </h2>
                  <div className="relative text-[1.042vw] text-[#4a5357] leading-[100%] font-[600] tracking-[-0.02em]">
                    {/* Airplane Icon */}
                    <span className="absolute -top-[1.2vw] left-[15vw] text-orangish p-[0.694vw] w-[50px] flex justify-center items-center">
                      <IoIosAirplane className="w-[28px] h-[28px]" />
                    </span>

                    {/* Border with Text */}
                    <div className="flex items-center gap-[1.042vw]">
                      <span>AUT</span>
                      <span className="w-[15.972vw] border-b border-dashed border-[#4a5357]"></span>
                      <span>ACT</span>
                    </div>
                  </div>
                  <p className="text-[1.042vw] tracking-[-0.01em] leading-[125%] font-[400] text-white w-[28.819vw]">
                    Gone are the days of copy and pasting actuals from 12
                    different places every month. Runway connects with your
                    accounting, HRIS, data warehouse tools, and more to
                    automatically keep your forecasts up to date with new
                    actuals.
                  </p>
                </div>
              )}
              <button
                onClick={() => setSelectedTab("Modeling")}
                className={`flex items-center w-full text-[1.736vw] h-[3.5vw] font-[600] leading-[100%] tracking-[-0.03em] text-left hover:text-white text-[#4a5357] border-t border-[#4a5357] border-opacity-[0.9] ${
                  selectedTab === "Modeling" ? "text-white" : ""
                }`}
              >
                Modeling
              </button>
              {selectedTab === "Modeling" && (
                <div className="flex flex-col gap-[2.083vw]">
                  <h2 className="text-[2.431vw] leading-[1] tracking-[-0.03em] text-white font-[600] w-fit">
                    A{" "}
                    <span className="text-[#ade988]">
                      joyful modeling experience
                    </span>{" "}
                    that prepares you for scale.
                  </h2>
                  <div className="relative text-[1.042vw] text-[#4a5357] leading-[100%] font-[600] tracking-[-0.02em]">
                    {/* Airplane Icon */}
                    <span className="absolute -top-[1.2vw] left-[15vw] text-[#ade988] p-[0.694vw] w-[50px] flex justify-center items-center">
                      <IoIosAirplane className="w-[28px] h-[28px]" />
                    </span>

                    {/* Border with Text */}
                    <div className="flex items-center gap-[1.042vw]">
                      <span>AUT</span>
                      <span className="w-[15.972vw] border-b border-dashed border-[#4a5357]"></span>
                      <span>ACT</span>
                    </div>
                  </div>
                  <p className="text-[1.042vw] tracking-[-0.01em] leading-[125%] font-[400] text-white w-[28.819vw]">
                    Write formulas that humans can read. Most Runway models are
                    50x simpler than Excel, which makes scaling and tracing
                    values a breeze.
                  </p>
                </div>
              )}
              <button
                onClick={() => setSelectedTab("Scenario Planning")}
                className={`flex items-center w-full text-[1.736vw] h-[3.5vw] font-[600] leading-[100%] tracking-[-0.03em] text-left hover:text-white text-[#4a5357] border-t border-[#4a5357] border-opacity-[0.9] ${
                  selectedTab === "Scenario Planning" ? "text-white" : ""
                }`}
              >
                Scenario Planning
              </button>
              {selectedTab === "Scenario Planning" && (
                <div className="flex flex-col gap-[2.083vw]">
                  <h2 className="text-[2.431vw] leading-[1] tracking-[-0.03em] text-white font-[600] w-fit">
                    Answer <span className="text-[#2c8ac0]">“what if“</span>{" "}
                    questions and connect numbers with your business intent.
                  </h2>
                  <div className="relative text-[1.042vw] text-[#4a5357] leading-[100%] font-[600] tracking-[-0.02em]">
                    {/* Airplane Icon */}
                    <span className="absolute -top-[1.2vw] left-[15vw] text-[#2c8ac0] p-[0.694vw] w-[50px] flex justify-center items-center">
                      <IoIosAirplane className="w-[28px] h-[28px]" />
                    </span>

                    {/* Border with Text */}
                    <div className="flex items-center gap-[1.042vw]">
                      <span>AUT</span>
                      <span className="w-[15.972vw] border-b border-dashed border-[#4a5357]"></span>
                      <span>ACT</span>
                    </div>
                  </div>
                  <p className="text-[1.042vw] tracking-[-0.01em] leading-[125%] font-[400] text-white w-[28.819vw]">
                    Compare plans and outcomes to find the best strategies to
                    hit your goals. Exclusive to Runway, Plans explain why
                    numbers change, capturing context that spreadsheets alone
                    cannot. Drag and drop to play with Plans, instead of fussing
                    with D17 and Sheet8!Q4823
                  </p>
                </div>
              )}
              <button
                onClick={() => setSelectedTab("Reports")}
                className={`flex items-center w-full text-[1.736vw] h-[3.5vw] font-[600] leading-[100%] tracking-[-0.03em] text-left hover:text-white text-[#4a5357] border-t border-[#4a5357] border-opacity-[0.9] ${
                  selectedTab === "Reports" ? "text-white" : ""
                }`}
              >
                Reports
              </button>
              {selectedTab === "Reports" && (
                <div className="flex flex-col gap-[2.083vw]">
                  <h2 className="text-[2.431vw] leading-[1] tracking-[-0.03em] text-white font-[600] w-fit">
                    Create beautiful and{" "}
                    <span className="text-[#b08ce1]">interactive reports</span>{" "}
                    in seconds that never go out-of-date.
                  </h2>
                  <div className="relative text-[1.042vw] text-[#4a5357] leading-[100%] font-[600] tracking-[-0.02em]">
                    {/* Airplane Icon */}
                    <span className="absolute -top-[1.2vw] left-[15vw] text-[#b08ce1] p-[0.694vw] w-[50px] flex justify-center items-center">
                      <IoIosAirplane className="w-[28px] h-[28px]" />
                    </span>

                    {/* Border with Text */}
                    <div className="flex items-center gap-[1.042vw]">
                      <span>AUT</span>
                      <span className="w-[15.972vw] border-b border-dashed border-[#4a5357]"></span>
                      <span>ACT</span>
                    </div>
                  </div>
                  <p className="text-[1.042vw] tracking-[-0.01em] leading-[125%] font-[400] text-white w-[28.819vw]">
                    Prepare board updates and build dashboards with live charts,
                    tables, and text in seconds. You have full control over who
                    sees what. You can even embed videos and live content from
                    the web to tell a compelling story and give stakeholders the
                    context they need.
                  </p>
                </div>
              )}
              <button
                onClick={() => setSelectedTab("Ambient Intelligence")}
                className={`flex items-center w-full text-[1.736vw] h-[3.5vw] font-[600] leading-[100%] tracking-[-0.03em] text-left hover:text-white text-[#4a5357] border-t border-[#4a5357] border-opacity-[0.9] ${
                  selectedTab === "Ambient Intelligence" ? "text-white" : ""
                }`}
              >
                Ambient Intelligence
              </button>
              {selectedTab === "Ambient Intelligence" && (
                <div className="flex flex-col gap-[2.083vw]">
                  <h2 className="text-[2.431vw] leading-[1] tracking-[-0.03em] text-white font-[600] w-fit">
                    Get the <span className="text-[#f06246]">insights</span> you
                    need without having to ask.
                  </h2>
                  <div className="relative text-[1.042vw] text-[#4a5357] leading-[100%] font-[600] tracking-[-0.02em]">
                    {/* Airplane Icon */}
                    <span className="absolute -top-[1.2vw] left-[15vw] text-[#f06246] p-[0.694vw] w-[50px] flex justify-center items-center">
                      <IoIosAirplane className="w-[28px] h-[28px]" />
                    </span>

                    {/* Border with Text */}
                    <div className="flex items-center gap-[1.042vw]">
                      <span>AUT</span>
                      <span className="w-[15.972vw] border-b border-dashed border-[#4a5357]"></span>
                      <span>ACT</span>
                    </div>
                  </div>
                  <p className="text-[1.042vw] tracking-[-0.01em] leading-[125%] font-[400] text-white w-[28.819vw]">
                    Runway proactively provides clear explanations for your
                    drivers, highlights budget variances, summarizes scenario
                    differences, and more. This ensures you always have the
                    right information at your fingertips, empowering you to make
                    the best decisions possible. Sign up to be considered for
                    early access.
                  </p>
                </div>
              )}
            </nav>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-2 w-[50.903vw] h-[41.667vw] bg-white rounded-[1.389vw] overflow-hidden">
          <div className="w-full h-full">
            <video
              src={videos[selectedTab]}
              alt={selectedTab}
              className="w-full h-full object-cover"
              autoPlay
              muted
            />
          </div>
        </div>
      </div>
    </div>
  );
}
