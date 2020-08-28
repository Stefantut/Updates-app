import React from "react";
import Title from "../../components/layouts/Title";

import Button from "../../components/layouts/Button";
import TextLine from "../../components/layouts/TextLine";

const WelcomeSection = () => {
  return (
    <div className="welcome-section fifty-section">
      <Title title={"Welcome"} />
      <div className="wrap-content">
        <Button path={"/login"} text={"Login"} />
        <Button path={"/register"} text={"Register"} />
      </div>
      <TextLine text={"All updates in one place."} />
    </div>
  );
};

export default WelcomeSection;
