import React from "react";
import Flex from "./layouts/Flex";
import Img from "./layouts/Img";
import eventImg1 from "../assets/event1.png";
import eventImg2 from "../assets/event2.png";
import eventImg3 from "../assets/event3.png";
import eventImg4 from "../assets/event4.png";
import eventImg5 from "../assets/event5.png";
import eventImg6 from "../assets/event6.png";
import eventImg7 from "../assets/event7.png";
import eventImg8 from "../assets/event8.png";
import eventImg9 from "../assets/event9.png";
import Container from "./layouts/Container";
const EventPIcs = () => {
  let images = [
    eventImg1,
    eventImg2,
    eventImg3,
    eventImg4,
    eventImg5,
    eventImg6,
    eventImg7,
    eventImg8,
    eventImg9,
  ];
  return (
    <section>
      <div className="text-center mt-[100px] w-[1002px] m-auto">
        {" "}
        <h2 className="font-banglaSemiBold text-heading text-primaryColor">
          ইভেন্টের কার্যক্রম
        </h2>
        <p className="font-banglaRegular text-[#2B2B2B] text-[32px] mt-[30px] ">
          <span className="block">
            {" "}
            চলছে ‘জুনিয়রস অ্যাপ এন্ড গেম কার্নিভাল’ এর রেজিস্ট্রেশন।
            শিক্ষার্থীরা যেন দক্ষ
          </span>{" "}
          <span className="block">
            মানবসম্পদে পরিণত হয় এবং আগামী দিনগুলোতে নেতৃত্বদান করতে পারে
          </span>{" "}
          সে লক্ষ্যেই এই আয়োজন
        </p>
      </div>
      <Container>
        <Flex className={"flex-wrap gap-[28px] mt-[100px]"}>
          {images.map((name) => (
            <div>
              <Img src={name} alt={name} />
            </div>
          ))}
        </Flex>
      </Container>
    </section>
  );
};

export default EventPIcs;