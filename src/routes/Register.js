import React from "react";

import SectionWrap from "../components/layouts/SectionWrap";
import BigTitle from "../components/BigTitle";
import RegisterSection from "../containers/sections/RegisterSection";

const Register = () => {
  return (
    <SectionWrap
      className="Welcome"
      leftSection={<BigTitle />}
      rightSection={<RegisterSection />}
    ></SectionWrap>
  );
};

export default Register;
