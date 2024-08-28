"use client";
import React, { useEffect, useRef } from "react";
import TimelineCard from "./TimelineCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const pathRef0 = useRef(null);
  const pathRef1 = useRef(null);
  return (
    <div className="relative max-w-[1920px] mx-auto flex flex-col gap-[17.361vw] pt-[450px] pb-[160px]">
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2069 5746"
        className="Desktop__Paths-sc-4c7b19-1 zbzgA left-[-460px] top-[140px] absolute"
      >
        <path
          d="M572 15L572 5531C572 5641.46 482.457 5731 372 5731L14.9995 5731"
          stroke="#4A5357"
          strokeWidth="30"
          strokeLinecap="round"
        ></path>
        <path
          d="M2013.51 5464H772C661.543 5464 572 5374.46 572 5264L572 362C572 251.543 661.543 162 772 162H2054"
          stroke="#4A5357"
          strokeWidth="30"
          strokeLinecap="round"
        ></path>
        <path
          className="timeline-path-1"
          d="M572 15L572 5531C572 5641.46 482.457 5731 372 5731L14.9995 5731"
          stroke="#FFC655"
          strokeWidth="30"
          strokeLinecap="round"
          style={{
            strokeDashoffset: "0.000986px",
            strokeDasharray: "43.6318px, 6143.67px",
          }}
        ></path>
        <path
          className="timeline-path-2"
          d="M2013.51 5464H772C661.543 5464 572 5374.46 572 5264L572 362C572 251.543 661.543 162 772 162H2054"
          stroke="#F9A600"
          strokeWidth="30"
          strokeLinecap="round"
          style={{
            strokeDashoffset: "-7017.95px",
            strokeDasharray: "1035.87px, 7018.25px",
          }}
        ></path>
      </svg>
      <div className="flex items-center gap-[2.639vw] px-[2vw] relative z-[30]">
        <div className="min-w-[5.208vw] min-h-[5.208vw] rounded-full text-[1.25vw] text-[#2c353a] font-[600] leading-[100%] uppercase border-[5px] border-[#4a5357] bg-blackish flex items-center justify-center">
          2007
        </div>
        <TimelineCard
          imageSrc="/assets/timeline-img1.webp"
          heading="Why do we care so much?"
        >
          <p className="text-[1.528vw] font-[400] leading-[125%] tracking-[-0.02em] text-white">
            Hi! I'm Siqi, one of the founders of Runway. This is me when I was
            23 and running my first company: Serious Business. Every month, I
            got these spreadsheets in my inbox from a Harvard MBA on my team
            that I didn't really understand.
          </p>
          <p className="text-[1.528vw] font-[400] leading-[125%] tracking-[-0.02em] text-white">
            But that's okay –{" "}
            <span className="font-[700]">
              that's what 'business people' are for right?
            </span>
          </p>
        </TimelineCard>
      </div>

      <div className="flex items-center gap-[2.639vw] px-[2vw] relative z-[30]">
        <div className="min-w-[5.208vw] min-h-[5.208vw] rounded-full text-[1.25vw] text-[#2c353a] font-[600] leading-[100%] uppercase border-[5px] border-[#4a5357] bg-blackish flex items-center justify-center">
          2007
        </div>
        <TimelineCard
          imageSrc="/assets/timeline-img2.webp"
          heading="Finance has always made me feel insecure"
        >
          <p className="text-[1.528vw] font-[400] leading-[125%] tracking-[-0.02em] text-white">
            Even as a 4-time CEO and 3-time founder, I've always been insecure
            about my understanding of the business side of things.
          </p>
          <p className="text-[1.528vw] font-[400] leading-[125%] tracking-[-0.02em] text-white">
            I didn't think of myself as a "business person." I didn't even know
            what contribution margin meant until I was responsible for the
            metric at Postmates.
          </p>
        </TimelineCard>
      </div>

      <div className="flex items-center gap-[2.639vw] px-[2vw] relative z-[30]">
        <div className="min-w-[5.208vw] min-h-[5.208vw] rounded-full text-[1.25vw] text-[#2c353a] font-[600] leading-[100%] uppercase border-[5px] border-[#4a5357] bg-blackish flex items-center justify-center">
          2007
        </div>
        <TimelineCard
          imageSrc="/assets/timeline-img3.webp"
          heading="Fast Forward"
        >
          <p className="text-[1.528vw] font-[400] leading-[125%] tracking-[-0.02em] text-white">
            Fast forward to March 2020, I was just appointed CEO of a company
            called Sandbox VR.
          </p>
          <p className="text-[1.528vw] font-[400] leading-[125%] tracking-[-0.02em] text-white">
            COVID hit, and we immediately had to scramble. Our CFO and I were
            scenario planning in Excel: what happens if COVID lasts 3 months? 6
            months? 2 years? Long story short, we had to lay off most of the
            company and hibernate. And so that's what we did.
          </p>
        </TimelineCard>
      </div>

      <div className="flex items-center gap-[2.639vw] px-[2vw] relative z-[30]">
        <div className="min-w-[5.208vw] min-h-[5.208vw] rounded-full text-[1.25vw] text-[#2c353a] font-[600] leading-[100%] uppercase border-[5px] border-[#4a5357] bg-blackish flex items-center justify-center">
          2020
        </div>
        <TimelineCard
          imageSrc="/assets/timeline-img4.webp"
          heading="Is this the best we can do?"
        >
          <p className="text-[1.528vw] font-[400] leading-[125%] tracking-[-0.02em] text-white">
            About half an hour after I laid myself off, I asked our CFO Akash if
            there wasn't something better we would have used, because the
            experience of making copies of spreadsheets and finding bugs in them
            really sucked. And he told me it's pretty much spreadsheets or ugly
            enterprise software, that's it.
          </p>
          <p className="text-[1.528vw] font-[400] leading-[125%] tracking-[-0.02em] text-white">
            In the past decade or so, we've built amazing products for literally
            everything else a company does - from analytics to communication,
            from design to project management. Why hasn't dealing with
            financials in a company changed at all? In a world where Figma and
            Notion exist, that seems like an opportunity. And so we started
            Runway.
          </p>
        </TimelineCard>
      </div>

      <div className="flex items-center gap-[2.639vw] px-[2vw] relative z-[30]">
        <div className="min-w-[5.208vw] min-h-[5.208vw] rounded-full text-[1.25vw] text-[#2c353a] font-[600] leading-[100%] uppercase border-[5px] border-[#4a5357] bg-blackish flex items-center justify-center">
          2020
        </div>
        <TimelineCard
          imageSrc="/assets/timeline-img5.webp"
          heading="Getting off the ground"
        >
          <p className="text-[1.528vw] font-[400] leading-[125%] tracking-[-0.02em] text-white">
            And so we got started right in the middle of the pandemic. Luckily,
            we found some incredible people who believed in our mission,
            including Garry Tan (YC & Initialized), a16z, Elad Gil, Naval
            Ravikant, Dylan Field (founder of Figma), Eric Ries, Claire Hughes
            Johnson (COO of Stripe), Henry Ward (founder of Carta), Akshay
            Kothari (COO of Notion), Eugene Wei, Lenny Rachitsky, Nikita Bier,
            Scott Belsky, Soleio Cuervo, Balaji Srinivasan, and many others.
          </p>
        </TimelineCard>
      </div>

      <div className="flex items-center gap-[2.639vw] px-[2vw] relative z-[30]">
        <div className="min-w-[5.208vw] min-h-[5.208vw] rounded-full text-[1.25vw] text-[#2c353a] font-[600] leading-[100%] uppercase border-[5px] border-[#4a5357] bg-blackish flex items-center justify-center">
          2021
        </div>
        <TimelineCard
          imageSrc="/assets/timeline-img6.webp"
          heading="Encountering turbulence"
        >
          <p className="text-[1.528vw] font-[400] leading-[125%] tracking-[-0.02em] text-white">
            It wasn't all smooth sailing from there. It took us a long time to
            deeply understand the problems facing finance owners and business
            operators today, and invent new solutions to these problems that are
            powerful, flexible, and accessible.
          </p>
          <p className="text-[1.528vw] font-[400] leading-[125%] tracking-[-0.02em] text-white">
            To get off the ground, we had to rebuild a good chunk of Excel,
            invent new abstractions that connect your business intent with
            numbers for the first time, and integrate with hundreds of sources
            of data within enterprises.
          </p>
        </TimelineCard>
      </div>

      <div className="flex items-center gap-[2.639vw] px-[2vw] relative z-[30]">
        <div className="min-w-[5.208vw] min-h-[5.208vw] rounded-full text-[1.25vw] text-[#2c353a] font-[600] leading-[100%] uppercase border-[5px] border-[#4a5357] bg-blackish flex items-center justify-center">
          2021
        </div>
        <TimelineCard
          imageSrc="/assets/timeline-img7.webp"
          heading="Building a culture of shared values"
        >
          <p className="text-[1.528vw] font-[400] leading-[125%] tracking-[-0.02em] text-white">
            Through a lot of pain and sweat, we've learned how to build
            successful products in a way that is unique to Runway, and we've
            crystallized these learnings into the Runway values.
          </p>
          <div className="border border-white rounded-[1.389vw]">
            <div className="border-b border-[#4a5357]">
              <div className="flex justify-between text-white pt-[1.181vw] px-[2.083vw] pb-[1.111vw]">
                <span className="text-[1.25vw] font-[600] leading-[100%] tracking-[-0.03em]">
                  Give a Shit
                </span>
                <span className="w-[1.736vw]">
                  <img
                    className="w-full h-full"
                    src="/assets/shit.svg"
                    alt="poop"
                  />
                </span>
              </div>
            </div>
            <div className="border-b border-[#4a5357]">
              <div className="flex justify-between text-white pt-[1.181vw] px-[2.083vw] pb-[1.111vw]">
                <span className="text-[1.25vw] font-[600] leading-[100%] tracking-[-0.03em]">
                  Create Clarity
                </span>
                <span className="w-[1.736vw]">
                  <img
                    className="w-full h-full"
                    src="/assets/clarity-icon.svg"
                    alt="poop"
                  />
                </span>
              </div>
            </div>
            <div className="border-b border-[#4a5357]">
              <div className="flex justify-between text-white pt-[1.181vw] px-[2.083vw] pb-[1.111vw]">
                <span className="text-[1.25vw] font-[600] leading-[100%] tracking-[-0.03em]">
                  Build Trust
                </span>
                <span className="w-[1.736vw]">
                  <img
                    className="w-full h-full"
                    src="/assets/trust-icon.svg"
                    alt="poop"
                  />
                </span>
              </div>
            </div>
            <div className="flex justify-between text-white pt-[1.181vw] px-[2.083vw] pb-[1.111vw]">
              <span className="text-[1.25vw] font-[600] leading-[100%] tracking-[-0.03em]">
                Raise the Bar
              </span>
              <span className="w-[1.736vw]">
                <img
                  className="w-full h-full"
                  src="/assets/raise-the-bar-icon.svg"
                  alt="poop"
                />
              </span>
            </div>
          </div>
        </TimelineCard>
      </div>

      <div className="flex items-center gap-[2.639vw] px-[2vw] relative z-[30]">
        <div className="min-w-[5.208vw] min-h-[5.208vw] rounded-full text-[1.25vw] text-[#2c353a] font-[600] leading-[100%] uppercase border-[5px] border-[#4a5357] bg-blackish flex items-center justify-center">
          Today
        </div>
        <TimelineCard
          imageSrc="/assets/timeline-img8.webp"
          heading="Runway Today"
        >
          <p className="text-[1.528vw] font-[400] leading-[125%] tracking-[-0.02em] text-white">
            Now—four years later—we are at an inflection point. While there's so
            much more to do, it's clear that our mission to make business
            accessible and understandable to everyone is within reach.
          </p>
          <p className="text-[1.528vw] font-[400] leading-[125%] tracking-[-0.02em] text-white">
            Already, companies like AngelList, Superhuman, Stability.AI, Lob,
            Grain, SandboxVR and many more, large and small, have chosen Runway
            to help them run their businesses. More are joining them every day.
          </p>
          <p className="text-[1.528vw] font-[400] leading-[125%] tracking-[-0.02em] text-white">
            Customers are coming to us faster than we can onboard them. Finance
            leaders are moved by what we're building, and we can't build fast
            enough to keep up with demand.
          </p>
        </TimelineCard>
      </div>
    </div>
  );
};

export default Timeline;
