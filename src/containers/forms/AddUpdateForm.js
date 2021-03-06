import React, { useContext } from "react";

import { useHistory } from "react-router-dom";
import firebase from "firebase";

import { Button } from "../../utils/layouts";
import { Context } from "../../utils/Context";
import useForm from "../../components/useForm";
import validate from "../validation/validateUpdates";

import { stringToArray, currentDate } from "../../utils/helpers";

const AddUpdateForm = () => {
  const { loggedUser } = useContext(Context);
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );

  // generate new update object
  const newUpdate = {
    title: values.title.toLowerCase(),
    text: values.text.toLowerCase(),
    tags: stringToArray(values.tags.toLowerCase()),
    user: loggedUser,
    timestamp: currentDate(),
  };

  // redirect home
  const history = useHistory();
  const redirect = (path) => {
    let newPath = path;
    history.push(newPath);
  };

  function submit() {
    //adds new tags
    const tagsArray = newUpdate.tags;

    tagsArray.map((item) =>
      firebase.firestore().collection("tags").add({ name: item })
    );

    //save in database new update
    firebase.firestore().collection("updates").add(newUpdate);
    redirect("/updates/updatesbydate");
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="wrap">
          <label>Title</label>
          <div>
            <input
              className={`${errors.title && "inputError"}`}
              name="title"
              type="text"
              autoComplete="title"
              value={values.title}
              onChange={handleChange}
            />
            {errors.title && <p className="error">{errors.title}</p>}
          </div>
        </div>
        <p style={{ fontSize: "11px" }}>Separate tags by comma</p>
        <div className="wrap">
          <label>Tags</label>
          <div>
            <input
              className={`${errors.tags && "inputError"}`}
              name="tags"
              type="text"
              autoComplete="tags"
              value={values.tags}
              onChange={handleChange}
            />
            {errors.tags && <p className="error">{errors.tags}</p>}
          </div>
        </div>
        <div>
          <label>Update</label>
          <div>
            <textarea
              className={`${errors.text && "inputError"}`}
              name="text"
              type="text"
              autoComplete="text"
              value={values.text}
              onChange={handleChange}
            />
            {errors.text && <p className="error">{errors.text}</p>}
          </div>
        </div>
        <div className="wrap">
          <Button text={"Submit"} type="submit" />
          <Button path={"/"} text={"Return Home"} />
        </div>
      </form>
    </div>
  );
};

export default AddUpdateForm;
