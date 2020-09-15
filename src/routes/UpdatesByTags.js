import React, { useContext, useState, useEffect } from "react";
import { Context } from "../utils/Context";
import firebase from "firebase";

import { SectionWrap, Button } from "../utils/layouts";
import BigTitle from "../components/BigTitle";
import NotLogged from "../components/NotLogged";

const AllTagsUpdates = () => {
  const { useUpdates, useTags, addUpdatePath } = useContext(Context);
  const [selectedTag, setSelectedTag] = useState("None");
  const [newTag, setNewTag] = useState("");
  const [error, setError] = useState("");

  const updates = useUpdates();
  const tags = useTags();

  // handle click on filter buttons
  const handleClick = (event) => {
    const selected = event.target.id;
    setSelectedTag(selected.toLowerCase());
  };

  // generate filter buttons
  const filterButtons = tags.map((tag, index) => {
    const removeTag = () => {
      let fs = firebase.firestore();
      let collectionRef = fs.collection("tags");

      collectionRef
        .where("name", "==", tag.name)
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
      <button
        id={tag.name}
        key={index}
        onClick={handleClick}
        className={`filter__btn filter__btn--${
          tag.name === selectedTag ? "active" : "inactive"
        }`}
      >
        {tag.name}
        <span className="remove-tag" onClick={removeTag}>
          x
        </span>
      </button>
    );
  });

  // filter list and display updates with only selected tag
  const newList = updates.filter((item) =>
    item.tags.some((item) => item.toLowerCase() === selectedTag)
  );

  // display filtered updates
  const filteredUpdates = newList.map((item, index) => {
    // remove update
    const handleRemoveClick = () => {
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
            <div className="tags">
              {item.tags.map((tag, index) => (
                <p className="tag" key={index}>
                  {tag}{" "}
                </p>
              ))}
            </div>
          </div>
          <p className="remove" onClick={handleRemoveClick}>
            x
          </p>
        </div>
        <p className="text">{item.text}</p>
      </div>
    );
  });

  // handle form change
  const handleChange = (event) => setNewTag(event.target.value);

  //handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTag.length > 0) {
      const tagExists = tags.find(
        (tag) => tag.name.toLowerCase() === newTag.toLowerCase()
      );
      tagExists
        ? setError("Sorry, this tag exists!")
        : firebase
            .firestore()
            .collection("tags")
            .add({ name: newTag.toLowerCase() })
            .then(() => {
              setNewTag("");
            }) && setError("");
    } else setError("At least 1 character");
  };

  // updates error message
  useEffect(() => {
    if (newTag.length > 0) {
      setError("");
    }
  }, [newTag.length]);

  // no updates message
  const noUpdatesMessage = (
    <p className="no-updates-message">
      Sorry, you don't have any updates, but you can add one right now or{" "}
      <span>select a different tag</span> .
    </p>
  );
  return (
    <div className="all-updates-tags full-width">
      <h2 className="title">All updates by tags</h2>
      <div className="content">
        <div className="filter-wrap">
          <h4>Filters:</h4>
          {filterButtons}
        </div>
        <div className="filter-wrap">
          <h3>
            Selected tag: <span>{selectedTag}</span>
          </h3>
        </div>
        <form className="tags-form" onSubmit={handleSubmit}>
          <label>
            Add new tag:
            <input
              type="text"
              className="tag-input"
              name="tag"
              value={newTag}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
          {error && <p className="error">{error}</p>}
        </form>
        {filteredUpdates.length > 0 ? filteredUpdates : noUpdatesMessage}
        <Button path={addUpdatePath} text={"Add Update"} />
        <Button path={"/"} text={"Return Home"} />
      </div>
    </div>
  );
};

const UpdatesByTags = () => {
  const { isLogged } = useContext(Context);
  return (
    <React.Fragment>
      {isLogged ? (
        <AllTagsUpdates />
      ) : (
        <SectionWrap
          className="UpdatesByTags"
          leftSection={<NotLogged />}
          rightSection={<BigTitle />}
        ></SectionWrap>
      )}
    </React.Fragment>
  );
};

export default UpdatesByTags;
