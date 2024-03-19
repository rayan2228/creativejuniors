import React from "react";
import RegisterBtn from "./layouts/RegisterBtn";
import Container from "./layouts/Container";
import Flex from "./layouts/Flex";

const PriceNotice = () => {
  return (
    <section className="bg-[#FFF9DE] py-[100px] px-10 lg:px-0">
      <Container>
        <Flex className={"lg:items-center flex-col lg:flex-row gap-y-6"}>
          <h2 className="font-banglaSemiBold text-heading lg:w-[1092px] ">
            ১ লাখ টাকা নগদ পুরষ্কার পাবে বিজয়ী শিক্ষার্থী, তাহলে দেরি না করে
            রেজিস্ট্রেশন করুন এখনই
          </h2>
          <div>
            <RegisterBtn />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default PriceNotice;
