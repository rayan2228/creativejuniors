import React from "react";
import Container from "./layouts/Container";

const CopyWrite = () => {
  const year = new Date().getFullYear();
  return (
    <section className="bg-[#99258E] text-white   ">
      <Container>
        <div className="text-xl text-center border-0 border-t border-white border-solid font-aeonik py-[30px]">
          <h6>©{year} Creative Business Group. All rights reserved.</h6>
        </div>
      </Container>
    </section>
  );
};

export default CopyWrite;
