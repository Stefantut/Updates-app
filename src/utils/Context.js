import React, { useState, createContext } from "react";
import { useHistory } from "react-router-dom";

export const Context = createContext();

// Provider will just provide information to different components
export const Provider = (props) => {
  const [isLogged, setIsLogged] = useState(true);

  // redirect home
  const history = useHistory();

  const redirect = (path) => {
    let newPath = path;
    history.push(newPath);
  };

  const logOut = () => {
    setIsLogged(false);
    redirect("/");
  };

  // props.children will render all child components, whatever is wrapped between
  return (
    <Context.Provider
      value={{
        isLogged,
        logOut,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
