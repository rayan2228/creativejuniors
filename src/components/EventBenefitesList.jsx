import React from "react";
import Flex from "./layouts/Flex";
import Img from "./layouts/Img";

const EventBenefitesList = ({ heading, src }) => {
  return (
    <div className="text-xl font-banglaSemiBold xl:w-[240px] border border-white border-solid rounded-[20px] py-[30px] xl:px-0 lg:px-5 px-2 box-border bg-[rgb(255,255,255,0.1)] ">
      <Flex className="w-20 h-20 justify-center items-center bg-white rounded-[10px] m-auto mb-[30px]">
        <Img src={src} alt={src} />
      </Flex>
      <h3 className="w-[188px] m-auto">{heading}</h3>
    </div>
  );
};

export default EventBenefitesList;
