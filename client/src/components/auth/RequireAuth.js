import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function RequireAuth(ChildComponent) {
  const ComposedComponent = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      shouldNavigateAway();
    });

    const shouldNavigateAway = () => {
      if (!props.authenticated) {
        navigate("/");
      }
    };
    return <ChildComponent {...props} />;
  };
  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }
  return connect(mapStateToProps)(ComposedComponent);
}
