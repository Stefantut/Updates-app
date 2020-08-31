import React, { useContext } from "react";
import { Context } from "../utils/Context";

import { SectionWrap, Button } from "../components/layouts";
import BigTitle from "../components/BigTitle";
import NotLogged from "../components/NotLogged";

const AllDateUpdates = () => {
  const { updatesList } = useContext(Context);
  // order by year, month, day
  const orderedUpdates = updatesList.sort((a, b) =>
    a.timestamp > b.timestamp ? -1 : 1
  );

  // display details for each update
  const updatesByDate = orderedUpdates.map((item, index) => (
    <div className="single-update" key={index}>
      <h4>
        {item.title} - {item.timestamp}
      </h4>
      <p>{item.text}</p>
    </div>
  ));

  return (
    <section className="all-updates-date full-width">
      <h2 className="title">All updates by date</h2>
      <div className="content">{updatesByDate}</div>
      <Button path={"/"} text={"Return Home"} />
    </section>
  );
};

const UpdatesByDate = () => {
  const { isLogged } = useContext(Context);
  return (
    <React.Fragment>
      {isLogged ? (
        <AllDateUpdates />
      ) : (
        <SectionWrap
          className="UpdatesByDate"
          leftSection={<NotLogged />}
          rightSection={<BigTitle />}
        ></SectionWrap>
      )}
    </React.Fragment>
  );
};

export default UpdatesByDate;
