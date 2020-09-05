import { useState, useEffect } from "react";

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
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors, callback, isSubmitting]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
