import React, { useContext } from "react";

import { Button } from "../../components/layouts";
import { Context } from "../../utils/Context";
import useForm from "../../components/useForm";
import validate from "../../components/validation/validateRegister";

import { users } from "../../database";

const RegisterForm = () => {
  const { logInAfterReg } = useContext(Context);
  // reused custom hook useForm
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );

  function submit() {
    // log in after passsing validation
    logInAfterReg(values.name);
    //save in database new user
    const newUsers = [...users, values];
    console.log(newUsers);
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="wrap">
          <label>First Name</label>
          <div>
            <input
              className={`${errors.name && "inputError"}`}
              name="name"
              type="name"
              autoComplete="name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
        </div>
        <div className="wrap">
          <label>Email</label>
          <div>
            <input
              className={`${errors.email && "inputError"}`}
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
        </div>
        <div className="wrap">
          <label>Password</label>
          <div>
            <input
              className={`${errors.email && "inputError"}`}
              name="password"
              type="password"
              autoComplete="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
        </div>
        <div className="wrap-buttons">
          <Button text={"Submit and Login"} type="submit" />
          <Button path={"/"} text={"Return Home"} />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
