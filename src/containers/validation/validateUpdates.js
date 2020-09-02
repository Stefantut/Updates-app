export default function validateUpdate(values) {
  let errors = {};

  // validate title field
  if (!values.title) {
    errors.title = "Title field is required";
  } else if (values.title.length < 3) {
    errors.title = "At least 3 chars, keep typing :)";
  }
  // validate tags
  if (!values.tags) {
    errors.tags = "At least 1 tag is required";
  } else if (values.tags.length < 2) {
    errors.tags = "At least 2 chars, keep typing :)";
  }
  // validate update
  if (!values.text) {
    errors.text = "Update field is required";
  } else if (values.text.length < 10) {
    errors.text = "At least 10 chars, keep typing :)";
  }
  return errors;
}
