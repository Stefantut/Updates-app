import React from "react";

import SectionWrap from "../components/layouts/SectionWrap";
import Title from "./layouts/Title";
import Button from "./layouts/Button";

const LoginSection = () => {
  return (
    <SectionWrap>
      <Title title={"You are not logged in"} />
      <Button path={"/login"} text={"Log in now"} />
    </SectionWrap>
  );
};

export default LoginSection;
