import React from "react";
import Container from "./layouts/Container";
import Flex from "./layouts/Flex";
import bImg1 from "../assets/b1.svg";
import bImg2 from "../assets/b2.svg";
import bImg3 from "../assets/b3.svg";
import bImg4 from "../assets/b4.svg";
import bImg5 from "../assets/b5.svg";
import Img from "./layouts/Img";
import EventBenefitesList from "./EventBenefitesList";
const EventBenefits = () => {
  return (
    <section className="bg-[#E8214E] text-white text-center py-[150px] mt-[200px]">
      <Container>
        <h2 className="font-banglaSemiBold sm:text-heading text-4xl">
          এই ইভেন্টের সুবিধা সমূহ
        </h2>
        <Flex
          className={
            "mt-[100px] flex-wrap gap-x-[30px] justify-center gap-y-10"
          }
        >
          <EventBenefitesList
            heading={"Coding শেখার মাধ্যমে জুনিয়রদের হবে মেধার বিকাশ"}
            src={bImg1}
          />
          <EventBenefitesList
            heading={`Coding করার মাধমে বাড়বে তাদের লজিকাল স্কিল`}
            src={bImg2}
          />
          <EventBenefitesList
            heading={`Coding এর মাধমে
জুনিয়রদের সৃজনশীলতার
বিকাশ ঘটার`}
            src={bImg3}
          />
          <EventBenefitesList
            heading={`গেমের ছলে
জুনিয়ররা তৈরি করবে
মোবাইল অ্যাপ`}
            src={bImg4}
          />
          <EventBenefitesList
            heading={`মোবাইল আসক্তি
থেকে বের হয়ে শিখতে
পারবে নতুন কিছু`}
            src={bImg5}
          />
        </Flex>
      </Container>
    </section>
  );
};

export default EventBenefits;
