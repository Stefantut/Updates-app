import React from "react";

import { SectionWrap } from "../utils/layouts";
import BigTitle from "../components/BigTitle";
// import LoginSection from "../containers/sections/LoginSection";
import LoginForm from "../containers/forms/LoginForm";

const LoginSection = () => {
  return (
    <div className="login-section half-width">
      <h2 className="title">Login</h2>
      <LoginForm />
    </div>
  );
};

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
