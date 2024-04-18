import Container from "./layouts/Container";
import monir from "../assets/monir.png";
import coo from "../assets/coo.png";
import consultants from "../assets/consultants.png";
import cbo from "../assets/cbo.png";
import amzon from "../assets/amzon.png";
import engolm from "../assets/engolm.png";
import ariful from "../assets/ariful.png";
import bdapps from "../assets/bdapps.png";
import Flex from "./layouts/Flex";
import Judge from "./Judge";

const Judgepanel = () => {
  return (
    <div className="py-[200px] px-5 xl:px-0">
      <Container>
        <h2 className="text-center text-primaryColor font-banglaSemiBold lg:text-heading mb-[100px] text-4xl">
          কনভেনার
        </h2>
        <Flex className={"items-center justify-center"}>
          <Judge
            src={monir}
            name={"Monir Hosen"}
            degi={"Chairman, Creative Business Group"}
            details={`বর্তমানের প্রযুক্তি নির্ভর যুগে ছোটরাও অনেক দিক থেকে এগিয়ে যাচ্ছে।
          কোডিং থেকে শুরু  করে রোবটিক্স সব ক্ষেত্রেই শিশুদের সাফল্যের গল্প
          প্রায়ই আমরা শুনে থাকি। তাই এই দ্রুত গতির জীবনে এগিয়ে যেতে হলে
          প্রস্তুতি নিতে হবে আগে থেকেই।`}
            className={"py-2 lg:w-auto"}
          />
        </Flex>
        <h2 className="text-center text-primaryColor font-banglaSemiBold lg:text-heading my-[100px] text-4xl">
          এডভাইজার
        </h2>
        <Flex className="flex-wrap justify-around mb-6 xl:gap-x-8 gap-y-10">
          <Judge
            src={coo}
            name={"Zia Uddin Mahmud"}
            degi={"COO, Creative Business Group"}
            className={"lg:w-[392px] py-2"}
          />
          <Judge
            src={cbo}
            name={"Tajdin Hasan"}
            degi={"CBO, The Daily Star"}
            className={"lg:w-[392px] py-2"}
          />
          <Judge
            src={ariful}
            name={"Ariful Hasan"}
            degi={"Founder Bangladesh Innovation Forum"}
            className={"lg:w-[392px]"}
          />
          <Judge
            src={amzon}
            name={"Mohammad Mahdee UzZaman"}
            degi={"Lead, Solution Architecture Amazon Web Services (AWS), USA"}
            className={"lg:w-[392px]"}
          />
          <Judge
            src={bdapps}
            name={"Md Altamis Nabil"}
            degi={"Head of Business & Engagement bdapps"}
            className={"lg:w-[392px]"}
          />
          <Judge
            src={engolm}
            name={"Mohammad Aman Ullah"}
            degi={"CEO English Olympiad Global"}
            className={"lg:w-[392px]"}
          />
        </Flex>
        <h2 className="text-center text-primaryColor font-banglaSemiBold lg:text-heading my-[100px] text-4xl">
          প্রজেক্ট লিড
        </h2>
        <Flex className={"items-center justify-center"}>
          <Judge
            src={consultants}
            name={"Mehjabin Badhon"}
            degi={"Consultant, Creative Business Group"}
            className={"py-2 lg:w-auto"}
          />
        </Flex>
      </Container>
    </div>
  );
};

export default Judgepanel;
