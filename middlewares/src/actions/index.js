import { FETCH_USERS } from "./types";

export function fetchUsers() {
  return {
    type: FETCH_USERS,
    payload: [{ name: "Steven" }, { name: "Nicole" }, { name: "Andres" }],
  };
}
