import Flex from "./layouts/Flex";
import Img from "./layouts/Img";

const Steps = ({ src, heading, content, className }) => {
  return (
    <Flex className={" sm:gap-x-10 gap-x-5"}>
      <Flex
        className={`w-[60px] h-[60px] text-white relative rounded-[10px] text-2xl justify-center items-center ${className}  `}
      >
        <Img src={src} alt={src} />
      </Flex>
      <div className="xl:w-[592px] w-[460px]">
        <h2 className="md:text-[40px] sm:text-4xl">{heading}</h2>
        <p className="text-lg text-[#2B2B2B] leading-[150%] mt-5">{content}</p>
      </div>
    </Flex>
  );
};

export default Steps;
