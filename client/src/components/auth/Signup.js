import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { useNavigate } from "react-router-dom";
import * as actions from "../../actions";
import "../../style/style.css";

function Signup(props) {
  const {
    handleSubmit,
    fields: { email, password, passwordConfirm },
  } = props;
  const navigate = useNavigate();

  const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <div className="error">{error}</div>}
      </div>
    </div>
  );

  const handleFormSubmit = (formProps) => {
    props.signup(formProps, () => {
      navigate("/feature");
    });
  };

  const renderAlert = () => {
    if (props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops! </strong>
          {props.errorMessage}
        </div>
      );
    } else {
      <div className="alert alert-danger">Error</div>;
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <fieldset className="form-group">
        <label>Email:</label>
        <Field
          className="form-control"
          name="email"
          type="text"
          component={renderField}
          autoComplete="none"
        />
      </fieldset>
      <fieldset className="form-group">
        <label>Password:</label>
        <Field
          className="form-control"
          name="password"
          type="password"
          component={renderField}
          autoComplete="none"
        />
      </fieldset>
      <fieldset className="form-group">
        <label>Confirm Password:</label>
        <Field
          className="form-control"
          name="passwordConfirm"
          type="password"
          component={renderField}
          autoComplete="none"
        />
      </fieldset>
      {renderAlert()}
      <button action="submit" className="btn btn-primary">
        Sign up!
      </button>
    </form>
  );
}

function validate(formProps) {
  const errors = {};

  if (!formProps.email) {
    errors.email = "Email is necessary";
  }

  if (!formProps.password) {
    errors.password = "Password is necessary";
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = "Password confirmation is necessary";
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = "Passwords must match";
  }
  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default reduxForm({
  form: "signup",
  fields: ["email", "password", "passwordConfirm"],
  validate,
})(connect(mapStateToProps, actions)(Signup));
