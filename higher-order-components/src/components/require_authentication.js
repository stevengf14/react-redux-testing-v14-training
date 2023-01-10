import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function requireAuth(ComposedComponent) {
  const Authentication = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      shouldNavigateAway();
    });

    const shouldNavigateAway = () => {
      if (!props.authenticated) {
        navigate("/");
      }
    };

    return <ComposedComponent {...props} />;
  };

  function mapStateToProps(state) {
    return { authenticated: state.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
