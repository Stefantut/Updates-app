import React, { useContext } from "react";
import { Context } from "../utils/Context";

import { SectionWrap } from "../components/layouts";
import BigTitle from "../components/BigTitle";
import NotLogged from "../components/NotLogged";

const UpdatesByTags = () => {
  const { isLogged } = useContext(Context);
  return (
    <SectionWrap
      className="UpdatesByTags"
      leftSection={isLogged ? <BigTitle /> : <NotLogged />}
      rightSection={<BigTitle />}
    ></SectionWrap>
  );
};

export default UpdatesByTags;
