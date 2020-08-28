import React from "react";
import Title from "../../components/layouts/Title";

import Button from "../../components/layouts/Button";
import { ReactComponent as Forward } from "../../images/forward.svg";

const WelcomeSection = () => {
  return (
    <div className="welcome-section">
      <Title title={"Welcome"} />
      <div className="wrap-content">
        <Button path={"/login"} image={<Forward />} text={"Login"} />
        <Button path={"/register"} image={<Forward />} text={"Register"} />
      </div>
    </div>
  );
};

export default WelcomeSection;
