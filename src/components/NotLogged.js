import React from "react";

import { Button } from "../utils/layouts";

const NotLogged = () => {
  return (
    <div className="not-logged half-width">
      <h2 className="title">Please log in</h2>
      <Button path={"/login"} text={"Log in now"} />
    </div>
  );
};

export default NotLogged;
