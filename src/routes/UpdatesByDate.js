import React, { useContext } from "react";
import { Context } from "../utils/Context";

import { SectionWrap, Button } from "../utils/layouts";
import BigTitle from "../components/BigTitle";
import NotLogged from "../components/NotLogged";

const AllDateUpdates = () => {
  const { updatesList, setUpdatesList, addUpdatePath } = useContext(Context);
  // order by year, month, day
  const orderedUpdates = updatesList.sort((a, b) =>
    a.timestamp > b.timestamp ? -1 : 1
  );

  // display details for each update
  const updatesByDate = orderedUpdates.map((item, index) => {
    //remove update
    const handleClick = () => {
      const newList = [
        ...updatesList.slice(0, index),
        ...updatesList.slice(index + 1),
      ];
      setUpdatesList(newList);
    };
    return (
      <div className="single-update" key={index}>
        <div className="top-wrap">
          <div className="left">
            <h4>{item.title}</h4>
            <span className="dash">-</span>
            <p className="date">{item.timestamp}</p>
          </div>
          <p className="remove" onClick={handleClick}>
            x
          </p>
        </div>
        <p>{item.text}</p>
      </div>
    );
  });

  return (
    <section className="all-updates-date full-width">
      <h2 className="title">All updates by date</h2>
      <div className="content">
        {updatesByDate}
        <Button path={addUpdatePath} text={"Add Update"} />
        <Button path={"/"} text={"Return Home"} />
      </div>
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
