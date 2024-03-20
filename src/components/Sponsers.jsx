import React from "react";
import Flex from "./layouts/Flex";
import Img from "./layouts/Img";
import dailyStar from "../assets/thedailystar.png";
import surfuexecl from "../assets/surfuexecl.png";
import innovation from "../assets/innovation.png";
import somoy from "../assets/somoy.png";
import engcouncil from "../assets/engcouncil.png";
import bdapps from "../assets/bdapps.png";
import Container from "./layouts/Container";
const Sponsers = () => {
  return (
    <section className="text-2xl font-bold font-aeonik my-[200px] px-10">
      <Container>
        <Flex className={"gap-x-[30px]  flex-wrap gap-y-10"}>
          <div className="xl:w-[308px] flex-grow xl:flex-grow-0">
            <h3>In Association With</h3>
            <Flex className="border border-[#FBD422] border-solid rounded-[30px] items-center justify-center h-[163px] mt-5">
              <Img src={dailyStar} />
            </Flex>
          </div>
          <div className="xl:w-[308px] flex-grow xl:flex-grow-0">
            <h3>Nutrition Partner</h3>
            <Flex className="border border-[#FBD422] border-solid rounded-[30px] items-center justify-center h-[163px] mt-5">
              <Img src={surfuexecl} />
            </Flex>
          </div>
          <div className="flex-grow">
            <h3>Our Partners</h3>
            <Flex
              className={
                "justify-around items-center border border-[#FBD422] border-solid rounded-[30px] gap-y-10 py-[35px] mt-5 flex-wrap"
              }
            >
              <div className="">
                <Img src={innovation} />
              </div>
              <div>
                <Img src={somoy} />
              </div>
              <div>
                <Img src={engcouncil} />
              </div>
              <div>
                <Img src={bdapps} />
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Sponsers;
