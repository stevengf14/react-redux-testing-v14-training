import axios from "axios";
import { AUTH_USER, UNAUTH_USER, AUHT_ERROR } from "./types";
import { useNavigate } from "react-router-dom";

const ROOT_URL = "http://localhost:3090";

export function signin({ email, password }) {
  return function (dispatch) {
    axios
      .post(`${ROOT_URL}/signin`, { email, password })
      .then((response) => {
        console.log("success", response);

        localStorage.setItem("token", response.data.token);
        useNavigate("/feature");
        dispatch({ type: AUTH_USER });
      })
      .catch((error) => {
        console.log("error", error);
        dispatch(authError("Bad Login Info"));
      });
  };
}

export const authError = (error) => {
  return {
    type: AUHT_ERROR,
    payload: error,
  };
};

export function signout() {
  localStorage.removeItem("token");
  return { type: UNAUTH_USER };
}
