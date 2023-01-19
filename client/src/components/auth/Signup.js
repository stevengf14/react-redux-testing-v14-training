import React from "react";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions";

function Signup(props) {
  const {
    handleSubmit,
    fields: { email, password, passwordConfirm },
  } = props;
  return (
    <form>
      <fieldset className="form-group">
        <label>Email:</label>
        <Field
          className="form-control"
          name="email"
          type="text"
          component="input"
          autoComplete="none"
        />
      </fieldset>
      <fieldset className="form-group">
        <label>Password:</label>
        <Field
          className="form-control"
          name="password"
          type="password"
          component="input"
          autoComplete="none"
        />
      </fieldset>
      <fieldset className="form-group">
        <label>Confirm Password:</label>
        <Field
          className="form-control"
          name="passwordConfirm"
          type="password"
          component="input"
          autoComplete="none"
        />
      </fieldset>
      <button action="submit" className="btn btn-primary">
        Sign up!
      </button>
    </form>
  );
}
export default reduxForm({
  form: "signup",
  fields: ["email", "password", "passwordConfirm"],
})(Signup);
