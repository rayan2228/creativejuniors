import bannerImg from "../assets/banner.png";
import Header from "./Header";
import Img from "./layouts/Img";
const Banner = () => {
  return (
    <div className="bg-[#fcdc28] h-screen ">
      <Img src={bannerImg} alt={bannerImg} />
      <Header />
    </div>
  );
};

export default Banner;
