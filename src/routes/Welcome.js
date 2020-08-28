import React from "react";

import SectionWrap from "../components/layouts/SectionWrap";
import BigTitle from "../components/BigTitle";

function Welcome() {
  return (
    <SectionWrap
      className="welcome content"
      leftSection={<BigTitle />}
      rightSection={<BigTitle />}
    ></SectionWrap>
  );
}

export default Welcome;
