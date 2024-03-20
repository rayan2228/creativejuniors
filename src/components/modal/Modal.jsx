import aboutImg from "../../assets/about.png";
import Flex from "../layouts/Flex";
import Img from "../layouts/Img";
import RegisterBtn from "../layouts/RegisterBtn";

const Modal = () => {
  return (
    <Flex className="fixed top-0 left-0 bg-[rgb(255,244,191,0.7)] w-full h-screen z-40 flex-col gap-y-5 justify-center items-center">
      <Img src={aboutImg} alt={aboutImg} className={"w-[90vw]"} />
      <RegisterBtn />
    </Flex>
  );
};

export default Modal;
