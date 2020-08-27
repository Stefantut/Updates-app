import React, { useContext } from "react";

import { Context } from "../utils/Context";
import { ReactComponent as Logo } from "../images/logo.svg";

const Header = () => {
  const { isLogged, logOut } = useContext(Context);

  return (
    <header className="content">
      <Logo className="logo" />
      {isLogged && (
        <div className="welcome-msg">
          Welcome Username,
          <span className="button" onClick={logOut}>
            Logout
          </span>
        </div>
      )}
    </header>
  );
};

export default Header;
