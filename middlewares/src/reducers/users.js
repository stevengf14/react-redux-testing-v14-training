import { FETCH_USERS } from "../actions/types";

export default function users(state = [], action) {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
}
