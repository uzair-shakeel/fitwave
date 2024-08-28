import React from "react";

const TimelineCard = ({ imageSrc, heading, children }) => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row items-center p-8 rounded-[1.389vw] gap-[2.639vw]">
        {/* Image Section */}
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8 w-[435px] h-[430px]">
          <img
            src={imageSrc}
            alt="Timeline Image"
            className="w-full h-full rounded-[20px] object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-[2.083vw] justify-center">
          <h2 className="text-[2.431vw] font-[600] leading-[90%] tracking-[-0.03em] text-white">
            {heading}
          </h2>
          {/* Dynamically rendered children elements */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
