import React, { useContext } from "react";
import { Context } from "../utils/Context";

import { SectionWrap } from "../components/layouts";
import BigTitle from "../components/BigTitle";
import NotLogged from "../components/NotLogged";
import AddUpdateForm from "../containers/forms/AddUpdateForm";

const AddUpdateSection = () => {
  return (
    <div className="add-update-section half-width">
      <h2 className="title">Add update</h2>
      <AddUpdateForm />
    </div>
  );
};

const App = () => {
  const { isLogged } = useContext(Context);
  return (
    <SectionWrap
      className="App"
      leftSection={<BigTitle />}
      rightSection={isLogged ? <AddUpdateSection /> : <NotLogged />}
    ></SectionWrap>
  );
};

export default App;
