export default function validateBetaInfo(values) {
  let errors = {};
  
  if (!values.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email Address is Invalid";
  }

  if (!values.name || values.name === "") {
    errors.name = "Name Required";
  } else if (!/^[a-zA-Z\s'-]{2,}$/i.test(values.name)) {
    errors.name = "Name is Invalid";
  }

  if (!values.message) {
    errors.message = "Message is Required";
  }

  if (!values) return errors;
  return errors;
}
