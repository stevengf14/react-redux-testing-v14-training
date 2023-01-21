import React, { useEffect } from "react";
import RequireAuth from "./auth/RequireAuth";
import { connect } from "react-redux";
import * as actions from "../actions";

const Feature = (props) => {
  useEffect(() => {
    props.fetchMessage();
  });
  return <div>{props.message}</div>;
};

function mapStateToProps(state) {
  return { message: state.auth.message };
}
export default connect(mapStateToProps, actions)(RequireAuth(Feature));
