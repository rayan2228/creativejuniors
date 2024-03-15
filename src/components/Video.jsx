import videoBg from "../assets/video.png";

const Video = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${videoBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="mt-[200px]"
    >
      <div className="py-[227px] bg-[rgb(22,5,122,0.4)]"></div>
    </section>
  );
};

export default Video;
