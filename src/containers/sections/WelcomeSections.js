import React, { useContext } from "react";
import Title from "../../components/layouts/Title";

import { Context } from "../../utils/Context";

import Button from "../../components/layouts/Button";
import TextLine from "../../components/layouts/TextLine";

const WelcomeSection = () => {
  const { isLogged } = useContext(Context);
  return (
    <div className="welcome-section half-width">
      <Title title={"Welcome"} />
      {!isLogged && (
        <div className="wrap-content">
          <Button path={"/login"} text={"Login"} />
          <Button path={"/register"} text={"Register"} />
        </div>
      )}
      <TextLine text={"All updates in one place."} />
    </div>
  );
};

export default WelcomeSection;
