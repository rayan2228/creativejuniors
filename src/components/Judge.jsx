import React from "react";
import Img from "./layouts/Img";
import Flex from "./layouts/Flex";

const Judge = ({ src, name, degi, details, className }) => {
  return (
    <Flex
      className={`px-3 items-center bg-[#F5F5F5] border border-gray-200 rounded-lg shadow sm:flex-row  flex-col ${className} `}
    >
      <Img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={src}
        alt={src}
      />
      <Flex className="flex-col justify-between leading-normal p-7">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-black xl:text-2xl font-inter ">
          {name}
        </h5>
        <h5 className="mb-2 xl:text-sm text-xs font-bold tracking-tight text-[#000000] font-inter ">
          {degi}
        </h5>
        <p className=" max-w-[339px] mb-3 font-normal text-[#2B2B2B] font-banglaRegular leading-[150%] text-base">
          {details}
        </p>
      </Flex>
    </Flex>
  );
};

export default Judge;
