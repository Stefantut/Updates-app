import React, { useState, useEffect, createContext } from "react";
import { useHistory } from "react-router-dom";

import firebase from "../firebase";

export const Context = createContext();

// Provider will just provide information to different components
export const Provider = (props) => {
  const [isLogged, setIsLogged] = useState(false);
  const [loggedUser, setLoggedUser] = useState("");
  const [tags, setTags] = useState(["Vue", "React", "Javascript"]);

  function useUpdates() {
    const [updates, setUpdates] = useState([]);

    useEffect(() => {
      const unsubscribe = firebase
        .firestore()
        .collection("updates")
        .onSnapshot((snapshot) => {
          const newUpdates = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setUpdates(newUpdates);
        });
      return () => unsubscribe();
    }, []);
    return updates;
  }

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
    redirect(`/`);
  };

  const addUpdatePath = (path) => {
    return (path = `/app/${loggedUser}`);
  };
  // props.children will render all child components, whatever is wrapped between
  return (
    <Context.Provider
      value={{
        isLogged,
        loggedUser,
        logIn,
        logOut,
        addUpdatePath,
        tags,
        setTags,
        useUpdates,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
