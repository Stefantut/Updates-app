import React from "react";

import { SectionWrap } from "../components/layouts";
import BigTitle from "../components/BigTitle";
import LoginSection from "../containers/sections/LoginSection";

const Login = () => {
  return (
    <SectionWrap
      className="login content"
      leftSection={<BigTitle />}
      rightSection={<LoginSection />}
    ></SectionWrap>
  );
};

export default Login;
