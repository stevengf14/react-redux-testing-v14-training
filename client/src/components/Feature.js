import React from "react";
import RequireAuth from "./auth/RequireAuth";

const Feature = (props) => {
  return <div>This is a Feature!</div>;
};
export default RequireAuth(Feature);
