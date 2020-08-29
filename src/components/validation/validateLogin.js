import { users } from "../../database";

export default function validateLogin(values) {
  let errors = {};

  // validate email field
  // check if exists in database, the string has more than 0 chars and is an email
  const matchUser = users.find((user) => user.email === values.email);
  if (!matchUser) {
    errors.email = "Inexistent user, Please register";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  // validate password
  // check if mathces with the password from datatbase and has more than 5 chars
  const matchPassword = users.find((user) => user.password === values.password);

  if (!matchPassword) {
    errors.password = "Wrong password! Try again";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 5) {
    errors.password = "At least 5 chars, keep typing :)";
  }
  return errors;
}
