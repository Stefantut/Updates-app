import React, { useContext } from "react";
import { Context } from "../utils/Context";

import SectionWrap from "../components/layouts/SectionWrap";
import BigTitle from "../components/BigTitle";
import NotLogged from "../components/NotLogged";

const App = () => {
  const { isLogged } = useContext(Context);
  return (
    <SectionWrap
      className="App"
      leftSection={<BigTitle />}
      rightSection={isLogged ? <BigTitle /> : <NotLogged />}
    ></SectionWrap>
  );
};

export default App;
