import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { useNavigate } from "react-router-dom";
import * as actions from "../../actions";
import "../../style/style.css";

function Signin(props) {
  const { handleSubmit } = props;
  const navigate = useNavigate();

  const handleFormSubmit = (email, password) => {
    //need to do something to log user in
    props.signin({ email, password }, () => {
      navigate("/feature");
    });
  };

  const renderAlert = () => {
    if (props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong>
          {props.errorMessage}
        </div>
      );
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
      {renderAlert()}
      <button action="submit" className="btn btn-primary">
        Sign in
      </button>
    </form>
  );
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: "signin",
  fields: ["email", "password"],
})(connect(mapStateToProps, actions)(Signin));
