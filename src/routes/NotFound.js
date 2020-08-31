import React from "react";

import { SectionWrap, Button } from "../components/layouts";
import BigTitle from "../components/BigTitle";

const NotFoundSection = () => {
  return (
    <div className='not-found-section half-section'>
      <h2 className="title">Sorry</h2>
      <h2 className="title">Page not Found</h2>
      <Button path={"/"} text={"Return Home"} />
    </div>
  );
};


const NotFound = () => {
  return (
    <SectionWrap
      className="UpdatesByTags"
      leftSection={<BigTitle />}
      rightSection={<NotFoundSection />}
    ></SectionWrap>
  );
};

export default NotFound;
