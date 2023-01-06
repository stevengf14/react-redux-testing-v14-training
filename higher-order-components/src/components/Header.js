import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

function Header(props) {
  const authButton = () => {
    if (props.authenticated) {
      return (
        <button onClick={() => props.authenticate(false)}>Sign Out</button>
      );
    }
    return <button onClick={() => props.authenticate(true)}>Sign In</button>;
  };

  return (
    <nav className="navbar navbar-light">
      <ul className="nav navbar-nav">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/resources">Resources</Link>
        </li>
        <li className="nav-item">{authButton()}</li>
      </ul>
    </nav>
  );
}

function mapStateToProps(state) {
  return { authenticated: state.authenticated };
}

export default connect(mapStateToProps, actions)(Header);
