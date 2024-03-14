import Img from "./layouts/Img";
import creativeJuniors from "../assets/creativejuniors.png";
import creativeit from "../assets/creativeit.png";
import Flex from "./layouts/Flex";
const Header = () => {
  return (
    <header
      className=" bg-white/90 absolute z-50 top-8 left-[50%]  rounded-[160px] px-20 py-10 "
      style={{ transform: translateX("-50%") }}
    >
      <Flex className={"items-center gap-x-[120px]"}>
        <Img src={creativeJuniors} alt={creativeJuniors} />
        <Img src={creativeit} alt={creativeit} />
        <button className="bg-[#423AD8] px-[50px] py-[30px] rounded-[45px] text-white text-xl font-semibold ml-auto">
          Register Now
        </button>
      </Flex>
    </header>
  );
};

export default Header;
