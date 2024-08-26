import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/home/Hero";
import GetStarted from "./components/home/GetStarted";
import DesignedForFinance from "./components/home/DesignedForFinance";
import BuiltForExecutives from "./components/home/BuiltForExecutives";
import Cards from "./components/home/Cards";
import ReadyforTakeoff from "./components/home/ReadyforTakeoff";

export default function Home() {
  return (
    <div className="bg-blue-300">
      <Header />
      <HeroSection />
      <div className="rounded-[1.389vw] bg-blackish overflow-hidden">
        <div className="lg:w-[40.347vw] md:w-[72.852vw] flex flex-col mb-[30px] py-[27.778vw] ps-[3.125vw]">
          {/* Icon and Heading */}
          <div className="flex justify-center items-center w-fit  bg-orangish rounded-full mb-[-10px]">
            <span className="w-[74.9px] h-[74.9px] p-[5px] flex items-center justify-center">
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 31"
                className="w-[39px] h-[39px]"
              >
                <path
                  d="M32.7188 30.2092L25.6611 30.1823L29.01 13.9866L12.2259 29.4822C11.7383 29.9323 11.099 30.1823 10.4353 30.1823H0.350586L24.5691 7.7427L9.97643 7.72816L12.817 1.29864C13.0989 0.660689 13.7309 0.24938 14.4283 0.250001L34.8251 0.268164C37.6565 0.269449 39.7495 2.90594 39.1084 5.66374L34.4507 28.7968C34.2848 29.6208 33.5593 30.2124 32.7188 30.2092Z"
                  fill="#192227"
                ></path>
              </svg>
            </span>
          </div>
          <h2 className="lg:text-[7.094vw] md:text-[12.207vw] lg:text-[145px] text-[10.069vw] leading-[90%] tracking-[-0.04em] text-white font-[600] py-[2.083vw] w-[53.125vw]">
            Runway is a better way
          </h2>
          <p className="lg:text-[1.736vw] md:text-[2.441vw] text-[1.736vw] tracking-[-0.02em] leading-[125%] font-[400] text-orangish pt-[2.083vw] w-[36.042vw]">
            Model, plan, and align your business with a modern, intuitive
            experience designed for everyone on your team.
          </p>
        </div>
        <DesignedForFinance />
        <BuiltForExecutives />
        <div className="bg-blackish py-16 max-w-[1920px] mx-auto xl:ps-[200px] ps-[8.984vw] pe-[15px]">
          <h2 className="text-white text-[7.292vw] font-[600] leading-[90%] tracking-[-0.04em] mb-[1.528vw] max-w-[50.694vw] pt-[0.694vw]">
            Built for Executives
          </h2>
          <p className="text-white pt-[0.694vw] max-w-[54.583vw] text-[1.528vw] font-[400] leading-[125%] tracking-[-0.02em]">
            Runway's mission is to make your business accessible and
            understandable to everyone—from finance to engineering. That starts
            with an intuitive, responsive, and thoughtfully designed user
            experience that helps everyone understand how to make an impact.
          </p>
        </div>
      </div>
      <Cards />
      <ReadyforTakeoff />
      <GetStarted />
      <Footer />
    </div>
  );
}
