import axios from "axios";
import { actionTypes } from "redux-form";
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from "./types";

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
      callback();
    } catch (error) {
      dispatch(authError("Bad Login Info"));
    }
  };

export const signup =
  ({ email, password }, callback) =>
  async (dispatch) => {
    try {
      const response = await axios.post(`${ROOT_URL}/signup`, {
        email,
        password,
      });
      dispatch({ type: AUTH_USER });
      localStorage.setItem("token", response.data.token);
      callback();
    } catch (error) {
      dispatch(authError("Email in use"));
    }
  };

export const authError = (error) => {
  console.log(error);
  return {
    type: AUTH_ERROR,
    payload: error,
  };
};

export const signout = () => {
  localStorage.removeItem("token");
  return { type: UNAUTH_USER };
};

export const fetchMessage = () => {
  return function (dispatch) {
    axios
      .get(ROOT_URL, {
        headers: { authorization: localStorage.getItem("token") },
      })
      .then((response) => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message,
        });
      });
  };
};
