import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

function UserList(props) {
  useEffect(() => {
    props.fetchUsers();
  }, []);

  const renderUser = (user) => {
    return (
      <div className="card card-block">
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">Cheese Factory</p>
        <a className="btn btn-primary">Email</a>
      </div>
    );
  };

  return <div>{props.users.map(renderUser)}</div>;
}

function mapStateToProps(state) {
  return { users: state.users };
}
export default connect(mapStateToProps, actions)(UserList);
