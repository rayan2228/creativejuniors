import React from "react";
import Container from "./layouts/Container";
import Flex from "./layouts/Flex";
import logo from "../assets/logo.png";
import qr from "../assets/qr.png";
import cbg from "../assets/cbg.png";
import Img from "./layouts/Img";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <section className="bg-[#99258E] py-[150px]  text-white">
      <Container>
        <Flex className={"justify-between"}>
          <Flex className={"flex-col gap-[120px] w-[360px]"}>
            <div>
              <Img src={logo} alt={logo} />
            </div>
            <div>
              <Img src={cbg} alt={cbg} />
            </div>
          </Flex>
          <Flex className={"flex-col gap-[120px] w-[421px] "}>
            <div>
              <h2 className="font-bold text-[32px] leading-[28px] font-aeonik">
                Mobile Number
              </h2>
              <p className="text-3xl font-normal leading-[130%] mt-[30px] ">
                01400 133 133, 01958 155 233 01990 779 767, 01958 155 654
                01990779805, 01329 723 285
              </p>
            </div>
            <div>
              <h2 className="font-bold text-[32px] leading-[28px] font-aeonik">
                Our Address
              </h2>
              <address className="text-3xl font-normal leading-[130%] mt-[30px]">
                <span className="block">Momtaz Plaza (4th floor),</span>{" "}
                <span className="block">H: 07, R: 04, Dhanmondi,</span>
                Dhaka -1205
              </address>
            </div>
          </Flex>
          <Flex className={"flex-col gap-[120px] w-[243px]"}>
            <div>
              <h2 className="font-bold text-[32px] leading-[28px] font-aeonik mb-[30px]">
                Mobile Number
              </h2>
              <Img src={qr} alt={qr} />
            </div>
            <Flex className={"gap-x-5 items-center"}>
              <Flex
                className="w-[53px] h-[53px] rounded-full bg-[#E8214E] justify-center items-center"
                style={{ boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)" }}
              >
                <FaFacebookF />
              </Flex>
              <Flex
                className="w-[53px] h-[53px] rounded-full bg-[#FBD422] justify-center items-center"
                style={{ boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)" }}
              >
                <FaTwitter className="text-[#99258E]" />
              </Flex>
              <Flex
                className="w-[53px] h-[53px] rounded-full bg-[#E8214E] justify-center items-center"
                style={{ boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)" }}
              >
                <FaLinkedinIn />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Footer;
