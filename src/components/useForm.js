import { useState } from "react";

// custom React hook
const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    title: "",
    tags: "",
    text: "",
  });

  const [errors, setErrors] = useState({});

  // handle change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  //handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    validationErrors.text || validationErrors.password
      ? setErrors(validationErrors)
      : callback();
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
