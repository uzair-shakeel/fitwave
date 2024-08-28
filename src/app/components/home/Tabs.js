"use client";
import { useState, useEffect, useRef } from "react";
import { IoIosAirplane } from "react-icons/io";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState("Meet Runway");
  const sectionsRef = useRef([]);
  const contentRef = useRef(null);

  const videos = {
    "Meet Runway": "/assets/videos/meet-runway.webm",
    Integrations: "/assets/videos/integration.webm",
    Modeling: "/assets/videos/modeling.webm",
    "Scenario Planning": "/assets/videos/scenario-planning.webm",
    Reports: "/assets/videos/reports.webm",
    "Ambient Intelligence": "/assets/videos/intelligence.webm",
  };

  useEffect(() => {
    // GSAP ScrollTrigger setup
    const pinTrigger = ScrollTrigger.create({
      trigger: ".pin-wrapper",
      start: "top 20%",
      end: "+=100vh",
      pin: true,
      pinSpacing: false,
      onUpdate: (self) => {
        const index = Math.floor(
          self.progress * (sectionsRef.current.length - 1)
        );
        setSelectedTab(Object.keys(videos)[index]);
      },
    });

    // Cleanup function
    return () => {
      pinTrigger.kill();
    };
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }
  }, [selectedTab]);

  return (
    <div className="min-h-screen pt-[50px] pb-[140px]">
      <div className="pin-wrapper flex gap-[0.694vw] mx-auto max-w-[1411.2px]">
        {/* Tabs Section */}
        <div className="bg-blackish text-white w-[32.292vw] h-[41.667vw] px-[1.944vw] rounded-[1.389vw] flex flex-col justify-between">
          <div className="flex flex-col justify-between h-full">
            <div ref={contentRef} className="transition-content">
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
                {Object.keys(videos).map((tabName, index) => (
                  <div
                    key={tabName}
                    ref={(el) => (sectionsRef.current[index] = el)}
                  >
                    <button
                      onClick={() => setSelectedTab(tabName)}
                      className={`flex items-center w-full text-[1.736vw] h-[3.5vw] font-[600] leading-[100%] tracking-[-0.03em] text-left hover:text-white text-[#4a5357] border-t border-[#4a5357] border-opacity-[0.9] ${
                        selectedTab === tabName ? "text-white" : ""
                      }`}
                    >
                      {tabName}
                    </button>
                    {selectedTab === tabName && (
                      <div className="flex flex-col gap-[2.083vw]">
                        <h2 className="text-[2.431vw] leading-[1] tracking-[-0.03em] text-white font-[600] w-fit">
                          {tabName === "Integrations" && (
                            <>
                              <span className="text-orangish">Automate</span>{" "}
                              actuals from all your business tools.
                            </>
                          )}
                          {tabName === "Modeling" && (
                            <>
                              A{" "}
                              <span className="text-[#ade988]">
                                joyful modeling experience
                              </span>{" "}
                              that prepares you for scale.
                            </>
                          )}
                          {tabName === "Scenario Planning" && (
                            <>
                              Answer{" "}
                              <span className="text-[#2c8ac0]">“what if“</span>{" "}
                              questions and connect numbers with your business
                              intent.
                            </>
                          )}
                          {tabName === "Reports" && (
                            <>
                              Custom reports and{" "}
                              <span className="text-[#c23e2b]">dashboards</span>{" "}
                              are as simple as adding to your cart.
                            </>
                          )}
                          {tabName === "Ambient Intelligence" && (
                            <>
                              <span className="text-[#d6a529]">
                                Data-driven
                              </span>{" "}
                              insights for a brighter future.
                            </>
                          )}
                        </h2>
                        <div className="relative text-[1.042vw] text-[#4a5357] leading-[100%] font-[600] tracking-[-0.02em]">
                          <span
                            className={`absolute -top-[1.2vw] left-[15vw] p-[0.694vw] w-[50px] flex justify-center items-center ${
                              tabName === "Integrations"
                                ? "text-orangish"
                                : tabName === "Modeling"
                                ? "text-[#ade988]"
                                : tabName === "Scenario Planning"
                                ? "text-[#2c8ac0]"
                                : tabName === "Reports"
                                ? "text-[#c23e2b]"
                                : tabName === "Ambient Intelligence"
                                ? "text-[#d6a529]"
                                : ""
                            }`}
                          >
                            <IoIosAirplane className="w-[28px] h-[28px]" />
                          </span>
                          <div className="flex items-center gap-[1.042vw]">
                            <span>AUT</span>
                            <span className="w-[15.972vw] border-b border-dashed border-[#4a5357]"></span>
                            <span>ACT</span>
                          </div>
                        </div>
                        <p className="text-[1.042vw] tracking-[-0.01em] leading-[125%] font-[400] text-white w-[28.819vw]">
                          {tabName === "Integrations" &&
                            "Gone are the days of copy and pasting actuals from 12 different places every month. Runway connects with your accounting, HRIS, data warehouse tools, and more to automatically keep your forecasts up to date with new actuals."}
                          {tabName === "Modeling" &&
                            "Write formulas that humans can read. Most Runway models are 50x simpler than Excel, which makes scaling and tracing values a breeze."}
                          {tabName === "Scenario Planning" &&
                            "Easily modify forecasts and answer key questions that would take days or weeks in a spreadsheet in minutes."}
                          {tabName === "Reports" &&
                            "Our reports and dashboards builder is intuitive and makes creating the custom reports you need easier than ever."}
                          {tabName === "Ambient Intelligence" &&
                            "Harness the power of data-driven insights to unlock new opportunities and create a brighter, more efficient future."}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="bg-white w-[67.708vw] h-[41.667vw] px-[1.944vw] rounded-[1.389vw]">
          <video
            key={selectedTab}
            className="w-full h-full object-cover rounded-[1.389vw]"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videos[selectedTab]} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
