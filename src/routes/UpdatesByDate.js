import React, { useContext } from "react";
import { Context } from "../utils/Context";
import firebase from "firebase";

import { SectionWrap, Button } from "../utils/layouts";
import BigTitle from "../components/BigTitle";
import NotLogged from "../components/NotLogged";

const AllDateUpdates = () => {
  const { useUpdates, addUpdatePath } = useContext(Context);

  const updates = useUpdates();

  // order by year, month, day
  const orderedUpdates = updates.sort((a, b) =>
    a.timestamp > b.timestamp ? -1 : 1
  );

  // display details for each update
  const updatesByDate = orderedUpdates.map((item, index) => {
    //remove update
    const handleClick = () => {
      let fs = firebase.firestore();
      let collectionRef = fs.collection("updates");

      collectionRef
        .where("title", "==", item.title)
        .where("text", "==", item.text)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref
              .delete()
              .then(() => {
                console.log("Document successfully deleted!");
              })
              .catch(function (error) {
                console.error("Error removing document: ", error);
              });
          });
        })
        .catch(function (error) {
          console.log("Error getting documents: ", error);
        });
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
        <p className="text">{item.text}</p>
      </div>
    );
  });

  // no updates message
  const noUpdatesMessage = (
    <p className="no-updates-message">
      Sorry, you don't have any updates, but you can add one right now.{" "}
      <span>Just click add Update.</span>
    </p>
  );

  return (
    <section className="all-updates-date full-width">
      <h2 className="title">All updates by date</h2>
      <div className="content">
        {updatesByDate.length > 0 ? updatesByDate : noUpdatesMessage}
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
