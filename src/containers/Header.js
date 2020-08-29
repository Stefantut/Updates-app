import React, { useContext } from "react";

import { Context } from "../utils/Context";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const Header = () => {
  const { isLogged, logOut, loggedUser } = useContext(Context);

  return (
    <header className="content">
      <Link to="/">
        <Logo />
      </Link>
      {isLogged && (
        <div className="top-wrap">
          <div className="welcome-msg">
            Welcome {loggedUser},
            <span className="button" onClick={logOut}>
              Logout
            </span>
          </div>
          <div className="updates-wrap">
            View all updates:
            <Link to="/app/updatesbytags">by tags</Link>
            <Link to="app/updatesbydate">by date</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
