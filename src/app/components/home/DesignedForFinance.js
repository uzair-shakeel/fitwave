import React from "react";
import { BsSpeedometer } from "react-icons/bs";

const DesignedForFinance = () => {
  const features = [
    {
      icon: <BsSpeedometer className="w-[1.9vw] h-[1.9vw]" />,
      title: "Forecast revenue, expenses, and burn",
      description:
        "With human-readable formulas and over a hundred integrations, modeling key financial metrics is easier and more accurate than ever before.",
      image: "/assets/DfF-img1.webp",
    },
    {
      icon: (
        <img src="/assets/boxes.svg" alt="icon" className="w-[2vw] h-[2vw]" />
      ),
      title: "Level up your financial plan",
      description:
        "Eliminate busywork with powerful automation and a joyful modeling experience that’s designed for scale.",
      image: "/assets/DfF-img2.webp",
    },
    {
      icon: (
        <img src="/assets/analyze.svg" alt="icon" className="w-[2vw] h-[2vw]" />
      ),
      title: "Analyze different scenarios and possible outcomes",
      description:
        "Remove yourself as the bottleneck and empower your stakeholders with the tools they need to answer 'what if?' and make enlightened decisions faster.",
      image: "/assets/DfF-img3.webp",
    },
  ];

  return (
    <div className="bg-blackish py-16 mx-auto xl:ps-[200px] ps-[8.984vw] pe-[15px]">
      <h2 className="text-white text-[7.292vw] font-[600] leading-[90%] tracking-[-0.04em] mb-[1.528vw] max-w-[50.694vw] pt-[0.694vw]">
        Designed for Finance
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

export default DesignedForFinance;
