import About from "../components/About";
import Banner from "../components/Banner";
import EventBenefits from "../components/EventBenefits";
import EventPIcs from "../components/EventPIcs";
import EventSteps from "../components/EventSteps";
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
    </>
  );
};

export default Home;
