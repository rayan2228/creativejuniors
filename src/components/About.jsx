import Container from "./layouts/Container";

const About = () => {
  return (
    <section>
      <Container>
        <h1 className="font-banglaSemiBold text-[60px] text-primaryColor leading-[130%] text-center">
          <span className="block">বাংলাদেশে এই প্রথমবার</span>
          <span className="block">স্কুল শিক্ষার্থীদের জন্য অনুষ্ঠিত হবে </span>
          <span className="block">“জুনিয়রস অ্যাপ এন্ড গেম কার্নিভাল”</span>
        </h1>
      </Container>
    </section>
  );
};

export default About;
