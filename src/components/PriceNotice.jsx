import React from "react";
import RegisterBtn from "./layouts/RegisterBtn";
import Container from "./layouts/Container";
import Flex from "./layouts/Flex";

const PriceNotice = () => {
  return (
    <section className="bg-[#FFF9DE] py-[100px]">
      <Container>
        <Flex className={"items-center"}>
          <h2 className="font-banglaSemiBold text-heading w-[1092px]">
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
