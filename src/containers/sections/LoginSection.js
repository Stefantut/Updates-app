import React from "react";

import Title from "../../components/layouts/Title";
import LoginForm from "../../containers/forms/LoginForm";

const LoginSection = () => {
  return (
    <div className="login-section half-width">
      <Title title={"Login"} />
      <LoginForm />
    </div>
  );
};

export default LoginSection;
