import Link from "next/link";
import { IoMdArrowRoundForward } from "react-icons/io";

const Header = () => {
  return (
    <header className="max-w-[1920px] mx-auto bg-transparent px-[15px]">
      <div className="fixed top-[0.556vw] left-0 px-[15px] w-full z-[999]">
        <div className="px-[15px] w-full flex gap-[6px] justify-center items-center h-[2.431vw] bg-orangish rounded-full text-center">
          <p className="text-[1.042vw] text-blackish font-[600] tracking-[-0.02em]">
            We’ve officially launched! Learn more
          </p>
          <span className="flex justify-center items-center bg-[#192227] rounded-full w-[17px] h-[17px]">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="Banner__Arrow-sc-1wnzso5-2 McOD"
            >
              <path
                d="M4.86045 4.06812L11.7851 4.2145L11.9312 11.1395L10.0078 13.0629L9.8995 7.51404L5.42101 11.9925L4.0068 10.5783L8.48528 6.09982L2.93701 5.99155L4.86045 4.06812Z"
                fill="#f9a600"
              ></path>
            </svg>
          </span>
        </div>
      </div>
      <div className="flex flex-wrap pt-[54px] py-[0.556vw] flex-col md:flex-row items-center gap-[2.222vw]">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <img className="h-[25px] w-auto" src="/assets/logo.png" alt="logo" />
        </Link>
        <nav className="md:ml-auto flex flex-wrap text-[1.042vw] font-[600] tracking-[-0.02em] items-center justify-center text-[#fdfcfc] gap-[3.125vw]">
          <Link
            href="/"
            className="flex items-center gap-[0.521vw] hover:text-gray-100"
          >
            <IoMdArrowRoundForward size={16} /> Product
          </Link>
          <Link
            href="/"
            className="flex items-center gap-[0.521vw] hover:text-gray-100"
          >
            <IoMdArrowRoundForward size={16} /> Customers
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-[0.521vw] hover:text-gray-100"
          >
            <IoMdArrowRoundForward size={16} /> Resources
          </Link>
          <Link
            href="/"
            className="flex items-center gap-[0.521vw] hover:text-gray-100"
          >
            <IoMdArrowRoundForward size={16} /> Log in
          </Link>
        </nav>
        <button className="inline-flex gap-[0.694vw] bg-[#f9a600] items-center py-[7px] px-[15px] justify-center w-[11.806vw] text-[#192227] rounded-full mt-4 md:mt-0">
          <span className="text-[1.042vw] font-[600] tracking-[-0.02em]">
            Get Access{" "}
          </span>{" "}
          <IoMdArrowRoundForward size={16} />
        </button>
      </div>
    </header>
  );
};

export default Header;
