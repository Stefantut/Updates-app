import React, { useContext } from "react";
import { Context } from "../utils/Context";

import SectionWrap from "../components/layouts/SectionWrap";
import BigTitle from "../components/BigTitle";

const App = () => {
  const { isLogged } = useContext(Context);
  return (
    <SectionWrap
      className="App"
      leftSection={<BigTitle />}
      rightSection={isLogged && <BigTitle />}
    ></SectionWrap>
  );
};

export default App;
