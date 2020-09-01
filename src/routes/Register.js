import React from "react";

import { SectionWrap } from "../components/layouts";
import BigTitle from "../components/BigTitle";
import RegisterForm from "../containers/forms/RegisterForm";

const RegisterSection = () => {
  return (
    <div className="register-section half-width">
      <h2 className="title">Register</h2>
      <RegisterForm />
    </div>
  );
};

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
