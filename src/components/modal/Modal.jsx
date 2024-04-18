import aboutImg from "../../assets/about.png";
import Flex from "../layouts/Flex";
import Img from "../layouts/Img";
import RegisterBtn from "../layouts/RegisterBtn";
import { ImCross } from "react-icons/im";
const Modal = ({ onClose }) => {
  return (
    <Flex className="fixed top-0 left-0 bg-[rgb(255,244,191,0.7)] w-full h-screen z-40 flex-col gap-y-5 justify-center items-center">
      <ImCross
        className="absolute p-4 text-red-500 bg-white rounded-full cursor-pointer right-5 top-10"
        onClick={onClose}
      />
      <Img src={aboutImg} alt={aboutImg} className={"w-[90vw]"} />
      <RegisterBtn />
    </Flex>
  );
};

export default Modal;
