import React from "react";
import Img from "./layouts/Img";
import Flex from "./layouts/Flex";

const Judge = ({ src, name, degi, details }) => {
  return (
    <Flex className="px-3  flex-col items-center bg-[#F5F5F5] border border-gray-200 rounded-lg shadow md:flex-row lg:w-[47%]  ">
      <Img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={src}
        alt={src}
      />
      <div className="flex flex-col justify-between leading-normal p-7">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black font-inter ">
          {name}
        </h5>
        <h5 className="mb-2 text-sm font-bold tracking-tight text-[#000000] font-inter ">
          {degi}
        </h5>
        <p className=" max-w-[339px] mb-3 font-normal text-[#2B2B2B] font-banglaRegular leading-[150%] text-base">
          {details}
        </p>
      </div>
    </Flex>
  );
};

export default Judge;
