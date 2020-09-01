import React, { useContext } from "react";
import { Context } from "../utils/Context";

import { SectionWrap, Button } from "../components/layouts";
import BigTitle from "../components/BigTitle";
// import WelcomeSection from "../containers/sections/WelcomeSections";

const WelcomeSection = () => {
  const { isLogged } = useContext(Context);
  return (
    <div className="welcome-section half-width">
      <h2 className="title">Welcome</h2>
      {!isLogged && (
        <div className="wrap-content">
          <Button path={"/login"} text={"Login"} />
          <Button path={"/register"} text={"Register"} />
        </div>
      )}
      <p className="text-line">All updates in one place.</p>
    </div>
  );
};

function Welcome() {
  return (
    <SectionWrap
      className="welcome content"
      leftSection={<BigTitle />}
      rightSection={<WelcomeSection />}
    ></SectionWrap>
  );
}

export default Welcome;
