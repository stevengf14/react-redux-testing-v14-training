import React, { useEffect } from "react";
import RequireAuth from "./auth/RequireAuth";
import { connect } from "react-redux";
import * as actions from "../actions";

const Feature = (props) => {
  useEffect(() => {
    props.fetchMessage();
  });
  return <div>This is a Feature!</div>;
};
export default connect(null, actions)(RequireAuth(Feature));
