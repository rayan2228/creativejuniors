import React from "react";
import Container from "./layouts/Container";
import Img from "./layouts/Img";
import monir from "../assets/monir.png";
import coo from "../assets/coo.png";
import consultants from "../assets/consultants.png";
import cbo from "../assets/cbo.png";
import Flex from "./layouts/Flex";
import Judge from "./Judge";

const Judgepanel = () => {
  return (
    <div className="py-[200px] px-5 xl:px-0">
      <Container>
        <h2 className="text-center text-primaryColor font-banglaSemiBold lg:text-heading mb-[100px] text-4xl">
          আমাদের সম্মানিত বিচারকমন্ডলী
        </h2>
        <Flex className="flex-wrap justify-center mb-6 lg:justify-between gap-y-10">
          <Judge
            src={monir}
            name={"Monir Hosen"}
            degi={"Chairman, Creative Business Group"}
            details={`বর্তমানের প্রযুক্তি নির্ভর যুগে ছোটরাও অনেক দিক থেকে এগিয়ে যাচ্ছে।
          কোডিং থেকে শুরু  করে রোবটিক্স সব ক্ষেত্রেই শিশুদের সাফল্যের গল্প
          প্রায়ই আমরা শুনে থাকি। তাই এই দ্রুত গতির জীবনে এগিয়ে যেতে হলে
          প্রস্তুতি নিতে হবে আগে থেকেই।`}
          />
          <Judge
            src={coo}
            name={"Zia Uddin Mahmud"}
            degi={"COO, Creative Business Group"}
            details={` তথ্য প্রযুক্তির এই যুগে জুনিয়রদের আগ্রহটা ভালো দিকে পরিচালিত
                করে, তাদের আইটি কেন্দ্রিক নতুন ও মজার বিষয় যদি শেখানো যায় তা হবে
                দারুণ একটা ব্যপার। এতে তাদের সময়ও অপচয় হবে না আবার তারা
                প্রযুক্তি নির্ভর যুগের একটি দক্ষতাও অর্জন করতে পারবে।`}
          />
          <Judge
            src={consultants}
            name={"Mehjabin Badhon"}
            degi={"Consultant, Creative Business Group"}
            details={`  আমরা আশা করছি অনলাইন এবং অফলাইনের মাধ্যমে ১০,০০০ নিবন্ধনের সাথে
                ১০ লাখ মানুষকে সচেতন করার সুযোগ তৈরি হবে। মূল প্রতিযোগিতা শুরু
                করার আগে শিক্ষার্থীদের চার মাস ট্রেনিং প্রদান করা হবে। যেন তারা
                প্রস্তুতি নিয়েই প্রতিযোগিতায় অংশগ্রহণ করতে পারে।`}
          />
          <Judge
            src={cbo}
            name={"Tajdin Hasan"}
            degi={"CBO, The Daily Star"}
            details={`  এই প্রতিযোগিতার মাধ্যমে জুনিয়ররা সামনের পৃথিবীতে নতুন নতুন যেসব
                চ্যালেঞ্জ আগমন ঘটবে সেগুলোর জন্যও এটি জুনিয়রকে প্রস্তুত করবে। এই
                আয়োজন জুনিয়রদের একাডেমিক শিক্ষার বাইরে তাদের চিন্তার দক্ষতা
                বাড়াবে। পাশাপাশি তাদের ধৈর্য্যশীল ও অধ্যবসায়ী হতে সাহায্য করবে।`}
          />
        </Flex>
      </Container>
    </div>
  );
};

export default Judgepanel;
