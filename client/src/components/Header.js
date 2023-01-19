import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../style/style.css";

function Header(props) {
  const renderLinks = () => {
    if (props.authenticated) {
      // show a link to sign out
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/signout">
            Sign Out
          </Link>
        </li>
      );
    } else {
      // show a link to sign in or sign up
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/signin">
            Sign In
          </Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signout">
            Sign Out
          </Link>
        </li>,
      ];
    }
  };

  return (
    <nav className="navbar navbar-light">
      <Link to="/" className="navbar-brand">
        Redux Auth
      </Link>
      <ul className="nav navbar-nav">{renderLinks()}</ul>
    </nav>
  );
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}
export default connect(mapStateToProps)(Header);
