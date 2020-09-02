import { users } from "../../database";

export default function validateRegister(values) {
  let errors = {};

  // validate name
  if (!values.name) {
    errors.name = "Required name field";
  } else if (values.name.length < 3) {
    errors.name = "At least 3 chars, keep typing :)";
  }

  // validate email field
  // check if exists in database, the string has more than 0 chars and is an email
  const matchUser = users.find((user) => user.email === values.email);
  if (matchUser) {
    errors.email = "Email address already exists";
  }
  if (!values.email) {
    errors.email = "Required email field";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  // validate password
  if (!values.password) {
    errors.password = "Required password field";
  } else if (values.password.length < 5) {
    errors.password = "At least 5 chars, keep typing :)";
  }
  return errors;
}
