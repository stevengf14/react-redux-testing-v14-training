import axios from "axios";

const ROOT_URL = "http://localhost:3090";

export function signinUser({ email, password }) {
  return function (dispatch) {
    console.log("action", email, password);
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password });

    // If request is good...
    // - Update state to indicate user is authenticated
    // - Save the JWT token
    // - Redirect to the route '/featute'

    // If request is bad...
    // - Show an error to the user
  };
}
