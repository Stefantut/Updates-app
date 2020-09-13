import React, { useContext } from "react";
import { Context } from "../utils/Context";
import firebase from "firebase";
import { SectionWrap, Button } from "../utils/layouts";
import BigTitle from "../components/BigTitle";
import NotLogged from "../components/NotLogged";

const AllMyUpdates = () => {
  const { useUpdates, addUpdatePath, loggedUser } = useContext(Context);

  const updates = useUpdates();

  // display all updates of the logged in user ordered by date
  const myUpdates = updates
    .filter((elem) => elem.user === loggedUser)
    .sort((a, b) => (a.timestamp > b.timestamp ? -1 : 1));
  // display details for each update
  const displayMyUpdates = myUpdates.map((item, index) => {
    // remove update
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
    <section className="all-my-updates full-width">
      <h2 className="title">Just your updates</h2>
      <div className="content">
        {displayMyUpdates.length > 0 ? displayMyUpdates : noUpdatesMessage}

        <Button path={addUpdatePath} text={"Add Update"} />
        <Button path={"/"} text={"Return Home"} />
      </div>
    </section>
  );
};

const MyUpdates = () => {
  const { isLogged } = useContext(Context);
  return (
    <React.Fragment>
      {isLogged ? (
        <AllMyUpdates />
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

export default MyUpdates;
