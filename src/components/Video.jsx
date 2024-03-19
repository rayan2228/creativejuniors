import videoBg from "../assets/video.png";
import Img from "./layouts/Img";
import videoBtn from "../assets/videoBtn.png";
const Video = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${videoBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="mt-[200px]"
    >
      <div className="xl:py-[227px] py-[500px]  bg-[rgb(22,5,122,0.4)] text-center">
        <Img src={videoBtn} alt={videoBtn} className={"cursor-pointer"} />
      </div>
    </section>
  );
};

export default Video;
