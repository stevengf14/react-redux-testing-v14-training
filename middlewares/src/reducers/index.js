import { combineReducer } from "redux";
import usersReducer from "./users";

const rootReducer = combineReducer({
  users: usersReducer,
});

export default rootReducer;
