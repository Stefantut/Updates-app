import React, { useContext, useState, useEffect } from "react";
import { Context } from "../utils/Context";

import { SectionWrap, Button } from "../utils/layouts";
import BigTitle from "../components/BigTitle";
import NotLogged from "../components/NotLogged";
import { capitalize } from "../utils/helpers";

const AllTagsUpdates = () => {
  const { updatesList, addUpdatePath } = useContext(Context);
  const [tags, setTags] = useState(["Vue", "React", "Javascript"]);
  const [selectedTag, setSelectedTag] = useState("vue");
  const [newTag, setNewTag] = useState("");
  const [error, setError] = useState("");

  // handle click on filter buttons
  const handleClick = (event) => {
    const selected = event.target.id.toLowerCase();
    setSelectedTag(selected);
  };

  // generate filter buttons
  const filterButtons = tags.map((tag, index) => (
    <button className="filter-btn" id={tag} key={index} onClick={handleClick}>
      {tag}
    </button>
  ));

  // filter list and display only selected tag
  const newList = updatesList.filter((item) =>
    item.tags.some((item) => item === selectedTag)
  );

  // display filtered updates
  const filteredUpdates = newList.map((item, index) => {
    return (
      <div className="single-update" key={index}>
        <div className="top-wrap">
          <h4>{item.title} - </h4>
          {item.tags.map((tag, index) => (
            <div key={index}>
              <p>{capitalize(tag)}</p>
            </div>
          ))}
        </div>
        <p>{item.text}</p>
      </div>
    );
  });

  // handle form change
  const handleChange = (event) => setNewTag(event.target.value);

  //handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    return newTag.length > 0
      ? setTags([...tags, newTag]) && setError("")
      : setError("At least 1 character");
  };

  // updates error message
  useEffect(() => {
    if (newTag.length > 0) {
      setError("");
    }
  }, [newTag.length]);

  return (
    <div className="all-updates-tags full-width">
      <h2 className="title">All updates by tags</h2>
      <div className="content">
        <div className="filter-wrap">
          <h4>Filters:</h4>
          {filterButtons}
        </div>
        <form className="tags-form" onSubmit={handleSubmit}>
          <label>
            Add new tag:
            <input type="text" name="tag" onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
          {error && <p className="error">{error}</p>}
        </form>
        <div className="filter-wrap">
          <h3>
            Selected tag: <span>{capitalize(selectedTag)}</span>
          </h3>
        </div>
        {filteredUpdates}
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
