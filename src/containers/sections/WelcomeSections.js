import React from "react";
import Title from "../../components/layouts/Title";

import Button from "../../components/layouts/Button";
import { ReactComponent as Forward } from "../../images/forward.svg";

const WelcomeSection = () => {
  return (
    <div className="welcome-section">
      <Title title={"Welcome"} />
      <Button path={"/login"} image={<Forward />} text={"Login"} />
    </div>
  );
};

export default WelcomeSection;
