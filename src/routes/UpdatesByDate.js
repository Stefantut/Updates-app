import React, { useContext } from "react";
import { Context } from "../utils/Context";

import SectionWrap from "../components/layouts/SectionWrap";
import BigTitle from "../components/BigTitle";
import NotLogged from "../components/NotLogged";

const UpdatesByDate = () => {
  const { isLogged } = useContext(Context);
  return (
    <SectionWrap
      className="UpdatesByDate"
      leftSection={isLogged ? <BigTitle /> : <NotLogged />}
      rightSection={<BigTitle />}
    ></SectionWrap>
  );
};

export default UpdatesByDate;
