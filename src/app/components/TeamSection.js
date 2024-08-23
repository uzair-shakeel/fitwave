import React from "react";

const TeamSection = () => {
  const teamData = [
    {
      name: "Siqi Chen",
      title: "Founder & CEO",
      imgSrc: "/assets/member.webp",
    },
    {
      name: "Wells Riley",
      title: "Design",
      imgSrc: "/assets/member2.webp",
    },
    {
      name: "Jonathan Lack",
      title: "Engineering",
      imgSrc: "/assets/member3.webp",
    },
    {
      name: "Ayesha Mahajan",
      title: "Operations",
      imgSrc: "/assets/member4.webp",
    },
    {
      name: "Sebastian Winemaker",
      title: "Engineering",
      imgSrc: "/assets/member5.webp",
    },
    {
      name: "Kelsey Fecho",
      title: "Product",
      imgSrc: "/assets/member6.webp",
    },
    {
      name: "Alexander Forman",
      title: "Talent",
      imgSrc: "/assets/member7.webp",
    },
    {
      name: "Tanner Mcgrath",
      title: "Product",
      imgSrc: "/assets/member8.webp",
    },
    {
      name: "Anna Conaway",
      title: "Customer Experience",
      imgSrc: "/assets/member9.webp",
    },
    {
      name: "Shivam Thapar",
      title: "Engineering",
      imgSrc: "/assets/member10.webp",
    },
    {
      name: "Andy Yu",
      title: "Engineering",
      imgSrc: "/assets/member11.webp",
    },
    {
      name: "Lawrence Yong",
      title: "Design",
      imgSrc: "/assets/member12.webp",
    },
    {
      name: "Shinjini Saha",
      title: "Engineering",
      imgSrc: "/assets/member13.webp",
    },
    {
      name: "Wells Riley",
      title: "Design",
      imgSrc: "/assets/member.webp",
    },
    {
      name: "Jonathan Lack",
      title: "Engineering",
      imgSrc: "/assets/member2.webp",
    },
    {
      name: "Ayesha Mahajan",
      title: "Operations",
      imgSrc: "/assets/member3.webp",
    },
    {
      name: "Siqi Chen",
      title: "Founder & CEO",
      imgSrc: "/assets/member4.webp",
    },
    {
      name: "Wells Riley",
      title: "Design",
      imgSrc: "/assets/member5.webp",
    },
    {
      name: "Jonathan Lack",
      title: "Engineering",
      imgSrc: "/assets/member6.webp",
    },
    {
      name: "Ayesha Mahajan",
      title: "Operations",
      imgSrc: "/assets/member7.webp",
    },
    {
      name: "Siqi Chen",
      title: "Founder & CEO",
      imgSrc: "/assets/member8.webp",
    },
    {
      name: "Wells Riley",
      title: "Design",
      imgSrc: "/assets/member9.webp",
    },
    {
      name: "Jonathan Lack",
      title: "Engineering",
      imgSrc: "/assets/member11.webp",
    },
    {
      name: "Ayesha Mahajan",
      title: "Operations",
      imgSrc: "/assets/member12.webp",
    },
    {
      name: "Siqi Chen",
      title: "Founder & CEO",
      imgSrc: "/assets/member13.webp",
    },
    {
      name: "Wells Riley",
      title: "Design",
      imgSrc: "/assets/member.webp",
    },
    {
      name: "Jonathan Lack",
      title: "Engineering",
      imgSrc: "/assets/member10.webp",
    },
    {
      name: "Ayesha Mahajan",
      title: "Operations",
      imgSrc: "/assets/member2.webp",
    },
    {
      name: "Siqi Chen",
      title: "Founder & CEO",
      imgSrc: "/assets/member3.webp",
    },
    {
      name: "Wells Riley",
      title: "Design",
      imgSrc: "/assets/member4.webp",
    },
    {
      name: "Jonathan Lack",
      title: "Engineering",
      imgSrc: "/assets/member5.webp",
    },
    {
      name: "Ayesha Mahajan",
      title: "Operations",
      imgSrc: "/assets/member6.webp",
    },
    {
      name: "Ayesha Mahajan",
      title: "Operations",
      imgSrc: "/assets/member7.webp",
    },
  ];

  return (
    <section className="max-w-[1920px] text-white pt-[200px] xl:px-[130px] px-[8.984vw] xl:pb-[140px] pb-[13.672vw]">
      <div className="mx-auto">
        <div className="max-w-[538px] flex flex-col gap-[30px] mb-[30px]">
          {/* Icon and Heading */}
          <div className="flex justify-center items-center w-fit  bg-orangish rounded-full mb-[-10px]">
            <span className="w-[54px] h-[54px] p-[5px]">
              <img
                className="w-full h-full"
                src="/assets/team.svg"
                alt="team-img"
              />
            </span>
          </div>
          <h2 className="md:text-[7.094vw] text-[15.5vw] leading-[90%] tracking-[-0.04em] text-white font-[600]">
            The Runway Crew
          </h2>
          <p className="text-[25px] tracking-[-0.02em] leading-[125%] font-[400] text-orangish">
            The people behind the pixels.
          </p>
        </div>

        {/* Team Members */}
        <div className="flex flex-wrap justify-center xl:gap-x-[158px] sm:gap-x-[15.43vw] xl:gap-y-[105px] sm:gap-0 gap-[17.333vw] sm:gap-y-[10.254vw] mt-[100px]">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="text-center xl:w-[13.5%] sm:w-[18%] w-[39%] flex flex-col items-center mb-[20px]"
            >
              <div className="xl:w-[11.25vw] w-[15.82vw] xl:h-[250px] lg:h-[240px] mx-auto rounded-t-[99vw] rounded-b-[99vw] overflow-hidden mb-[1.389vw]">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[1.736vw] font-[700] leading-[100%] w-max tracking-[-0.03em] text-white mb-[0.556vw]">
                {member.name}
              </h3>
              <p className="text-[1.042vw] font-[400] tracking-[-0.01em] text-white">
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
