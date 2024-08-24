import React from "react";
import TimelineCard from "./TimelineCard";

const Timeline = () => {
  return (
    <div className="flex flex-col gap-[17.361vw] py-[160px]">
      <TimelineCard
        imageSrc="/assets/timeline-img1.webp"
        heading="Why do we care so much?"
      >
        <p className="text-[1.528vw] font-[400] leading-[125%] tracking-[-0.02em] text-white">
          Hi! I'm Siqi, one of the founders of Runway. This is me when I was 23
          and running my first company: Serious Business. Every month, I got
          these spreadsheets in my inbox from a Harvard MBA on my team that I
          didn't really understand.
        </p>
        <p className="text-[1.528vw] font-[400] leading-[125%] tracking-[-0.02em] text-white">
          But that's okay –{" "}
          <span className="font-[700]">
            that's what 'business people' are for right?
          </span>
        </p>
      </TimelineCard>

      <TimelineCard
        imageSrc="/assets/timeline-img1.webp"
        heading="Finance has always made me feel insecure"
      >
        <p className="text-[1.528vw] font-[400] leading-[125%] tracking-[-0.02em] text-white">
          Even as a 4-time CEO and 3-time founder, I've always been insecure
          about my understanding of the business side of things.
        </p>
        <p className="text-[1.528vw] font-[400] leading-[125%] tracking-[-0.02em] text-white">
          I didn't think of myself as a "business person." I didn't even know
          what contribution margin meant until I was responsible for the metric
          at Postmates.
        </p>
      </TimelineCard>

      <TimelineCard
        imageSrc="/assets/timeline-img1.webp"
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

      <TimelineCard
        imageSrc="/assets/timeline-img1.webp"
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
          everything else a company does - from analytics to communication, from
          design to project management. Why hasn't dealing with financials in a
          company changed at all? In a world where Figma and Notion exist, that
          seems like an opportunity. And so we started Runway.
        </p>
      </TimelineCard>

      <TimelineCard
        imageSrc="/assets/timeline-img1.webp"
        heading="Getting off the ground"
      >
        <p className="text-[1.528vw] font-[400] leading-[125%] tracking-[-0.02em] text-white">
          And so we got started right in the middle of the pandemic. Luckily, we
          found some incredible people who believed in our mission, including
          Garry Tan (YC & Initialized), a16z, Elad Gil, Naval Ravikant, Dylan
          Field (founder of Figma), Eric Ries, Claire Hughes Johnson (COO of
          Stripe), Henry Ward (founder of Carta), Akshay Kothari (COO of
          Notion), Eugene Wei, Lenny Rachitsky, Nikita Bier, Scott Belsky,
          Soleio Cuervo, Balaji Srinivasan, and many others.
        </p>
      </TimelineCard>

      <TimelineCard
        imageSrc="/assets/timeline-img1.webp"
        heading="Encountering turbulence"
      >
        <p className="text-[1.528vw] font-[400] leading-[125%] tracking-[-0.02em] text-white">
          It wasn't all smooth sailing from there. It took us a long time to
          deeply understand the problems facing finance owners and business
          operators today, and invent new solutions to these problems that are
          powerful, flexible, and accessible.
        </p>
        <p className="text-[1.528vw] font-[400] leading-[125%] tracking-[-0.02em] text-white">
          To get off the ground, we had to rebuild a good chunk of Excel, invent
          new abstractions that connect your business intent with numbers for
          the first time, and integrate with hundreds of sources of data within
          enterprises.
        </p>
      </TimelineCard>

      <TimelineCard
        imageSrc="/assets/timeline-img1.webp"
        heading="Building a culture of shared values"
      >
        <p className="text-[1.528vw] font-[400] leading-[125%] tracking-[-0.02em] text-white">
          Through a lot of pain and sweat, we've learned how to build successful
          products in a way that is unique to Runway, and we've crystallized
          these learnings into the Runway values.
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

      <TimelineCard
        imageSrc="/assets/timeline-img1.webp"
        heading="Runway Today"
      >
        <p className="text-[1.528vw] font-[400] leading-[125%] tracking-[-0.02em] text-white">
          Now—four years later—we are at an inflection point. While there's so
          much more to do, it's clear that our mission to make business
          accessible and understandable to everyone is within reach.
        </p>
        <p className="text-[1.528vw] font-[400] leading-[125%] tracking-[-0.02em] text-white">
          Already, companies like AngelList, Superhuman, Stability.AI, Lob,
          Grain, SandboxVR and many more, large and small, have chosen Runway to
          help them run their businesses. More are joining them every day.
        </p>
        <p className="text-[1.528vw] font-[400] leading-[125%] tracking-[-0.02em] text-white">
          Customers are coming to us faster than we can onboard them. Finance
          leaders are moved by what we're building, and we can't build fast
          enough to keep up with demand.
        </p>
      </TimelineCard>
    </div>
  );
};

export default Timeline;
