import About from "../components/About";
import Banner from "../components/Banner";
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
    </>
  );
};

export default Home;
