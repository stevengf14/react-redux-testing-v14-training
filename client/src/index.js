import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import Signin from "./components/auth/Signin";
import Signout from "./components/auth/Signout";
import Signup from "./components/auth/Signup";
import Feature from "./components/Feature";
import Welcome from "./components/Welcome";
import reducers from "./reducers";
import { AUTH_USER } from "./actions/types";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem("token");
// If we have a token, consider the user to be signed in
if (token) {
  // we need to update application state
  store.dispatch({
    type: AUTH_USER,
  });
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" exact element={<Welcome />} />
          <Route path="/signin" exact element={<Signin />} />
          <Route path="/signout" exact element={<Signout />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/feature" exact element={<Feature />} />
        </Routes>
      </App>
    </BrowserRouter>
  </Provider>
);
