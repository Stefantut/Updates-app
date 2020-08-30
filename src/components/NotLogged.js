import React from "react";

import Title from "./layouts/Title";
import Button from "./layouts/Button";

const NotLogged = () => {
  return (
    <div className="not-logged half-width">
      <Title title={"You are not logged in"} />
      <Button path={"/login"} text={"Log in now"} />
    </div>
  );
};

export default NotLogged;
