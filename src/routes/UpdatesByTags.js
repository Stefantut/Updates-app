import React, { useContext } from "react";
import { Context } from "../utils/Context";

import SectionWrap from "../components/layouts/SectionWrap";
import BigTitle from "../components/BigTitle";

const UpdatesByTags = () => {
  const { isLogged } = useContext(Context);
  return (
    <SectionWrap
      className="UpdatesByTags"
      leftSection={isLogged && <BigTitle />}
      rightSection={<BigTitle />}
    ></SectionWrap>
  );
};

export default UpdatesByTags;
