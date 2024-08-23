import Link from "next/link";
import { IoMdArrowRoundForward } from "react-icons/io";

const Header = () => {
  return (
    <header className="max-w-[1920px] mx-auto bg-transparent px-[15px]">
      <div className="fixed top-[0.556vw] left-0 px-[15px] w-full flex gap-[6px] justify-center items-center h-[2.431vw] bg-orangish rounded-full text-center">
        <p className="text-[1.042vw] text-transparent text-blackish font-[600] tracking-[-0.02em]">
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
      <div className="flex flex-wrap pt-[54px] py-[0.556vw] flex-col md:flex-row items-center gap-[2.222vw]">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0 max-h-[18px] max-w-[80px]"
        >
          <svg
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1377 277"
            className="Header__Logo-sc-j3a33k-6 hsEhtX h-full w-full"
          >
            <path
              d="M555.167 233.069C561.354 233.069 566.722 228.799 568.114 222.771L592.9 115.41C606.916 53.8104 562.477 1.47659 502.66 1.47656L500.567 1.47656C452.024 1.47656 414.699 31.3667 404.957 73.5644L368.133 233.069H418.942C425.123 233.069 430.487 228.807 431.885 222.786L463.217 87.8141C467.532 69.5672 484.226 57.9473 499.15 57.9474L499.259 57.9473C520.622 57.9474 540.074 78.6146 533.638 106.123L504.371 233.069H555.167Z"
              fill="#FDFCFC"
            ></path>
            <path
              d="M199.429 7.16321L172.265 124.822C158.249 186.422 202.688 238.756 262.505 238.756H264.598C313.141 238.756 350.465 208.866 360.207 166.668L395.153 15.3013C396.114 11.1382 392.953 7.16321 388.68 7.16321H335.667L301.947 152.418C297.632 170.665 280.939 182.285 266.014 182.285H265.906C244.543 182.285 225.091 161.618 231.527 134.109L258.918 15.2994C259.878 11.1367 256.716 7.16321 252.444 7.16321H199.429Z"
              fill="#FDFCFC"
            ></path>
            <path
              d="M63.7423 227.924C63.0458 230.937 60.3619 233.072 57.2691 233.072H0.585938L32.492 96.5758C44.5491 44.064 82.1481 7.15348 140.54 7.15348H179.434L166.891 61.789C166.198 64.8069 163.513 66.946 160.416 66.946L140.54 66.9461C117.339 66.9461 98.2916 79.2859 92.2171 104.723L63.7423 227.924Z"
              fill="#FDFCFC"
            ></path>
            <path
              d="M1045.89 233.016L1098.34 233.017C1104.52 233.017 1109.89 228.747 1111.28 222.719L1151.61 48.0244C1156.45 27.2019 1141.04 7.24493 1119.66 7.23524L967.712 7.1731C962.626 7.17102 957.985 10.0726 955.759 14.6461L929.828 67.9312L1039.85 67.9312L856.095 233.178H933.208C938.1 233.178 942.821 231.379 946.473 228.124L1071.51 116.63L1045.89 233.016Z"
              fill="#FDFCFC"
            ></path>
            <path
              d="M795.726 180.841L874.321 7.14877L928.922 7.04663C933.832 7.03744 937.055 12.1746 934.911 16.5919L840.741 210.552C834.074 224.285 820.148 233.004 804.882 233.004H735.383L757.073 108.417L700.469 212.225C693.485 225.034 680.061 233.004 665.472 233.004H589.191L641.262 7.25601H693.813C698.16 7.25601 701.336 11.3617 700.244 15.5692L657.318 180.902L749.21 25.039C757.405 10.9649 772.747 4.082 785.57 4.4125C799.477 4.77095 817.712 14.8779 815.831 39.27L795.726 180.841Z"
              fill="#FDFCFC"
            ></path>
            <path
              d="M1211.93 276.859C1216.59 276.85 1220.9 274.406 1223.3 270.417L1375.45 17.2702C1378.11 12.8421 1374.93 7.20401 1369.76 7.20401L1316.78 7.20401L1234.41 144.93L1222.31 13.1601C1222 9.74641 1219.14 7.13169 1215.71 7.12399L1163.87 7.0075L1189.77 218.119L1154.78 276.967L1211.93 276.859Z"
              fill="#FDFCFC"
            ></path>
          </svg>
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
