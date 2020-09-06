import React, { useContext } from "react";
import { Context } from "../utils/Context";

import { SectionWrap, Button } from "../utils/layouts";
import BigTitle from "../components/BigTitle";

const WelcomeSection = () => {
  const { isLogged, addUpdatePath } = useContext(Context);
  return (
    <div className="welcome-section half-width">
      <h2 className="title">Welcome</h2>

      {isLogged ? (
        <React.Fragment>
          <Button path={addUpdatePath} text={"Add Update"} />
          <Button path={"/updates/myupdates"} text={"View just your updates"} />
          <Button
            path={"/updates/updatesbydate"}
            text={"View all updates ordered by date"}
          />
          <Button
            path={"/updates/updatesbytags"}
            text={"View all updates filtered by tags"}
          />
        </React.Fragment>
      ) : (
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
