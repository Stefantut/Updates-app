import React, { useState, createContext } from "react";
import { useHistory } from "react-router-dom";

import { updates } from "../database";

export const Context = createContext();

// Provider will just provide information to different components
export const Provider = (props) => {
  const [isLogged, setIsLogged] = useState(true);
  const [loggedUser, setLoggedUser] = useState("");

  // save in state all updates
  const [updatesList, setUpdatesList] = useState([...updates]);

  // redirect home
  const history = useHistory();

  const redirect = (path) => {
    let newPath = path;
    history.push(newPath);
  };

  const logOut = () => {
    setIsLogged(false);
    setLoggedUser("");
    redirect("/");
  };

  const logIn = (user) => {
    setIsLogged(true);
    setLoggedUser(user);
    redirect(`/app/${user}`);
  };

  const logInAfterReg = (user) => {
    setIsLogged(true);
    setLoggedUser(user);
    redirect(`/`);
  };

  // props.children will render all child components, whatever is wrapped between
  return (
    <Context.Provider
      value={{
        isLogged,
        loggedUser,
        logIn,
        logOut,
        logInAfterReg,
        updatesList,
        setUpdatesList,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
