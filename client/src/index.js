import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import Signin from "./components/auth/Signin";
import Signout from "./components/auth/Signout";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/signin" exact element={<Signin />} />
          <Route path="/signout" exact element={<Signout />} />
        </Routes>
      </App>
    </BrowserRouter>
  </Provider>
);
