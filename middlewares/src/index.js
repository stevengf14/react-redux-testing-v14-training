import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from "./components/App";
import reducers from "./reducers";
import Async from "./middlewares/async";

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
);
