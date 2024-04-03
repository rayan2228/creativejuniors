import icon1 from "../assets/icons/icon1.svg";
import icon2 from "../assets/icons/icon2.svg";
import icon3 from "../assets/icons/icon3.svg";
import icon4 from "../assets/icons/icon4.svg";
import Container from "./layouts/Container";
import RegisterBtn from "./layouts/RegisterBtn";
import eventImg from "../assets/eventstep.png";
import Flex from "./layouts/Flex";
import Img from "./layouts/Img";
import Steps from "./Steps";
const EventSteps = () => {
  return (
    <section className=" font-banglaRegular py-[200px] bg-[rgb(251,211,34,0.15)]">
      <Container>
        <Flex
          className={
            "xl:justify-between lg:justify-around flex-wrap   items-center justify-center gap-y-10"
          }
        >
          <div className="xl:w-[532px] lg:w-[300px]  text-center lg:text-left">
            <h2 className="text-5xl sm:text-heading font-banglaSemiBold text-primaryColor">
              ইভেন্টের ধাপগুলো
            </h2>
            <p className="mb-16 sm:text-2xl xl:text-3xl mt-7 w-[80vw] sm:w-auto m-auto">
              মানুষ আসবার পূর্বেই জীবসৃষ্টিযজ্ঞে প্রকৃতির ভূরিব্যয়ের পালা শেষ
              হয়ে এসেছে
            </p>
            <RegisterBtn />
            <Img
              src={eventImg}
              alr={eventImg}
              className={"mt-[170px] inline-block lg:w-full w-[90vw]"}
            />
          </div>
          <Flex className="xl:w-[690px] lg:w-auto flex-col sm:gap-y-20 gap-y-10  sm:w-[70vw] w-[90vw]">
            <Steps
              className="bg-[#83A62D] after:content-[''] after:h-[125px] after:w-[2px] after:absolute after:bg-[#82d0d6] after:bottom-[-130px] "
              heading={"রেজিস্ট্রেশন"}
              content={`অনলাইন রেজিস্ট্রেশনের জন্য সোশ্যাল মিডিয়া এবং ওয়েবসাইটের
                  মাধ্যমে আগ্রহীদের একটি ফর্ম প্রদান করা হবে। অফলাইনে
                  রেজিস্ট্রেশন হবে বুথের মাধ্যমে।`}
              src={icon1}
            ></Steps>
            <Steps
              className="bg-primaryColor after:content-[''] after:h-[125px] after:w-[2px] after:absolute after:bg-[#82d0d6] after:bottom-[-130px]"
              heading={"প্রথম পর্ব (অনলাইন)"}
              content={`প্রথম পর্ব অনলাইনে হবে মূলত সাধারণ জ্ঞানের প্রশ্ন ও পাজেল সলভিং এর মত বিষয়ের মাধ্যমে প্রাথমিক বাছাই প্রক্রিয়া সম্পন্ন করা হবে।`}
              src={icon2}
            ></Steps>
            <Steps
              className="bg-[#423AD8] after:content-[''] after:h-[125px] after:w-[2px] after:absolute after:bg-[#82d0d6] after:bottom-[-130px]"
              heading={"৩ দিনের অনলাইন প্রশিক্ষণ"}
              content={`প্রথম পর্বের ৫০০ জন বিজয়ীকে ৩ দিনের ফ্রি অফলাইন প্রশিক্ষণ প্রদান করা হবে প্রশিক্ষণ হবে ক্রিয়েটিভ এবং ইমেজ ডেভেলপমেন্ট স্কিলকে কেন্দ্র করে।`}
              src={icon3}
            ></Steps>
            <Steps
              className="bg-[#EC174C] after:content-[''] after:h-[125px] after:w-[2px] after:absolute after:bg-[#82d0d6] after:bottom-[-130px]"
              heading={"দ্বিতীয় পর্ব (অনলাইন)"}
              content={`দ্বিতীয় পর্ব অনলাইনে হবে মূলত ক্রিয়েটিভ এবং ইমেজ ডেভেলপমেন্ট স্কিলকে কেন্দ্র করে প্রাথমিক বাছাই প্রক্রিয়া সম্পন্ন করা হবে।`}
              src={icon2}
            ></Steps>
            <Steps
              className="bg-[#423AD8] after:content-[''] after:h-[125px] after:w-[2px] after:absolute after:bg-[#82d0d6] after:bottom-[-130px]"
              heading={"তৃতীয় পর্ব (অফলাইন)"}
              content={`দ্বিতীয় পর্ব থেকে ১০০ জন শিক্ষার্থী তৃতীয় পর্বে নির্বাচন করা হবে তৃতীয় পর্ব অফলাইনে অনুষ্ঠিত হবে এবং চূড়ান্ত প্রতিযোগীদের নির্বাচন করা হবে।`}
              src={icon2}
            ></Steps>
            <Steps
              className="bg-primaryColor after:content-[''] after:h-[125px] after:w-[2px] after:absolute after:bg-[#82d0d6] after:bottom-[-130px]"
              heading={"চূড়ান্ত নির্বাচন"}
              content={`তৃতীয় পর্ব থেকে চূড়ান্ত পর্যায়ে আসবে ৫০ জন শিক্ষার্থী। এই শিক্ষার্থীদের ট্রেনিং এর মাধ্যমে মূল প্রতিযোগিতার জন্য তৈরি করতে হবে।`}
              src={icon4}
            ></Steps>
            <Steps
              className="bg-[#83A62D]"
              heading={"৪ মাসের প্রশিক্ষণ"}
              content={`৫০ জনকে মূল প্রতিযোগিতার আগে ৪ মাসের প্রশিক্ষণ প্রদান করা হবে। সবশেষে ৩-৫ জনকে বিজয়ী ঘোষণা করা হবে।`}
              src={icon3}
            ></Steps>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default EventSteps;
