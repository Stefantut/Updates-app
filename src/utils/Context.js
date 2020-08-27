import React, { useState, createContext } from "react";

export const Context = createContext();

// Provider will just provide information to different components
export const Provider = (props) => {
  const [isLogged, setIsLogged] = useState(false);

  // props.children will render all child components, whatever is wrapped between
  return (
    <Context.Provider
      value={{
        userLoggedIn: [isLogged, setIsLogged],
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
