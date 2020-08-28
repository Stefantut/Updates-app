import React, { useContext } from "react";

import { Context } from "../utils/Context";
import Logo from "../components/Logo";

const Header = () => {
  const { isLogged, logOut } = useContext(Context);

  return (
    <header className="content">
      <Logo />
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
