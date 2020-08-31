import React from "react";

import { SectionWrap } from "../components/layouts";
import BigTitle from "../components/BigTitle";
import WelcomeSection from "../containers/sections/WelcomeSections";

function Welcome() {
  return (
    <SectionWrap
      className="welcome content"
      leftSection={<BigTitle />}
      rightSection={<WelcomeSection />}
    ></SectionWrap>
  );
}

export default Welcome;
