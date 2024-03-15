import Img from "./layouts/Img";
import creativeJuniors from "../assets/creativejuniors.png";
import creativeit from "../assets/creativeit.png";
import Flex from "./layouts/Flex";
import RegisterBtn from "./layouts/RegisterBtn";
const Header = () => {
  return (
    <header className=" bg-white/90 absolute z-50 top-8 left-[50%]  rounded-[160px] px-20 py-10 a min-w-[1700px] header_custom_css ">
      <Flex className={"items-center gap-x-[120px] w-full"}>
        <Img src={creativeJuniors} alt={creativeJuniors} />
        <Img src={creativeit} alt={creativeit} />
        <RegisterBtn />
      </Flex>
    </header>
  );
};

export default Header;
