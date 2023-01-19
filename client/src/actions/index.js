import axios from "axios";
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from "./types";

const ROOT_URL = "http://localhost:3090";

export const signin =
  ({ email, password }, callback) =>
  async (dispatch) => {
    try {
      const response = await axios.post(`${ROOT_URL}/signin`, {
        email,
        password,
      });
      dispatch({ type: AUTH_USER });
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      dispatch(authError("Bad Login Info"));
    }
  };

export const authError = (error) => {
  console.log(error);
  return {
    type: AUTH_ERROR,
    payload: error,
  };
};

export function signout() {
  localStorage.removeItem("token");
  return { type: UNAUTH_USER };
}
