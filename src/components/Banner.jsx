import bg from "../assets/bg2.png";
import carnival from "../assets/carnival.png";
import shape from "../assets/shape.png";
import Header from "./Header";
import Img from "./layouts/Img";
const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className=" text-center lg:pt-[602px] pt-[400px] relative"
    >
      <Img
        src={carnival}
        alt={carnival}
        className={"relative z-10 w-[90vw] xl:w-auto"}
      />
      <div className={"  lg:mt-[-180px] mt-[-100px] relative bottom-[-6px] "}>
        <Img src={shape} className={"w-full"} />
      </div>
      <Header />
    </div>
  );
};

export default Banner;
