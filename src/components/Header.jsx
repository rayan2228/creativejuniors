import Img from "./layouts/Img";
import creativeJuniors from "../assets/creativejuniors.png";
import creativeit from "../assets/creativeit.png";
import Flex from "./layouts/Flex";
import RegisterBtn from "./layouts/RegisterBtn";
import { FaBars } from "react-icons/fa6";
import { createPortal } from "react-dom";
import Modal from "./modal/Modal";
import { useState } from "react";
const Header = () => {
  const [modalShow, setShowModal] = useState(false);
  return (
    <header className=" bg-white/90 absolute z-50 top-8 left-[50%]  rounded-[160px] lg:px-20 sm:px-10 sm:py-10 p-5 w-[80vw] max-w-[1700px] header_custom_css ">
      <Flex className={"items-center  lg:w-full justify-between"}>
        <Flex className="items-center w-1/2 lg:gap-x-[120px] gap-x-5  ">
          <Img
            src={creativeJuniors}
            alt={creativeJuniors}
            className={"w-full"}
          />
          <Img src={creativeit} alt={creativeit} className={"w-full"} />
        </Flex>
        <Flex className="justify-end w-1/2 items-center">
          <RegisterBtn className={"hidden sm:inline-block"} />
          <div onClick={() => setShowModal(!modalShow)}>
            <FaBars
              className="bg-primaryColor p-2 text-white rounded-full cursor-pointer sm:hidden "
              style={{ boxShadow: "10px 16px 35.5px 0px rgba(66,58,216,0.3)" }}
            />
          </div>
          {modalShow &&
            createPortal(<Modal />, document.querySelector("#modal"))}
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
