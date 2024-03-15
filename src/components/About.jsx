import Container from "./layouts/Container";
import Flex from "./layouts/Flex";
import Img from "./layouts/Img";
import aboutImg from "../assets/about.png";
const About = () => {
  return (
    <section>
      <Container>
        <h1 className="font-banglaSemiBold text-[60px] text-primaryColor leading-[130%] text-center">
          <span className="block">বাংলাদেশে এই প্রথমবার</span>
          <span className="block">স্কুল শিক্ষার্থীদের জন্য অনুষ্ঠিত হবে </span>
          <span className="block">“জুনিয়রস অ্যাপ এন্ড গেম কার্নিভাল”</span>
        </h1>
        <Flex className={"mt-[100px] justify-between items-center"}>
          <div className="w-2/5">
            <Img src={aboutImg} alt={aboutImg} className={"w-full"} />
          </div>
          <div className="w-[45%]">
            <p className="font-banglaRegular text-[32px] leading-[150%]">
              ক্রিয়েটিভ আইটি ইনস্টিটিউট দীর্ঘ ১৫ বছর ধরে জনসাধারণের মাঝে আইটি
              প্রশিক্ষণ ও সচেতনতা প্রদানের মাধ্যমে দেশের মানুষের দক্ষতা উন্নয়নে
              কাজ করে আসছে। পাশাপাশি আগামীর কর্ণধারদের নিয়েও কাজ করে যাচ্ছে
              অবিরত ভাবে ক্রিয়েটিভ জুনিয়রস প্ল্যাটফর্মের মাধ্যমে। এই অঙ্গীকারের
              ধারাবাহিকতায়, “ক্রিয়েটিভ জুনিয়রস” এর অধীনে স্কুল পর্যায়ের
              শিক্ষার্থীদের নিয়ে দেশে প্রথমবার বৃহৎ পরিসরে “জুনিয়রস অ্যাপ এন্ড
              গেম কার্নিভাল” আয়োজন করতে যাচ্ছে প্রতিষ্ঠানটি। প্রযুক্তির এই যুগে
              শিক্ষার্থীদের পড়াশোনার সার্বিক কার্যক্রমকে আরো উন্নত করতে ও
              জুনিয়রদের আইটিতে আরো দক্ষ এবং সচেতন করতেই গ্রহণ করা হয়েছে এই
              উদ্যোগটি।
            </p>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default About;
