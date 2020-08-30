import React from "react";

import Title from "../../components/layouts/Title";
import RegisterForm from "../forms/RegisterForm";

const RegisterSection = () => {
  return (
    <div className="register-section half-width">
      <Title title={"Register"} />
      <RegisterForm />
    </div>
  );
};

export default RegisterSection;
