import React from "react";

import SectionWrap from "../components/layouts/SectionWrap";
import BigLogo from "../components/BigLogo";

function Welcome() {
  return (
    <SectionWrap
      className="welcome content"
      leftSection={<BigLogo />}
      rightSection={<BigLogo />}
    ></SectionWrap>
  );
}

export default Welcome;
