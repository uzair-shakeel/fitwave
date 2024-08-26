import React from "react";
import { BsSpeedometer } from "react-icons/bs";

const BuiltForExecutives = () => {
  const features = [
    {
      icon: (
        <img src="/assets/page.svg" alt="icon" className="w-[2vw] h-[2vw]" />
      ),
      title: "Raise capital from investors",
      description:
        "Share the context around your numbers with beautiful and detailed reports that never go out-of-date.",
      image: "/assets/BfE-img1.webp",
    },
    {
      icon: (
        <img src="/assets/link.svg" alt="icon" className="w-[2vw] h-[2vw]" />
      ),
      title: "Plan for a new product launch",
      description:
        "Deeply understand the impact of any plan, play with timing, and coordinate everyone on your team.",
      image: "/assets/BfE-img2.webp",
    },
    {
      icon: (
        <img src="/assets/arrows.svg" alt="icon" className="w-[2vw] h-[2vw]" />
      ),
      title: "Scale your team and operations",
      description:
        "Plan for new headcount and initiatives with clear insight into how it affects growth and runway.",
      image: "/assets/BfE-img3.webp",
    },
  ];

  return (
    <div className="bg-blackish py-16 max-w-[1920px] mx-auto xl:ps-[200px] ps-[8.984vw] pe-[15px]">
      <h2 className="text-white text-[7.292vw] font-[600] leading-[90%] tracking-[-0.04em] mb-[1.528vw] max-w-[50.694vw] pt-[0.694vw]">
        Built for Executives
      </h2>
      <div className="flex flex-wrap gap-[1.042vw]">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-orangish px-[15px] rounded-[1.111vw] shadow-md w-full md:max-w-[24.5vw] flex flex-col justify-between items-start"
          >
            <div>
              <div className="pt-[1.389vw] pb-[1.736vw]">
                <div className="text-white bg-blackish rounded-full w-[3.194vw] h-[3.194vw] flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-blackish text-[1.736vw] font-[600] tracking-[-0.03em] leading-[100%] mt-[1vw]">
                  {feature.title}
                </h3>
              </div>
              <p className="text-blackish text-[1.042vw] leading-[125%] tracking-[-0.01em] font-[400]">
                {feature.description}
              </p>
            </div>
            <span>
              <img
                src={feature.image}
                alt={feature.title}
                className="ms-[15px] w-full h-auto rounded-lg object-cover"
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuiltForExecutives;
