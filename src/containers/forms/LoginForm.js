import React, { useContext } from "react";

import { Button } from "../../components/layouts";
import { Context } from "../../utils/Context";
import useForm from "../../components/useForm";
import validate from "../validation/validateLogin";

import { users } from "../../database";

const LoginForm = () => {
  // import all users from fake database
  const { logIn } = useContext(Context);
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );

  function submit() {
    const matchUser = users.find((user) => user.email === values.email);
    logIn(matchUser.name);
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit} noValidate>
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
          <Button text={"Login"} type="submit" />
          <Button text={"Register"} path={"/register"} />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
