import React from "react";
import RegisterBtn from "./layouts/RegisterBtn";
import Container from "./layouts/Container";
import Flex from "./layouts/Flex";

const PriceNotice = () => {
  return (
    <section className="bg-[#FFF9DE] py-[100px] px-10 xl:px-0">
      <Container>
        <Flex className={"xl:items-center flex-col xl:flex-row gap-y-6"}>
          <h2 className="font-banglaSemiBold text-3xl sm:text-4xl md:text-heading xl:w-[1092px] md:!leading-[70px] gap-y-10 ">
            ১ লাখ টাকা নগদ পুরষ্কার পাবে বিজয়ী শিক্ষার্থী, তাহলে দেরি না করে
            রেজিস্ট্রেশন করুন এখনই
          </h2>

          <RegisterBtn />
        </Flex>
      </Container>
    </section>
  );
};

export default PriceNotice;
