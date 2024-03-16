import React from "react";
import Container from "./layouts/Container";
import Img from "./layouts/Img";
import monir from "../assets/monir.png";
import coo from "../assets/coo.png";
import consultants from "../assets/consultants.png";
import cbo from "../assets/cbo.png";

const Judgepanel = () => {
  return (
    <div className="py-[200px]">
      <Container>
        <h2 className="text-center text-primaryColor font-banglaSemiBold text-heading mb-[100px]">
          আমাদের সম্মানিত বিচারকমন্ডলী
        </h2>
        <div className="flex gap-6 flex-wrap md:flex-nowrap mb-6">
          <div
            to="#"
            class="px-3 flex flex-col items-center bg-[#F5F5F5] border border-gray-200 rounded-lg shadow md:flex-row w-1/2 "
          >
            <Img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={monir}
            />
            <div class="flex flex-col justify-between p-7 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-black font-inter ">
                Monir Hosen
              </h5>
              <h5 class="mb-2 text-sm font-bold tracking-tight text-[#000000] font-inter ">
                Chairman, Creative Business Group
              </h5>
              <p class=" max-w-[339px] mb-3 font-normal text-[#2B2B2B] font-banglaRegular leading-[150%] text-base">
                বর্তমানের প্রযুক্তি নির্ভর যুগে ছোটরাও অনেক দিক থেকে এগিয়ে
                যাচ্ছে। কোডিং থেকে শুরু  করে রোবটিক্স সব ক্ষেত্রেই শিশুদের
                সাফল্যের গল্প প্রায়ই আমরা শুনে থাকি। তাই এই দ্রুত গতির জীবনে
                এগিয়ে যেতে হলে প্রস্তুতি নিতে হবে আগে থেকেই।
              </p>
            </div>
          </div>
          <div
            to="#"
            class="px-3 flex flex-col items-center bg-[#F5F5F5] border border-gray-200 rounded-lg shadow md:flex-row w-1/2 "
          >
            <Img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={coo}
            />
            <div class="flex flex-col justify-between p-7 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-black font-inter ">
                Zia Uddin Mahmud
              </h5>
              <h5 class="mb-2 text-sm font-bold tracking-tight text-[#000000] font-inter ">
                COO, Creative Business Group
              </h5>
              <p class="max-w-[339px] mb-3 font-normal text-[#2B2B2B] font-banglaRegular leading-[150%] text-base">
                তথ্য প্রযুক্তির এই যুগে জুনিয়রদের আগ্রহটা ভালো দিকে পরিচালিত
                করে, তাদের আইটি কেন্দ্রিক নতুন ও মজার বিষয় যদি শেখানো যায় তা হবে
                দারুণ একটা ব্যপার। এতে তাদের সময়ও অপচয় হবে না আবার তারা
                প্রযুক্তি নির্ভর যুগের একটি দক্ষতাও অর্জন করতে পারবে।
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-6 flex-wrap md:flex-nowrap mb-6">
          <div
            to="#"
            class="px-3 flex flex-col items-center bg-[#F5F5F5] border border-gray-200 rounded-lg shadow md:flex-row w-1/2 "
          >
            <Img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={consultants}
            />
            <div class="flex flex-col justify-between p-7 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-black font-inter ">
                Mehjabin Badhon
              </h5>
              <h5 class="mb-2 text-sm font-bold tracking-tight text-[#000000] font-inter ">
                Consultant, Creative Business Group
              </h5>
              <p class=" max-w-[339px] mb-3 font-normal text-[#2B2B2B] font-banglaRegular leading-[150%] text-base">
                আমরা আশা করছি অনলাইন এবং অফলাইনের মাধ্যমে ১০,০০০ নিবন্ধনের সাথে
                ১০ লাখ মানুষকে সচেতন করার সুযোগ তৈরি হবে। মূল প্রতিযোগিতা শুরু
                করার আগে শিক্ষার্থীদের চার মাস ট্রেনিং প্রদান করা হবে। যেন তারা
                প্রস্তুতি নিয়েই প্রতিযোগিতায় অংশগ্রহণ করতে পারে।
              </p>
            </div>
          </div>
          <div
            to="#"
            class="px-3 flex flex-col items-center bg-[#F5F5F5] border border-gray-200 rounded-lg shadow md:flex-row w-1/2 "
          >
            <Img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={cbo}
            />
            <div class="flex flex-col justify-between p-7 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-black font-inter ">
                Tajdin Hasan
              </h5>
              <h5 class="mb-2 text-sm font-bold tracking-tight text-[#000000] font-inter ">
                CBO, The Daily Star
              </h5>
              <p class="max-w-[339px] mb-3 font-normal text-[#2B2B2B] font-banglaRegular leading-[150%] text-base">
                এই প্রতিযোগিতার মাধ্যমে জুনিয়ররা সামনের পৃথিবীতে নতুন নতুন যেসব
                চ্যালেঞ্জ আগমন ঘটবে সেগুলোর জন্যও এটি জুনিয়রকে প্রস্তুত করবে। এই
                আয়োজন জুনিয়রদের একাডেমিক শিক্ষার বাইরে তাদের চিন্তার দক্ষতা
                বাড়াবে। পাশাপাশি তাদের ধৈর্য্যশীল ও অধ্যবসায়ী হতে সাহায্য করবে।
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Judgepanel;
