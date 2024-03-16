import React from "react";
import Flex from "./layouts/Flex";

const Steps = ({ children, heading, content, className }) => {
  return (
    <Flex className={"justify-between"}>
      <Flex
        className={`w-[60px] h-[60px] text-white relative rounded-[10px] text-2xl justify-center items-center ${className}  `}
      >
        {children}
      </Flex>
      <div className="w-[592px]">
        <h2 className="text-[40px]">{heading}</h2>
        <p className="text-lg text-[#2B2B2B] leading-[150%] mt-5">{content}</p>
      </div>
    </Flex>
  );
};

export default Steps;
