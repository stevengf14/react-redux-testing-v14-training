import axios from "axios";
import { AUTH_USER, AUHT_ERROR } from "./types";

const ROOT_URL = "http://localhost:3090";

export const signinUser =
  ({ email, password }, callback) =>
  async (dispatch) => {
    console.log("action", email, password);
    axios
      .post(`${ROOT_URL}/signin`, { email, password })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        dispatch({ type: AUTH_USER });
      })
      .catch(() => {
        dispatch(authError("Bad Login Info"));
      });
    callback();
  };

export const authError = (error) => {
  return {
    type: AUHT_ERROR,
    payload: error,
  };
};
