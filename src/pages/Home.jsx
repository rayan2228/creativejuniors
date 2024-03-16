import About from "../components/About";
import Banner from "../components/Banner";
import CopyWrite from "../components/CopyWrite";
import EventBenefits from "../components/EventBenefits";
import EventPIcs from "../components/EventPIcs";
import EventSteps from "../components/EventSteps";
import Footer from "../components/Footer";
import Judgepanel from "../components/Judgepanel";
import PriceNotice from "../components/PriceNotice";
import Sponsers from "../components/Sponsers";
import Video from "../components/Video";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Video />
      <EventSteps />
      <EventPIcs />
      <EventBenefits />
      <Judgepanel />
      <PriceNotice />
      <Sponsers />
      <Footer />
      <CopyWrite />
    </>
  );
};

export default Home;
