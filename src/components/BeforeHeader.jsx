import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Flex from "../components/layouts/Flex";
const BeforeHeader = () => {
  return (
    <div className="  absolute z-40 top-8 left-[50%]    w-[80vw] max-w-[1700px] header_custom_css  ">
      <Flex className={"items-center justify-between"}>
        <h4
          className={
            "font-inter font-medium md:text-xl text-base lg:text-3xl text-primaryColor"
          }
        >
          Hotline 01400 133 133, 01958 155 233
        </h4>
        <Flex className={"lg:gap-x-5 gap-x-2 items-center"}>
          <a href="">
            <Flex
              className="lg:w-[53px] lg:h-[53px] w-[40px] h-[40px] rounded-full bg-[#E8214E] justify-center items-center text-white hover:bg-[#fff] hover:text-[#99258E] transition-colors"
              style={{ boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)" }}
            >
              <FaFacebookF />
            </Flex>
          </a>
          <a href="">
            <Flex
              className="lg:w-[53px] lg:h-[53px] w-[40px] h-[40px] rounded-full  bg-[#E8214E] justify-center items-center text-white hover:bg-[#fff] hover:text-[#99258E] transition-colors"
              style={{ boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)" }}
            >
              <FaTwitter />
            </Flex>
          </a>
          <a href="">
            <Flex
              className="lg:w-[53px] lg:h-[53px] w-[40px] h-[40px] rounded-full bg-[#E8214E] justify-center items-center text-white hover:bg-[#fff] hover:text-[#99258E] transition-colors"
              style={{ boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)" }}
            >
              <FaLinkedinIn />
            </Flex>
          </a>
        </Flex>
      </Flex>
    </div>
  );
};

export default BeforeHeader;
